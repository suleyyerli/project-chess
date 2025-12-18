import Card from "../ui/Card/Card";
import styles from "./EmblemeProfil.module.css";
import { EMBLEM_OPTIONS } from "./emblemConfig";
import { RiLockFill } from "react-icons/ri";

const Embleme = ({ nbtrophy, trophy, selectedId, onSelect }) => {
  const safeTrophy = Number.isFinite(nbtrophy)
    ? nbtrophy
    : Number.isFinite(trophy)
    ? trophy
    : 0;

  return (
    <Card variant="dark" className={styles.card}>
      <h2 className={styles.title}>Les emblèmes</h2>
      <p className={styles.subtitle}>
        Ils se débloquent automatiquement selon le nombre de trophées.
      </p>

      <div className={styles.grid}>
        {EMBLEM_OPTIONS.map((emblem) => {
          const unlocked = safeTrophy >= emblem.requiredTrophy;
          const isSelected = selectedId === emblem.id;

          return (
            <div key={emblem.id} className={styles.emblemecontain}>
              <figure
                className={[
                  styles.embleme,
                  unlocked ? styles.unlocked : styles.locked,
                  isSelected ? styles.selected : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                role={unlocked ? "button" : undefined}
                tabIndex={unlocked ? 0 : undefined}
                onClick={() => {
                  if (!unlocked || !onSelect) return;
                  onSelect(emblem.id);
                }}
                onKeyDown={(e) => {
                  if (!unlocked || !onSelect) return;
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelect(emblem.id);
                  }
                }}
              >
                <img
                  className={styles.image}
                  src={emblem.image}
                  alt={`Emblème ${emblem.label}`}
                />

                {!unlocked && (
                  <figcaption className={styles.lockOverlay}>
                    <RiLockFill />
                  </figcaption>
                )}

                {unlocked && isSelected && (
                  <figcaption className={styles.selectedOverlay}>Équipé</figcaption>
                )}
              </figure>

              <p className={styles.requirement}>
                {emblem.requiredTrophy} trophées nécessaires
              </p>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default Embleme;
