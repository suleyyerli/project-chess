import { getAuthToken } from "./authStorage";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000";
const ADMIN_URL = `${API_BASE}/admin`;

async function readErrorMessage(res) {
  try {
    const data = await res.json();
    return data?.message || data?.error?.message || "Erreur inconnue";
  } catch {
    return "Erreur inconnue";
  }
}

export async function fetchAdminUsers(
  { search = "", status = "all", minReports = "" } = {},
  token = getAuthToken()
) {
  if (!token) {
    throw new Error("Token manquant (connecte-toi)");
  }

  const params = new URLSearchParams();
  if (search) params.set("search", search);
  if (status && status !== "all") params.set("status", status);
  if (minReports !== "" && minReports !== null) {
    params.set("minReports", String(minReports));
  }

  const url = params.toString()
    ? `${ADMIN_URL}/users?${params.toString()}`
    : `${ADMIN_URL}/users`;

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    throw new Error(await readErrorMessage(res));
  }

  return res.json();
}

export async function banUser(
  userId,
  { label, duration },
  token = getAuthToken()
) {
  if (!token) {
    throw new Error("Token manquant (connecte-toi)");
  }

  const res = await fetch(`${ADMIN_URL}/users/${userId}/ban`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ label, duration }),
  });

  if (!res.ok) {
    throw new Error(await readErrorMessage(res));
  }

  return res.json();
}

export async function unbanUser(userId, token = getAuthToken()) {
  if (!token) {
    throw new Error("Token manquant (connecte-toi)");
  }

  const res = await fetch(`${ADMIN_URL}/users/${userId}/unban`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    throw new Error(await readErrorMessage(res));
  }

  return res.json();
}

export async function deleteUser(userId, token = getAuthToken()) {
  if (!token) {
    throw new Error("Token manquant (connecte-toi)");
  }

  const res = await fetch(`${ADMIN_URL}/users/${userId}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    throw new Error(await readErrorMessage(res));
  }

  return res.json();
}
