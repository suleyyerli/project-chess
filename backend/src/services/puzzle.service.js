const puzzleRepository = require("../repositories/puzzle.repository");

async function getPuzzles() {
  return puzzleRepository.findAll();
}

async function getPuzzleById(id) {
  const puzzleId = Number(id);
  if (!Number.isInteger(puzzleId)) {
    throw new Error("Identifiant de puzzle invalide");
  }

  const puzzle = await puzzleRepository.findById(puzzleId);
  if (!puzzle) {
    throw new Error("Puzzle introuvable");
  }

  return puzzle;
}

async function getRandomPuzzle() {
  return puzzleRepository.findRandom();
}

function normalizeIdList(value) {
  if (!Array.isArray(value)) return [];
  return value
    .map((id) => Number(id))
    .filter((id) => Number.isInteger(id));
}

async function generateProgressivePack({
  count = 20,
  startElo = 399,
  stepElo = 20,
  excludeIds = [],
} = {}) {
  const total = Number.isInteger(count) && count > 0 ? count : 20;
  const baseElo = Number.isFinite(startElo) ? startElo : 399;
  const step = Number.isFinite(stepElo) && stepElo > 0 ? stepElo : 20;
  const usedIds = new Set(normalizeIdList(excludeIds));

  const puzzles = [];

  for (let i = 0; i < total; i += 1) {
    const targetMin = Math.max(0, Math.floor(baseElo + i * step));
    const targetMax = targetMin + step;
    const excludeList = Array.from(usedIds);

    const [puzzle] = await puzzleRepository.findRandomByEloRange({
      minElo: targetMin,
      maxElo: targetMax,
      excludeIds: excludeList,
      take: 1,
    });

    let selected = puzzle;

    if (!selected) {
      const widen = step * 3;
      const fallbackMin = Math.max(0, targetMin - widen);
      const fallbackMax = targetMax + widen;

      const [fallback] = await puzzleRepository.findRandomByEloRange({
        minElo: fallbackMin,
        maxElo: fallbackMax,
        excludeIds: excludeList,
        take: 1,
      });

      selected = fallback;
    }

    if (!selected) {
      const [anyPuzzle] = await puzzleRepository.findRandomByEloRange({
        minElo: 0,
        maxElo: 10000,
        excludeIds: excludeList,
        take: 1,
      });

      selected = anyPuzzle;
    }

    if (!selected) {
      break;
    }

    puzzles.push(selected);
    usedIds.add(selected.id);
  }

  return puzzles;
}

module.exports = {
  getPuzzles,
  getPuzzleById,
  getRandomPuzzle,
  generateProgressivePack,
};
