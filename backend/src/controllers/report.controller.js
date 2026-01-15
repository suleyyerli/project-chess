const reportService = require("../services/report.service");

async function createReport(req, res) {
  try {
    const report = await reportService.createReport({
      reporterId: req.user.id,
      reportedId: req.body?.reportedId ?? req.body?.reported_id,
      label: req.body?.label,
    });
    return res.status(201).json(report);
  } catch (error) {
    const message = error?.message || "Impossible de signaler";
    let status = 400;
    if (message.includes("introuvable")) status = 404;
    return res.status(status).json({ message });
  }
}

module.exports = { createReport };
