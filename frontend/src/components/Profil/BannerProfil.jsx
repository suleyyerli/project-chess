import Card from "../ui/Card/Card";
import styles from "./BannerProfil.module.css";
import { BANNER_OPTIONS } from "./bannerConfig";
import { RiLockFill } from "react-icons/ri";

const BannerProfil = ({ nbgame = 0, selectedId, onSelect }) => {
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
          const isSelected = selectedId === banner.id;

          return (
            <li key={banner.id} className={styles.listItem}>
              <div
                className={[
                  styles.banner,
                  styles[banner.className],
                  !unlocked ? styles.locked : "",
                  isSelected ? styles.selected : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                role={unlocked ? "button" : undefined}
                tabIndex={unlocked ? 0 : undefined}
                onClick={() => {
                  if (!unlocked || !onSelect) return;
                  onSelect(banner.id);
                }}
                onKeyDown={(e) => {
                  if (!unlocked || !onSelect) return;
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelect(banner.id);
                  }
                }}
              >
                <div className={styles.info}>
                  <p className={styles.label}>{banner.label}</p>
                  <p className={styles.requirement}>{requirement}</p>
                  <p className={styles.description}>{banner.description}</p>
                </div>

                {unlocked && isSelected && (
                  <span className={styles.equipped}>Équipée</span>
                )}

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
