import { useEffect, useState } from "react";
import Card from "../ui/Card/Card";
import styles from "./MatchHistory.module.css";
import { getMatchesByUser } from "../../api/apiMatches";

const formatResult = (isWinner) => (isWinner ? "Victoire" : "Défaite");

const formatMode = (mode) => {
  if (!mode) return "N/A";
  return mode === "solo" ? "Solo" : "Multi";
};

const formatTrophyDelta = (delta) => {
  const value = Number(delta);
  if (!Number.isFinite(value) || value === 0) return "0";
  return value > 0 ? `+${value}` : String(value);
};

const MatchHistory = ({ userId }) => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadMatches = async () => {
      if (!userId) {
        setMatches([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const data = await getMatchesByUser(userId);
        if (isMounted) {
          setMatches(data);
        }
      } catch {
        if (isMounted) {
          setError("Impossible de charger l'historique des parties");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadMatches();

    return () => {
      isMounted = false;
    };
  }, [userId]);

  const rows = matches
    .map((match) => {
      if (!Array.isArray(match.players)) return null;
      const tracked = match.players.find((player) => player.userId === userId);
      if (!tracked) return null;

      return {
        key: `${match.id}-${tracked.userId}`,
        pseudo: tracked.pseudo ?? `Joueur ${tracked.userId}`,
        isWinner: Boolean(tracked.isWinner),
        puzzlesSolved:
          typeof tracked.puzzlesSolved === "number" ? tracked.puzzlesSolved : 0,
        trophiesDelta:
          typeof tracked.trophiesDelta === "number" ? tracked.trophiesDelta : 0,
        mode: match.mode,
      };
    })
    .filter(Boolean);

  return (
    <Card className={styles.historyCard} variant="dark">
      <header className={styles.header}>
        <h3>Historique des parties</h3>
        {rows.length > 0 && <span>{rows.length} entrées</span>}
      </header>

      {loading && <p className={styles.status}>Chargement des matchs...</p>}
      {error && !loading && <p className={styles.statusError}>{error}</p>}

      {!loading && !error && rows.length === 0 && (
        <p className={styles.status}>
          Aucune partie enregistrée pour le moment.
        </p>
      )}

      {!loading && !error && rows.length > 0 && (
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Pseudo</th>
                <th>Résultat</th>
                <th>Nb. Problèmes</th>
                <th>Nb. Trophées</th>
                <th>Mode</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.key}>
                  <td>{row.pseudo}</td>
                  <td>{formatResult(row.isWinner)}</td>
                  <td>{row.puzzlesSolved}</td>
                  <td className={styles.trophies}>
                    {formatTrophyDelta(row.trophiesDelta)}
                  </td>
                  <td>{formatMode(row.mode)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
};

export default MatchHistory;
