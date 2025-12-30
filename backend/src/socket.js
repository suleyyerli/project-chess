const jwt = require("jsonwebtoken");
const { Server } = require("socket.io");
const matchMultiService = require("./services/match-multi.service");
const puzzleService = require("./services/puzzle.service");

let io;
const userSockets = new Map();

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
    userIds
      .map((id) => Number(id))
      .filter((id) => Number.isInteger(id))
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
    userIds
      .map((id) => Number(id))
      .filter((id) => Number.isInteger(id))
  );
  let count = 0;
  uniqueIds.forEach((id) => {
    count += joinUserSocketsToRoom(id, room);
  });
  return count;
};

const initSocket = (httpServer) => {
  io = new Server(httpServer, {
    cors: {
      origin: process.env.FRONTEND_ORIGIN || "http://localhost:5173",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  io.use((socket, next) => {
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

        if (outcome.isCorrect && outcome.nextPuzzleId) {
          const puzzle = await puzzleService.getPuzzleById(outcome.nextPuzzleId);
          io.to(room).emit("match:puzzle", {
            matchId: outcome.matchId,
            puzzleId: outcome.nextPuzzleId,
            index: outcome.state.currentIndex,
            puzzle,
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

    socket.on("disconnect", (reason) => {
      if (userId !== undefined) {
        unregisterSocket(userId, socket.id);
      }
      console.log(`Socket disconnected: ${socket.id} (user ${userId}) (${reason})`);
    });
  });

  return io;
};

const getIO = () => {
  if (!io) {
    throw new Error("Socket.io not initialized. Call initSocket(httpServer) first.");
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
};
