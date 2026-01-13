import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <p className={styles.title}>ChessBattle</p>
          <p className={styles.subtitle}>
            Projet de puzzle chess en temps réel
          </p>
        </div>

        <div className={styles.block}>
          <p className={styles.blockTitle}>Développeur</p>
          <p className={styles.text}>suleyyerli</p>
        </div>

        <div className={styles.block}>
          <p className={styles.blockTitle}>Liens</p>
          <a
            className={styles.link}
            href="https://github.com/suleyyerli"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className={styles.link}
            href="https://suleyyerli.github.io/portfolio_vfinal/"
            target="_blank"
            rel="noreferrer"
          >
            Portfolio
          </a>
        </div>

        <div className={styles.block}>
          <p className={styles.blockTitle}>Stack</p>
          <p className={styles.text}>React • Zustand • Socket.IO • Express</p>
          <p className={styles.text}>Prisma • PostgreSQL • Docker</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© 2025 ChessBattle</span>
        <span>Tous droits réservés</span>
      </div>
    </footer>
  );
};

export default Footer;
