import { useEffect, useState } from "react";
import { useGameStore } from "../../zustandstore/useGameStore";
import GameBoard from "../../components/GameBoard/GameBoard";
import ChessBoard from "../../components/ChessBoard/ChessBoard";
import Button from "../../components/ui/Button/Button";
import FinishedModal from "../../components/ui/FinishedModal/FinishedModal";
import Card from "../../components/ui/Card/Card";
import ActivePlayersList from "../../components/ui/PlayerList/ActivePlayersList";
import { getActiveUsers } from "../../api/apiUsers";
import styles from "./Game.module.css";

const Game = () => {
  const { status, startGame, score, errors, endMatch } = useGameStore();
  const [activePlayers, setActivePlayers] = useState([]);
  const [loadingPlayers, setLoadingPlayers] = useState(true);

  useEffect(() => {
    const fetchPlayers = async () => {
      setLoadingPlayers(true);
      const players = await getActiveUsers();
      setActivePlayers(players);
      setLoadingPlayers(false);
    };

    fetchPlayers();
  }, []);

  useEffect(() => {
    if (status !== "running") return undefined;

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
  }, [status, endMatch]);

  const handleChallenge = (player) => {
    console.log(`Défi simulé envoyé à ${player.pseudo}`);
  };

  return (
    <div className={styles.game}>
      {status === "idle" && (
        <>
          <section className={styles.idle}>
            <h2 className={styles.title}>Bataille de problème</h2>
            <div className={styles.idleContent}>
              <Card className={styles.rulesCard}>
                <p className={styles.rulesIntro}>Les règles du jeu :</p>
                <p className={styles.rulesText}>
                  Résous un maximum de problème en moins de deux minutes.
                  <br /> Chaque position devient plus corsée que la précédente
                  et trois erreurs mettent fin à la partie.
                </p>
                <Button onClick={startGame} label="Mode solo (entraînement)" />
              </Card>

              <Card className={styles.playersCard} variant="dark">
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

      {status === "finished" && <FinishedModal score={score} errors={errors} />}
    </div>
  );
};
export default Game;
