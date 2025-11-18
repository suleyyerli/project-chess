import Card from "../ui/Card/Card";
import styles from "./StatsProfil.module.css";
import trophyIcon from "../../assets/iconheader/trophee.png";
import PartieIcon from "../../assets/game.png";
import victoireIcon from "../../assets/Victoire.png";
import defaiteIcon from "../../assets/defaite.png";
import nullIcon from "../../assets/null.png";

const StatsProfil = ({ trophy, nbgame, nbwin, nblose, nbdraw }) => {
  const stats = [
    {
      label: "Trophées",
      value: trophy,
      icon: trophyIcon,
      alt: "Icône trophée",
    },
    { label: "Parties", value: nbgame, icon: PartieIcon, alt: "Icône parties" },
    {
      label: "Victoires",
      value: nbwin,
      icon: victoireIcon,
      alt: "Icône victoires",
    },
    {
      label: "Défaites",
      value: nblose,
      icon: defaiteIcon,
      alt: "Icône défaites",
    },
    { label: "Nulles", value: nbdraw, icon: nullIcon, alt: "Icône nulles" },
  ];

  return (
    <div className={styles.grid}>
      {stats.map((stat) => {
        const value = stat.value ?? 0;
        return (
          <Card key={stat.label} variant="dark" className={styles.statCard}>
            <img className={styles.icon} src={stat.icon} alt={stat.alt} />
            <div className={styles.text}>
              <p className={styles.label}>{stat.label}</p>
              <p className={styles.value}>{value}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default StatsProfil;
