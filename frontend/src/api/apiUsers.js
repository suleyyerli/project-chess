const API_URL = "http://localhost:3000/users";

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
