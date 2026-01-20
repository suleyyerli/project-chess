import React from "react";
import styles from "./Landing.module.css";
import Form from "../../components/Form/Form";

const Landing = () => {
  return (
    <main className={styles.page}>
      <section className={styles.section}>
        <h1 className={styles.title}>Bienvenue sur ChessBattle</h1>
        <p className={styles.subtitle}>
          Résous des puzzles, grimpe dans le classement et deviens maître du
          jeu. Ce site vous aidera à améliorer votre tactique lors de vos
          parties d'échecs.
        </p>
        <p className={styles.subtitle}>
          Veuillez vous inscrire ou vous connecter pour accéder au contenu.
        </p>
      </section>
      <section className={styles.formSection}>
        <Form />
      </section>
    </main>
  );
};

export default Landing;
