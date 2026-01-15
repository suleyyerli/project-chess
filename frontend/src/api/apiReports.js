import { getAuthToken } from "./authStorage";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000";
const REPORTS_URL = `${API_BASE}/reports`;

async function readErrorMessage(res) {
  try {
    const data = await res.json();
    return data?.message || data?.error?.message || "Erreur inconnue";
  } catch {
    return "Erreur inconnue";
  }
}

export async function createReport({ reportedId, label }, token = getAuthToken()) {
  if (!token) {
    throw new Error("Token manquant (connecte-toi)");
  }

  const res = await fetch(REPORTS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ reportedId, label }),
  });

  if (!res.ok) {
    throw new Error(await readErrorMessage(res));
  }

  return res.json();
}
