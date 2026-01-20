import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Card from "../../components/ui/Card/Card";
import Button from "../../components/ui/Button/Button";
import { resetPassword } from "../../api/authApi";
import styles from "./ResetPassword.module.css";

const ResetPassword = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const token = params.get("token");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isTokenMissing = useMemo(() => !token, [token]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setFeedback("");

    if (!token) {
      setError("Token manquant.");
      return;
    }

    if (!password.trim()) {
      setError("Mot de passe requis.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    setIsSubmitting(true);
    try {
      await resetPassword({ token, password });
      setFeedback("Mot de passe réinitialisé. Tu peux te connecter.");
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => navigate("/"), 1200);
    } catch (err) {
      setError(err?.message || "Erreur lors du reset.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={styles.page}>
      <Card className={styles.card}>
        <h2 className={styles.title}>Réinitialiser le mot de passe</h2>

        {isTokenMissing ? (
          <p className={styles.error}>
            Token manquant. Recommence la procédure depuis l’email.
          </p>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.field}>
              <span className={styles.label}>Nouveau mot de passe</span>
              <input
                className={styles.input}
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="new-password"
                placeholder="********"
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Confirmer</span>
              <input
                className={styles.input}
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                autoComplete="new-password"
                placeholder="********"
              />
            </label>

            {error && <p className={styles.error}>{error}</p>}
            {feedback && <p className={styles.feedback}>{feedback}</p>}

            <Button
              type="submit"
              label={isSubmitting ? "En cours..." : "Réinitialiser"}
              className={styles.submit}
              disabled={isSubmitting}
            />
          </form>
        )}
      </Card>
    </main>
  );
};

export default ResetPassword;
