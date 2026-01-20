import RankingRow from "./RankingRow";
import styles from "./RankingTable.module.css";

const RankingTable = ({ players }) => {
  return (
    <div className={styles.table}>
      <div className={styles.headerRow}>
        <span>Classement</span>
        <span className={styles.headerLabel}>Joueur</span>
      </div>

      <div className={styles.body}>
        {players.length === 0 ? (
          <p className={styles.empty}>Aucun joueur pour le moment.</p>
        ) : (
          players.map((player, index) => (
            <RankingRow
              key={player.id ?? `${player.pseudo}-${index}`}
              rank={index + 1}
              player={player}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default RankingTable;
