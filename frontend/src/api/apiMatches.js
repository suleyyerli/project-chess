import { getAuthToken } from "./authStorage";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000";
const API_URL = `${API_BASE}/matches`;

async function readErrorMessage(res) {
  try {
    const data = await res.json();
    return data?.message || data?.error?.message || "Erreur inconnue";
  } catch {
    return "Erreur inconnue";
  }
}

function getAuthHeaders(token) {
  if (!token) {
    throw new Error("Token manquant (connecte-toi)");
  }
  return {
    Authorization: `Bearer ${token}`,
  };
}

export async function getMatchesByUser(userId) {
  if (!userId) return [];
  const token = getAuthToken();
  if (!token) return [];

  const queryUrl = `${API_URL}?_sort=finishedAt&_order=desc`;

  try {
    const response = await fetch(queryUrl, {
      headers: {
        ...getAuthHeaders(token),
      },
    });
    if (!response.ok) {
      throw new Error(await readErrorMessage(response));
    }

    const matches = await response.json();
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

export async function startSoloMatch(token = getAuthToken()) {
  const response = await fetch(`${API_URL}/start`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(token),
    },
  });

  if (!response.ok) {
    throw new Error(await readErrorMessage(response));
  }

  return response.json();
}

export async function submitMatchResult(
  matchId,
  payload,
  token = getAuthToken()
) {
  const response = await fetch(`${API_URL}/${matchId}/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(token),
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(await readErrorMessage(response));
  }

  return response.json();
}

export async function getNextPuzzle(matchId, token = getAuthToken()) {
  const response = await fetch(`${API_URL}/${matchId}/next`, {
    headers: {
      ...getAuthHeaders(token),
    },
  });

  if (!response.ok) {
    throw new Error(await readErrorMessage(response));
  }

  return response.json();
}

export async function finishMatch(
  matchId,
  payload,
  { keepalive = false } = {},
  token = getAuthToken()
) {
  const response = await fetch(`${API_URL}/${matchId}/finish`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(token),
    },
    body: JSON.stringify(payload),
    keepalive,
  });

  if (!response.ok) {
    throw new Error(await readErrorMessage(response));
  }

  return response.json();
}
