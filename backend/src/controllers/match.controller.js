const matchService = require("../services/match.service");

function mapErrorToStatus(message) {
  if (message.includes("introuvable")) return 404;
  if (message.includes("Accès interdit")) return 403;
  if (message.includes("terminé")) return 409;
  if (message.includes("PuzzleId") || message.includes("Résultat")) return 400;
  if (message.includes("Aucun puzzle")) return 503;
  return 400;
}

function withoutState(match) {
  if (!match || typeof match !== "object") return match;
  const { state, ...rest } = match;
  return rest;
}

function parseLimit(value) {
  if (value === undefined) return undefined;
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    throw new Error("Limite invalide");
  }
  return parsed;
}

async function listMatches(req, res) {
  try {
    const { id, userId } = req.query || {};
    if (userId && Number(userId) !== Number(req.user.id)) {
      return res.status(403).json({ message: "Accès interdit" });
    }

    if (id) {
      const match = await matchService.getMatch(id, req.user.id);
      return res.json([withoutState(match)]);
    }

    const limit = parseLimit(req.query?.limit);
    const matches = await matchService.listMatchesForUser(req.user.id, {
      limit,
    });
    return res.json(matches);
  } catch (error) {
    const message = error?.message || "Impossible de récupérer les matchs";
    const status = mapErrorToStatus(message);
    return res.status(status).json({ message });
  }
}

async function listMatchesForMe(req, res) {
  try {
    const limit = parseLimit(req.query?.limit);
    const matches = await matchService.listMatchesForUser(req.user.id, {
      limit,
    });
    return res.json(matches);
  } catch (error) {
    const message = error?.message || "Impossible de récupérer les matchs";
    const status = mapErrorToStatus(message);
    return res.status(status).json({ message });
  }
}

async function getMatch(req, res) {
  try {
    const match = await matchService.getMatch(req.params.id, req.user.id);
    return res.json(match);
  } catch (error) {
    const message = error?.message || "Impossible de récupérer le match";
    const status = mapErrorToStatus(message);
    return res.status(status).json({ message });
  }
}

async function startSoloMatch(req, res) {
  try {
    const result = await matchService.startSoloMatch(req.user.id);
    return res.status(201).json(result);
  } catch (error) {
    const message = error?.message || "Impossible de démarrer la partie";
    const status = mapErrorToStatus(message);
    return res.status(status).json({ message });
  }
}

async function submitMatch(req, res) {
  try {
    const result = await matchService.submitMatch(
      req.params.id,
      req.user.id,
      req.body,
    );
    return res.json(result);
  } catch (error) {
    const message = error?.message || "Impossible de soumettre le résultat";
    const status = mapErrorToStatus(message);
    return res.status(status).json({ message });
  }
}

async function getNextPuzzle(req, res) {
  try {
    const result = await matchService.getNextPuzzle(req.params.id, req.user.id);
    return res.json(result);
  } catch (error) {
    const message = error?.message || "Impossible de récupérer le puzzle";
    const status = mapErrorToStatus(message);
    return res.status(status).json({ message });
  }
}

async function finishMatch(req, res) {
  try {
    const result = await matchService.finishMatch(
      req.params.id,
      req.user.id,
      req.body,
    );
    return res.json(result);
  } catch (error) {
    const message = error?.message || "Impossible de terminer le match";
    const status = mapErrorToStatus(message);
    return res.status(status).json({ message });
  }
}

module.exports = {
  listMatches,
  listMatchesForMe,
  getMatch,
  startSoloMatch,
  submitMatch,
  getNextPuzzle,
  finishMatch,
};
