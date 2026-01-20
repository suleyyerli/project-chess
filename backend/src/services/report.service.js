const reportRepository = require("../repositories/report.repository");
const userService = require("./user.service");

const LABELS = ["Triche", "Anti-jeu"];

function normalizeLabel(value) {
  if (!value) return null;
  const trimmed = String(value).trim();
  const found = LABELS.find(
    (label) => label.toLowerCase() === trimmed.toLowerCase(),
  );
  return found || null;
}

async function createReport({ reporterId, reportedId, label }) {
  const reporter = Number(reporterId);
  const reported = Number(reportedId);
  if (!Number.isInteger(reporter) || !Number.isInteger(reported)) {
    throw new Error("Identifiant invalide");
  }
  if (reporter === reported) {
    throw new Error("Impossible de se signaler soi-même");
  }

  const reason = normalizeLabel(label);
  if (!reason) {
    throw new Error("Label invalide");
  }

  await userService.getUserById(reported);

  const report = await reportRepository.createReport({
    reporterId: reporter,
    reportedId: reported,
    reason,
  });

  return {
    id: report.id,
    reporterId: report.reporter_id,
    reportedId: report.reported_id,
    reason: report.reason,
    status: report.status,
    createdAt: report.created_at?.toISOString?.() ?? null,
  };
}

module.exports = {
  createReport,
  LABELS,
};
