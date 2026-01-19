const DEFAULT_API_BASE = "http://localhost:4000";

export function getApiBase() {
  const apiBase = import.meta.env.VITE_API_URL;
  if (apiBase) return apiBase;
  if (import.meta.env.PROD) {
    throw new Error("VITE_API_URL missing in production");
  }
  return DEFAULT_API_BASE;
}
