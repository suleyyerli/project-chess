const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { sendMail } = require("../lib/mailer");
const userRepository = require("../repositories/user.repository");
const userService = require("./user.service");

const SALT_ROUNDS = 10;
const MIN_PASSWORD_LENGTH = 8;
const ACCESS_TOKEN_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";
const REFRESH_TOKEN_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || "30d";
const RESET_TOKEN_TTL_MS = Number(process.env.RESET_TOKEN_TTL_MS) || 3600000;

function getJwtSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET manquant dans la configuration");
  }
  return secret;
}

function getRefreshSecret() {
  return process.env.JWT_REFRESH_SECRET || getJwtSecret();
}

function toSafeUser(user) {
  const { password, ...safeUser } = user;
  return safeUser;
}

function hashResetToken(token) {
  return crypto.createHash("sha256").update(token).digest("hex");
}

function ensurePasswordLength(password) {
  if (typeof password !== "string") {
    throw new Error("Mot de passe invalide");
  }
  if (password.length < MIN_PASSWORD_LENGTH) {
    throw new Error(
      `Le mot de passe doit contenir au moins ${MIN_PASSWORD_LENGTH} caractères`
    );
  }
}

function buildResetEmail({ user, token, expiresAt }) {
  const base =
    process.env.RESET_PASSWORD_URL ||
    `${process.env.FRONTEND_ORIGIN || "http://localhost:5173"}/reset-password`;
  const link = `${base}?token=${token}`;
  const expiresLabel = expiresAt.toLocaleString("fr-FR");

  const text = [
    `Bonjour ${user.pseudo || "joueur"},`,
    "",
    "Tu as demandé la réinitialisation de ton mot de passe.",
    `Lien de réinitialisation : ${link}`,
    `Token : ${token}`,
    `Ce lien expire le : ${expiresLabel}`,
    "",
    "Si tu n'es pas à l'origine de cette demande, ignore cet email.",
  ].join("\n");

  return {
    subject: "Réinitialisation de votre mot de passe",
    text,
  };
}

function buildAccessToken(user) {
  return jwt.sign(
    {
      sub: user.id,
      email: user.email,
      pseudo: user.pseudo,
      role: user.role,
    },
    getJwtSecret(),
    { expiresIn: ACCESS_TOKEN_EXPIRES_IN }
  );
}

function buildRefreshToken(user) {
  return jwt.sign(
    { sub: user.id, type: "refresh" },
    getRefreshSecret(),
    { expiresIn: REFRESH_TOKEN_EXPIRES_IN }
  );
}

async function signup(payload) {
  const { email, password, pseudo, ...rest } = payload || {};

  if (!email || !password || !pseudo) {
    throw new Error("email, mot de passe et pseudo sont requis");
  }

  ensurePasswordLength(password);

  const normalizedEmail = email.toLowerCase();

  const existingByEmail = await userRepository.findByEmail(normalizedEmail);
  if (existingByEmail) {
    throw new Error("Email déjà utilisé");
  }

  const existingByPseudo = await userRepository.findByPseudo(pseudo);
  if (existingByPseudo) {
    throw new Error("Pseudo déjà utilisé");
  }

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  const created = await userRepository.create({
    email: normalizedEmail,
    password: hashedPassword,
    pseudo,
    ...rest,
  });

  // On renvoie un user côté API (camelCase + stats)
  return userService.toPublicUser(toSafeUser(created));
}

async function login(payload) {
  const { email, password } = payload || {};

  if (!email || !password) {
    throw new Error("email et mot de passe sont requis");
  }

  const normalizedEmail = email.toLowerCase();
  const user = await userRepository.findByEmail(normalizedEmail);

  if (!user) {
    throw new Error("Utilisateur introuvable");
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error("Mot de passe incorrect");
  }

  const token = buildAccessToken(user);
  const refreshToken = buildRefreshToken(user);

  return {
    token,
    refreshToken,
    user: userService.toPublicUser(toSafeUser(user)),
  };
}

async function refreshSession(payload) {
  const refreshToken = payload?.refreshToken;
  if (!refreshToken) {
    throw new Error("Refresh token requis");
  }

  let decoded;
  try {
    decoded = jwt.verify(refreshToken, getRefreshSecret());
  } catch {
    throw new Error("Refresh token invalide ou expiré");
  }

  if (decoded?.type !== "refresh") {
    throw new Error("Refresh token invalide ou expiré");
  }

  const userId = Number(decoded?.sub);
  if (!Number.isInteger(userId)) {
    throw new Error("Refresh token invalide ou expiré");
  }

  const user = await userRepository.findById(userId);
  if (!user) {
    throw new Error("Utilisateur introuvable");
  }

  return {
    token: buildAccessToken(user),
    refreshToken: buildRefreshToken(user),
  };
}

async function getCurrentUser(userId) {
  const user = await userService.getUserById(userId);
  return userService.toPublicUser(user);
}

async function updateCurrentUser(userId, payload) {
  return userService.updateProfile(userId, payload);
}

async function requestPasswordReset(payload) {
  const email = payload?.email;
  if (!email) {
    throw new Error("Email requis");
  }

  const normalizedEmail = email.toLowerCase();
  const user = await userRepository.findByEmail(normalizedEmail);
  if (!user) {
    return { message: "Si un compte existe, un email a été envoyé." };
  }

  const token = crypto.randomBytes(32).toString("hex");
  const tokenHash = hashResetToken(token);
  const expiresAt = new Date(Date.now() + RESET_TOKEN_TTL_MS);

  await userRepository.update(user.id, {
    reset_password_token: tokenHash,
    reset_password_expires: expiresAt,
  });

  const mail = buildResetEmail({ user, token, expiresAt });
  await sendMail({
    to: user.email,
    subject: mail.subject,
    text: mail.text,
  });

  return { message: "Si un compte existe, un email a été envoyé." };
}

async function resetPassword(payload) {
  const token = payload?.token;
  const password = payload?.password;

  if (!token || !password) {
    throw new Error("Token et mot de passe requis");
  }

  const tokenHash = hashResetToken(token);
  const user = await userRepository.findByResetToken(tokenHash);
  if (!user || !user.reset_password_expires) {
    throw new Error("Token invalide ou expiré");
  }

  if (new Date(user.reset_password_expires) < new Date()) {
    throw new Error("Token invalide ou expiré");
  }

  ensurePasswordLength(password);

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  await userRepository.update(user.id, {
    password: hashedPassword,
    reset_password_token: null,
    reset_password_expires: null,
  });

  return { message: "Mot de passe réinitialisé." };
}

module.exports = {
  signup,
  login,
  refreshSession,
  getCurrentUser,
  updateCurrentUser,
  requestPasswordReset,
  resetPassword,
};
