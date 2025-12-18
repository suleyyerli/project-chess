const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const prisma = require("./lib/prisma");
const puzzleRoutes = require("./routes/puzzle.routes");
const authRoutes = require("./routes/auth.routes");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();

// Dev CORS: allow the Vite frontend to call the API from the browser
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  return next();
});

// Allow bigger JSON bodies (base64 avatar upload)
app.use(express.json({ limit: "5mb" }));

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
