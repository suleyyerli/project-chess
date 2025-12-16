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

async function login(req, res) {
  try {
    const result = await authService.login(req.body);
    return res.status(200).json(result);
  } catch (error) {
    const message = error?.message || "Échec de la connexion";
    let status = 400;

    if (message.includes("introuvable")) {
      status = 404;
    } else if (message.includes("incorrect")) {
      status = 401;
    } else if (message.includes("JWT_SECRET")) {
      status = 500;
    }

    return res.status(status).json({ message });
  }
}

async function me(req, res) {
  return res.json({ user: req.user });
}

module.exports = {
  signup,
  login,
  me,
};
