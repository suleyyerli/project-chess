import { create } from "zustand";
import { useChessStore } from "./useChessStore";
import { getSocket } from "../api/socket";
import {
  finishMatch,
  getNextPuzzle,
  startSoloMatch,
  submitMatchResult,
} from "../api/apiMatches";

const DEFAULT_TIME_LEFT = 2000;
const DEFAULT_MULTI_TIME_LEFT = 120;

function buildStateUpdate(serverState) {
  if (!serverState || typeof serverState !== "object") {
    return {};
  }

  const next = {};

  if (Number.isFinite(serverState.score)) next.score = serverState.score;
  if (Number.isFinite(serverState.errors)) next.errors = serverState.errors;
  if (Number.isFinite(serverState.maxErrors)) next.maxErrors = serverState.maxErrors;
  if (typeof serverState.finishedReason === "string") {
    next.result = serverState.finishedReason;
  }

  return next;
}

function stopTimer(get, set) {
  const timerId = get().timerId;
  if (timerId) {
    clearInterval(timerId);
  }
  set({ timerId: null });
}

function normalizePlayerState(entry) {
  return {
    score: Number.isFinite(entry?.score) ? entry.score : 0,
    errors: Number.isFinite(entry?.errors) ? entry.errors : 0,
  };
}

function resolveOpponentId(players, selfId) {
  if (!players || !selfId) return null;
  const ids = Object.keys(players).map((id) => Number(id));
  return ids.find((id) => Number.isInteger(id) && id !== selfId) ?? null;
}

