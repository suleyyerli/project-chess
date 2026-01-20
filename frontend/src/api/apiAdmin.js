import { apiJson } from "./apiClient";

const ADMIN_URL = "/admin";

export async function fetchAdminUsers({
  search = "",
  status = "all",
  minReports = "",
} = {}) {
  const params = new URLSearchParams();
  if (search) params.set("search", search);
  if (status && status !== "all") params.set("status", status);
  if (minReports !== "" && minReports !== null) {
    params.set("minReports", String(minReports));
  }

  const url = params.toString()
    ? `${ADMIN_URL}/users?${params.toString()}`
    : `${ADMIN_URL}/users`;

  return apiJson(url, { requireAuth: true });
}

export async function banUser(userId, { label, duration }) {
  return apiJson(`${ADMIN_URL}/users/${userId}/ban`, {
    method: "POST",
    body: { label, duration },
    requireAuth: true,
  });
}

export async function unbanUser(userId) {
  return apiJson(`${ADMIN_URL}/users/${userId}/unban`, {
    method: "POST",
    requireAuth: true,
  });
}

export async function deleteUser(userId) {
  return apiJson(`${ADMIN_URL}/users/${userId}`, {
    method: "DELETE",
    requireAuth: true,
  });
}
