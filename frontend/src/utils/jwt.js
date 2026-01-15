function decodeBase64Url(payload) {
  const normalized = payload.replace(/-/g, "+").replace(/_/g, "/");
  const padding = normalized.length % 4 === 0 ? "" : "=".repeat(4 - (normalized.length % 4));
  return atob(normalized + padding);
}

export function getUserIdFromToken(token) {
  if (!token || typeof token !== "string") return null;
  const parts = token.split(".");
  if (parts.length < 2) return null;

  try {
    const decoded = decodeBase64Url(parts[1]);
    const payload = JSON.parse(decoded);
    const userId = Number(payload?.sub);
    return Number.isInteger(userId) ? userId : null;
  } catch {
    return null;
  }
}

export function getUserRoleFromToken(token) {
  if (!token || typeof token !== "string") return null;
  const parts = token.split(".");
  if (parts.length < 2) return null;

  try {
    const decoded = decodeBase64Url(parts[1]);
    const payload = JSON.parse(decoded);
    return payload?.role ?? null;
  } catch {
    return null;
  }
}
