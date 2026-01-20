import trophyIcon from "../../../assets/iconheader/trophee.png";
import styles from "./RankingHeader.module.css";

const RankingHeader = ({ title }) => {
  return (
    <div className={styles.header}>
      <div className={styles.iconWrapper}>
        <img src={trophyIcon} alt="Trophée" />
      </div>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default RankingHeader;
