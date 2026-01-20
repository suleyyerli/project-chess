const authService = require("../services/auth.service");
const userService = require("../services/user.service");

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

async function refresh(req, res) {
  try {
    const result = await authService.refreshSession(req.body);
    return res.status(200).json(result);
  } catch (error) {
    const message = error?.message || "Impossible de rafraîchir le token";
    let status = 400;

    if (message.includes("JWT_SECRET")) {
      status = 500;
    } else if (message.includes("invalide") || message.includes("expiré")) {
      status = 401;
    } else if (message.includes("introuvable")) {
      status = 404;
    }

    return res.status(status).json({ message });
  }
}

async function me(req, res) {
  try {
    const user = await authService.getCurrentUser(req.user.id);
    return res.json({ user });
  } catch (error) {
    const message = error?.message || "Échec de la récupération du profil";
    return res.status(400).json({ message });
  }
}

async function updateMe(req, res) {
  try {
    const user = await authService.updateCurrentUser(req.user.id, req.body);
    return res.json({ user });
  } catch (error) {
    const message = error?.message || "Échec de la mise à jour du profil";
    let status = 400;

    if (message.includes("déjà utilisé")) {
      status = 409;
    }

    return res.status(status).json({ message });
  }
}

async function logout(req, res) {
  try {
    await userService.clearLastSeen(req.user.id);
  } catch (error) {
    console.warn(
      "Failed to clear last_seen on logout:",
      error?.message || error,
    );
  }
  // JWT est stateless : côté client, on supprime le token
  return res.status(200).json({ message: "Déconnecté" });
}

async function requestPasswordReset(req, res) {
  try {
    const result = await authService.requestPasswordReset(req.body);
    return res.json(result);
  } catch (error) {
    const message = error?.message || "Impossible d'envoyer le mail";
    return res.status(400).json({ message });
  }
}

async function resetPassword(req, res) {
  try {
    const result = await authService.resetPassword(req.body);
    return res.json(result);
  } catch (error) {
    const message =
      error?.message || "Impossible de réinitialiser le mot de passe";
    return res.status(400).json({ message });
  }
}

module.exports = {
  signup,
  login,
  refresh,
  me,
  updateMe,
  logout,
  requestPasswordReset,
  resetPassword,
};
