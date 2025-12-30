const challengeService = require("../services/challenge.service");
const matchMultiService = require("../services/match-multi.service");
const {
  emitToUser,
  emitToUsers,
  joinUsersToRoom,
  startMatchTimer,
} = require("../socket");

function mapErrorToStatus(message) {
  if (message.includes("introuvable") || message.includes("non trouvé")) return 404;
  if (message.includes("Accès interdit")) return 403;
  if (message.includes("déjà traité")) return 409;
  if (message.includes("invalide") || message.includes("Impossible")) return 400;
  return 400;
}

async function createChallenge(req, res) {
  try {
    const challenge = await challengeService.createChallenge(req.user.id, req.body);
    emitToUser(challenge?.to?.id, "challenge:received", challenge);
    return res.status(201).json(challenge);
  } catch (error) {
    const message = error?.message || "Impossible de créer le défi";
    const status = mapErrorToStatus(message);
    return res.status(status).json({ message });
  }
}

async function listMyChallenges(req, res) {
  try {
    const challenges = await challengeService.listChallengesForUser(req.user.id);
    return res.json(challenges);
  } catch (error) {
    const message = error?.message || "Impossible de récupérer les défis";
    const status = mapErrorToStatus(message);
    return res.status(status).json({ message });
  }
}

async function acceptChallenge(req, res) {
  try {
    const challenge = await challengeService.acceptChallenge(
      req.params.id,
      req.user.id
    );
    const match = await matchMultiService.createMultiMatch({
      fromUserId: challenge?.from?.id,
      toUserId: challenge?.to?.id,
    });
    const socketsJoined = joinUsersToRoom(
      [challenge?.from?.id, challenge?.to?.id],
      match.room
    );
    console.log(`Match created: ${match.matchId} room=${match.room} sockets=${socketsJoined}`);
    startMatchTimer(match.matchId);
    emitToUsers([challenge?.from?.id, challenge?.to?.id], "challenge:accepted", challenge);
    return res.json(challenge);
  } catch (error) {
    const message = error?.message || "Impossible d'accepter le défi";
    const status = mapErrorToStatus(message);
    return res.status(status).json({ message });
  }
}

async function refuseChallenge(req, res) {
  try {
    const challenge = await challengeService.refuseChallenge(
      req.params.id,
      req.user.id
    );
    emitToUsers([challenge?.from?.id, challenge?.to?.id], "challenge:refused", challenge);
    return res.json(challenge);
  } catch (error) {
    const message = error?.message || "Impossible de refuser le défi";
    const status = mapErrorToStatus(message);
    return res.status(status).json({ message });
  }
}

module.exports = {
  createChallenge,
  listMyChallenges,
  acceptChallenge,
  refuseChallenge,
};
