import { useEffect, useState } from "react";
import styles from "./Admin.module.css";
import Button from "../../components/ui/Button/Button";
import {
  banUser,
  deleteUser,
  fetchAdminUsers,
  unbanUser,
} from "../../api/apiAdmin";

const REPORT_LABELS = ["Triche", "Anti-jeu"];
const BAN_DURATIONS = [
  { value: "1d", label: "1 jour" },
  { value: "1w", label: "1 semaine" },
  { value: "1m", label: "1 mois" },
  { value: "permanent", label: "Définitif" },
];

const formatDateTime = (isoString) => {
  if (!isoString) return null;
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const defaultBanForm = {
  label: REPORT_LABELS[0],
  duration: BAN_DURATIONS[0].value,
};

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [minReports, setMinReports] = useState("");
  const [banForms, setBanForms] = useState({});

  const loadUsers = async () => {
    setLoading(true);
    setError("");
    try {
      const result = await fetchAdminUsers({ search, status, minReports });
      setUsers(result);
    } catch (err) {
      setError(err?.message || "Impossible de charger les joueurs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const updateBanForm = (userId, patch) => {
    setBanForms((prev) => ({
      ...prev,
      [userId]: { ...defaultBanForm, ...(prev[userId] || {}), ...patch },
    }));
  };

  const handleBan = async (userId) => {
    const form = { ...defaultBanForm, ...(banForms[userId] || {}) };
    try {
      await banUser(userId, form);
      await loadUsers();
    } catch (err) {
      setError(err?.message || "Impossible de bannir");
    }
  };

  const handleUnban = async (userId) => {
    try {
      await unbanUser(userId);
      await loadUsers();
    } catch (err) {
      setError(err?.message || "Impossible de débannir");
    }
  };

  const handleDelete = async (userId) => {
    if (!window.confirm("Supprimer ce compte ?")) return;
    try {
      await deleteUser(userId);
      await loadUsers();
    } catch (err) {
      setError(err?.message || "Impossible de supprimer l'utilisateur");
    }
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h2>Panel admin</h2>
        <p>Gestion simple des signalements et bannissements.</p>
      </header>

      <section className={styles.filters}>
        <input
          className={styles.input}
          placeholder="Recherche pseudo ou email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className={styles.select}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="all">Tous</option>
          <option value="active">Actifs</option>
          <option value="banned">Bannis</option>
        </select>
        <input
          className={styles.input}
          type="number"
          min="0"
          placeholder="Min signalements"
          value={minReports}
          onChange={(e) => setMinReports(e.target.value)}
        />
        <Button label="Charger" onClick={loadUsers} />
      </section>

      {error && <p className={styles.error}>{error}</p>}
      {loading && <p className={styles.loading}>Chargement...</p>}

      {!loading && (
        <div className={styles.table}>
          <div className={styles.rowHead}>
            <span>Joueur</span>
            <span>Signalements</span>
            <span>Statut</span>
            <span>Ban</span>
            <span>Actions</span>
          </div>
          {users.map((user) => {
            const banForm = { ...defaultBanForm, ...(banForms[user.id] || {}) };
            return (
              <div key={user.id} className={styles.row}>
                <div>
                  <strong>{user.pseudo}</strong>
                  <div className={styles.sub}>{user.email}</div>
                </div>
                <span>{user.reportCount ?? 0}</span>
                <span>
                  {user.isBanned
                    ? `Banni${user.banLabel ? ` (${user.banLabel})` : ""}`
                    : "Actif"}
                </span>
                <div className={styles.sub}>
                  {user.isBanned
                    ? user.bannedUntil
                      ? `Jusqu'au ${formatDateTime(user.bannedUntil)}`
                      : "Définitif"
                    : "-"}
                </div>
                <div className={styles.actions}>
                  <select
                    className={styles.select}
                    value={banForm.label}
                    onChange={(e) =>
                      updateBanForm(user.id, { label: e.target.value })
                    }
                  >
                    {REPORT_LABELS.map((label) => (
                      <option key={label} value={label}>
                        {label}
                      </option>
                    ))}
                  </select>
                  <select
                    className={styles.select}
                    value={banForm.duration}
                    onChange={(e) =>
                      updateBanForm(user.id, { duration: e.target.value })
                    }
                  >
                    {BAN_DURATIONS.map((duration) => (
                      <option key={duration.value} value={duration.value}>
                        {duration.label}
                      </option>
                    ))}
                  </select>
                  <Button label="Bannir" onClick={() => handleBan(user.id)} />
                  {user.isBanned && (
                    <Button
                      label="Débannir"
                      variant="brown"
                      onClick={() => handleUnban(user.id)}
                    />
                  )}
                  <Button
                    label="Supprimer"
                    variant="red"
                    onClick={() => handleDelete(user.id)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Admin;
