import { useEffect, useState } from "react";
import HeroProfil from "../../components/Profil/HeroProfil";
import StatsProfil from "../../components/Profil/StatsProfil";
import BannerProfil from "../../components/Profil/BannerProfil";
import Embleme from "../../components/Profil/EmblemeProfil";
import UserSkin from "../../components/UserSkin/UserSkin";
import styles from "./Profil.module.css";
import { getMe, updateMe } from "../../api/authApi";
import { getAuthToken } from "../../api/authStorage";
import { useNavigate } from "react-router-dom";

const formatDate = (isoString) => {
  if (!isoString) return null;
  const date = new Date(isoString);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

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

const Profil = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cosmeticError, setCosmeticError] = useState("");
  const [savingCosmetic, setSavingCosmetic] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadProfile = async () => {
      const token = getAuthToken();
      if (!token) {
        navigate("/");
        return;
      }

      try {
        const { user: profile } = await getMe(token);
        if (!profile) {
          setError("Profil introuvable");
          return;
        }
        setUser(profile);
      } catch {
        setError("Impossible de charger le profil");
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [navigate]);

  if (loading) {
    return <p>Chargement du profil...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!user) {
    return <p>Aucun profil à afficher.</p>;
  }

  const inscriptionLabel = `Inscription : ${
    formatDate(user.joinedAt || user.createdAt || user.signupAt) ||
    "Date d'inscription inconnue"
  }`;

  const statusLabel = "Statut : connecté";
  const banInfo = user.ban;

  return (
    <div className={styles.page}>
      <HeroProfil
        avatar={user.avatar}
        pseudo={user.pseudo}
        bio={user.bio}
        inscriptionLabel={inscriptionLabel}
        statusLabel={statusLabel}
        onUpdateBio={async (nextBio) => {
          const { user: updatedUser } = await updateMe({ bio: nextBio });
          setUser(updatedUser);
        }}
        onUpdateAvatar={async (nextAvatar) => {
          const { user: updatedUser } = await updateMe({ avatar: nextAvatar });
          setUser(updatedUser);
        }}
      />

      <StatsProfil
        trophy={user.stats?.trophy}
        nbgame={user.stats?.nbGame}
        nbwin={user.stats?.nbWin}
        nblose={user.stats?.nbLose}
        nbdraw={user.stats?.nbDraw}
      />

      {banInfo?.isBanned && (
        <div className={styles.banCard}>
          <p className={styles.banTitle}>Bannissement actif</p>
          <p className={styles.banText}>
            Raison : {banInfo.label ?? "Non précisée"}
          </p>
          <p className={styles.banText}>
            Fin :{" "}
            {banInfo.bannedUntil
              ? formatDateTime(banInfo.bannedUntil)
              : "Définitif"}
          </p>
        </div>
      )}

      <UserSkin
        className={styles.userSkin}
        size="lg"
        avatar={user.avatar}
        pseudo={user.pseudo}
        trophy={user.stats?.trophy}
        banner={user.banner}
        emblem={user.emblem}
      />

      <div className={styles.gridbannemb}>
        <BannerProfil
          nbgame={user.stats?.nbGame}
          selectedId={user.banner}
          onSelect={async (bannerId) => {
            setCosmeticError("");
            setSavingCosmetic(true);
            try {
              const { user: updatedUser } = await updateMe({
                banner: bannerId,
              });
              setUser(updatedUser);
            } catch (err) {
              setCosmeticError(
                err?.message || "Impossible de mettre à jour la bannière"
              );
            } finally {
              setSavingCosmetic(false);
            }
          }}
        />
        <Embleme
          trophy={user.stats?.trophy}
          selectedId={user.emblem}
          onSelect={async (emblemId) => {
            setCosmeticError("");
            setSavingCosmetic(true);
            try {
              const { user: updatedUser } = await updateMe({
                emblem: emblemId,
              });
              setUser(updatedUser);
            } catch (err) {
              setCosmeticError(
                err?.message || "Impossible de mettre à jour l'emblème"
              );
            } finally {
              setSavingCosmetic(false);
            }
          }}
        />
      </div>

      {savingCosmetic && <p>Enregistrement des cosmétiques…</p>}
      {cosmeticError && <p>{cosmeticError}</p>}
    </div>
  );
};

export default Profil;
