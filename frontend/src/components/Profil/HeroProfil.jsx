import Card from "../ui/Card/Card";
import styles from "./HeroProfil.module.css";

const HeroProfil = ({ avatar, pseudo, bio, inscriptionLabel, statusLabel }) => {
  return (
    <Card variant="dark" className={styles.hero}>
      <div>
        <img
          className={styles.avatar}
          src={avatar}
          alt={`Avatar de ${pseudo}`}
        />
      </div>
      <div className={styles.info}>
        <h1 className={styles.pseudo}>{pseudo}</h1>
        <p className={styles.bio}>
          <strong>Bio :</strong> {bio || "Ajoutez une bio"}
        </p>
        <p className={styles.meta}>{inscriptionLabel}</p>
        <p className={styles.meta}>{statusLabel}</p>
      </div>
    </Card>
  );
};

export default HeroProfil;
