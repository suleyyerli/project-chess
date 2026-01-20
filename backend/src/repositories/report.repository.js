const prisma = require("../lib/prisma");

async function createReport({ reporterId, reportedId, reason }) {
  return prisma.reports.create({
    data: {
      reporter_id: reporterId,
      reported_id: reportedId,
      reason,
    },
  });
}

async function countReportsByReportedIds(reportedIds) {
  if (!reportedIds.length) return new Map();

  const rows = await prisma.reports.groupBy({
    by: ["reported_id"],
    where: {
      reported_id: { in: reportedIds },
    },
    _count: {
      reported_id: true,
    },
  });

  const result = new Map();
  rows.forEach((row) => {
    result.set(row.reported_id, row._count.reported_id);
  });
  return result;
}

module.exports = {
  createReport,
  countReportsByReportedIds,
};
