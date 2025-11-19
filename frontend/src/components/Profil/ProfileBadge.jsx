import styles from "./ProfileBadge.module.css";
import { getBannerById } from "./bannerConfig";
import { getEmblemById } from "./emblemConfig";

const ProfileBadge = ({
  avatar,
  pseudo,
  trophy,
  bannerId,
  emblemId,
  className = "",
}) => {
  const banner = getBannerById(bannerId);
  const emblem = emblemId ? getEmblemById(emblemId) : null;

  return (
    <div
      className={[styles.card, styles[banner.className], className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.avatarWrapper}>
        <img
          src={avatar}
          alt={`Avatar de ${pseudo}`}
          className={styles.avatar}
        />
      </div>
      <div className={styles.info}>
        <p className={styles.pseudo}>{pseudo}</p>
        <p className={styles.trophy}>{trophy ?? 0} trophées</p>
      </div>
      {emblem && (
        <img src={emblem.image} alt={emblem.label} className={styles.emblem} />
      )}
    </div>
  );
};

export default ProfileBadge;
