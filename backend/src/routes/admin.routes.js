const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const adminMiddleware = require("../middlewares/admin.middleware");
const {
  listUsers,
  banUser,
  unbanUser,
  deleteUser,
} = require("../controllers/admin.controller");

const router = express.Router();

router.use(authMiddleware);
router.use(adminMiddleware);

router.get("/users", listUsers);
router.post("/users/:id/ban", banUser);
router.post("/users/:id/unban", unbanUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
