const userRepository = require("../repositories/user.repository");
const reportRepository = require("../repositories/report.repository");

const BAN_LABELS = ["Triche", "Anti-jeu"];
const BAN_DURATIONS = {
  "1h": 60 * 60 * 1000,
  "1w": 7 * 24 * 60 * 60 * 1000,
  "1m": 30 * 24 * 60 * 60 * 1000,
  permanent: null,
};

function normalizeLabel(label) {
  if (!label) return null;
  const trimmed = String(label).trim();
  const found = BAN_LABELS.find(
    (item) => item.toLowerCase() === trimmed.toLowerCase()
  );
  return found || null;
}

function normalizeDuration(duration) {
  if (!duration) return null;
  const key = String(duration).trim().toLowerCase();
  return Object.prototype.hasOwnProperty.call(BAN_DURATIONS, key) ? key : null;
}

function buildSearchFilter(search) {
  if (!search) return undefined;
  const value = String(search).trim();
  if (!value) return undefined;
  return {
    OR: [
      { pseudo: { contains: value, mode: "insensitive" } },
      { email: { contains: value, mode: "insensitive" } },
    ],
  };
}

async function listUsers({ search, status, minReports }) {
  const where = {};

  const searchFilter = buildSearchFilter(search);
  if (searchFilter) {
    Object.assign(where, searchFilter);
  }

  if (status === "banned") {
    where.is_banned = true;
  } else if (status === "active") {
    where.is_banned = false;
  }

  const users = await userRepository.findAll({
    where,
    orderBy: { pseudo: "asc" },
  });

  const ids = users.map((user) => user.id);
  const counts = await reportRepository.countReportsByReportedIds(ids);

  const min = Number(minReports);
  const withCounts = users.map((user) => ({
    id: user.id,
    pseudo: user.pseudo,
    email: user.email,
    trophy: user.trophy ?? 0,
    isBanned: Boolean(user.is_banned),
    banLabel: user.ban_label ?? null,
    bannedUntil: user.banned_until?.toISOString?.() ?? null,
    reportCount: counts.get(user.id) || 0,
  }));

  if (Number.isInteger(min) && min > 0) {
    return withCounts.filter((user) => user.reportCount >= min);
  }

  return withCounts;
}

async function banUser({ userId, label, duration }) {
  const id = Number(userId);
  if (!Number.isInteger(id)) throw new Error("Identifiant invalide");

  const normalizedLabel = normalizeLabel(label);
  if (!normalizedLabel) throw new Error("Label invalide");

  const normalizedDuration = normalizeDuration(duration);
  if (!normalizedDuration) throw new Error("Durée invalide");

  const durationMs = BAN_DURATIONS[normalizedDuration];
  const bannedUntil =
    durationMs === null ? null : new Date(Date.now() + durationMs);

  const user = await userRepository.update(id, {
    is_banned: true,
    ban_label: normalizedLabel,
    ban_reason: normalizedLabel,
    banned_until: bannedUntil,
  });

  return {
    id: user.id,
    pseudo: user.pseudo,
    isBanned: Boolean(user.is_banned),
    banLabel: user.ban_label ?? null,
    bannedUntil: user.banned_until?.toISOString?.() ?? null,
  };
}

async function unbanUser(userId) {
  const id = Number(userId);
  if (!Number.isInteger(id)) throw new Error("Identifiant invalide");

  const user = await userRepository.update(id, {
    is_banned: false,
    ban_label: null,
    ban_reason: null,
    banned_until: null,
  });

  return {
    id: user.id,
    pseudo: user.pseudo,
    isBanned: Boolean(user.is_banned),
    banLabel: user.ban_label ?? null,
    bannedUntil: user.banned_until?.toISOString?.() ?? null,
  };
}

async function deleteUser(userId) {
  const id = Number(userId);
  if (!Number.isInteger(id)) throw new Error("Identifiant invalide");
  await userRepository.deleteById(id);
  return { message: "Utilisateur supprimé" };
}

module.exports = {
  listUsers,
  banUser,
  unbanUser,
  deleteUser,
  BAN_LABELS,
  BAN_DURATIONS,
};
