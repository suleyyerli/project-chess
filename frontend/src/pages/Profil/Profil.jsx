import { useEffect, useState } from "react";
import HeroProfil from "../../components/Profil/HeroProfil";
import StatsProfil from "../../components/Profil/StatsProfil";
import BannerProfil from "../../components/Profil/BannerProfil";
import Embleme from "../../components/Profil/EmblemeProfil";
import UserSkin from "../../components/UserSkin/UserSkin";
import styles from "./Profil.module.css";
import { getMe } from "../../api/authApi";
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

const Profil = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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

  return (
    <div className={styles.page}>
      <HeroProfil
        avatar={user.avatar}
        pseudo={user.pseudo}
        bio={user.bio}
        inscriptionLabel={inscriptionLabel}
        statusLabel={statusLabel}
      />

      <StatsProfil
        trophy={user.stats?.trophy}
        nbgame={user.stats?.nbGame}
        nbwin={user.stats?.nbWin}
        nblose={user.stats?.nbLose}
        nbdraw={user.stats?.nbDraw}
      />

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
        <BannerProfil nbgame={user.stats?.nbGame} />
        <Embleme trophy={user.stats?.trophy} />
      </div>
    </div>
  );
};

export default Profil;
