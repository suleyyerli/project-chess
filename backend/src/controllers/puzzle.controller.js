const puzzleService = require("../services/puzzle.service");

async function listPuzzles(req, res) {
  try {
    const { id } = req.query || {};
    if (id) {
      const puzzle = await puzzleService.getPuzzleById(id);
      return res.json([puzzle]);
    }
    const puzzles = await puzzleService.getPuzzles();
    res.json(puzzles);
  } catch (error) {
    const message = error?.message || "Failed to fetch puzzles";
    const status = message.includes("introuvable") ? 404 : 500;
    res.status(status).json({ message });
  }
}

async function getPuzzleById(req, res) {
  try {
    const puzzle = await puzzleService.getPuzzleById(req.params.id);
    return res.json(puzzle);
  } catch (error) {
    const message = error?.message || "Failed to fetch puzzle";
    const status = message.includes("introuvable") ? 404 : 500;
    return res.status(status).json({ message });
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
  getPuzzleById,
  getRandomPuzzle,
};
