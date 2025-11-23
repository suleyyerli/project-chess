import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import Card from "../../components/ui/Card/Card";
import Button from "../../components/ui/Button/Button";
import UserSkin from "../../components/UserSkin/UserSkin";
import { getUserById } from "../../api/apiUsers";
import MatchHistory from "../../components/MatchHistory/MatchHistory";

const SIMULATED_USER_ID = 1;

const Home = () => {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [userError, setUserError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const fetchedUser = await getUserById(SIMULATED_USER_ID);
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
  }, []);

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
              trophy={user.trophy}
              banner={user.banner}
              emblem={user.emblem}
            />
          )}
          <MatchHistory userId={SIMULATED_USER_ID} />
        </div>

        <div className={styles.puzzleColumn}>
          <Card className={styles.puzzleCard} variant="gray">
            <h3>Puzzle à venir</h3>
            <p>
              Un aperçu interactif arrivera ici avec le prochain défi quotidien.
              Continue de t&apos;entraîner pour rester dans le top ! SI LE TEMPS
              DE LE DEV
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
