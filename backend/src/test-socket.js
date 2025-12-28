const { io } = require("socket.io-client");

const token = process.env.TOKEN;
if (!token) {
  console.error("Missing TOKEN env var");
  process.exit(1);
}
const socket = io("http://localhost:4000", {
  auth: { token },
  transports: ["websocket"],
});

socket.on("connect", () => {
  console.log("connected", socket.id);
  socket.emit("ping");
});

socket.on("pong", () => console.log("pong reçu"));
socket.on("connect_error", (err) => console.log("connect_error", err.message));
