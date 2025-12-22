import { create } from "zustand";
import { useChessStore } from "./useChessStore";
import {
  finishMatch,
  getNextPuzzle,
  startSoloMatch,
  submitMatchResult,
} from "../api/apiMatches";

const DEFAULT_TIME_LEFT = 2000;

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

export const useGameStore = create((set, get) => ({
  status: "idle", // idle | running | finished
  timeLeft: DEFAULT_TIME_LEFT,
  timerId: null,
  errors: 0,
  maxErrors: 3,
  score: 0,
  currentPuzzleId: null,
  matchId: null,
  result: null,

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
        timeLeft: DEFAULT_TIME_LEFT,
        timerId: null,
        currentPuzzleId: result.puzzle.id,
        matchId: result.matchId,
        result: null,
        ...stateUpdate,
      });

      get().startTimer();
    } catch (error) {
      console.error("Unable to start match:", error);
      set({
        status: "idle",
        matchId: null,
        currentPuzzleId: null,
        result: "error",
      });
    }
  },

  startTimer() {
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

  async onPuzzleSolved() {
    const { status, matchId, currentPuzzleId } = get();
    if (status !== "running" || !matchId || !currentPuzzleId) return;

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
