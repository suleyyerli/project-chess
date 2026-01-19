const prisma = require("../../src/lib/prisma");
const seedPuzzles = require("./puzzles");

async function main() {
  const reset = process.argv.includes("--reset");
  await seedPuzzles(prisma, { reset });
}

main()
  .catch((error) => {
    console.error("[seed] failed to seed puzzles:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
