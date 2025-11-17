import Card from "../ui/Card/Card";
import styles from "./BannerProfil.module.css";
import { BANNER_OPTIONS } from "./bannerConfig";
import { RiLockFill } from "react-icons/ri";

const BannerProfil = ({ nbgame = 0 }) => {
  const safeNbGame = Number.isFinite(nbgame) ? nbgame : 0;

  return (
    <Card variant="dark" className={styles.card}>
      <h2 className={styles.title}>Les bannières</h2>
      <p className={styles.subtitle}>
        Elles se débloquent automatiquement en jouant des parties.
      </p>

      <ul className={styles.list}>
        {BANNER_OPTIONS.map((banner) => {
          const unlocked = safeNbGame >= banner.requiredGames;
          const requirement =
            banner.requiredGames > 1
              ? `${banner.requiredGames} parties`
              : "1 partie";

          return (
            <li key={banner.id} className={styles.listItem}>
              <div
                className={[
                  styles.banner,
                  styles[banner.className],
                  !unlocked ? styles.locked : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className={styles.info}>
                  <p className={styles.label}>{banner.label}</p>
                  <p className={styles.requirement}>{requirement}</p>
                  <p className={styles.description}>{banner.description}</p>
                </div>

                {!unlocked && (
                  <span className={styles.lock}>
                    <RiLockFill />
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default BannerProfil;
