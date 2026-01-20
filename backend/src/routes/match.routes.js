const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const {
  listMatches,
  listMatchesForMe,
  getMatch,
  startSoloMatch,
  submitMatch,
  getNextPuzzle,
  finishMatch,
} = require("../controllers/match.controller");

const router = express.Router();

router.use(authMiddleware);

router.get("/", listMatches);
router.get("/me", listMatchesForMe);
router.get("/:id", getMatch);
router.post("/start", startSoloMatch);
router.post("/:id/submit", submitMatch);
router.get("/:id/next", getNextPuzzle);
router.post("/:id/finish", finishMatch);

module.exports = router;
