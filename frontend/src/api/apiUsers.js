// src/api/apiUsers.js

import { apiFetch, apiJson } from "./apiClient";

const USERS_URL = "/users";

//pour la page classement
export async function getUsersClassement() {
  try {
    const data = await apiJson(`${USERS_URL}/leaderboard`);

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs :", error);
    return [];
  }
}
//POur la liste des joueurs actif
export async function getActiveUsers() {
  try {
    const data = await apiJson(`${USERS_URL}/active`);

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Erreur lors de la récupération des joueurs actifs :", error);
    return [];
  }
}
// pour la page profil
export async function getUserById(userId) {
  try {
    const user = await apiJson(`${USERS_URL}/${userId}`);
    return user ?? null;
  } catch (error) {
    console.error("Erreur lors du chargement du profil :", error);
    return null;
  }
}

async function postPresence(path, { keepalive = false } = {}) {
  try {
    await apiFetch(`${USERS_URL}/${path}`, {
      method: "POST",
      requireAuth: true,
      keepalive,
    });
  } catch (error) {
    console.error("Erreur lors de la mise a jour de la presence :", error);
  }
}

export async function setUserOnline() {
  return postPresence("online");
}

export async function setUserOffline({ keepalive = false } = {}) {
  return postPresence("offline", { keepalive });
}
