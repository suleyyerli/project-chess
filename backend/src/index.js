const express = require("express");
const dotenv = require("dotenv");
const healthRouter = require("./routes/health.routes");

dotenv.config();

const app = express();

app.use(express.json());

// Routes
app.use("/health", healthRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
