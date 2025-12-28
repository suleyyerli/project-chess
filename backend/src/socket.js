const jwt = require("jsonwebtoken");
const { Server } = require("socket.io");

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
      if (!payload?.sub) {
        return next(new Error("Unauthorized"));
      }
      socket.data.userId = payload.sub;
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

module.exports = { initSocket, getIO, getUserSocketIds, getUserSockets };
