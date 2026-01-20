const userRepository = require("../repositories/user.repository");
const { presentUser } = require("../presenters/user.presenter");
const fs = require("fs/promises");
const path = require("path");

function toLeaderboardUser(user) {
  const presented = presentUser(user);
  return {
    id: presented?.id ?? null,
    pseudo: presented?.pseudo ?? null,
    avatar: presented?.avatar ?? null,
    banner: presented?.banner ?? null,
    emblem: presented?.emblem ?? null,
    trophy: presented?.stats?.trophy ?? 0,
  };
}

async function getUsers() {
  return userRepository.findAll();
}

function toPublicUser(user) {
  if (!user) return user;
  const { password, ...rest } = user;
  return {
    ...presentUser(rest),
    ban: resolveBanInfo(rest),
  };
}

function resolveBanInfo(user) {
  if (!user) {
    return { isBanned: false, label: null, bannedUntil: null };
  }

  const rawUntil = user.banned_until;
  const until =
    rawUntil instanceof Date ? rawUntil : rawUntil ? new Date(rawUntil) : null;
  const hasUntil = Boolean(until && !Number.isNaN(until.getTime()));
  const expired = hasUntil ? until.getTime() <= Date.now() : false;
  const isBanned = Boolean(user.is_banned) && (!hasUntil || !expired);

  return {
    isBanned,
    label: user.ban_label ?? null,
    bannedUntil: isBanned && hasUntil ? until.toISOString() : null,
  };
}

async function ensureUserNotBanned(userId) {
  const user = await getUserById(userId);
  const ban = resolveBanInfo(user);

  if (!ban.isBanned && user.is_banned && user.banned_until) {
    const until = new Date(user.banned_until);
    if (!Number.isNaN(until.getTime()) && until.getTime() <= Date.now()) {
      await userRepository.update(user.id, {
        is_banned: false,
        ban_label: null,
        banned_until: null,
      });
    }
  }

  if (ban.isBanned) {
    throw new Error("Vous êtes banni, impossible de lancer une partie");
  }

  return ban;
}

async function getUserById(id) {
  const userId = Number(id);
  if (!Number.isInteger(userId)) {
    throw new Error("Identifiant valide requis");
  }

  const user = await userRepository.findById(userId);
  if (!user) {
    throw new Error("Utilisateur non trouvé");
  }

  return user;
}

async function getUserByEmail(email) {
  if (!email) {
    throw new Error("Email requis");
  }

  const user = await userRepository.findByEmail(email);
  if (!user) {
    throw new Error("Utilisateur non trouvé");
  }

  return user;
}

async function createUser(data) {
  if (!data || !data.email || !data.password || !data.pseudo) {
    throw new Error("email, mot de passe et pseudo sont requis");
  }

  return userRepository.create(data);
}

async function updateUser(id, data) {
  const userId = Number(id);
  if (!Number.isInteger(userId)) {
    throw new Error("Identifiant valide requis");
  }
  if (!data || Object.keys(data).length === 0) {
    throw new Error("Aucune donnée fournie pour mettre à jour l'utilisateur");
  }

  await getUserById(userId);
  return userRepository.update(userId, data);
}

