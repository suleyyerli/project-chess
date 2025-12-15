const puzzleRepository = require("../repositories/puzzle.repository");

async function getPuzzles() {
  return puzzleRepository.findAll();
}

async function getRandomPuzzle() {
  return puzzleRepository.findRandom();
}

module.exports = {
  getPuzzles,
  getRandomPuzzle,
};
