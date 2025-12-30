const matchRepository = require("../repositories/match.repository");
const { joinUsersToRoom } = require("../socket");

const matchStates = new Map();

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
  return null;
}

function getMatchRoom(matchId) {
  return `match:${matchId}`;
}

function buildInitialState(fromUserId, toUserId) {
  return {
    status: "waiting",
    createdAt: toIsoString(new Date()),
    currentIndex: 0,
    puzzleIds: [],
    players: {
      [fromUserId]: { score: 0, errors: 0 },
      [toUserId]: { score: 0, errors: 0 },
    },
  };
}

async function createMultiMatch({ fromUserId, toUserId }) {
  const fromId = toInt(fromUserId, "Joueur");
  const toId = toInt(toUserId, "Adversaire");

  if (fromId === toId) {
    throw new Error("Joueurs identiques");
  }

  const state = buildInitialState(fromId, toId);

  const match = await matchRepository.createMatch({
    mode: "multi",
    state,
  });

  await matchRepository.addPlayer({ matchId: match.id, userId: fromId });
  await matchRepository.addPlayer({ matchId: match.id, userId: toId });

  matchStates.set(match.id, state);

  const room = getMatchRoom(match.id);
  const socketsJoined = joinUsersToRoom([fromId, toId], room);

  return {
    matchId: match.id,
    room,
    state,
    socketsJoined,
  };
}

function getMatchState(matchId) {
  return matchStates.get(Number(matchId)) ?? null;
}

function setMatchState(matchId, state) {
  matchStates.set(Number(matchId), state);
}

function removeMatchState(matchId) {
  matchStates.delete(Number(matchId));
}

module.exports = {
  createMultiMatch,
  getMatchRoom,
  getMatchState,
  setMatchState,
  removeMatchState,
};
