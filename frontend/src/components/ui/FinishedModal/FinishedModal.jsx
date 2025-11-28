import Button from "../Button/Button";
import styles from "./FinishedModal.module.css";

const FinishedModal = ({
  score,
  errors,
  onReplay,
  onClose,
  title = "Partie terminé",
  text = "Bien joué !",
}) => {
  const handleReplay = () => {
    if (onReplay) {
      onReplay();
      return;
    }
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  return (
    <div className={styles.backdrop} role="presentation">
      <div className={styles.modal} role="dialog" aria-modal="true">
        <header className={styles.header}>
          <h2>{title}</h2>
          <h2>{text}</h2>
        </header>
        <div className={styles.content}>
          <p>
            <span className={styles.label}>Score :</span> {score}
          </p>
          <p>
            <span className={styles.label}>Erreurs :</span> {errors}
          </p>
        </div>
        <div className={styles.actions}>
          {onClose && (
            <Button
              label="Fermer"
              onClick={onClose}
              variant="red"
              className={styles.actionButton}
            />
          )}
          <Button
            label="Rejouer"
            onClick={handleReplay}
            className={styles.actionButton}
          />
        </div>
      </div>
    </div>
  );
};

export default FinishedModal;
