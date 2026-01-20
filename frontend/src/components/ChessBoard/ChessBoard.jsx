import { Chessboard, fenStringToPositionObject } from "react-chessboard";
import { useChessStore } from "../../zustandstore/useChessStore";

const ChessBoard = () => {
  const { fen, onDrop, boardOrientation, game } = useChessStore();
  const handlePieceDrop = (sourceOrEvent, maybeTarget) => {
    if (
      typeof sourceOrEvent === "object" &&
      sourceOrEvent !== null &&
      "sourceSquare" in sourceOrEvent &&
      "targetSquare" in sourceOrEvent
    ) {
      const { sourceSquare, targetSquare } = sourceOrEvent;
      return onDrop({ sourceSquare, targetSquare });
    }

    return onDrop({
      sourceSquare: sourceOrEvent,
      targetSquare: maybeTarget,
    });
  };
  const position = fen ? fenStringToPositionObject(fen, 8, 8) : undefined;

  return (
    <div style={{ width: 600 }}>
      <Chessboard
        options={{
          onPieceDrop: handlePieceDrop,
          boardOrientation,
          allowDragging: true,
          showNotation: true,
          ...(position && { position }),
        }}
      />
    </div>
  );
};
export default ChessBoard;
