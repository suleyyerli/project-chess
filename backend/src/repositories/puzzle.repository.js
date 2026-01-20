const prisma = require("../lib/prisma");

async function findAll() {
  return prisma.puzzles.findMany();
}

async function findById(id) {
  return prisma.puzzles.findUnique({
    where: { id },
  });
}

async function findRandom() {
  const total = await prisma.puzzles.count();
  if (total === 0) {
    return null;
  }

  const randomOffset = Math.floor(Math.random() * total);
  const [puzzle] = await prisma.puzzles.findMany({
    skip: randomOffset,
    take: 1,
  });

  return puzzle ?? null;
}

async function findRandomByEloRange({
  minElo,
  maxElo,
  excludeIds = [],
  take = 1,
}) {
  const where = {
    elo: {
      gte: minElo,
      lte: maxElo,
    },
  };

  if (Array.isArray(excludeIds) && excludeIds.length > 0) {
    where.id = { notIn: excludeIds };
  }

  const total = await prisma.puzzles.count({ where });
  if (total === 0) {
    return [];
  }

  const safeTake = Math.max(1, Number.isFinite(take) ? take : 1);
  const maxSkip = Math.max(0, total - safeTake);
  const randomSkip = Math.floor(Math.random() * (maxSkip + 1));

  return prisma.puzzles.findMany({
    where,
    skip: randomSkip,
    take: safeTake,
  });
}

module.exports = {
  findAll,
  findById,
  findRandom,
  findRandomByEloRange,
};
