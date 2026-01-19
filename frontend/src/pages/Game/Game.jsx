import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGameStore } from "../../zustandstore/useGameStore";
import GameBoard from "../../components/GameBoard/GameBoard";
import ChessBoard from "../../components/ChessBoard/ChessBoard";
import Button from "../../components/ui/Button/Button";
import FinishedModal from "../../components/ui/FinishedModal/FinishedModal";
import Card from "../../components/ui/Card/Card";
import ActivePlayersList from "../../components/ui/PlayerList/ActivePlayersList";
import {
  acceptChallenge,
  createChallenge,
  refuseChallenge,
} from "../../api/apiChallenges";
import {
  getActiveUsers,
  setUserOnline,
  setUserOffline,
} from "../../api/apiUsers";
import { connectSocket, disconnectSocket } from "../../api/socket";
import { getAuthToken } from "../../api/authStorage";
import { getUserIdFromToken } from "../../utils/jwt";
import styles from "./Game.module.css";

const Game = () => {
  const {
    status,
    mode,
    startGame,
    score,
    errors,
    endMatch,
    opponent,
    result,
    setSelfId,
    setOpponent,
    startMultiMatch,
    updateMultiState,
    applyMultiPuzzle,
    updateMultiTimer,
    finishMultiMatch,
  } = useGameStore();
  const [activePlayers, setActivePlayers] = useState([]);
  const [loadingPlayers, setLoadingPlayers] = useState(true);
  const [incomingChallenge, setIncomingChallenge] = useState(null);
  const [challengeNotice, setChallengeNotice] = useState(null);
  const pendingOpponentRef = useRef(null);
  const navigate = useNavigate();

  const token = getAuthToken();
  const selfId = getUserIdFromToken(token);

  useEffect(() => {
    setSelfId(selfId);
  }, [selfId, setSelfId]);

  useEffect(() => {
    const fetchPlayers = async () => {
      setLoadingPlayers(true);
      const players = await getActiveUsers();
      const filtered = Number.isInteger(selfId)
        ? players.filter((player) => player.id !== selfId)
        : players;
      setActivePlayers(filtered);
      setLoadingPlayers(false);
    };

    fetchPlayers();
  }, [selfId]);

  useEffect(() => {
    if (!token) return undefined;

    const socket = connectSocket();

    const resolveOpponent = (challenge) => {
      if (!challenge || !selfId) return null;
      if (challenge.from?.id === selfId) return challenge.to;
      if (challenge.to?.id === selfId) return challenge.from;
      return challenge.from ?? challenge.to ?? null;
    };

    const handleChallengeReceived = (challenge) => {
      setIncomingChallenge(challenge);
      setChallengeNotice(null);
    };

    const handleChallengeAccepted = (challenge) => {
      const opponentInfo = resolveOpponent(challenge);
      pendingOpponentRef.current = opponentInfo;
      if (opponentInfo) {
        setOpponent(opponentInfo);
      }
      setChallengeNotice("Défi accepté. Match en cours de démarrage...");
      setIncomingChallenge(null);
    };

    const handleChallengeRefused = (challenge) => {
      const opponentInfo = resolveOpponent(challenge);
      const label = opponentInfo?.pseudo ?? "adversaire";
      setChallengeNotice(`Défi refusé par ${label}.`);
      setIncomingChallenge(null);
    };

    const handleMatchState = ({ matchId, state }) => {
      if (!matchId || !state) return;
      const pendingOpponent = pendingOpponentRef.current;
      if (
        useGameStore.getState().matchId !== matchId ||
        useGameStore.getState().mode !== "multi"
      ) {
        startMultiMatch({ matchId, state, opponent: pendingOpponent });
      } else {
        updateMultiState(matchId, state);
      }
      setChallengeNotice(null);
    };

    const handleMatchPuzzle = ({ puzzle }) => {
      if (!puzzle) return;
      applyMultiPuzzle(puzzle);
    };

    const handleMatchTimer = ({ timeLeft }) => {
      updateMultiTimer(timeLeft);
    };

    const handleMatchEnded = ({ winnerId, isDraw, reason, state }) => {
      finishMultiMatch({
        winnerId,
        isDraw,
        reason: reason ?? state?.finishedReason ?? "ended",
      });
    };

    socket.on("challenge:received", handleChallengeReceived);
    socket.on("challenge:accepted", handleChallengeAccepted);
    socket.on("challenge:refused", handleChallengeRefused);
    socket.on("match:state", handleMatchState);
    socket.on("match:puzzle", handleMatchPuzzle);
    socket.on("match:timer", handleMatchTimer);
    socket.on("match:ended", handleMatchEnded);

    return () => {
      socket.off("challenge:received", handleChallengeReceived);
      socket.off("challenge:accepted", handleChallengeAccepted);
      socket.off("challenge:refused", handleChallengeRefused);
      socket.off("match:state", handleMatchState);
      socket.off("match:puzzle", handleMatchPuzzle);
      socket.off("match:timer", handleMatchTimer);
      socket.off("match:ended", handleMatchEnded);
      disconnectSocket();
    };
  }, [
    token,
    selfId,
    startMultiMatch,
    updateMultiState,
    applyMultiPuzzle,
    updateMultiTimer,
    finishMultiMatch,
    setOpponent,
  ]);

  useEffect(() => {
    const handlePageHide = () => {
      setUserOffline({ keepalive: true });
    };

    setUserOnline();
    window.addEventListener("pagehide", handlePageHide);
    window.addEventListener("beforeunload", handlePageHide);

    return () => {
      handlePageHide();
      window.removeEventListener("pagehide", handlePageHide);
      window.removeEventListener("beforeunload", handlePageHide);
    };
  }, []);

  useEffect(() => {
    if (status !== "running" || mode !== "solo") return undefined;

    const handleVisibility = () => {
      if (document.visibilityState === "hidden") {
        endMatch("quit", { keepalive: true });
      }
    };

    const handlePageHide = () => {
      endMatch("quit", { keepalive: true });
    };

    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("pagehide", handlePageHide);
    window.addEventListener("beforeunload", handlePageHide);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("pagehide", handlePageHide);
      window.removeEventListener("beforeunload", handlePageHide);
    };
  }, [status, mode, endMatch]);

  const handleChallenge = async (player) => {
    if (!player?.id) return;
    try {
      const challenge = await createChallenge(player.id);
      pendingOpponentRef.current = challenge?.to ?? player;
      setOpponent(challenge?.to ?? player);
      setChallengeNotice(`Défi envoyé à ${player.pseudo}.`);
    } catch (error) {
      setChallengeNotice(error?.message || "Impossible d'envoyer le défi");
    }
  };

  const handleAcceptChallenge = async () => {
    if (!incomingChallenge) return;
    const opponentInfo =
      incomingChallenge.from?.id === selfId
        ? incomingChallenge.to
        : incomingChallenge.from;
    pendingOpponentRef.current = opponentInfo;
    setOpponent(opponentInfo);
    try {
      const challenge = await acceptChallenge(incomingChallenge.id);
      const resolvedOpponent =
        challenge.from?.id === selfId ? challenge.to : challenge.from;
      pendingOpponentRef.current = resolvedOpponent ?? opponentInfo;
      if (resolvedOpponent) {
        setOpponent(resolvedOpponent);
      }
      setIncomingChallenge(null);
      setChallengeNotice("Défi accepté. Match en cours de démarrage...");
    } catch (error) {
      setChallengeNotice(error?.message || "Impossible d'accepter le défi");
    }
  };

  const handleRefuseChallenge = async () => {
    if (!incomingChallenge) return;
    try {
      await refuseChallenge(incomingChallenge.id);
      setIncomingChallenge(null);
      setChallengeNotice("Défi refusé.");
    } catch (error) {
      setChallengeNotice(error?.message || "Impossible de refuser le défi");
    }
  };

  const resultLabel =
    mode === "multi"
      ? result === "win"
        ? "Victoire !"
        : result === "lose"
        ? "Défaite"
        : result === "draw"
        ? "Match nul"
        : "Match terminé"
      : "Bien joué !";

  return (
    <div className={styles.game}>
      {status === "idle" && (
        <>
          <section className={styles.idle}>
            <h2 className={styles.title}>Bataille de problème</h2>
            <div className={styles.idleContent}>
              <div className={styles.infoColumn}>
                <Card className={styles.rulesCard}>
                  <p className={styles.rulesIntro}>Les règles du jeu :</p>
                  <p className={styles.rulesText}>
                    Résous un maximum de problème en moins de deux minutes.
                    <br /> Chaque position devient plus corsée que la précédente
                    et trois erreurs mettent fin à la partie.
                  </p>
                  <Button onClick={startGame} label="Mode solo (entraînement)" />
                </Card>

                <Card className={styles.trophyCard}>
                  <p className={styles.rulesIntro}>
                    Système de trophées (multijoueur)
                  </p>
                  <p className={styles.rulesText}>
                    Les trophées changent uniquement en multijoueur à la fin du
                    match.
                  </p>
                  <ul className={styles.trophyList}>
                    <li>Trophée &lt; 500 : victoire +8, défaite 0</li>
                    <li>500 &lt;= trophée &lt; 1000 : victoire +8, défaite -8</li>
                    <li>Trophée &gt;= 1000 : victoire +5, défaite -8</li>
                    <li>Match nul : 0 pour les deux joueurs</li>
                  </ul>
                </Card>
              </div>

              <Card className={styles.playersCard} variant="dark">
                {incomingChallenge && (
                  <div className={styles.challengeBlock}>
                    <p className={styles.challengeTitle}>Défi reçu</p>
                    <p className={styles.challengeText}>
                      {incomingChallenge.from?.pseudo ?? "Un joueur"} veut jouer
                      contre toi.
                    </p>
                    <div className={styles.challengeActions}>
                      <Button
                        label="Accepter"
                        onClick={handleAcceptChallenge}
                      />
                      <Button
                        label="Refuser"
                        variant="red"
                        onClick={handleRefuseChallenge}
                      />
                    </div>
                  </div>
                )}
                {challengeNotice && (
                  <p className={styles.challengeNotice}>{challengeNotice}</p>
                )}
                {loadingPlayers ? (
                  <p className={styles.playersLoading}>Chargement...</p>
                ) : (
                  <ActivePlayersList
                    players={activePlayers}
                    onChallenge={handleChallenge}
                  />
                )}
              </Card>
            </div>
          </section>
        </>
      )}

      {status === "running" && (
        <div>
          <section className={styles.running}>
            <section>
              <ChessBoard />
            </section>
            <section>
              <GameBoard />
            </section>
          </section>
        </div>
      )}

      {status === "finished" && (
        <FinishedModal
          score={score}
          errors={errors}
          opponent={mode === "multi" ? opponent : null}
          title={mode === "multi" ? "Match terminé" : "Partie terminée"}
          text={resultLabel}
          onClose={mode === "multi" ? () => navigate("/home") : undefined}
        />
      )}
    </div>
  );
};
export default Game;
