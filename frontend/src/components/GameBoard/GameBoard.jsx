import { useGameStore } from "../../zustandstore/useGameStore";
import { useChessStore } from "../../zustandstore/useChessStore";
import Turn from "../ui/Turn/Turn";
import Card from "../../components/ui/Card/Card";
import Button from "../../components/ui/Button/Button";
import styles from "./GameBoard.module.css";

const GameBoard = () => {
  const { timeLeft, score, errors, status, endMatch } = useGameStore();
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
        <p>🏆 Score : {score}</p>
        <p>❌ Erreurs : {errors}/3</p>
        <Button
          label="Abandonner"
          onClick={handleAbandon}
          disabled={status !== "running"}
          variant="red"
        />
      </Card>
    </div>
  );
};

export default GameBoard;