export const useGameStore = create((set, get) => ({
  status: "idle", // idle | running | finished
  mode: "solo", // solo | multi
  timeLeft: DEFAULT_TIME_LEFT,
  timerId: null,
  errors: 0,
  maxErrors: 3,
  score: 0,
  currentPuzzleId: null,
  matchId: null,
  result: null,
  selfId: null,
  opponent: null,
  winnerId: null,
  isDraw: false,

  setSelfId(id) {
    set({ selfId: Number.isInteger(id) ? id : null });
  },

  setOpponent(opponent) {
    if (!opponent) {
      set({ opponent: null });
      return;
    }
    set({
      opponent: {
        id: opponent.id ?? null,
        pseudo: opponent.pseudo ?? "Adversaire",
        score: Number.isFinite(opponent.score) ? opponent.score : 0,
        errors: Number.isFinite(opponent.errors) ? opponent.errors : 0,
      },
    });
  },

  async startGame() {
    stopTimer(get, set);

    try {
      const result = await startSoloMatch();
      if (!result?.puzzle) {
        throw new Error("Puzzle manquant");
      }

      useChessStore.getState().loadPuzzle(result.puzzle);
      const stateUpdate = buildStateUpdate(result.state);

      set({
        status: "running",
        mode: "solo",
        timeLeft: DEFAULT_TIME_LEFT,
        timerId: null,
        currentPuzzleId: result.puzzle.id,
        matchId: result.matchId,
        result: null,
        opponent: null,
        winnerId: null,
        isDraw: false,
        ...stateUpdate,
      });

      get().startTimer();
    } catch (error) {
      console.error("Unable to start match:", error);
      set({
        status: "idle",
        mode: "solo",
        matchId: null,
        currentPuzzleId: null,
        result: "error",
      });
    }
  },

  startTimer() {
    if (get().mode !== "solo") return;
    const id = setInterval(() => {
      const { timeLeft } = get();
      if (timeLeft <= 1) {
        stopTimer(get, set);
        set({ timeLeft: 0 });
        get().endMatch("timeout");
        return;
      }
      set({ timeLeft: timeLeft - 1 });
    }, 1000);
    set({ timerId: id });
  },

  startMultiMatch({ matchId, state, opponent }) {
    stopTimer(get, set);
    const selfId = get().selfId;
    const players = state?.players || {};
    const selfState = normalizePlayerState(players?.[selfId]);
    const opponentId =
      opponent?.id ?? resolveOpponentId(players, selfId);
    const opponentState = normalizePlayerState(players?.[opponentId]);

    set({
      status: "running",
      mode: "multi",
      matchId,
      timeLeft: DEFAULT_MULTI_TIME_LEFT,
      currentPuzzleId: state?.puzzleIds?.[state?.currentIndex ?? 0] ?? null,
      score: selfState.score,
      errors: selfState.errors,
      maxErrors: Number.isFinite(state?.maxErrors) ? state.maxErrors : 3,
      opponent: opponentId
        ? {
            id: opponentId,
            pseudo: opponent?.pseudo ?? "Adversaire",
            score: opponentState.score,
            errors: opponentState.errors,
          }
        : opponent,
      winnerId: null,
      isDraw: false,
      result: null,
    });
  },

  updateMultiState(matchId, state) {
    const selfId = get().selfId;
    if (!selfId || !state) return;
    const players = state.players || {};
    const selfState = normalizePlayerState(players[selfId]);
    const opponentId =
      get().opponent?.id ?? resolveOpponentId(players, selfId);
    const opponentState = normalizePlayerState(players[opponentId]);

    set({
      matchId,
      score: selfState.score,
      errors: selfState.errors,
      maxErrors: Number.isFinite(state.maxErrors) ? state.maxErrors : get().maxErrors,
      opponent: opponentId
        ? {
            id: opponentId,
            pseudo: get().opponent?.pseudo ?? "Adversaire",
            score: opponentState.score,
            errors: opponentState.errors,
          }
        : get().opponent,
    });
  },

  applyMultiPuzzle(puzzle) {
    if (!puzzle) return;
    useChessStore.getState().loadPuzzle(puzzle);
    set({
      currentPuzzleId: puzzle.id ?? null,
    });
  },

  updateMultiTimer(timeLeft) {
    if (!Number.isFinite(timeLeft)) return;
    set({ timeLeft });
  },

  finishMultiMatch({ winnerId, isDraw, reason }) {
    stopTimer(get, set);
    const selfId = get().selfId;
    const hasWinner = Number.isInteger(winnerId);
    let result = reason || "ended";
    if (isDraw) {
      result = "draw";
    } else if (hasWinner && selfId) {
      result = winnerId === selfId ? "win" : "lose";
    }

    set({
      status: "finished",
      mode: "multi",
      winnerId: winnerId ?? null,
      isDraw: Boolean(isDraw),
      result,
    });
  },

  submitMultiResult(result) {
    const { matchId, currentPuzzleId } = get();
    const socket = getSocket();
    if (!socket || !matchId || !currentPuzzleId) {
      console.error("Socket ou matchId manquant pour match:submit");
      return;
    }

    socket.emit(
      "match:submit",
      { matchId, puzzleId: currentPuzzleId, result },
      (ack) => {
        if (!ack?.ok) {
          console.error("match:submit failed", ack?.message || "Erreur serveur");
        }
      }
    );
  },

  async onPuzzleSolved() {
    const { status, matchId, currentPuzzleId } = get();
    if (status !== "running" || !matchId || !currentPuzzleId) return;
    if (get().mode === "multi") {
      get().submitMultiResult(true);
      return;
    }

    try {
      const result = await submitMatchResult(matchId, {
        puzzleId: currentPuzzleId,
        result: true,
      });
      const stateUpdate = buildStateUpdate(result.state);

      if (result.finished) {
        stopTimer(get, set);
        set({
          status: "finished",
          result: stateUpdate.result ?? "completed",
          ...stateUpdate,
        });
        return;
      }

      set(stateUpdate);
      await get().fetchNextPuzzle();
    } catch (error) {
      console.error("Unable to submit puzzle result:", error);
    }
  },

  async onPuzzleFailed() {
    const { status, matchId, currentPuzzleId } = get();
    if (status !== "running" || !matchId || !currentPuzzleId) return;
    if (get().mode === "multi") {
      get().submitMultiResult(false);
      return;
    }

    try {
      const result = await submitMatchResult(matchId, {
        puzzleId: currentPuzzleId,
        result: false,
      });
      const stateUpdate = buildStateUpdate(result.state);

      if (result.finished) {
        stopTimer(get, set);
        set({
          status: "finished",
          result: stateUpdate.result ?? "lose",
          ...stateUpdate,
        });
        return;
      }

      set(stateUpdate);
    } catch (error) {
      console.error("Unable to submit puzzle result:", error);
    }
  },

  async endMatch(reason, { keepalive = false } = {}) {
    if (get().status !== "running") return;
    stopTimer(get, set);

    if (get().mode === "multi") {
      set({ status: "finished", result: reason });
      return;
    }

    set({ status: "finished", result: reason });

    const { matchId } = get();
    if (!matchId) return;

    try {
      const result = await finishMatch(
        matchId,
        { reason },
        { keepalive }
      );
      const stateUpdate = buildStateUpdate(result.state);

      set({
        result: stateUpdate.result ?? reason,
        ...stateUpdate,
      });
    } catch (error) {
      console.error("Unable to finish match:", error);
    }
  },

  async fetchNextPuzzle() {
    const { status, matchId } = get();
    if (status !== "running" || !matchId) return;
    if (get().mode === "multi") return;

    try {
      const result = await getNextPuzzle(matchId);
      if (result?.finished) {
        stopTimer(get, set);
        const stateUpdate = buildStateUpdate(result.state);
        set({
          status: "finished",
          result: stateUpdate.result ?? "completed",
          ...stateUpdate,
        });
        return;
      }

      if (!result?.puzzle) {
        throw new Error("Puzzle manquant");
      }

      useChessStore.getState().loadPuzzle(result.puzzle);
      set({
        currentPuzzleId: result.puzzle.id,
        ...buildStateUpdate(result.state),
      });
    } catch (error) {
      console.error("Unable to load next puzzle:", error);
      get().endMatch("completed");
    }
  },
}));
