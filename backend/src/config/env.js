const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

let loaded = false;

function isProd() {
  const env = process.env.NODE_ENV;
  return env === "production" || env === "prod";
}

function resolveEnvFile() {
  const backendRoot = path.resolve(__dirname, "..", "..");
  const envFile = process.env.ENV_FILE;
  if (envFile) {
    return path.isAbsolute(envFile)
      ? envFile
      : path.resolve(process.cwd(), envFile);
  }

  return path.resolve(backendRoot, isProd() ? ".env.production" : ".env");
}

function loadEnv() {
  if (loaded) return;
  loaded = true;

  const envFile = resolveEnvFile();
  if (!fs.existsSync(envFile)) {
    if (process.env.ENV_FILE) {
      console.warn(`[config] ENV_FILE not found: ${envFile}`);
    }
    return;
  }

  dotenv.config({ path: envFile });
}

function validateEnv() {
  loadEnv();
  if (!isProd()) return;

  const required = [
    "DATABASE_URL",
    "JWT_SECRET",
    "FRONTEND_ORIGIN",
    "SMTP_HOST",
    "SMTP_USER",
    "SMTP_PASS",
  ];
  const missing = required.filter((name) => !process.env[name]);

  if (missing.length > 0) {
    const error = new Error(
      `Missing required environment variables for production: ${missing.join(
        ", ",
      )}`,
    );
    error.missing = missing;
    throw error;
  }

  if (!process.env.JWT_REFRESH_SECRET) {
    console.warn(
      "[config] JWT_REFRESH_SECRET not set in production; falling back to JWT_SECRET.",
    );
  }
}

function getFrontendOrigin() {
  loadEnv();
  const origin = process.env.FRONTEND_ORIGIN;
  if (origin) return origin;
  if (isProd()) {
    throw new Error("FRONTEND_ORIGIN missing in production");
  }
  return "http://localhost:5173";
}

function getResetPasswordUrl() {
  loadEnv();
  return (
    process.env.RESET_PASSWORD_URL || `${getFrontendOrigin()}/reset-password`
  );
}

module.exports = {
  loadEnv,
  validateEnv,
  getFrontendOrigin,
  getResetPasswordUrl,
};
