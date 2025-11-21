import UserSkin from "../../UserSkin/UserSkin";
import styles from "./RankingRow.module.css";

const rankToModifier = (rank) => {
  if (rank === 1) return "gold";
  if (rank === 2) return "silver";
  if (rank === 3) return "bronze";
  return "default";
};

const RankingRow = ({ rank, player }) => {
  const badgeClass = `${styles.badge} ${styles[rankToModifier(rank)]}`;

  return (
    <div className={styles.row}>
      <span className={badgeClass}>{rank}</span>

      <UserSkin
        className={styles.userSkin}
        size="sm"
        avatar={player.avatar}
        pseudo={player.pseudo}
        trophy={player.trophy}
        emblem={player.emblem}
        banner={player.banner}
      />
    </div>
  );
};

export default RankingRow;
