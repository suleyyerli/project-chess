const express = require("express");
const dotenv = require("dotenv");
const prisma = require("./lib/prisma");
const puzzleRoutes = require("./routes/puzzle.routes");
const authRoutes = require("./routes/auth.routes");

dotenv.config();

const app = express();
app.use(express.json());

app.use("/puzzles", puzzleRoutes);
app.use("/auth", authRoutes);

app.get("/health", async (req, res) => {
  try {
    // test DB
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: "ok", db: "connected" });
  } catch (err) {
    res.status(500).json({ status: "error", db: "disconnected" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
