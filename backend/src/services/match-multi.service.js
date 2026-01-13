const matchRepository = require("../repositories/match.repository");
const userRepository = require("../repositories/user.repository");
const puzzleService = require("./puzzle.service");

const matchStates = new Map();
const DEFAULT_PACK_SIZE = 40;
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

function normalizeFinishReason(value) {
  if (typeof value === "string" && value.trim()) {
    return value.trim();
  }
  return "timeout";
}

function uniqueIds(values) {
  const seen = new Set();
  return values.filter((value) => {
    if (seen.has(value)) return false;
    seen.add(value);
    return true;
  });
}

function normalizeState(rawState, playerIds) {
  const state =
    rawState && typeof rawState === "object" && !Array.isArray(rawState)
      ? { ...rawState }
      : {};

  state.status = typeof state.status === "string" ? state.status : "waiting";
  state.currentIndex = Number.isFinite(state.currentIndex)
    ? state.currentIndex
    : 0;
  state.puzzleIds = Array.isArray(state.puzzleIds) ? state.puzzleIds : [];
  state.packSize = Number.isFinite(state.packSize)
    ? state.packSize
    : DEFAULT_PACK_SIZE;
  state.startElo = Number.isFinite(state.startElo)
    ? state.startElo
    : DEFAULT_START_ELO;
  state.stepElo = Number.isFinite(state.stepElo)
    ? state.stepElo
    : DEFAULT_STEP_ELO;
  state.maxErrors = Number.isFinite(state.maxErrors)
    ? state.maxErrors
    : DEFAULT_MAX_ERRORS;

  const players =
    state.players && typeof state.players === "object" ? state.players : {};
  const normalizedPlayers = {};

  playerIds.forEach((playerId) => {
    const entry = players[playerId] || {};
    normalizedPlayers[playerId] = {
      score: Number.isFinite(entry.score) ? entry.score : 0,
      errors: Number.isFinite(entry.errors) ? entry.errors : 0,
    };
  });

  state.players = normalizedPlayers;
  return state;
}

function normalizeResult(value) {
  if (typeof value === "boolean") return value;
  if (value === 1 || value === 0) return Boolean(value);
  if (value === null || value === undefined) return null;
  const normalized = String(value).trim().toLowerCase();
  if (
    ["true", "1", "yes", "ok", "correct", "success", "win"].includes(normalized)
  ) {
    return true;
  }
  if (["false", "0", "no", "wrong", "fail", "lose"].includes(normalized)) {
    return false;
  }
  return null;
}

function getOpponentId(players, actorId) {
  if (!players || !actorId) return null;
  const ids = Object.keys(players)
    .map((id) => Number(id))
    .filter((id) => Number.isInteger(id) && id !== actorId);
  return ids.length > 0 ? ids[0] : null;
}

function computeWinner(state) {
  const entries = Object.entries(state.players || {});
  if (entries.length === 0) {
    return { winnerId: null, isDraw: true };
  }

  let bestScore = -1;
  let winners = [];

  entries.forEach(([id, playerState]) => {
    const score = Number.isFinite(playerState?.score) ? playerState.score : 0;
    if (score > bestScore) {
      bestScore = score;
      winners = [id];
      return;
    }
    if (score === bestScore) {
      winners.push(id);
    }
  });

  if (winners.length !== 1) {
    return { winnerId: null, isDraw: true };
  }

  return { winnerId: Number(winners[0]), isDraw: false };
}

function calculateTrophiesDelta({ trophy, isWinner, isDraw }) {
  if (isDraw) return 0;
  const current = Number.isFinite(trophy) ? trophy : 0;

  if (isWinner) {
    if (current >= 1000) return 5;
    return 8;
  }

  if (current < 500) return 0;
  return -8;
}

function getUserTrophy(match, userId) {
  const entry = match.match_players?.find(
    (player) => player.user_id === userId
  );
  const trophy = entry?.users?.trophy;
  return Number.isFinite(trophy) ? trophy : 0;
}

async function loadMatch(matchId) {
  const id = toInt(matchId, "Match");
  const cachedState = matchStates.get(id);
  if (cachedState) {
    return {
      id,
      state: cachedState,
      playerIds: Object.keys(cachedState.players || {}),
    };
  }

  const match = await matchRepository.findByIdWithPlayers(id);
  if (!match) {
    throw new Error("Match introuvable");
  }
  if (match.mode !== "multi") {
    throw new Error("Match invalide");
  }

  const playerIds = (match.match_players || [])
    .map((player) => player.user_id)
    .filter((value) => Number.isInteger(value));
  const state = normalizeState(match.state, playerIds);
  matchStates.set(match.id, state);

  return { id: match.id, state, playerIds };
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

  return {
    matchId: match.id,
    state,
    room: getMatchRoom(match.id),
  };
}

