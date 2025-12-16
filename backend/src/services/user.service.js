const userRepository = require("../repositories/user.repository");

async function getUsers() {
  return userRepository.findAll();
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

module.exports = {
  getUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
};
