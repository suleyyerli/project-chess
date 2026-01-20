import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../ui/Card/Card";
import Button from "../ui/Button/Button";
import styles from "./Form.module.css";
import { login, requestPasswordReset, signup } from "../../api/authApi";
import { setAuthTokens } from "../../api/authStorage";

const initialData = {
  pseudo: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Form = () => {
  const [mode, setMode] = useState("register"); // 'register' | 'login' | 'reset'
  const [formData, setFormData] = useState(initialData);
  const [error, setError] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const isRegister = mode === "register";
  const isReset = mode === "reset";

  const title = useMemo(() => {
    if (isReset) return "Mot de passe oublié";
    return isRegister ? "Créer un compte" : "Se connecter";
  }, [isRegister, isReset]);

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setFeedback("");

    if (isRegister && !formData.pseudo.trim()) {
      setError("Merci de renseigner un pseudo.");
      return;
    }

    if (!formData.email.trim()) {
      setError("Email obligatoire.");
      return;
    }

    if (!isReset && !formData.password.trim()) {
      setError("Email et mot de passe sont obligatoires.");
      return;
    }

    if (
      !isReset &&
      isRegister &&
      formData.password !== formData.confirmPassword
    ) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    setIsSubmitting(true);
    try {
      if (isReset) {
        await requestPasswordReset(formData.email);
        setFeedback(
          "Si un compte existe, un email a été envoyé avec la suite.",
        );
        setFormData({ ...initialData, email: formData.email });
      } else if (isRegister) {
        await signup({
          email: formData.email,
          pseudo: formData.pseudo,
          password: formData.password,
        });
        setFeedback("Compte créé. Tu peux maintenant te connecter.");
        setMode("login");
        setFormData({ ...initialData, email: formData.email });
      } else {
        const result = await login({
          email: formData.email,
          password: formData.password,
        });
        if (!result?.token) {
          throw new Error("Token manquant dans la réponse");
        }
        setAuthTokens({
          token: result.token,
          refreshToken: result.refreshToken,
        });
        setFeedback("Connecté !");
        setFormData(initialData);
        navigate("/profil");
      }
    } catch (err) {
      setError(err?.message || "Erreur lors de la requête");
    } finally {
      setIsSubmitting(false);
    }
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
      {isRegister && (
        <p className={styles.notice}>
          Attention : si vous ne mettez pas d'adresse mail valide, le reset du
          mot de passe ne sera pas possible.
        </p>
      )}

      <form className={styles.form} onSubmit={handleSubmit}>
        {isRegister && !isReset && (
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

        {!isReset && (
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
        )}

        {isRegister && !isReset && (
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
          label={
            isSubmitting
              ? "En cours..."
              : isReset
                ? "Envoyer le lien"
                : isRegister
                  ? "Je m'inscris"
                  : "Je me connecte"
          }
          className={styles.submit}
          disabled={isSubmitting}
        />

        {!isRegister && !isReset && (
          <button
            type="button"
            className={styles.resetLink}
            onClick={() => handleModeChange("reset")}
          >
            Mot de passe oublié ?
          </button>
        )}

        {isReset && (
          <button
            type="button"
            className={styles.resetLink}
            onClick={() => handleModeChange("login")}
          >
            Retour à la connexion
          </button>
        )}
      </form>
    </Card>
  );
};

export default Form;
