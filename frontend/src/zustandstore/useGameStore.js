import { create } from "zustand";
import { useChessStore } from "./useChessStore";

export const useGameStore = create((set, get) => ({
  status: "idle", // idle | running | finished
  timeLeft: 2000,
  timerId: null,
  errors: 0,
  maxErrors: 3,
  score: 0,
  currentPuzzleId: 1,
  result: null,

  // Lancer une partie solo

  async startGame() {
    const existingTimerId = get().timerId;
    if (existingTimerId) {
      clearInterval(existingTimerId);
    }

    const firstPuzzleId = 1;

    set({
      status: "running",
      timeLeft: 2000,
      errors: 0,
      score: 0,
      currentPuzzleId: firstPuzzleId,
      result: null,
      timerId: null,
    });

    await useChessStore.getState().fetchPuzzleById(firstPuzzleId);
    get().startTimer();
  },

  startTimer() {
    const id = setInterval(() => {
      set((state) => {
        if (state.timeLeft <= 1) {
          clearInterval(get().timerId);
          get().endMatch("timeout");
          return { timeLeft: 0 };
        }
        return { timeLeft: state.timeLeft - 1 };
      });
    }, 1000);
    set({ timerId: id });
  },

  async onPuzzleSolved() {
    set((state) => ({ score: state.score + 1 }));
    await get().fetchNextPuzzle();
  },

  onPuzzleFailed() {
    const newErrors = get().errors + 1;
    if (newErrors >= get().maxErrors) {
      set({ errors: newErrors });
      get().endMatch("lose");
    } else {
      set({ errors: newErrors });
    }
  },

  endMatch(reason) {
    clearInterval(get().timerId);
    set({ status: "finished", result: reason });
  },

  async fetchNextPuzzle() {
    const nextId = get().currentPuzzleId + 1;
    try {
      await useChessStore.getState().fetchPuzzleById(nextId);
      set({ currentPuzzleId: nextId });
    } catch (error) {
      console.error("Unable to load next puzzle:", error);
      get().endMatch("completed");
    }
  },
}));
