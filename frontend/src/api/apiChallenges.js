import { apiJson } from "./apiClient";

const CHALLENGES_URL = "/challenges";

export async function createChallenge(toUserId) {
  return apiJson(CHALLENGES_URL, {
    method: "POST",
    body: { toUserId },
    requireAuth: true,
  });
}

export async function listMyChallenges() {
  return apiJson(`${CHALLENGES_URL}/me`, { requireAuth: true });
}

export async function acceptChallenge(id) {
  return apiJson(`${CHALLENGES_URL}/${id}/accept`, {
    method: "POST",
    requireAuth: true,
  });
}

export async function refuseChallenge(id) {
  return apiJson(`${CHALLENGES_URL}/${id}/refuse`, {
    method: "POST",
    requireAuth: true,
  });
}
