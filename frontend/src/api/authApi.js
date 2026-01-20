import { apiJson } from "./apiClient";

export async function signup({ email, pseudo, password }) {
  return apiJson("/auth/signup", {
    method: "POST",
    body: { email, pseudo, password },
    skipRefresh: true,
  });
}

export async function login({ email, password }) {
  return apiJson("/auth/login", {
    method: "POST",
    body: { email, password },
    skipRefresh: true,
  });
}

export async function getMe() {
  return apiJson("/auth/me", { requireAuth: true });
}

export async function updateMe(payload) {
  return apiJson("/auth/me", {
    method: "PUT",
    body: payload,
    requireAuth: true,
  });
}

export async function logout() {
  return apiJson("/auth/logout", {
    method: "POST",
    requireAuth: true,
    skipRefresh: true,
  });
}

export async function requestPasswordReset(email) {
  if (!email) {
    throw new Error("Email requis");
  }

  return apiJson("/auth/password/forgot", {
    method: "POST",
    body: { email },
    skipRefresh: true,
  });
}

export async function resetPassword({ token, password }) {
  if (!token || !password) {
    throw new Error("Token et mot de passe requis");
  }

  return apiJson("/auth/password/reset", {
    method: "POST",
    body: { token, password },
    skipRefresh: true,
  });
}
