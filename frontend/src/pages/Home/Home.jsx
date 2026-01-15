import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import Card from "../../components/ui/Card/Card";
import Button from "../../components/ui/Button/Button";
import UserSkin from "../../components/UserSkin/UserSkin";
import MatchHistory from "../../components/MatchHistory/MatchHistory";
import { getMe } from "../../api/authApi";
import { getAuthToken } from "../../api/authStorage";

const Home = () => {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [userError, setUserError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const token = getAuthToken();
      if (!token) {
        navigate("/");
        return;
      }

      try {
        const { user: fetchedUser } = await getMe(token);
        if (!fetchedUser) {
          setUserError("Utilisateur introuvable");
          return;
        }
        setUser(fetchedUser);
      } catch {
        setUserError("Impossible de charger l'utilisateur");
      } finally {
        setLoadingUser(false);
      }
    };

    loadUser();
  }, [navigate]);

  const handleStartGame = () => {
    navigate("/game");
  };

  const handleGoToProfile = () => {
    navigate("/profil");
  };

  return (
    <div className={styles.home}>
      <section className={styles.dashboard}>
        <div className={styles.actionsColumn}>
          <Card className={styles.welcomeCard}>
            <h2>Bienvenue sur Puzzle Chess Battle</h2>
            <p>
              Résous des puzzles, grimpe dans le classement et deviens maître du
              jeu.
            </p>
            <div className={styles.actions}>
              <Button label="Lancer une partie" onClick={handleStartGame} />
              <Button
                label="Profil"
                variant="brown"
                onClick={handleGoToProfile}
              />
            </div>
          </Card>
        </div>

        <div className={styles.centerColumn}>
          {loadingUser && (
            <p className={styles.status}>Chargement du joueur...</p>
          )}
          {userError && !loadingUser && (
            <p className={styles.statusError}>{userError}</p>
          )}
          {user && (
            <UserSkin
              className={styles.userSkin}
              size="lg"
              avatar={user.avatar}
              pseudo={user.pseudo}
              trophy={user.stats?.trophy}
              banner={user.banner}
              emblem={user.emblem}
            />
          )}
          <MatchHistory userId={user?.id ?? null} />
        </div>

        <div className={styles.puzzleColumn}>
          <Card className={styles.puzzleCard} variant="gray">
            <h3>Mes statistiques</h3>
            {loadingUser && (
              <p className={styles.statsText}>Chargement des stats...</p>
            )}
            {userError && !loadingUser && (
              <p className={styles.statusError}>{userError}</p>
            )}
            {user && (
              <div className={styles.statsList}>
                <p className={styles.statsText}>
                  Parties jouées : {user.stats?.nbGame ?? 0}
                </p>
                <p className={styles.statsText}>
                  Victoires : {user.stats?.nbWin ?? 0}
                </p>
                <p className={styles.statsText}>
                  Défaites : {user.stats?.nbLose ?? 0}
                </p>
                <p className={styles.statsText}>
                  Matchs nuls : {user.stats?.nbDraw ?? 0}
                </p>
                <p className={styles.statsText}>
                  Trophées : {user.stats?.trophy ?? 0}
                </p>
              </div>
            )}
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
