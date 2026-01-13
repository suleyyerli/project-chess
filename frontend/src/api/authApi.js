import { getAuthToken } from "./authStorage";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000";

async function readErrorMessage(res) {
  try {
    const data = await res.json();
    return data?.message || data?.error?.message || "Erreur inconnue";
  } catch {
    return "Erreur inconnue";
  }
}

export async function signup({ email, pseudo, password }) {
  const res = await fetch(`${API_BASE}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, pseudo, password }),
  });

  if (!res.ok) {
    throw new Error(await readErrorMessage(res));
  }

  return res.json();
}

export async function login({ email, password }) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error(await readErrorMessage(res));
  }

  return res.json();
}

export async function getMe(token = getAuthToken()) {
  if (!token) {
    throw new Error("Token manquant (connecte-toi)");
  }

  const res = await fetch(`${API_BASE}/auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    throw new Error(await readErrorMessage(res));
  }

  return res.json();
}

export async function updateMe(payload, token = getAuthToken()) {
  if (!token) {
    throw new Error("Token manquant (connecte-toi)");
  }

  const res = await fetch(`${API_BASE}/auth/me`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(await readErrorMessage(res));
  }

  return res.json();
}

export async function logout(token = getAuthToken()) {
  if (!token) {
    return null;
  }

  const res = await fetch(`${API_BASE}/auth/logout`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    throw new Error(await readErrorMessage(res));
  }

  return res.json();
}
