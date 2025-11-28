import styles from "./Turn.module.css";

const normalizeSide = (side) => {
  if (!side) {
    return "white";
  }
  const value = side.toString().toLowerCase();
  if (value === "white" || value === "w" || value === "blanc") {
    return "white";
  }

  return "black";
};

const Turn = ({ side = "white", label }) => {
  const normalizedSide = normalizeSide(side);
  const displayLabel =
    label ??
    (normalizedSide === "white" ? "Trait aux Blancs" : "Trait aux Noirs");

  return (
    <div className={styles.turn}>
      <span className={styles.label}>{displayLabel}</span>
    </div>
  );
};

export default Turn;
