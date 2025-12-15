const puzzleService = require("../services/puzzle.service");

async function listPuzzles(req, res) {
  try {
    const puzzles = await puzzleService.getPuzzles();
    res.json(puzzles);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch puzzles" });
  }
}

async function getRandomPuzzle(req, res) {
  try {
    const puzzle = await puzzleService.getRandomPuzzle();
    if (!puzzle) {
      return res.status(404).json({ message: "No puzzle found" });
    }
    res.json(puzzle);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch random puzzle" });
  }
}

module.exports = {
  listPuzzles,
  getRandomPuzzle,
};