async function updateProfile(userId, payload) {
  const id = Number(userId);
  if (!Number.isInteger(id)) {
    throw new Error("Identifiant valide requis");
  }

  const { pseudo, bio, avatar, banner, emblem } = payload || {};
  if (
    pseudo === undefined &&
    bio === undefined &&
    avatar === undefined &&
    banner === undefined &&
    emblem === undefined
  ) {
    throw new Error("Aucune donnée fournie pour mettre à jour l'utilisateur");
  }

  if (pseudo) {
    const existing = await userRepository.findByPseudo(pseudo);
    if (existing && existing.id !== id) {
      throw new Error("Pseudo déjà utilisé");
    }
  }

  const avatarDir = path.resolve(__dirname, "../../uploads/avatars");
  const avatarBase = `user-${id}`;

  async function removeExistingAvatars() {
    const candidates = [
      path.join(avatarDir, `${avatarBase}.png`),
      path.join(avatarDir, `${avatarBase}.jpg`),
      path.join(avatarDir, `${avatarBase}.jpeg`),
    ];
    await Promise.all(
      candidates.map(async (p) => {
        try {
          await fs.unlink(p);
        } catch (err) {
          if (err && err.code === "ENOENT") return;
          throw err;
        }
      }),
    );
  }

  let avatarData;
  if (avatar !== undefined) {
    if (avatar === null) {
      avatarData = null;
      await removeExistingAvatars();
    } else if (typeof avatar === "string") {
      const trimmed = avatar.trim();
      if (trimmed === "") {
        avatarData = null;
        await removeExistingAvatars();
      } else if (/^data:image\//i.test(trimmed)) {
        const header = trimmed.split(",")[0] || "";
        const base64 = trimmed.includes(",") ? trimmed.split(",").pop() : "";
        if (!base64) {
          throw new Error("Avatar invalide (data URL)");
        }

        const mimeMatch = header.match(/^data:(image\/[a-z0-9.+-]+);base64$/i);
        const mime = mimeMatch?.[1]?.toLowerCase?.() ?? "image/png";
        const ext = mime === "image/jpeg" ? "jpg" : "png";

        const buffer = Buffer.from(base64, "base64");
        await fs.mkdir(avatarDir, { recursive: true });
        await removeExistingAvatars();
        await fs.writeFile(
          path.join(avatarDir, `${avatarBase}.${ext}`),
          buffer,
        );

        // Store on filesystem: do not store binary in DB
        avatarData = null;
      } else {
        if (/^https?:\/\//i.test(trimmed)) {
          throw new Error(
            "Avatar en URL non supporté (upload fichier uniquement)",
          );
        }
        // attend une chaîne base64
        const buffer = Buffer.from(trimmed, "base64");
        await fs.mkdir(avatarDir, { recursive: true });
        await removeExistingAvatars();
        await fs.writeFile(path.join(avatarDir, `${avatarBase}.png`), buffer);
        avatarData = null;
      }
    } else {
      throw new Error("Avatar doit être une chaîne encodée en base64 ou null");
    }
  }

  const updatePayload = {};
  if (pseudo !== undefined) updatePayload.pseudo = pseudo;
  if (bio !== undefined) updatePayload.bio = bio;
  if (avatar !== undefined) updatePayload.avatar = avatarData;
  if (banner !== undefined) {
    if (banner === null || typeof banner === "string") {
      updatePayload.banner = banner;
    } else {
      throw new Error("Banner doit être une chaîne ou null");
    }
  }
  if (emblem !== undefined) {
    if (emblem === null || typeof emblem === "string") {
      updatePayload.emblem = emblem;
    } else {
      throw new Error("Emblem doit être une chaîne ou null");
    }
  }

  const updated = await userRepository.update(id, updatePayload);
  return toPublicUser(updated);
}

async function getLeaderboardUsers() {
  const users = await userRepository.findLeaderboard();
  return users.map(toLeaderboardUser);
}

async function getActiveUsers() {
  const users = await userRepository.findOnline();
  return users.map(toLeaderboardUser);
}

async function touchLastSeen(userId) {
  const id = Number(userId);
  if (!Number.isInteger(id)) {
    throw new Error("Identifiant valide requis");
  }
  await userRepository.updateLastSeen(id, new Date());
}

async function clearLastSeen(userId) {
  const id = Number(userId);
  if (!Number.isInteger(id)) {
    throw new Error("Identifiant valide requis");
  }
  await userRepository.updateLastSeen(id, null);
}

module.exports = {
  getUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  updateProfile,
  toPublicUser,
  resolveBanInfo,
  ensureUserNotBanned,
  getLeaderboardUsers,
  getActiveUsers,
  touchLastSeen,
  clearLastSeen,
};
