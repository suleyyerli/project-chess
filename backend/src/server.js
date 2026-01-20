const path = require("path");
const http = require("http");
const express = require("express");
const { loadEnv, validateEnv, getFrontendOrigin } = require("./config/env");

loadEnv();
validateEnv();

const prisma = require("./lib/prisma");
const { initSocket } = require("./socket");
const puzzleRoutes = require("./routes/puzzle.routes");
const authRoutes = require("./routes/auth.routes");
const matchRoutes = require("./routes/match.routes");
const challengeRoutes = require("./routes/challenge.routes");
const userRoutes = require("./routes/user.routes");
const reportRoutes = require("./routes/report.routes");
const adminRoutes = require("./routes/admin.routes");

const FRONTEND_ORIGIN = getFrontendOrigin();

const app = express();

// Serve uploaded files (avatars, etc.)
app.use("/api/uploads", express.static(path.resolve(__dirname, "../uploads")));

// Dev CORS: allow the Vite frontend to call the API from the browser
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", FRONTEND_ORIGIN);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,PATCH,DELETE,OPTIONS",
  );
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  return next();
});

// Allow bigger JSON bodies (base64 avatar upload)
app.use(express.json({ limit: "10mb" }));

app.use("/puzzles", puzzleRoutes);
app.use("/auth", authRoutes);
app.use("/matches", matchRoutes);
app.use("/challenges", challengeRoutes);
app.use("/users", userRoutes);
app.use("/reports", reportRoutes);
app.use("/admin", adminRoutes);

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
const server = http.createServer(app);
initSocket(server);

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
