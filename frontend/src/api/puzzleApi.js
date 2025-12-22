// src/api/puzzleApi.js

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000";

export async function fetchPuzzleById(id) {
  const res = await fetch(`${API_BASE}/puzzles?id=${id}`);
  if (!res.ok) throw new Error("Erreur lors du chargement du puzzle");
  const data = await res.json();
  return data[0] || null;
}
