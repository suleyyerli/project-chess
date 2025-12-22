const matchRepository = require("../repositories/match.repository");
const puzzleService = require("./puzzle.service");

const DEFAULT_PACK_SIZE = 20;
const DEFAULT_START_ELO = 399;
const DEFAULT_STEP_ELO = 20;
const DEFAULT_MAX_ERRORS = 3;

function toInt(value, label) {
  const parsed = Number(value);
  if (!Number.isInteger(parsed)) {
    throw new Error(`${label} invalide`);
  }
  return parsed;
}

function normalizeState(rawState) {
  const state =
    rawState && typeof rawState === "object" && !Array.isArray(rawState)
      ? { ...rawState }
      : {};

  state.status = typeof state.status === "string" ? state.status : "running";
  state.score = Number.isFinite(state.score) ? state.score : 0;
  state.errors = Number.isFinite(state.errors) ? state.errors : 0;
  state.maxErrors = Number.isFinite(state.maxErrors)
    ? state.maxErrors
    : DEFAULT_MAX_ERRORS;
  state.currentIndex = Number.isFinite(state.currentIndex) ? state.currentIndex : 0;
  state.puzzleIds = Array.isArray(state.puzzleIds) ? state.puzzleIds : [];
  state.packSize = Number.isFinite(state.packSize)
    ? state.packSize
    : DEFAULT_PACK_SIZE;
  state.startElo = Number.isFinite(state.startElo)
    ? state.startElo
    : DEFAULT_START_ELO;
  state.stepElo = Number.isFinite(state.stepElo) ? state.stepElo : DEFAULT_STEP_ELO;

  return state;
}

function normalizeOutcome(value) {
  if (!value) return null;
  const normalized = String(value).trim().toLowerCase();
  if (["win", "won", "victory", "completed", "complete", "success"].includes(normalized)) {
    return "win";
  }
  if (["timeout", "lose", "lost", "fail", "failed", "errors", "abandon"].includes(normalized)) {
    return "lose";
  }
  return normalized;
}

function normalizeResult(value) {
  if (typeof value === "boolean") return value;
  if (value === 1 || value === 0) return Boolean(value);
  if (value === null || value === undefined) return null;
  const normalized = String(value).trim().toLowerCase();
  if (["true", "1", "yes", "ok", "correct", "success", "win"].includes(normalized)) {
    return true;
  }
  if (["false", "0", "no", "wrong", "fail", "lose"].includes(normalized)) {
    return false;
  }
  return null;
}

function toPublicState(state) {
  return {
    status: state.status,
    score: state.score,
    errors: state.errors,
    maxErrors: state.maxErrors,
    currentIndex: state.currentIndex,
    packSize: state.packSize,
    startElo: state.startElo,
    stepElo: state.stepElo,
    finishedReason: state.finishedReason ?? null,
    finishedAt: state.finishedAt ?? null,
  };
}

function hasUser(match, userId) {
  return match.match_players?.some((player) => player.user_id === userId);
}

function toMatchHistory(match) {
  return {
    id: match.id,
    finishedAt: match.finished_at ? match.finished_at.toISOString() : null,
    mode: match.mode,
    players: (match.match_players || []).map((player) => ({
      userId: player.user_id,
      pseudo: player.users?.pseudo ?? null,
      isWinner: Boolean(player.is_winner),
      puzzlesSolved: Number.isFinite(player.puzzles_solved)
        ? player.puzzles_solved
        : 0,
      trophiesDelta: Number.isFinite(player.trophies_delta)
        ? player.trophies_delta
        : 0,
    })),
  };
}

function calculateTrophiesDelta({ puzzlesSolved, isWinner }) {
  if (!puzzlesSolved || puzzlesSolved <= 0) {
    return 0;
  }
  const base = Math.ceil(puzzlesSolved / 5);
  return isWinner ? base : -base;
}

async function finalizeMatch(match, userId, reason, stateOverride = null) {
  const state = normalizeState(stateOverride ?? match.state);
  const outcome = normalizeOutcome(reason) || "abandon";
  const isWinner = outcome === "win";
  const puzzlesSolved = state.score;
  const trophiesDelta = calculateTrophiesDelta({ puzzlesSolved, isWinner });
  const finishedAt = new Date();

  const nextState = {
    ...state,
    status: "finished",
    finishedReason: outcome,
    finishedAt: finishedAt.toISOString(),
  };

  await matchRepository.updateMatch(match.id, {
    finished_at: finishedAt,
    state: nextState,
  });

  await matchRepository.updatePlayer(match.id, userId, {
    is_winner: isWinner,
    puzzles_solved: puzzlesSolved,
    trophies_delta: trophiesDelta,
  });

  const updatedPlayers = (match.match_players || []).map((player) => {
    if (player.user_id !== userId) return player;
    return {
      ...player,
      is_winner: isWinner,
      puzzles_solved: puzzlesSolved,
      trophies_delta: trophiesDelta,
    };
  });

  return {
    match: toMatchHistory({
      ...match,
      finished_at: finishedAt,
      match_players: updatedPlayers,
    }),
    state: toPublicState(nextState),
  };
}

