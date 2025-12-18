const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRepository = require("../repositories/user.repository");
const userService = require("./user.service");

const SALT_ROUNDS = 10;
const JWT_EXPIRES_IN = "7d";

function getJwtSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET manquant dans la configuration");
  }
  return secret;
}

function toSafeUser(user) {
  const { password, ...safeUser } = user;
  return safeUser;
}

async function signup(payload) {
  const { email, password, pseudo, ...rest } = payload || {};

  if (!email || !password || !pseudo) {
    throw new Error("email, mot de passe et pseudo sont requis");
  }

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

  const secret = getJwtSecret();
  const token = jwt.sign(
    {
      sub: user.id,
      email: user.email,
      pseudo: user.pseudo,
      role: user.role,
    },
    secret,
    { expiresIn: JWT_EXPIRES_IN }
  );

  return { token, user: userService.toPublicUser(toSafeUser(user)) };
}

async function getCurrentUser(userId) {
  const user = await userService.getUserById(userId);
  return userService.toPublicUser(user);
}

async function updateCurrentUser(userId, payload) {
  return userService.updateProfile(userId, payload);
}

module.exports = {
  signup,
  login,
  getCurrentUser,
  updateCurrentUser,
};