async function submitMatchAction({ matchId, userId, puzzleId, result }) {
  const actorId = toInt(userId, "Utilisateur");
  const { id, state } = await loadMatch(matchId);

  if (state.status === "finished") {
    throw new Error("Match terminé");
  }

  if (!state.players?.[actorId]) {
    throw new Error("Accès interdit");
  }

  const expectedPuzzleId = state.puzzleIds[state.currentIndex];
  if (!Number.isInteger(expectedPuzzleId)) {
    throw new Error("Aucun puzzle en attente");
  }

  const submittedPuzzleId =
    puzzleId !== undefined && puzzleId !== null ? Number(puzzleId) : null;

  if (!Number.isInteger(submittedPuzzleId)) {
    throw new Error("PuzzleId invalide");
  }

  if (submittedPuzzleId !== expectedPuzzleId) {
    throw new Error("Puzzle inattendu");
  }

  const isCorrect = normalizeResult(result);
  if (isCorrect === null) {
    throw new Error("Résultat invalide");
  }

  const playerState = state.players[actorId];

  if (isCorrect) {
    playerState.score += 1;
    state.currentIndex += 1;
  } else {
    playerState.errors += 1;
  }

  if (state.status === "waiting") {
    state.status = "running";
  }

  if (!isCorrect && playerState.errors >= state.maxErrors) {
    const opponentId = getOpponentId(state.players, actorId);
    const finishedOutcome = await finishMatch({
      matchId: id,
      reason: "errors",
      winnerId: opponentId,
    });

    return {
      matchId: id,
      state: finishedOutcome.state,
      userId: actorId,
      isCorrect,
      score: playerState.score,
      errors: playerState.errors,
      nextPuzzleId: null,
      finished: true,
      winnerId: finishedOutcome.winnerId,
      isDraw: finishedOutcome.isDraw,
      reason: finishedOutcome.state?.finishedReason ?? "errors",
    };
  }

  let nextPuzzleId = state.puzzleIds[state.currentIndex] ?? null;

  if (isCorrect && nextPuzzleId === null) {
    const extraPuzzles = await puzzleService.generateProgressivePack({
      count: state.packSize,
      startElo: state.startElo + state.stepElo * state.currentIndex,
      stepElo: state.stepElo,
      excludeIds: state.puzzleIds,
    });

    if (extraPuzzles.length > 0) {
      const extraIds = uniqueIds(extraPuzzles.map((puzzle) => puzzle.id));
      state.puzzleIds = state.puzzleIds.concat(extraIds);
      nextPuzzleId = state.puzzleIds[state.currentIndex] ?? null;
    }
  }

  matchStates.set(id, state);
  await matchRepository.updateMatch(id, { state });

  return {
    matchId: id,
    state,
    userId: actorId,
    isCorrect,
    score: playerState.score,
    errors: playerState.errors,
    nextPuzzleId,
    finished: false,
    winnerId: null,
    isDraw: false,
    reason: null,
  };
}

function listActiveMatchesForUser(userId) {
  const id = toInt(userId, "Utilisateur");
  const matches = [];
  for (const [matchId, state] of matchStates.entries()) {
    if (!state || state.status === "finished") continue;
    if (state.players?.[id]) {
      matches.push({ matchId, state });
    }
  }
  return matches;
}

async function finishMatch({
  matchId,
  reason,
  winnerId = null,
  isDraw = null,
}) {
  const id = toInt(matchId, "Match");
  const match = await matchRepository.findByIdWithPlayers(id);
  if (!match) {
    throw new Error("Match introuvable");
  }

  const playerIds = (match.match_players || [])
    .map((player) => player.user_id)
    .filter((value) => Number.isInteger(value));
  const cachedState = matchStates.get(id);
  const state = normalizeState(cachedState ?? match.state, playerIds);

  if (state.status === "finished" || match.finished_at) {
    matchStates.set(id, state);
    return {
      matchId: id,
      state,
      winnerId: state.winnerId ?? null,
      isDraw: Boolean(state.isDraw),
    };
  }

  let resolvedWinnerId = Number.isInteger(winnerId) ? winnerId : null;
  let resolvedIsDraw = typeof isDraw === "boolean" ? isDraw : null;

  if (resolvedIsDraw === true) {
    resolvedWinnerId = null;
  }

  if (resolvedIsDraw === null && resolvedWinnerId === null) {
    const computed = computeWinner(state);
    resolvedWinnerId = computed.winnerId;
    resolvedIsDraw = computed.isDraw;
  }

  if (resolvedIsDraw === null) {
    resolvedIsDraw = false;
  }

  const finishedAt = new Date();
  const finalState = {
    ...state,
    status: "finished",
    finishedReason: normalizeFinishReason(reason),
    finishedAt: finishedAt.toISOString(),
    winnerId: resolvedWinnerId,
    isDraw: resolvedIsDraw,
  };

  await matchRepository.updateMatch(id, {
    finished_at: finishedAt,
    state: finalState,
  });

  const playerStats = playerIds.map((playerId) => {
    const playerState = state.players?.[playerId] || {};
    const puzzlesSolved = Number.isFinite(playerState.score)
      ? playerState.score
      : 0;
    const isWinner = !resolvedIsDraw && playerId === resolvedWinnerId;
    const trophy = getUserTrophy(match, playerId);
    return {
      userId: playerId,
      puzzlesSolved,
      isWinner,
      trophiesDelta: calculateTrophiesDelta({
        trophy,
        isWinner,
        isDraw: resolvedIsDraw,
      }),
    };
  });

  await Promise.all(
    playerStats.map((entry) =>
      matchRepository.updatePlayer(id, entry.userId, {
        puzzles_solved: entry.puzzlesSolved,
        is_winner: entry.isWinner,
        trophies_delta: entry.trophiesDelta,
      })
    )
  );

  await Promise.all(
    playerStats.map((entry) => {
      const data = {
        nbgame: { increment: 1 },
        trophy: { increment: entry.trophiesDelta },
      };
      if (resolvedIsDraw) {
        data.nbdraw = { increment: 1 };
      } else if (entry.isWinner) {
        data.nbwin = { increment: 1 };
      } else {
        data.nblose = { increment: 1 };
      }
      return userRepository.update(entry.userId, data);
    })
  );

  matchStates.delete(id);

  return {
    matchId: id,
    state: finalState,
    winnerId: resolvedWinnerId,
    isDraw: resolvedIsDraw,
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
  finishMatch,
  getMatchRoom,
  getMatchState,
  getOpponentId,
  listActiveMatchesForUser,
  setMatchState,
  removeMatchState,
  submitMatchAction,
};
