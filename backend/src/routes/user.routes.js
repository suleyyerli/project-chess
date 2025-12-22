const express = require("express");
const {
  listLeaderboard,
  listActiveUsers,
  getUserById,
} = require("../controllers/user.controller");

const router = express.Router();

router.get("/leaderboard", listLeaderboard);
router.get("/active", listActiveUsers);
router.get("/:id", getUserById);

module.exports = router;
