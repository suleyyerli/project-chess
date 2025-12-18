function toBuffer(value) {
  if (!value) return null;
  if (Buffer.isBuffer(value)) return value;
  if (value instanceof Uint8Array) return Buffer.from(value);
  if (ArrayBuffer.isView?.(value)) {
    return Buffer.from(value.buffer, value.byteOffset, value.byteLength);
  }
  return null;
}

function isLosslessUtf8(buffer, text) {
  try {
    return Buffer.from(text, "utf8").equals(buffer);
  } catch {
    return false;
  }
}

function sniffImageMime(buffer) {
  const normalized = toBuffer(buffer);
  if (!normalized || normalized.length < 4) return null;

  // PNG signature: 89 50 4E 47 0D 0A 1A 0A
  if (
    normalized.length >= 8 &&
    normalized[0] === 0x89 &&
    normalized[1] === 0x50 &&
    normalized[2] === 0x4e &&
    normalized[3] === 0x47 &&
    normalized[4] === 0x0d &&
    normalized[5] === 0x0a &&
    normalized[6] === 0x1a &&
    normalized[7] === 0x0a
  ) {
    return "image/png";
  }

  // JPEG signature: FF D8 FF
  if (normalized[0] === 0xff && normalized[1] === 0xd8 && normalized[2] === 0xff) {
    return "image/jpeg";
  }

  return null;
}

function bytesToAvatar(value) {
  if (!value) return null;
  if (typeof value === "string") return value;
  const buffer = toBuffer(value);
  if (!buffer) return null;

  // If avatar is stored as a UTF-8 URL (hack to support URL without DB change)
  const asText = buffer.toString("utf8").trim();
  if (
    asText &&
    isLosslessUtf8(buffer, asText) &&
    (/^https?:\/\//i.test(asText) || /^data:image\//i.test(asText))
  ) {
    return asText;
  }

  const base64 = buffer.toString("base64");
  const mime = sniffImageMime(buffer) || "image/png";
  return `data:${mime};base64,${base64}`;
}

function getAvatarFileUrl(userId) {
  if (!userId) return null;
  const fs = require("fs");
  const path = require("path");

  const baseDir = path.resolve(__dirname, "../../uploads/avatars");
  const candidates = ["png", "jpg", "jpeg"];

  for (const ext of candidates) {
    const filePath = path.join(baseDir, `user-${userId}.${ext}`);
    try {
      if (!fs.existsSync(filePath)) continue;
      const stat = fs.statSync(filePath);
      const version = Math.floor(stat.mtimeMs);
      return `/uploads/avatars/user-${userId}.${ext}?v=${version}`;
    } catch {
      // ignore
    }
  }

  return null;
}

function toIsoString(value) {
  if (!value) return null;
  if (value instanceof Date) return value.toISOString();
  if (typeof value === "string") return value;
  return null;
}

function presentUser(user) {
  if (!user) return null;

  const avatarFromFs = getAvatarFileUrl(user.id);
  const avatarFromDb = bytesToAvatar(user.avatar);

  return {
    pseudo: user.pseudo ?? null,
    email: user.email ?? null,
    bio: user.bio ?? null,
    banner: user.banner ?? null,
    emblem: user.emblem ?? null,
    avatar: avatarFromFs ?? avatarFromDb,
    joinedAt: toIsoString(user.joined_at),
    stats: {
      trophy: typeof user.trophy === "number" ? user.trophy : 0,
      nbGame: typeof user.nbgame === "number" ? user.nbgame : 0,
      nbWin: typeof user.nbwin === "number" ? user.nbwin : 0,
      nbLose: typeof user.nblose === "number" ? user.nblose : 0,
      nbDraw: typeof user.nbdraw === "number" ? user.nbdraw : 0,
    },
  };
}

module.exports = { presentUser };
