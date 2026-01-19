// src/api/puzzleApi.js

import { apiJson } from "./apiClient";

const PUZZLES_URL = "/puzzles";

export async function fetchPuzzleById(id) {
  const query = encodeURIComponent(id);
  const data = await apiJson(`${PUZZLES_URL}?id=${query}`);
  return data[0] || null;
}
