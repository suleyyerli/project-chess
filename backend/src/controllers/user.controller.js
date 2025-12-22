const userService = require("../services/user.service");

async function listLeaderboard(req, res) {
  try {
    const users = await userService.getLeaderboardUsers();
    return res.json(users);
  } catch (error) {
    const message = error?.message || "Impossible de récupérer le classement";
    return res.status(500).json({ message });
  }
}

async function listActiveUsers(req, res) {
  try {
    const users = await userService.getActiveUsers();
    return res.json(users);
  } catch (error) {
    const message = error?.message || "Impossible de récupérer les joueurs actifs";
    return res.status(500).json({ message });
  }
}

async function getUserById(req, res) {
  try {
    const user = await userService.getUserById(req.params.id);
    return res.json(userService.toPublicUser(user));
  } catch (error) {
    const message = error?.message || "Impossible de récupérer l'utilisateur";
    const status = message.includes("non trouvé") ? 404 : 400;
    return res.status(status).json({ message });
  }
}

module.exports = {
  listLeaderboard,
  listActiveUsers,
  getUserById,
};
