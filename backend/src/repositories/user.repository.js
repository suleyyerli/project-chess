const prisma = require("../lib/prisma");

async function findAll() {
  return prisma.users.findMany();
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

module.exports = {
  findAll,
  findById,
  findByEmail,
  create,
  update,
};
