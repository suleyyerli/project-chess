const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const { createReport } = require("../controllers/report.controller");

const router = express.Router();

router.use(authMiddleware);

router.post("/", createReport);

module.exports = router;
