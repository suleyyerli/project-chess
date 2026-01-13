import { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./CookieConsent.module.css";

const STORAGE_KEY = "cookie_consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const handleChoice = (value) => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className={styles.banner} role="dialog" aria-live="polite">
      <div className={styles.content}>
        <p className={styles.title}>Gestion des cookies</p>
        <p className={styles.text}>
          Nous utilisons uniquement des cookies/stockages nécessaires au bon
          fonctionnement (authentification et préférences). En continuant, tu
          acceptes leur utilisation.
        </p>
      </div>
      <div className={styles.actions}>
        <Button
          label="Accepter"
          variant="green"
          className={styles.actionButton}
          onClick={() => handleChoice("accepted")}
        />
        <Button
          label="Refuser"
          variant="red"
          className={styles.actionButton}
          onClick={() => handleChoice("refused")}
        />
      </div>
    </div>
  );
};

export default CookieConsent;
