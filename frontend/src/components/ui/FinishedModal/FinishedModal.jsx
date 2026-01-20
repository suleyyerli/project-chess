import { useState } from "react";
import Button from "../Button/Button";
import { createReport } from "../../../api/apiReports";
import styles from "./FinishedModal.module.css";

const REPORT_LABELS = ["Triche", "Anti-jeu"];

const FinishedModal = ({
  score,
  errors,
  opponent,
  onReplay,
  onClose,
  title = "Partie terminé",
  text = "Bien joué !",
}) => {
  const [reportLabel, setReportLabel] = useState(REPORT_LABELS[0]);
  const [reporting, setReporting] = useState(false);
  const [reportMessage, setReportMessage] = useState("");
  const [reportSent, setReportSent] = useState(false);

  const handleReplay = () => {
    if (onReplay) {
      onReplay();
      return;
    }
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  const handleReport = async () => {
    if (!opponent?.id) return;
    setReporting(true);
    setReportMessage("");
    try {
      await createReport({ reportedId: opponent.id, label: reportLabel });
      setReportSent(true);
      setReportMessage("Signalement envoyé. Merci.");
    } catch (err) {
      setReportMessage(err?.message || "Impossible d'envoyer le signalement");
    } finally {
      setReporting(false);
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
          {opponent && (
            <div className={styles.opponentBlock}>
              <p className={styles.opponentTitle}>
                {opponent.pseudo ?? "Adversaire"}
              </p>
              <p>
                <span className={styles.label}>Score :</span>{" "}
                {opponent.score ?? 0}
              </p>
              <p>
                <span className={styles.label}>Erreurs :</span>{" "}
                {opponent.errors ?? 0}
              </p>
            </div>
          )}
          {opponent?.id && (
            <div className={styles.reportBlock}>
              <p className={styles.reportTitle}>Signaler l'adversaire</p>
              <div className={styles.reportBadges}>
                {REPORT_LABELS.map((label) => (
                  <button
                    key={label}
                    type="button"
                    className={`${styles.reportBadge} ${
                      reportLabel === label ? styles.reportBadgeActive : ""
                    }`}
                    onClick={() => setReportLabel(label)}
                    disabled={reporting || reportSent}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <Button
                label={reportSent ? "Signalé" : "Signaler"}
                onClick={handleReport}
                disabled={reporting || reportSent}
                variant="red"
                className={styles.reportButton}
              />
              {reportMessage && (
                <p className={styles.reportMessage}>{reportMessage}</p>
              )}
            </div>
          )}
        </div>
        <div className={styles.actions}>
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
