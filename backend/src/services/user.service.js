const userRepository = require("../repositories/user.repository");
const { presentUser } = require("../presenters/user.presenter");

async function getUsers() {
  return userRepository.findAll();
}

function toPublicUser(user) {
  if (!user) return user;
  const { password, ...rest } = user;
  return presentUser(rest);
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

  let avatarData;
  if (avatar !== undefined) {
    if (avatar === null) {
      avatarData = null;
    } else if (typeof avatar === "string") {
      const trimmed = avatar.trim();
      if (trimmed === "") {
        avatarData = null;
      } else if (/^data:image\//i.test(trimmed)) {
        const base64 = trimmed.includes(",") ? trimmed.split(",").pop() : "";
        if (!base64) {
          throw new Error("Avatar invalide (data URL)");
        }
        avatarData = Buffer.from(base64, "base64");
      } else {
        if (/^https?:\/\//i.test(trimmed)) {
          throw new Error("Avatar en URL non supporté (upload fichier uniquement)");
        }
        // attend une chaîne base64
        avatarData = Buffer.from(trimmed, "base64");
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

module.exports = {
  getUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  updateProfile,
  toPublicUser,
};
