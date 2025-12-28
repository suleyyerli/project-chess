const { io } = require("socket.io-client");
const socket = io("http://localhost:4000");
socket.on("connect", () => {
  console.log("connected", socket.id);
  socket.emit("ping");
});
socket.on("pong", () => console.log("pong reçu"));
