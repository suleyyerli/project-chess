const prisma = require("../lib/prisma");

async function findAll() {
  return prisma.puzzles.findMany();
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

module.exports = {
  findAll,
  findRandom,
};
