// src/api/apiUsers.js

const API_URL = "http://localhost:3000/users";
//pour la page classement
export async function getUsersClassement() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Erreur de chargement des utilisateurs");

    const data = await res.json();

    // On filtre les bannis et on trie par trophées décroissants
    const users = data
      .filter((user) => user.isbanned === false)
      .sort((a, b) => b.trophy - a.trophy);

    return users;
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs :", error);
    return [];
  }
}

// pour la page profil
export async function getUserById(userId) {
  try {
    const res = await fetch(`${API_URL}?id=${userId}`);
    if (!res.ok) throw new Error("Erreur lors de la récupération du profil");

    const [user] = await res.json();
    return user ?? null;
  } catch (error) {
    console.error("Erreur lors du chargement du profil :", error);
    return null;
  }
}
