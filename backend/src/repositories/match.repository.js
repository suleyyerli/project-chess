const prisma = require("../lib/prisma");

async function createMatch({ mode, state }) {
  return prisma.matches.create({
    data: {
      mode,
      state,
    },
  });
}

async function addPlayer({
  matchId,
  userId,
  isWinner = false,
  puzzlesSolved = 0,
  trophiesDelta = 0,
}) {
  return prisma.match_players.create({
    data: {
      match_id: matchId,
      user_id: userId,
      is_winner: isWinner,
      puzzles_solved: puzzlesSolved,
      trophies_delta: trophiesDelta,
    },
  });
}

async function findByIdWithPlayers(matchId) {
  return prisma.matches.findUnique({
    where: { id: matchId },
    include: {
      match_players: {
        include: {
          users: true,
        },
      },
    },
  });
}

async function listByUser(userId) {
  return prisma.matches.findMany({
    where: {
      match_players: {
        some: {
          user_id: userId,
        },
      },
    },
    include: {
      match_players: {
        include: {
          users: true,
        },
      },
    },
    orderBy: {
      finished_at: "desc",
    },
  });
}

async function updateMatch(matchId, data) {
  return prisma.matches.update({
    where: { id: matchId },
    data,
  });
}

async function updatePlayer(matchId, userId, data) {
  return prisma.match_players.update({
    where: {
      match_id_user_id: {
        match_id: matchId,
        user_id: userId,
      },
    },
    data,
  });
}

module.exports = {
  createMatch,
  addPlayer,
  findByIdWithPlayers,
  listByUser,
  updateMatch,
  updatePlayer,
};
