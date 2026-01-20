const jwt = require("jsonwebtoken");
const { Server } = require("socket.io");
const matchMultiService = require("./services/match-multi.service");
const puzzleService = require("./services/puzzle.service");
const userService = require("./services/user.service");
const { loadEnv, getFrontendOrigin } = require("./config/env");

loadEnv();

let io;
const userSockets = new Map();
const matchTimers = new Map();
const submitRate = new Map();
const MATCH_DURATION_MS = Number(process.env.MATCH_DURATION_MS) || 120000;
const MATCH_TIMER_TICK_MS = Number(process.env.MATCH_TIMER_TICK_MS) || 1000;
const MATCH_SUBMIT_MIN_INTERVAL_MS =
  Number(process.env.MATCH_SUBMIT_MIN_INTERVAL_MS) || 300;

const getJwtSecret = () => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET manquant dans la configuration");
  }
  return secret;
};

const registerSocket = (userId, socketId) => {
  const sockets = userSockets.get(userId);
  if (sockets) {
    sockets.add(socketId);
    return;
  }
  userSockets.set(userId, new Set([socketId]));
};

const unregisterSocket = (userId, socketId) => {
  const sockets = userSockets.get(userId);
  if (!sockets) {
    return;
  }
  sockets.delete(socketId);
  if (sockets.size === 0) {
    userSockets.delete(userId);
  }
};

const hasActiveSockets = (userId) => {
  const sockets = userSockets.get(userId);
  return Boolean(sockets && sockets.size > 0);
};

const canSubmitMatch = (userId) => {
  const id = Number(userId);
  if (!Number.isInteger(id)) {
    return false;
  }
  const now = Date.now();
  const last = submitRate.get(id) || 0;
  if (now - last < MATCH_SUBMIT_MIN_INTERVAL_MS) {
    return false;
  }
  submitRate.set(id, now);
  return true;
};

const clearSubmitRate = (userId) => {
  const id = Number(userId);
  if (!Number.isInteger(id)) return;
  submitRate.delete(id);
};

const getUserSocketIds = (userId) => {
  const sockets = userSockets.get(userId);
  if (!sockets) {
    return [];
  }
  return Array.from(sockets);
};

const getUserSockets = (userId) => {
  if (!io) {
    return [];
  }
  return getUserSocketIds(userId)
    .map((socketId) => io.sockets.sockets.get(socketId))
    .filter(Boolean);
};

const emitToUser = (userId, event, payload) => {
  if (!io) {
    return;
  }
  const socketIds = getUserSocketIds(userId);
  socketIds.forEach((socketId) => {
    io.to(socketId).emit(event, payload);
  });
};

const emitToUsers = (userIds, event, payload) => {
  const uniqueIds = new Set(
    userIds.map((id) => Number(id)).filter((id) => Number.isInteger(id)),
  );
  uniqueIds.forEach((id) => emitToUser(id, event, payload));
};

const joinUserSocketsToRoom = (userId, room) => {
  const sockets = getUserSockets(userId);
  sockets.forEach((socket) => {
    socket.join(room);
  });
  return sockets.length;
};

const joinUsersToRoom = (userIds, room) => {
  const uniqueIds = new Set(
    userIds.map((id) => Number(id)).filter((id) => Number.isInteger(id)),
  );
  let count = 0;
  uniqueIds.forEach((id) => {
    count += joinUserSocketsToRoom(id, room);
  });
  return count;
};

const stopMatchTimer = (matchId) => {
  const id = Number(matchId);
  if (!Number.isInteger(id)) {
    return false;
  }
  const timer = matchTimers.get(id);
  if (!timer) {
    return false;
  }
  clearInterval(timer.intervalId);
  matchTimers.delete(id);
  return true;
};

const emitMatchTimer = (matchId, timeLeftMs) => {
  if (!io) {
    return;
  }
  const timeLeft = Math.max(0, Math.ceil(timeLeftMs / 1000));
  const room = matchMultiService.getMatchRoom(matchId);
  io.to(room).emit("match:timer", { matchId, timeLeft });
};

const finishMatchByTimer = async (matchId) => {
  if (!io) {
    return;
  }
  const id = Number(matchId);
  if (!Number.isInteger(id) || !matchTimers.has(id)) {
    return;
  }

  stopMatchTimer(id);

  const outcome = await matchMultiService.finishMatch({
    matchId: id,
    reason: "timeout",
  });
  const room = matchMultiService.getMatchRoom(id);
  io.to(room).emit("match:ended", {
    matchId: outcome.matchId,
    state: outcome.state,
    winnerId: outcome.winnerId,
    isDraw: outcome.isDraw,
    reason: outcome.state?.finishedReason ?? "timeout",
  });
};

const startMatchTimer = (matchId) => {
  const id = Number(matchId);
  if (!Number.isInteger(id) || matchTimers.has(id)) {
    return false;
  }

  const endAt = Date.now() + MATCH_DURATION_MS;
  emitMatchTimer(id, endAt - Date.now());

  const intervalId = setInterval(() => {
    const timeLeft = endAt - Date.now();
    if (timeLeft <= 0) {
      finishMatchByTimer(id);
      return;
    }
    emitMatchTimer(id, timeLeft);
  }, MATCH_TIMER_TICK_MS);

  matchTimers.set(id, { intervalId, endAt });
  return true;
};

