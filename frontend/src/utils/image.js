export function toImageSrc(value) {
  if (!value || typeof value !== "string") return null;

  if (
    value.startsWith("http://") ||
    value.startsWith("https://") ||
    value.startsWith("data:") ||
    value.startsWith("/") ||
    value.startsWith("src/")
  ) {
    return value;
  }

  // Fallback: assume base64 (no data: prefix)
  return `data:image/png;base64,${value}`;
}

