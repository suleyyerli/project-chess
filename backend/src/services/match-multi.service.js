const matchRepository = require("../repositories/match.repository");
const puzzleService = require("./puzzle.service");
const { joinUsersToRoom } = require("../socket");

const matchStates = new Map();
const DEFAULT_PACK_SIZE = 20;
const DEFAULT_START_ELO = 399;
const DEFAULT_STEP_ELO = 30;
const DEFAULT_MAX_ERRORS = 3;

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

function uniqueIds(values) {
  const seen = new Set();
  return values.filter((value) => {
    if (seen.has(value)) return false;
    seen.add(value);
    return true;
  });
}

function buildInitialState(fromUserId, toUserId, puzzleIds) {
  return {
    status: "waiting",
    createdAt: toIsoString(new Date()),
    currentIndex: 0,
    puzzleIds,
    packSize: puzzleIds.length,
    startElo: DEFAULT_START_ELO,
    stepElo: DEFAULT_STEP_ELO,
    maxErrors: DEFAULT_MAX_ERRORS,
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

  const puzzles = await puzzleService.generateProgressivePack({
    count: DEFAULT_PACK_SIZE,
    startElo: DEFAULT_START_ELO,
    stepElo: DEFAULT_STEP_ELO,
  });

  if (!puzzles.length) {
    throw new Error("Aucun puzzle disponible");
  }

  const puzzleIds = uniqueIds(puzzles.map((puzzle) => puzzle.id));
  const state = buildInitialState(fromId, toId, puzzleIds);

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
