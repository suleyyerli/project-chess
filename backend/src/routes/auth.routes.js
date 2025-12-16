const express = require("express");
const {
  signup,
  login,
  me,
  updateMe,
  logout,
} = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", authMiddleware, logout);
router.get("/me", authMiddleware, me);
router.put("/me", authMiddleware, updateMe);

module.exports = router;
