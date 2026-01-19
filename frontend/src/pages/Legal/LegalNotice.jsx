import Card from "../../components/ui/Card/Card";
import styles from "./LegalPage.module.css";

const LegalNotice = () => {
  return (
    <section className={styles.page}>
      <div className="container">
        <Card className={styles.card}>
          <div>
            <h1 className={styles.title}>Mentions légales</h1>
            <p className={styles.subtitle}>Dernière mise à jour : 20/03/2025</p>
          </div>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Éditeur du site</h2>
            <p className={styles.text}>
              ChessBattle est un projet personnel développé par suleyyerli.
            </p>
            <p className={styles.text}>Adresse : à venir.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Directeur de la publication</h2>
            <p className={styles.text}>suleyyerli.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Hébergement</h2>
            <p className={styles.text}>
              Hébergeur : à venir (nom, adresse, contact).
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Propriété intellectuelle</h2>
            <p className={styles.text}>
              Le contenu du site (textes, visuels, code, marques) est protégé
              par le droit d’auteur. Toute reproduction sans autorisation est
              interdite.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Responsabilité</h2>
            <p className={styles.text}>
              L’éditeur s’efforce d’assurer l’exactitude des informations, mais
              ne saurait être tenu responsable des erreurs ou interruptions de
              service.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Contact</h2>
            <p className={styles.text}>
              Contact :{" "}
              <a
                className={styles.link}
                href="https://github.com/suleyyerli"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/suleyyerli
              </a>
            </p>
          </section>
        </Card>
      </div>
    </section>
  );
};

export default LegalNotice;
