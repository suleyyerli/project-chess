import { useGameStore } from "../../zustandstore/useGameStore";
import { useChessStore } from "../../zustandstore/useChessStore";
import Turn from "../ui/Turn/Turn";
import Card from "../../components/ui/Card/Card";
import Button from "../../components/ui/Button/Button";
import styles from "./GameBoard.module.css";

const GameBoard = () => {
  const { timeLeft, score, errors, maxErrors, status, endMatch, mode, opponent } =
    useGameStore();
  const handleAbandon = () => {
    if (status === "running") {
      endMatch("abandon");
    }
  };
  const game = useChessStore((state) => state.game);
  const sideToMove = game?.turn?.() === "b" ? "black" : "white";

  return (
    <div>
      <Card className={styles.panel}>
        <Turn side={sideToMove} />
        <p>⏱ Temps restant : {timeLeft}s</p>
        {mode === "multi" ? (
          <div className={styles.multiStats}>
            <div className={styles.playerCard}>
              <p className={styles.playerTitle}>Vous</p>
              <p>🏆 Score : {score}</p>
              <p>
                ❌ Erreurs : {errors}/{maxErrors}
              </p>
            </div>
            <div className={styles.playerCard}>
              <p className={styles.playerTitle}>
                {opponent?.pseudo ?? "Adversaire"}
              </p>
              <p>🏆 Score : {opponent?.score ?? 0}</p>
              <p>
                ❌ Erreurs : {opponent?.errors ?? 0}/{maxErrors}
              </p>
            </div>
          </div>
        ) : (
          <>
            <p>🏆 Score : {score}</p>
            <p>
              ❌ Erreurs : {errors}/{maxErrors}
            </p>
            <Button
              label="Abandonner"
              onClick={handleAbandon}
              disabled={status !== "running"}
              variant="red"
            />
          </>
        )}
      </Card>
    </div>
  );
};

export default GameBoard;
