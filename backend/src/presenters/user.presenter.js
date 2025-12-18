function bytesToBase64(value) {
  if (!value) return null;
  if (typeof value === "string") return value;
  if (Buffer.isBuffer(value)) return value.toString("base64");
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

  return {
    pseudo: user.pseudo ?? null,
    email: user.email ?? null,
    bio: user.bio ?? null,
    banner: user.banner ?? null,
    emblem: user.emblem ?? null,
    avatar: bytesToBase64(user.avatar),
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

