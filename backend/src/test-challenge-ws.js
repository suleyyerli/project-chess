const { io } = require("socket.io-client");
const http = require("http");

const tokenA = process.env.TOKEN_A;
const tokenB = process.env.TOKEN_B;
const userIdB = Number(process.env.USER_ID_B);
const baseUrl = process.env.API_BASE_URL || "http://localhost:4000";

if (!tokenA || !tokenB || !Number.isInteger(userIdB)) {
  console.error("Usage: TOKEN_A=... TOKEN_B=... USER_ID_B=2 node test-challenge-ws.js");
  process.exit(1);
}

const eventsToLog = ["challenge:received", "challenge:accepted", "challenge:refused"];

function connectSocket(label, token) {
  const socket = io(baseUrl, {
    auth: { token },
    transports: ["websocket"],
  });

  socket.on("connect", () => {
    console.log(`${label} connected ${socket.id}`);
  });

  socket.on("connect_error", (err) => {
    console.log(`${label} connect_error`, err?.message || err);
  });

  eventsToLog.forEach((event) => {
    socket.on(event, (payload) => {
      console.log(`${label} ${event}`, JSON.stringify(payload));
    });
  });

  return socket;
}

function requestJson(method, path, token, payload) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, baseUrl);
    const body = payload ? JSON.stringify(payload) : "";
    const req = http.request(
      url,
      {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(body),
        },
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          try {
            const parsed = data ? JSON.parse(data) : null;
            resolve({ status: res.statusCode, body: parsed });
          } catch (err) {
            reject(err);
          }
        });
      }
    );

    req.on("error", reject);
    if (body) req.write(body);
    req.end();
  });
}

async function run() {
  connectSocket("A", tokenA);
  connectSocket("B", tokenB);

  await new Promise((resolve) => setTimeout(resolve, 500));

  const createResponse = await requestJson("POST", "/challenges", tokenA, {
    toUserId: userIdB,
  });

  if (createResponse.status !== 201) {
    console.error("Failed to create challenge", createResponse);
    process.exit(1);
  }

  const challengeId = createResponse.body?.id;
  console.log("Challenge created", createResponse.body);

  await new Promise((resolve) => setTimeout(resolve, 500));

  const acceptResponse = await requestJson(
    "POST",
    `/challenges/${challengeId}/accept`,
    tokenB
  );

  console.log("Challenge accepted", acceptResponse.body);

  await new Promise((resolve) => setTimeout(resolve, 1000));
  process.exit(0);
}

run().catch((err) => {
  console.error("Test failed", err);
  process.exit(1);
});
