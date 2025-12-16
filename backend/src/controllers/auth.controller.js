const authService = require("../services/auth.service");

async function signup(req, res) {
  try {
    const user = await authService.signup(req.body);
    return res.status(201).json(user);
  } catch (error) {
    const message = error?.message || "Échec de l'inscription";
    let status = 400;

    if (message.includes("déjà utilisé")) {
      status = 409;
    }

    return res.status(status).json({ message });
  }
}

module.exports = {
  signup,
};
