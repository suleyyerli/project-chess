const express = require("express");
const {
  listPuzzles,
  getRandomPuzzle,
} = require("../controllers/puzzle.controller");

const router = express.Router();

router.get("/", listPuzzles);
router.get("/random", getRandomPuzzle);

module.exports = router;
