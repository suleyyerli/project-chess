import Button from "../Button/Button";
import styles from "./ActivePlayersList.module.css";
import battleIcon from "../../../assets/battle.png";
import UserSkin from "../../UserSkin/UserSkin";

const ActivePlayersList = ({ players = [], onChallenge }) => {
  const handleChallenge = (player) => {
    if (typeof onChallenge === "function") {
      onChallenge(player);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Joueurs en ligne</h3>
        <span className={styles.count}>{players.length}</span>
      </div>

      {players.length === 0 ? (
        <p className={styles.empty}>
          Personne n&apos;est en ligne pour le moment.
        </p>
      ) : (
        <ul className={styles.list}>
          {players.map((player) => (
            <li key={player.id ?? player.pseudo} className={styles.item}>
              <UserSkin
                size="sm"
                avatar={player.avatar}
                pseudo={player.pseudo}
                trophy={player.trophy}
                banner={player.banner}
                emblem={player.emblem}
              />

              <Button
                icon={battleIcon}
                iconAlt={`Défier ${player.pseudo}`}
                variant="brown"
                onClick={() => handleChallenge(player)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ActivePlayersList;
