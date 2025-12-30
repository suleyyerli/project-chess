import { io } from "socket.io-client";
import { getAuthToken } from "./authStorage";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000";
let socket;

export function connectSocket() {
  const token = getAuthToken();
  if (!token) {
    throw new Error("Token manquant (connecte-toi)");
  }

  if (socket?.connected) {
    return socket;
  }

  socket = io(API_BASE, {
    auth: { token },
    transports: ["websocket"],
  });

  return socket;
}

export function getSocket() {
  return socket;
}

export function disconnectSocket() {
  if (!socket) return;
  socket.disconnect();
  socket = null;
}
