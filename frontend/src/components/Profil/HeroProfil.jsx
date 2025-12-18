import Card from "../ui/Card/Card";
import styles from "./HeroProfil.module.css";
import { toImageSrc } from "../../utils/image";

const HeroProfil = ({ avatar, pseudo, bio, inscriptionLabel, statusLabel }) => {
  const avatarSrc = toImageSrc(avatar);

  return (
    <Card variant="dark" className={styles.hero}>
      <div>
        <div className={styles.avatarWrapper}>
          {avatarSrc ? (
            <img
              className={styles.avatar}
              src={avatarSrc}
              alt={`Avatar de ${pseudo}`}
            />
          ) : (
            <div className={styles.avatarPlaceholder} aria-hidden="true">
              {pseudo?.slice?.(0, 2)?.toUpperCase?.() ?? "?"}
            </div>
          )}
        </div>
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
