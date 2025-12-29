const challengeRepository = require("../repositories/challenge.repository");
const userService = require("./user.service");

function toInt(value, label) {
  const parsed = Number(value);
  if (!Number.isInteger(parsed)) {
    throw new Error(`${label} invalide`);
  }
  return parsed;
}

function toIsoString(value) {
  if (!value) return null;
  if (value instanceof Date) return value.toISOString();
  if (typeof value === "string") return value;
  return null;
}

function toUserRef(user, fallbackId) {
  return {
    id: user?.id ?? fallbackId ?? null,
    pseudo: user?.pseudo ?? null,
  };
}

function toChallengePayload(challenge) {
  if (!challenge) return challenge;
  return {
    id: challenge.id ?? null,
    from: toUserRef(
      challenge.users_challenges_from_user_idTousers,
      challenge.from_user_id
    ),
    to: toUserRef(
      challenge.users_challenges_to_user_idTousers,
      challenge.to_user_id
    ),
    status: challenge.status ?? null,
    createdAt: toIsoString(challenge.created_at),
  };
}

async function createChallenge(fromUserId, payload) {
  const fromId = toInt(fromUserId, "Utilisateur");
  const toId = toInt(payload?.toUserId ?? payload?.to_user_id, "Adversaire");

  if (fromId === toId) {
    throw new Error("Impossible de se défier soi-même");
  }

  await userService.getUserById(toId);

  const challenge = await challengeRepository.createChallenge({
    fromUserId: fromId,
    toUserId: toId,
  });

  return toChallengePayload(challenge);
}

async function listChallengesForUser(userId) {
  const id = toInt(userId, "Utilisateur");
  const challenges = await challengeRepository.listForUser(id);
  return challenges.map(toChallengePayload);
}

async function updateChallengeStatus(challengeId, userId, status) {
  const id = toInt(challengeId, "Défi");
  const actorId = toInt(userId, "Utilisateur");

  const challenge = await challengeRepository.findById(id);
  if (!challenge) {
    throw new Error("Défi introuvable");
  }

  if (challenge.to_user_id !== actorId) {
    throw new Error("Accès interdit");
  }

  if (challenge.status !== "PENDING") {
    throw new Error("Défi déjà traité");
  }

  const updated = await challengeRepository.updateStatus(id, status);
  return toChallengePayload(updated);
}

async function acceptChallenge(challengeId, userId) {
  return updateChallengeStatus(challengeId, userId, "ACCEPTED");
}

async function refuseChallenge(challengeId, userId) {
  return updateChallengeStatus(challengeId, userId, "REFUSED");
}

module.exports = {
  createChallenge,
  listChallengesForUser,
  acceptChallenge,
  refuseChallenge,
};
