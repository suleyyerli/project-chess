// src/api/apiUsers.js

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000";
const USERS_URL = `${API_BASE}/users`;

//pour la page classement
export async function getUsersClassement() {
  try {
    const res = await fetch(`${USERS_URL}/leaderboard`);
    if (!res.ok) throw new Error("Erreur de chargement des utilisateurs");

    const data = await res.json();

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs :", error);
    return [];
  }
}
//POur la liste des joueurs actif
export async function getActiveUsers() {
  try {
    const res = await fetch(`${USERS_URL}/active`);
    if (!res.ok)
      throw new Error("Erreur de chargement des utilisateurs actifs");

    const data = await res.json();

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Erreur lors de la récupération des joueurs actifs :", error);
    return [];
  }
}
// pour la page profil
export async function getUserById(userId) {
  try {
    const res = await fetch(`${USERS_URL}/${userId}`);
    if (!res.ok) throw new Error("Erreur lors de la récupération du profil");

    const user = await res.json();
    return user ?? null;
  } catch (error) {
    console.error("Erreur lors du chargement du profil :", error);
    return null;
  }
}
