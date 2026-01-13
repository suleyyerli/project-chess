const prisma = require("../lib/prisma");

async function findAll() {
  return prisma.users.findMany();
}

async function findLeaderboard() {
  return prisma.users.findMany({
    where: { is_banned: false },
    orderBy: { trophy: "desc" },
  });
}

async function findOnline() {
  return prisma.users.findMany({
    where: {
      is_banned: false,
      is_active: true,
      last_seen: {
        not: null,
      },
    },
    orderBy: { trophy: "desc" },
  });
}

async function findById(id) {
  return prisma.users.findUnique({
    where: { id },
  });
}

async function findByEmail(email) {
  return prisma.users.findUnique({
    where: { email },
  });
}

async function findByPseudo(pseudo) {
  return prisma.users.findUnique({
    where: { pseudo },
  });
}

async function findByResetToken(token) {
  return prisma.users.findFirst({
    where: { reset_password_token: token },
  });
}

async function create(data) {
  return prisma.users.create({
    data,
  });
}

async function update(id, data) {
  return prisma.users.update({
    where: { id },
    data,
  });
}

async function updateLastSeen(id, lastSeen) {
  return prisma.users.update({
    where: { id },
    data: { last_seen: lastSeen ?? null },
  });
}

module.exports = {
  findAll,
  findLeaderboard,
  findOnline,
  findById,
  findByEmail,
  findByPseudo,
  findByResetToken,
  create,
  update,
  updateLastSeen,
};
