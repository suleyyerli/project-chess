const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const {
  createChallenge,
  listMyChallenges,
  acceptChallenge,
  refuseChallenge,
} = require("../controllers/challenge.controller");

const router = express.Router();

router.use(authMiddleware);

router.post("/", createChallenge);
router.get("/me", listMyChallenges);
router.post("/:id/accept", acceptChallenge);
router.post("/:id/refuse", refuseChallenge);

module.exports = router;
