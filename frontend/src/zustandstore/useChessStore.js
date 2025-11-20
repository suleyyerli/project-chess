import { create } from "zustand";
import { Chess } from "chess.js";
import { fetchPuzzleById } from "../api/puzzleApi";
import { useGameStore } from "./useGameStore";

export const useChessStore = create((set, get) => ({
  currentPuzzle: null,
  game: null,
  fen: "",
  currentStep: 0,
  playerColor: "white",
  boardOrientation: "white",

  async fetchPuzzleById(id) {
    const puzzle = await fetchPuzzleById(id);
    if (!puzzle) {
      throw new Error(`Puzzle introuvable pour l'identifiant ${id}`);
    }
    get().loadPuzzle(puzzle);
  },

  loadPuzzle(puzzle) {
    const game = new Chess(puzzle.fen);
    const turn = game.turn();
    const normalizedSolution =
      puzzle.solution?.map((move) => move.toLowerCase().replace(/\s+/g, "")) ??
      [];

    set({
      currentPuzzle: { ...puzzle, normalizedSolution },
      game,
      fen: puzzle.fen,
      currentStep: 0,
      playerColor: turn === "w" ? "white" : "black",
      boardOrientation: turn === "w" ? "white" : "black",
    });
  },

  resetPuzzlePosition() {
    const { currentPuzzle } = get();
    if (!currentPuzzle) {
      return;
    }

    const reset = new Chess(currentPuzzle.fen);
    set({
      game: reset,
      fen: reset.fen(),
      currentStep: 0,
    });
  },

  onDrop({ sourceSquare, targetSquare }) {
    const { game, currentPuzzle, currentStep } = get();

    if (!game || !currentPuzzle) {
      return false;
    }

    const punishAndReset = () => {
      useGameStore.getState().onPuzzleFailed();
      setTimeout(() => {
        get().resetPuzzlePosition();
      }, 500);
    };

    let move;
    try {
      move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q",
      });
    } catch (error) {
      console.warn("Invalid move attempted:", error);
      punishAndReset();
      return false;
    }

    if (!move) {
      punishAndReset();
      return false;
    }

    const moveUci = `${move.from}${move.to}${move.promotion ?? ""}`;
    const solution = currentPuzzle.normalizedSolution ?? [];
    const expectedMove = solution[currentStep];

    if (!expectedMove || moveUci !== expectedMove) {
      punishAndReset();
      set({ fen: game.fen() });
      return false;
    }

    const nextStep = currentStep + 1;
    set({ fen: game.fen(), currentStep: nextStep });

    if (nextStep >= solution.length) {
      useGameStore.getState().onPuzzleSolved();
      return true;
    }

    const botMoveStr = solution[nextStep];

    setTimeout(() => {
      const botMove = game.move(botMoveStr, { sloppy: true });

      if (!botMove) {
        console.warn("Bot move could not be performed:", botMoveStr);
        get().resetPuzzlePosition();
        return;
      }

      set({ fen: game.fen(), currentStep: nextStep + 1 });
    }, 400);

    return true;
  },
}));
