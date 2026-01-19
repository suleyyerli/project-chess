const fs = require("fs");
const path = require("path");

function parsePuzzleRow(line) {
  const trimmed = line.trim();
  if (!trimmed) {
    return null;
  }

  const parts = trimmed.split(",");
  if (parts.length < 4) {
    return null;
  }

  const fen = parts[0]?.trim();
  const moves = parts[1]?.trim() ?? "";
  const rating = Number.parseInt(parts[2], 10);
  const themesRaw = parts.slice(3).join(",").trim();

  if (!fen || !Number.isFinite(rating)) {
    return null;
  }

  const solution = moves ? moves.split(/\s+/).filter(Boolean) : [];
  const themes = themesRaw ? themesRaw.split(/\s+/).filter(Boolean) : [];

  return {
    fen,
    solution,
    elo: rating,
    themes,
  };
}

async function seedPuzzles(prisma, options = {}) {
  if (!prisma) {
    throw new Error("Prisma client is required to seed puzzles.");
  }

  const csvPath = path.resolve(__dirname, "puzzles_mate_123_small.csv");
  const csv = fs.readFileSync(csvPath, "utf8");
  const lines = csv.split(/\r?\n/);

  lines.shift();

  const data = [];
  let skipped = 0;

  for (const line of lines) {
    const record = parsePuzzleRow(line);
    if (!record) {
      if (line.trim()) {
        skipped += 1;
      }
      continue;
    }
    data.push(record);
  }

  if (options.reset) {
    await prisma.puzzles.deleteMany();
  }

  const chunkSize = Number.isInteger(options.chunkSize) && options.chunkSize > 0
    ? options.chunkSize
    : 500;

  let inserted = 0;
  for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.slice(i, i + chunkSize);
    const result = await prisma.puzzles.createMany({ data: chunk });
    inserted += result.count ?? 0;
  }

  console.log(
    `[seed] puzzles: inserted ${inserted}/${data.length}` +
      (skipped ? ` (skipped ${skipped})` : "")
  );
}

module.exports = seedPuzzles;
