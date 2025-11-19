import { useEffect, useState } from "react";
import { getUserById } from "../../api/apiUsers";
import HeroProfil from "../../components/Profil/HeroProfil";
import StatsProfil from "../../components/Profil/StatsProfil";
import BannerProfil from "../../components/Profil/BannerProfil";
import Embleme from "../../components/Profil/EmblemeProfil";
import UserSkin from "../../components/UserSkin/UserSkin";
import styles from "./Profil.module.css";

const SIMULATED_USER_ID = 1;

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

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profile = await getUserById(SIMULATED_USER_ID);
        console.log("Profil simulé :", profile);
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
  }, []);

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

  const statusLabel = `Statut : ${user.isactive ? "En ligne" : "Hors ligne"}${
    !user.isactive && formatDate(user.lastseen)
      ? ` — Dernière activité le ${formatDate(user.lastseen)}`
      : ""
  }`;

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
        trophy={user.trophy}
        nbgame={user.nbgame}
        nbwin={user.nbwin}
        nblose={user.nblose}
        nbdraw={user.nbdraw}
      />

      <UserSkin
        className={styles.userSkin}
        size="lg"
        avatar={user.avatar}
        pseudo={user.pseudo}
        trophy={user.trophy}
        banner={user.banner}
        emblem={user.emblem}
      />

      <div className={styles.gridbannemb}>
        <BannerProfil nbgame={user.nbgame} />
        <Embleme nbtrophy={user.nbtrophy} trophy={user.trophy} />
      </div>
    </div>
  );
};

export default Profil;
