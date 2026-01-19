import { apiJson } from "./apiClient";

const REPORTS_URL = "/reports";

export async function createReport({ reportedId, label }) {
  return apiJson(REPORTS_URL, {
    method: "POST",
    body: { reportedId, label },
    requireAuth: true,
  });
}