const initSocket = (httpServer) => {
  io = new Server(httpServer, {
    cors: {
      origin: getFrontendOrigin(),
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  io.use(async (socket, next) => {
    const token = socket.handshake?.auth?.token;
    if (!token) {
      return next(new Error("Unauthorized"));
    }

    try {
      const payload = jwt.verify(token, getJwtSecret());
      const userId = Number(payload?.sub);
      if (!Number.isInteger(userId)) {
        return next(new Error("Unauthorized"));
      }
      const user = await userService.getUserById(userId);
      const ban = userService.resolveBanInfo(user);
      if (ban.isBanned) {
        return next(new Error("Banni"));
      }
      socket.data.userId = userId;
      return next();
    } catch (error) {
      return next(new Error("Unauthorized"));
    }
  });

  io.on("connection", (socket) => {
    const userId = socket.data.userId;
    if (userId !== undefined) {
      registerSocket(userId, socket.id);
    }

    console.log(`Socket connected: ${socket.id} (user ${userId})`);

    socket.on("ping", () => {
      socket.emit("pong");
    });

    socket.on("match:submit", async (payload, callback) => {
      try {
        if (!Number.isInteger(userId)) {
          if (typeof callback === "function") {
            callback({ ok: false, message: "Unauthorized" });
          }
          return;
        }

        await userService.ensureUserNotBanned(userId);

        if (!canSubmitMatch(userId)) {
          if (typeof callback === "function") {
            callback({ ok: false, message: "Rate limit" });
          }
          return;
        }

        const matchId = payload?.matchId ?? payload?.match_id;
        const puzzleId = payload?.puzzleId ?? payload?.puzzle_id;
        const result = payload?.result;

        const outcome = await matchMultiService.submitMatchAction({
          matchId,
          userId,
          puzzleId,
          result,
        });

        const room = matchMultiService.getMatchRoom(outcome.matchId);

        if (outcome.isCorrect) {
          io.to(room).emit("match:score", {
            matchId: outcome.matchId,
            userId: outcome.userId,
            score: outcome.score,
          });
        } else {
          io.to(room).emit("match:error", {
            matchId: outcome.matchId,
            userId: outcome.userId,
            errors: outcome.errors,
            maxErrors: outcome.state.maxErrors,
          });
        }

        io.to(room).emit("match:state", {
          matchId: outcome.matchId,
          state: outcome.state,
        });

        if (!outcome.finished && outcome.isCorrect && outcome.nextPuzzleId) {
          const puzzle = await puzzleService.getPuzzleById(
            outcome.nextPuzzleId,
          );
          io.to(room).emit("match:puzzle", {
            matchId: outcome.matchId,
            puzzleId: outcome.nextPuzzleId,
            index: outcome.state.currentIndex,
            puzzle,
          });
        }

        if (outcome.finished) {
          stopMatchTimer(outcome.matchId);
          io.to(room).emit("match:ended", {
            matchId: outcome.matchId,
            state: outcome.state,
            winnerId: outcome.winnerId,
            isDraw: outcome.isDraw,
            reason: outcome.reason ?? outcome.state?.finishedReason ?? "ended",
          });
        }

        if (typeof callback === "function") {
          callback({ ok: true });
        }
      } catch (error) {
        if (typeof callback === "function") {
          callback({ ok: false, message: error?.message || "Erreur serveur" });
        }
      }
    });

    socket.on("disconnect", async (reason) => {
      if (userId !== undefined) {
        unregisterSocket(userId, socket.id);
      }
      console.log(
        `Socket disconnected: ${socket.id} (user ${userId}) (${reason})`,
      );

      if (userId === undefined) {
        return;
      }

      if (hasActiveSockets(userId)) {
        return;
      }

      clearSubmitRate(userId);

      try {
        const matches = matchMultiService.listActiveMatchesForUser(userId);
        if (!matches.length) {
          return;
        }

        await Promise.all(
          matches.map(async ({ matchId, state }) => {
            const opponentId = matchMultiService.getOpponentId(
              state?.players,
              userId,
            );
            const room = matchMultiService.getMatchRoom(matchId);
            io.to(room).emit("match:opponent_disconnected", {
              matchId,
              userId,
              opponentId,
            });
            const outcome = await matchMultiService.finishMatch({
              matchId,
              reason: "abandon",
              winnerId: opponentId,
            });
            stopMatchTimer(matchId);
            io.to(room).emit("match:ended", {
              matchId: outcome.matchId,
              state: outcome.state,
              winnerId: outcome.winnerId,
              isDraw: outcome.isDraw,
              reason: outcome.state?.finishedReason ?? "abandon",
            });
          }),
        );
      } catch (error) {
        console.warn(
          "Impossible de clôturer le match après déconnexion",
          error,
        );
      }
    });
  });

  return io;
};

const getIO = () => {
  if (!io) {
    throw new Error(
      "Socket.io not initialized. Call initSocket(httpServer) first.",
    );
  }

  return io;
};

module.exports = {
  initSocket,
  getIO,
  getUserSocketIds,
  getUserSockets,
  emitToUser,
  emitToUsers,
  joinUserSocketsToRoom,
  joinUsersToRoom,
  startMatchTimer,
  stopMatchTimer,
};
