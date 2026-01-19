import { apiJson } from "./apiClient";
import { getAuthToken } from "./authStorage";

const API_URL = "/matches";

export async function getMatchesByUser(userId, { limit } = {}) {
  if (!getAuthToken()) return [];

  const query =
    Number.isInteger(limit) && limit > 0 ? `?limit=${limit}` : "";

  try {
    const matches = await apiJson(`${API_URL}/me${query}`, {
      requireAuth: true,
    });
    if (!userId) return matches;

    return matches.filter(
      (match) =>
        Array.isArray(match.players) &&
        match.players.some((player) => player.userId === userId)
    );
  } catch (error) {
    console.error("Erreur lors de la récupération des matchs :", error);
    throw error;
  }
}

export async function startSoloMatch() {
  return apiJson(`${API_URL}/start`, {
    method: "POST",
    requireAuth: true,
  });
}

export async function submitMatchResult(matchId, payload) {
  return apiJson(`${API_URL}/${matchId}/submit`, {
    method: "POST",
    body: payload,
    requireAuth: true,
  });
}

export async function getNextPuzzle(matchId) {
  return apiJson(`${API_URL}/${matchId}/next`, { requireAuth: true });
}

export async function finishMatch(matchId, payload, { keepalive = false } = {}) {
  return apiJson(`${API_URL}/${matchId}/finish`, {
    method: "POST",
    body: payload,
    keepalive,
    requireAuth: true,
  });
}
