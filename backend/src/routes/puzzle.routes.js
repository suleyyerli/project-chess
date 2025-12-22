const express = require("express");
const {
  listPuzzles,
  getPuzzleById,
  getRandomPuzzle,
} = require("../controllers/puzzle.controller");

const router = express.Router();

router.get("/", listPuzzles);
router.get("/random", getRandomPuzzle);
router.get("/:id", getPuzzleById);

module.exports = router;