async function startSoloMatch(userId) {
  const playerId = toInt(userId, "Utilisateur");
  const puzzles = await puzzleService.generateProgressivePack({
    count: DEFAULT_PACK_SIZE,
    startElo: DEFAULT_START_ELO,
    stepElo: DEFAULT_STEP_ELO,
  });

  if (!puzzles.length) {
    throw new Error("Aucun puzzle disponible");
  }

  const puzzleIds = puzzles.map((puzzle) => puzzle.id);
  const state = normalizeState({
    status: "running",
    score: 0,
    errors: 0,
    maxErrors: DEFAULT_MAX_ERRORS,
    currentIndex: 0,
    puzzleIds,
    packSize: DEFAULT_PACK_SIZE,
    startElo: DEFAULT_START_ELO,
    stepElo: DEFAULT_STEP_ELO,
    startedAt: new Date().toISOString(),
  });

  const match = await matchRepository.createMatch({
    mode: "solo",
    state,
  });

  await matchRepository.addPlayer({
    matchId: match.id,
    userId: playerId,
  });

  return {
    matchId: match.id,
    puzzle: puzzles[0],
    state: toPublicState(state),
  };
}

async function getMatch(matchId, userId) {
  const id = toInt(matchId, "Match");
  const playerId = toInt(userId, "Utilisateur");
  const match = await matchRepository.findByIdWithPlayers(id);

  if (!match) {
    throw new Error("Match introuvable");
  }

  if (!hasUser(match, playerId)) {
    throw new Error("Accès interdit");
  }

  return {
    ...toMatchHistory(match),
    state: normalizeState(match.state),
  };
}

async function listMatchesForUser(userId) {
  const playerId = toInt(userId, "Utilisateur");
  const matches = await matchRepository.listByUser(playerId);
  return matches.map(toMatchHistory);
}

async function getNextPuzzle(matchId, userId) {
  const id = toInt(matchId, "Match");
  const playerId = toInt(userId, "Utilisateur");
  const match = await matchRepository.findByIdWithPlayers(id);

  if (!match) {
    throw new Error("Match introuvable");
  }

  if (!hasUser(match, playerId)) {
    throw new Error("Accès interdit");
  }

  const state = normalizeState(match.state);
  if (match.finished_at || state.status === "finished") {
    throw new Error("Match terminé");
  }

  let updated = false;

  if (state.currentIndex >= state.puzzleIds.length) {
    const extraPuzzles = await puzzleService.generateProgressivePack({
      count: state.packSize,
      startElo: state.startElo + state.stepElo * state.currentIndex,
      stepElo: state.stepElo,
      excludeIds: state.puzzleIds,
    });

    if (!extraPuzzles.length) {
      const finished = await finalizeMatch(match, playerId, "no_puzzles", state);
      return { finished: true, state: finished.state, match: finished.match };
    }

    state.puzzleIds = state.puzzleIds.concat(
      extraPuzzles.map((puzzle) => puzzle.id)
    );
    updated = true;
  }

  const puzzleId = state.puzzleIds[state.currentIndex];
  const puzzle = await puzzleService.getPuzzleById(puzzleId);

  if (updated) {
    await matchRepository.updateMatch(match.id, { state });
  }

  return {
    puzzle,
    state: toPublicState(state),
  };
}

async function submitMatch(matchId, userId, payload) {
  const id = toInt(matchId, "Match");
  const playerId = toInt(userId, "Utilisateur");
  const match = await matchRepository.findByIdWithPlayers(id);

  if (!match) {
    throw new Error("Match introuvable");
  }

  if (!hasUser(match, playerId)) {
    throw new Error("Accès interdit");
  }

  const state = normalizeState(match.state);
  if (match.finished_at || state.status === "finished") {
    throw new Error("Match terminé");
  }

  const expectedPuzzleId = state.puzzleIds[state.currentIndex];
  const submittedPuzzleId = payload?.puzzleId;
  const puzzleId = submittedPuzzleId !== undefined ? Number(submittedPuzzleId) : null;

  if (!expectedPuzzleId) {
    throw new Error("Aucun puzzle en attente");
  }

  if (!Number.isInteger(puzzleId)) {
    throw new Error("PuzzleId invalide");
  }

  if (puzzleId !== expectedPuzzleId) {
    throw new Error("Puzzle inattendu");
  }

  const result = normalizeResult(payload?.result);
  if (result === null) {
    throw new Error("Résultat invalide");
  }

  let finished = false;
  let finishResponse = null;

  if (result) {
    state.score += 1;
    state.currentIndex += 1;

    await matchRepository.updatePlayer(match.id, playerId, {
      puzzles_solved: state.score,
    });
  } else {
    state.errors += 1;
  }

  if (state.errors >= state.maxErrors) {
    finishResponse = await finalizeMatch(match, playerId, "errors", state);
    finished = true;
  } else {
    await matchRepository.updateMatch(match.id, { state });
  }

  return {
    valid: result,
    finished,
    nextPuzzleId:
      state.puzzleIds[state.currentIndex] ?? null,
    state: finishResponse?.state ?? toPublicState(state),
    match: finishResponse?.match ?? null,
  };
}

async function finishMatch(matchId, userId, payload) {
  const id = toInt(matchId, "Match");
  const playerId = toInt(userId, "Utilisateur");
  const match = await matchRepository.findByIdWithPlayers(id);

  if (!match) {
    throw new Error("Match introuvable");
  }

  if (!hasUser(match, playerId)) {
    throw new Error("Accès interdit");
  }

  if (match.finished_at) {
    return {
      match: toMatchHistory(match),
      state: toPublicState(normalizeState(match.state)),
    };
  }

  const reason = payload?.reason || payload?.result || payload?.status;
  return finalizeMatch(match, playerId, reason);
}

module.exports = {
  startSoloMatch,
  getMatch,
  finishMatch,
  listMatchesForUser,
  getNextPuzzle,
  submitMatch,
};
