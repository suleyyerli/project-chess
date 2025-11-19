import styles from "./UserSkin.module.css";

const bannerClassMap = {
  iron: styles.bannerIron,
  bronze: styles.bannerBronze,
  silver: styles.bannerSilver,
  gold: styles.bannerGold,
  plat: styles.bannerPlat,
  diamond: styles.bannerDiamond,
  ascendant: styles.bannerAscendant,
  immortal: styles.bannerImmortal,
  radiant: styles.bannerRadiant,
  challenger: styles.bannerChallenger,
};

const formatTrophies = (trophy) => {
  const value = Number(trophy);
  if (!Number.isFinite(value)) return null;
  return value.toLocaleString("fr-FR");
};

const getInitials = (pseudo) => {
  if (!pseudo) return "?";
  return pseudo.slice(0, 2).toUpperCase();
};

const UserSkin = ({
  avatar,
  pseudo,
  trophy,
  emblem,
  banner,
  className = "",
  size = "md",
}) => {
  const displayPseudo = pseudo ?? "Joueur inconnu";
  const trophyLabel = formatTrophies(trophy);
  const normalizedBanner =
    typeof banner === "string" ? banner.toLowerCase() : "";
  const bannerClass = bannerClassMap[normalizedBanner] ?? styles.bannerDefault;

  const classes = [
    styles.skin,
    bannerClass,
    styles[`size${size.toUpperCase()}`] ?? styles.sizeMD,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={classes}>
      <div className={styles.avatarFrame} aria-hidden={!avatar}>
        {avatar ? (
          <img
            src={avatar}
            alt={`Avatar de ${displayPseudo}`}
            className={styles.avatarImage}
            loading="lazy"
          />
        ) : (
          <span className={styles.avatarFallback}>
            {getInitials(displayPseudo)}
          </span>
        )}
      </div>

      <div className={styles.info}>
        <span className={styles.pseudo}>{displayPseudo}</span>
        {trophyLabel ? (
          <span className={styles.trophy}>{trophyLabel} trophées</span>
        ) : (
          <span className={styles.trophy}>Trophées inconnus</span>
        )}
      </div>

      <div className={styles.emblemFrame}>
        {emblem ? (
          <img
            src={emblem}
            alt={`Emblème de ${displayPseudo}`}
            className={styles.emblemImage}
            loading="lazy"
          />
        ) : (
          <span className={styles.emblemPlaceholder}>Emblème</span>
        )}
      </div>
    </article>
  );
};

export default UserSkin;
