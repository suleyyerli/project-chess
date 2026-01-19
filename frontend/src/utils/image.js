import { getApiBase } from "../config/env";

const API_BASE = getApiBase();

export function toImageSrc(value) {
  if (!value || typeof value !== "string") return null;

  if (
    value.startsWith("http://") ||
    value.startsWith("https://") ||
    value.startsWith("data:") ||
    value.startsWith("src/")
  ) {
    return value;
  }

  if (value.startsWith("/uploads/")) {
    return `${API_BASE}${value}`;
  }

  if (value.startsWith("/")) {
    return value;
  }

  const trimmed = value.trim();
  // Only treat as raw base64 if it looks like base64 (avoid turning ids like "rook" into broken images)
  const looksBase64 =
    trimmed.length >= 100 &&
    trimmed.length % 4 === 0 &&
    /^[A-Za-z0-9+/]+={0,2}$/.test(trimmed);

  if (!looksBase64) return null;

  return `data:image/png;base64,${trimmed}`;
}
