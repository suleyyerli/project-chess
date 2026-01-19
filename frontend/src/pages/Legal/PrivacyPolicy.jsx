import { Link } from "react-router-dom";
import Card from "../../components/ui/Card/Card";
import styles from "./LegalPage.module.css";

const PrivacyPolicy = () => {
  return (
    <section className={styles.page}>
      <div className="container">
        <Card className={styles.card}>
          <div>
            <h1 className={styles.title}>
              Politique de confidentialité (RGPD)
            </h1>
            <p className={styles.subtitle}>
              Dernière mise à jour : 20/03/2025
            </p>
          </div>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Responsable du traitement</h2>
            <p className={styles.text}>
              Le responsable du traitement des données du site ChessBattle est
              le développeur du projet.
            </p>
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

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Données collectées</h2>
            <ul className={styles.list}>
              <li>Identité : email, pseudo.</li>
              <li>Authentification : mot de passe chiffré, jetons de session.</li>
              <li>
                Profil : avatar, bannière, emblème, bio, date d’inscription.
              </li>
              <li>
                Jeu : statistiques, historiques de parties, défis, classements.
              </li>
              <li>Modération : signalements, sanctions éventuelles.</li>
              <li>Données techniques nécessaires au fonctionnement.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Finalités du traitement</h2>
            <ul className={styles.list}>
              <li>Créer et gérer les comptes utilisateurs.</li>
              <li>Permettre la participation aux parties et défis.</li>
              <li>Afficher les classements et statistiques.</li>
              <li>Assurer la sécurité et la prévention des abus.</li>
              <li>Gérer la modération et les signalements.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Base légale</h2>
            <ul className={styles.list}>
              <li>
                Exécution du service demandé par l’utilisateur (compte, jeu).
              </li>
              <li>
                Intérêt légitime (sécurité, lutte contre la fraude, modération).
              </li>
              <li>
                Consentement pour les stockages non essentiels (aucun suivi
                publicitaire n’est utilisé).
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Destinataires</h2>
            <p className={styles.text}>
              Les données sont accessibles par l’éditeur du site et ses
              prestataires techniques strictement nécessaires (hébergement,
              base de données, envoi d’e-mails). Elles ne sont ni vendues ni
              cédées.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Durées de conservation</h2>
            <ul className={styles.list}>
              <li>Données de compte : jusqu’à suppression du compte.</li>
              <li>
                Données de jeu et historiques : durée de vie du compte, puis
                suppression ou anonymisation.
              </li>
              <li>
                Jetons de réinitialisation : durée courte (environ 1 heure).
              </li>
              <li>
                Sanctions et signalements : durée nécessaire à la modération.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Sécurité</h2>
            <p className={styles.text}>
              Des mesures techniques sont mises en place pour protéger les
              données (chiffrement des mots de passe, contrôle d’accès,
              limitation des droits).
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Transferts hors UE</h2>
            <p className={styles.text}>
              Les données ne sont pas transférées hors de l’Union européenne,
              sauf obligation technique liée à l’hébergement (à préciser si
              nécessaire).
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Vos droits</h2>
            <p className={styles.text}>
              Vous disposez des droits d’accès, de rectification, d’effacement,
              d’opposition, de limitation et de portabilité. Vous pouvez
              exercer vos droits via le contact indiqué ci-dessus. Vous pouvez
              également déposer une réclamation auprès de la CNIL.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              10. Cookies et stockages locaux
            </h2>
            <p className={styles.text}>
              ChessBattle utilise uniquement des stockages nécessaires au
              fonctionnement (authentification, préférences). Pour en savoir
              plus, consultez la{" "}
              <Link className={styles.link} to="/legal/cookies">
                politique cookies
              </Link>
              .
            </p>
          </section>

          <p className={styles.note}>
            Cette politique peut évoluer en fonction du service et des
            obligations légales.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
