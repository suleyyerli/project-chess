import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import homeIcon from "../../assets/iconheader/home.png";
import classementIcon from "../../assets/iconheader/trophee.png";
import profilIcon from "../../assets/iconheader/profil.png";
import logo from "../../assets/iconheader/logo_chess.png";
import gameIcon from "../../assets/battle.png";
import landingIcon from "../../assets/iconheader/land.png";

const Header = () => (
  <header className={styles.header}>
    {/* Navigation à gauche */}
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${styles.navItem} ${isActive ? styles.active : ""}`
        }
      >
        <img src={landingIcon} alt="Home" className={styles.icon} />
      </NavLink>

      <NavLink
        to="/home"
        className={({ isActive }) =>
          `${styles.navItem} ${isActive ? styles.active : ""}`
        }
      >
        <img src={homeIcon} alt="Home" className={styles.icon} />
      </NavLink>

      <NavLink
        to="/game"
        className={({ isActive }) =>
          `${styles.navItem} ${isActive ? styles.active : ""}`
        }
      >
        <img src={gameIcon} alt="Game" className={styles.icon} />
      </NavLink>

      <NavLink
        to="/classement"
        className={({ isActive }) =>
          `${styles.navItem} ${isActive ? styles.active : ""}`
        }
      >
        <img src={classementIcon} alt="Classement" className={styles.icon} />
      </NavLink>

      <NavLink
        to="/profil"
        className={({ isActive }) =>
          `${styles.navItem} ${isActive ? styles.active : ""}`
        }
      >
        <img src={profilIcon} alt="Profil" className={styles.icon} />
      </NavLink>
    </nav>

    {/* Titre + logo à droite */}
    <div className={styles.brand}>
      <h1 className={styles.title}>ChessBattle</h1>
      <img src={logo} alt="ChessBattle Logo" className={styles.logo} />
    </div>
  </header>
);

export default Header;
