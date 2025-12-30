import { getAuthToken } from "./authStorage";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000";
const CHALLENGES_URL = `${API_BASE}/challenges`;

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
  return { Authorization: `Bearer ${token}` };
}

export async function createChallenge(toUserId, token = getAuthToken()) {
  const response = await fetch(CHALLENGES_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(token),
    },
    body: JSON.stringify({ toUserId }),
  });

  if (!response.ok) {
    throw new Error(await readErrorMessage(response));
  }

  return response.json();
}

export async function listMyChallenges(token = getAuthToken()) {
  const response = await fetch(`${CHALLENGES_URL}/me`, {
    headers: {
      ...getAuthHeaders(token),
    },
  });

  if (!response.ok) {
    throw new Error(await readErrorMessage(response));
  }

  return response.json();
}

export async function acceptChallenge(id, token = getAuthToken()) {
  const response = await fetch(`${CHALLENGES_URL}/${id}/accept`, {
    method: "POST",
    headers: {
      ...getAuthHeaders(token),
    },
  });

  if (!response.ok) {
    throw new Error(await readErrorMessage(response));
  }

  return response.json();
}

export async function refuseChallenge(id, token = getAuthToken()) {
  const response = await fetch(`${CHALLENGES_URL}/${id}/refuse`, {
    method: "POST",
    headers: {
      ...getAuthHeaders(token),
    },
  });

  if (!response.ok) {
    throw new Error(await readErrorMessage(response));
  }

  return response.json();
}
