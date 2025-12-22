import { create } from "zustand";
import { Chess } from "chess.js";
import { fetchPuzzleById } from "../api/puzzleApi";
import { useGameStore } from "./useGameStore";

function flipFenTurn(fen) {
  if (typeof fen !== "string") return fen;
  const parts = fen.trim().split(/\s+/);
  if (parts.length < 2) return fen;
  if (parts[1] === "w") {
    parts[1] = "b";
  } else if (parts[1] === "b") {
    parts[1] = "w";
  }
  return parts.join(" ");
}

function getLastMoveColor(fen, moves) {
  if (!fen || !Array.isArray(moves) || moves.length === 0) return null;
  try {
    const probe = new Chess(fen);
    let last = null;
    for (const move of moves) {
      const result = probe.move(move, { sloppy: true });
      if (!result) return null;
      last = result.color;
    }
    return last;
  } catch {
    return null;
  }
}

function resolveMatingColor(fen, moves) {
  const direct = getLastMoveColor(fen, moves);
  if (direct) {
    return { color: direct, fen };
  }

  const flipped = flipFenTurn(fen);
  if (flipped !== fen) {
    const flippedColor = getLastMoveColor(flipped, moves);
    if (flippedColor) {
      return { color: flippedColor, fen: flipped };
    }
  }

  return { color: null, fen };
}

export const useChessStore = create((set, get) => ({
  currentPuzzle: null,
  game: null,
  fen: "",
  currentStep: 0,
  startStep: 0,
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
    const normalizedSolution =
      puzzle.solution?.map((move) => move.toLowerCase().replace(/\s+/g, "")) ??
      [];
    const { color: matingColor, fen: resolvedFen } = resolveMatingColor(
      puzzle.fen,
      normalizedSolution
    );
    let fen = resolvedFen;
    let game = new Chess(fen);
    let startStep = 0;

    if (matingColor && normalizedSolution.length > 0 && game.turn() !== matingColor) {
      const preMove = game.move(normalizedSolution[0], { sloppy: true });
      if (preMove) {
        startStep = 1;
        fen = game.fen();
      }
    }

    const playerSide = matingColor ?? game.turn();

    set({
      currentPuzzle: { ...puzzle, fen, normalizedSolution },
      game,
      fen,
      currentStep: startStep,
      startStep,
      playerColor: playerSide === "w" ? "white" : "black",
      boardOrientation: playerSide === "w" ? "white" : "black",
    });
  },

  resetPuzzlePosition() {
    const { currentPuzzle, startStep } = get();
    if (!currentPuzzle) {
      return;
    }

    const reset = new Chess(currentPuzzle.fen);
    set({
      game: reset,
      fen: reset.fen(),
      currentStep: startStep,
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
