import {
  clearAuthToken,
  getAuthToken,
  getRefreshToken,
  setAuthTokens,
} from "./authStorage";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000";
let refreshPromise = null;

export function getApiBase() {
  return API_BASE;
}

export async function readErrorMessage(res) {
  try {
    const data = await res.json();
    return data?.message || data?.error?.message || "Erreur inconnue";
  } catch {
    return "Erreur inconnue";
  }
}

async function refreshAccessToken() {
  const refreshToken = getRefreshToken();
  if (!refreshToken) {
    throw new Error("Refresh token manquant");
  }

  if (!refreshPromise) {
    refreshPromise = (async () => {
      const res = await fetch(`${API_BASE}/auth/refresh`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken }),
      });

      if (!res.ok) {
        throw new Error(await readErrorMessage(res));
      }

      const data = await res.json();
      if (!data?.token) {
        throw new Error("Token manquant dans la réponse");
      }

      setAuthTokens({
        token: data.token,
        refreshToken: data.refreshToken || refreshToken,
      });

      return data.token;
    })().finally(() => {
      refreshPromise = null;
    });
  }

  return refreshPromise;
}

export async function apiFetch(path, options = {}) {
  const {
    headers,
    requireAuth = false,
    skipRefresh = false,
    ...rest
  } = options;
  const accessToken = getAuthToken();

  if (requireAuth && !accessToken) {
    throw new Error("Token manquant (connecte-toi)");
  }

  const url =
    path.startsWith("http://") || path.startsWith("https://")
      ? path
      : `${API_BASE}${path.startsWith("/") ? "" : "/"}${path}`;

  const requestHeaders = new Headers(headers || {});
  if (accessToken && !requestHeaders.has("Authorization")) {
    requestHeaders.set("Authorization", `Bearer ${accessToken}`);
  }

  const response = await fetch(url, { ...rest, headers: requestHeaders });

  if (response.status !== 401 || skipRefresh) {
    return response;
  }

  const refreshToken = getRefreshToken();
  if (!refreshToken) {
    return response;
  }

  try {
    await refreshAccessToken();
  } catch {
    clearAuthToken();
    return response;
  }

  const retryHeaders = new Headers(headers || {});
  const newAccessToken = getAuthToken();
  if (newAccessToken && !retryHeaders.has("Authorization")) {
    retryHeaders.set("Authorization", `Bearer ${newAccessToken}`);
  }

  return fetch(url, { ...rest, headers: retryHeaders });
}

export async function apiJson(path, options = {}) {
  const { body, headers, ...rest } = options;
  const requestHeaders = new Headers(headers || {});
  let requestBody = body;

  if (body !== undefined && !(body instanceof FormData)) {
    if (!requestHeaders.has("Content-Type")) {
      requestHeaders.set("Content-Type", "application/json");
    }
    if (typeof body !== "string") {
      requestBody = JSON.stringify(body);
    }
  }

  const res = await apiFetch(path, {
    ...rest,
    headers: requestHeaders,
    body: requestBody,
  });

  if (!res.ok) {
    throw new Error(await readErrorMessage(res));
  }

  if (res.status === 204) {
    return null;
  }

  return res.json();
}
