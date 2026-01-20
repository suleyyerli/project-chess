const adminService = require("../services/admin.service");

async function listUsers(req, res) {
  try {
    const users = await adminService.listUsers({
      search: req.query?.search,
      status: req.query?.status,
      minReports: req.query?.minReports,
    });
    return res.json(users);
  } catch (error) {
    const message =
      error?.message || "Impossible de récupérer les utilisateurs";
    return res.status(400).json({ message });
  }
}

async function banUser(req, res) {
  try {
    const result = await adminService.banUser({
      userId: req.params.id,
      label: req.body?.label,
      duration: req.body?.duration,
    });
    return res.json(result);
  } catch (error) {
    const message = error?.message || "Impossible de bannir l'utilisateur";
    return res.status(400).json({ message });
  }
}

async function unbanUser(req, res) {
  try {
    const result = await adminService.unbanUser(req.params.id);
    return res.json(result);
  } catch (error) {
    const message = error?.message || "Impossible de débannir l'utilisateur";
    return res.status(400).json({ message });
  }
}

async function deleteUser(req, res) {
  try {
    const result = await adminService.deleteUser(req.params.id);
    return res.json(result);
  } catch (error) {
    const message = error?.message || "Impossible de supprimer l'utilisateur";
    return res.status(400).json({ message });
  }
}

module.exports = {
  listUsers,
  banUser,
  unbanUser,
  deleteUser,
};
