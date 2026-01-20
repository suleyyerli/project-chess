import React, { useEffect, useState, useRef } from "react";
import { Chess } from "chess.js";
import { Chessboard, fenStringToPositionObject } from "react-chessboard";

export default function App() {
  // --- Données du sprint ---
  const puzzles = [
    {
      fen: "6k1/5ppp/8/8/8/7Q/5PPP/6K1 w - - 0 1",
      solution: ["h3c8"], // Qh3-e8#
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [game, setGame] = useState(new Chess(puzzles[0].fen));
  const [fen, setFen] = useState(puzzles[0].fen);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(90);
  const [currentStep, setCurrentStep] = useState(0);
  const timerRef = useRef(null);

  // --- Timer ---
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          alert(`⏰ Temps écoulé ! Score final : ${score}`);
          resetGame();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, []);

  // --- Reset total ---
  function resetGame() {
    setCurrentIndex(0);
    setGame(new Chess(puzzles[0].fen));
    setFen(puzzles[0].fen);
    setScore(0);
    setCurrentStep(0);
    setTimeLeft(90);
  }

  // --- Passer au puzzle suivant ---
  function nextPuzzle() {
    const nextIndex = (currentIndex + 1) % puzzles.length;
    const next = puzzles[nextIndex];
    setCurrentIndex(nextIndex);
    setGame(new Chess(next.fen));
    setFen(next.fen);
    setCurrentStep(0);
  }

  // --- Gestion des coups du joueur ---
  function onDrop({ sourceSquare, targetSquare }) {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });
    if (move === null) return false;

    const playerMove = `${sourceSquare}${targetSquare}`;
    const solution = puzzles[currentIndex].solution;

    console.log(
      "Joueur :",
      playerMove,
      " | Solution attendue :",
      solution[currentStep],
    );

    if (playerMove === solution[currentStep]) {
      const nextStep = currentStep + 1;

      if (nextStep === solution.length) {
        // Puzzle réussi 🎉
        setScore((s) => s + 1);
        console.log("✅ Puzzle réussi !");
        setTimeout(nextPuzzle, 1000);
      } else {
        // Coup correct mais pas encore fini
        setCurrentStep(nextStep);
      }
    } else {
      console.log("❌ Mauvais coup !");
      // Recharger le puzzle
      setTimeout(() => {
        setGame(new Chess(puzzles[currentIndex].fen));
        setFen(puzzles[currentIndex].fen);
        setCurrentStep(0);
      }, 800);
    }

    setFen(game.fen());
    return true;
  }

  const positionObject = fenStringToPositionObject(fen, 8, 8);

  const options = {
    id: "solo-sprint",
    position: positionObject,
    allowDragging: true,
    boardOrientation: "white",
    showAnimations: true,
    showNotation: true,
    animationDurationInMs: 300,
    onPieceDrop: onDrop,
  };

  return (
    <div
      style={{
        backgroundColor: "#222",
        color: "white",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <h2>♟️ Mode Sprint Solo</h2>
      <div style={{ display: "flex", gap: 40, alignItems: "center" }}>
        <div style={{ width: 420 }}>
          <Chessboard options={options} />
        </div>
        <div>
          <p>⏱️ Temps : {timeLeft}s</p>
          <p>🏆 Score : {score}</p>
          <p>
            🔢 Puzzle {currentIndex + 1}/{puzzles.length}
          </p>
          <p>
            🧩 Étape : {currentStep + 1}/{puzzles[currentIndex].solution.length}
          </p>
        </div>
      </div>

      <button onClick={resetGame} style={{ marginTop: 20 }}>
        🔁 Recommencer
      </button>
    </div>
  );
}
