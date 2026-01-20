const prisma = require("../lib/prisma");

const challengeInclude = {
  users_challenges_from_user_idTousers: true,
  users_challenges_to_user_idTousers: true,
};

async function createChallenge({ fromUserId, toUserId }) {
  return prisma.challenges.create({
    data: {
      from_user_id: fromUserId,
      to_user_id: toUserId,
      status: "PENDING",
    },
    include: challengeInclude,
  });
}

async function findById(id) {
  return prisma.challenges.findUnique({
    where: { id },
    include: challengeInclude,
  });
}

async function listForUser(userId) {
  return prisma.challenges.findMany({
    where: {
      OR: [{ from_user_id: userId }, { to_user_id: userId }],
    },
    include: challengeInclude,
    orderBy: {
      created_at: "desc",
    },
  });
}

async function updateStatus(id, status) {
  return prisma.challenges.update({
    where: { id },
    data: { status },
    include: challengeInclude,
  });
}

module.exports = {
  createChallenge,
  findById,
  listForUser,
  updateStatus,
};
