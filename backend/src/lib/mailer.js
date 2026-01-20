const nodemailer = require("nodemailer");
const { loadEnv } = require("../config/env");

loadEnv();

let transporterSingleInstance = "";

function getMailerConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT) || 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("SMTP configuration manquante");
  }

  return {
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  };
}
function getTransporter() {
  if (transporterSingleInstance == "") {
    transporterSingleInstance = nodemailer.createTransport(getMailerConfig());
  }
  return transporterSingleInstance;
}

async function sendMail({ to, subject, text, html }) {
  const transporter = getTransporter();
  const from = process.env.MAIL_FROM || process.env.SMTP_USER;

  return transporter.sendMail({
    from,
    to,
    subject,
    text,
    html,
  });
}

module.exports = { sendMail };
