import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import homeIcon from "../../assets/iconheader/home.png";
import classementIcon from "../../assets/iconheader/trophee.png";
import profilIcon from "../../assets/iconheader/profil.png";
import logo from "../../assets/iconheader/logo_chess.png";
import gameIcon from "../../assets/battle.png";
import landingIcon from "../../assets/iconheader/land.png";
import adminIcon from "../../assets/iconheader/shieldbattle.png";
import Button from "../ui/Button/Button";
import { clearAuthToken, getAuthToken } from "../../api/authStorage";
import { getMe, logout } from "../../api/authApi";
import { toImageSrc } from "../../utils/image";
import { getUserRoleFromToken } from "../../utils/jwt";

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

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [authToken, setAuthTokenState] = useState(getAuthToken());
  const [user, setUser] = useState(null);
  const role = getUserRoleFromToken(authToken);
  const banInfo = user?.ban;

  useEffect(() => {
    setAuthTokenState(getAuthToken());
  }, [location.pathname]);

  useEffect(() => {
    if (!authToken) {
      setUser(null);
      return;
    }

    let active = true;
    getMe()
      .then((data) => {
        if (active) {
          setUser(data?.user ?? null);
        }
      })
      .catch(() => {
        if (active) {
          setUser(null);
        }
      });

    return () => {
      active = false;
    };
  }, [authToken]);

  const handleLogout = async () => {
    try {
      await logout();
    } catch {
      // ignore: logout server is best-effort
    }
    clearAuthToken();
    setUser(null);
    setAuthTokenState(null);
    navigate("/");
  };

  const isLoggedIn = Boolean(authToken);
  const avatarSrc = toImageSrc(user?.avatar);
  const fallback = (user?.pseudo ?? "U").slice(0, 2).toUpperCase();

  return (
    <header className={styles.header}>
      {/* Navigation à gauche */}
      <nav className={styles.nav}>
        {!isLoggedIn && (
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ""}`
            }
          >
            <img src={landingIcon} alt="Bienvenue" className={styles.icon} />
            <span className={styles.navLabel}>Bienvenue</span>
          </NavLink>
        )}

        <NavLink
          to="/home"
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ""}`
          }
        >
          <img src={homeIcon} alt="Accueil" className={styles.icon} />
          <span className={styles.navLabel}>Accueil</span>
        </NavLink>

        <NavLink
          to="/game"
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ""}`
          }
        >
          <img src={gameIcon} alt="Jeu" className={styles.icon} />
          <span className={styles.navLabel}>Jeu</span>
        </NavLink>

        <NavLink
          to="/classement"
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ""}`
          }
        >
          <img src={classementIcon} alt="Classement" className={styles.icon} />
          <span className={styles.navLabel}>Classement</span>
        </NavLink>

        <NavLink
          to="/profil"
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ""}`
          }
        >
          <img src={profilIcon} alt="Profil" className={styles.icon} />
          <span className={styles.navLabel}>Profil</span>
        </NavLink>

        {role === "admin" && (
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ""}`
            }
          >
            <img src={adminIcon} alt="Admin" className={styles.icon} />
            <span className={styles.navLabel}>Admin</span>
          </NavLink>
        )}
      </nav>

      {/* Titre + logo + user */}
      <div className={styles.right}>
        <div className={styles.brand}>
          <h1 className={styles.title}>ChessBattle</h1>
          <img src={logo} alt="ChessBattle Logo" className={styles.logo} />
        </div>

        {isLoggedIn && (
          <div className={styles.userArea}>
            {banInfo?.isBanned && (
              <div className={styles.banBadge}>
                <span className={styles.banTitle}>BANNI</span>
                <span className={styles.banLabel}>
                  {banInfo.label ?? "Motif inconnu"}
                </span>
                <span className={styles.banUntil}>
                  {banInfo.bannedUntil
                    ? formatDateTime(banInfo.bannedUntil)
                    : "Définitif"}
                </span>
              </div>
            )}
            <div className={styles.avatar}>
              {avatarSrc ? (
                <img
                  src={avatarSrc}
                  alt={`Avatar de ${user?.pseudo ?? "Utilisateur"}`}
                  className={styles.avatarImage}
                />
              ) : (
                <span className={styles.avatarFallback}>{fallback}</span>
              )}
            </div>
            <Button
              label="Logout"
              variant="brown"
              className={styles.logoutButton}
              onClick={handleLogout}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
