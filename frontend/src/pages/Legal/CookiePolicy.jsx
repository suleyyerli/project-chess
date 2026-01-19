import Card from "../../components/ui/Card/Card";
import styles from "./LegalPage.module.css";

const CookiePolicy = () => {
  return (
    <section className={styles.page}>
      <div className="container">
        <Card className={styles.card}>
          <div>
            <h1 className={styles.title}>Politique cookies</h1>
            <p className={styles.subtitle}>
              Dernière mise à jour : 20/03/2025
            </p>
          </div>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Cookies utilisés</h2>
            <p className={styles.text}>
              ChessBattle n’utilise que des cookies/stockages nécessaires au
              fonctionnement du service. Aucun cookie publicitaire ou de mesure
              d’audience tiers n’est déposé.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Stockages nécessaires</h2>
            <ul className={styles.list}>
              <li>
                <strong>auth_token</strong> : jeton d’accès pour l’authentification.
              </li>
              <li>
                <strong>refresh_token</strong> : jeton de renouvellement de
                session.
              </li>
              <li>
                <strong>cookie_consent</strong> : mémorise le choix du bandeau.
              </li>
            </ul>
            <p className={styles.text}>
              Ces éléments sont stockés localement dans votre navigateur et
              nécessaires pour se connecter et rester authentifié.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Gestion</h2>
            <p className={styles.text}>
              Vous pouvez supprimer les cookies et stockages via les paramètres
              de votre navigateur. Cela peut vous déconnecter et empêcher le
              fonctionnement normal du site.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Contact</h2>
            <p className={styles.text}>
              Pour toute question, contactez l’éditeur :{" "}
              <a
                className={styles.link}
                href="https://github.com/suleyyerli"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/suleyyerli
              </a>
              .
            </p>
          </section>
        </Card>
      </div>
    </section>
  );
};

export default CookiePolicy;
