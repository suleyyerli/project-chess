import { useMemo, useState } from "react";
import Card from "../ui/Card/Card";
import Button from "../ui/Button/Button";
import styles from "./Form.module.css";

const initialData = {
  pseudo: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Form = () => {
  const [mode, setMode] = useState("register"); // 'register' | 'login'
  const [formData, setFormData] = useState(initialData);
  const [error, setError] = useState("");
  const [feedback, setFeedback] = useState("");

  const isRegister = mode === "register";

  const title = useMemo(
    () => (isRegister ? "Créer un compte" : "Se connecter"),
    [isRegister]
  );

  const handleModeChange = (nextMode) => {
    if (nextMode === mode) return;
    setMode(nextMode);
    setError("");
    setFeedback("");
    setFormData(initialData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    setFeedback("");

    if (isRegister && !formData.pseudo.trim()) {
      setError("Merci de renseigner un pseudo.");
      return;
    }

    if (!formData.email.trim() || !formData.password.trim()) {
      setError("Email et mot de passe sont obligatoires.");
      return;
    }

    if (isRegister && formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    console.log(`[${mode}] données envoyées :`, formData);
    setFeedback(
      isRegister
        ? "Compte prêt ! Nous connecterons cela au backend très bientôt."
        : "Connexion simulée. Backend en préparation."
    );
    setFormData(initialData);
  };

  return (
    <Card className={styles.card}>
      <div className={styles.toggle}>
        <Button
          type="button"
          label="Inscription"
          variant="green"
          className={`${styles.toggleButton} ${
            isRegister ? styles.toggleActive : styles.toggleInactive
          }`}
          onClick={() => handleModeChange("register")}
        />
        <Button
          type="button"
          label="Connexion"
          variant="brown"
          className={`${styles.toggleButton} ${
            !isRegister ? styles.toggleActive : styles.toggleInactive
          }`}
          onClick={() => handleModeChange("login")}
        />
      </div>

      <h2 className={styles.title}>{title}</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        {isRegister && (
          <label className={styles.field}>
            <span className={styles.labelText}>Pseudo</span>
            <input
              className={styles.input}
              type="text"
              name="pseudo"
              value={formData.pseudo}
              onChange={handleChange}
              autoComplete="username"
              placeholder="Ex : sikeligame"
            />
          </label>
        )}

        <label className={styles.field}>
          <span className={styles.labelText}>Email</span>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            placeholder="ton.email@example.com"
          />
        </label>

        <label className={styles.field}>
          <span className={styles.labelText}>Mot de passe</span>
          <input
            className={styles.input}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            autoComplete={isRegister ? "new-password" : "current-password"}
            placeholder="********"
          />
        </label>

        {isRegister && (
          <label className={styles.field}>
            <span className={styles.labelText}>Confirmer le mot de passe</span>
            <input
              className={styles.input}
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              autoComplete="new-password"
              placeholder="********"
            />
          </label>
        )}

        {error && <p className={styles.error}>{error}</p>}
        {feedback && <p className={styles.feedback}>{feedback}</p>}

        <Button
          type="submit"
          label={isRegister ? "Je m'inscris" : "Je me connecte"}
          className={styles.submit}
        />
      </form>
    </Card>
  );
};

export default Form;
