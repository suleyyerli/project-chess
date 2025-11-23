const API_URL = "http://localhost:3000/matches";

export async function getMatchesByUser(userId) {
  if (!userId) return [];

  const queryUrl = `${API_URL}?_sort=finishedAt&_order=desc`;

  try {
    const response = await fetch(queryUrl);
    if (!response.ok) {
      throw new Error("Erreur lors du chargement des matchs");
    }

    const matches = await response.json();
    return matches.filter(
      (match) =>
        Array.isArray(match.players) &&
        match.players.some((player) => player.userId === userId)
    );
  } catch (error) {
    console.error("Erreur lors de la récupération des matchs :", error);
    throw error;
  }
}
