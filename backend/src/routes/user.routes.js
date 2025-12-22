const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const {
  listLeaderboard,
  listActiveUsers,
  getUserById,
  setOnline,
  setOffline,
} = require("../controllers/user.controller");

const router = express.Router();

router.get("/leaderboard", listLeaderboard);
router.get("/active", listActiveUsers);
router.post("/online", authMiddleware, setOnline);
router.post("/offline", authMiddleware, setOffline);
router.get("/:id", getUserById);

module.exports = router;
