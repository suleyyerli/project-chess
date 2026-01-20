# Reset mot de passe (Nodemailer)

Ce document décrit le reset de mot de passe par email (ticket #68).

---

## Objectif

- Permettre à un utilisateur de demander un reset.
- Envoyer un email avec un lien + token.
- Réinitialiser le mot de passe via un token valide.

---

## DB (à faire via psql)

```sql
ALTER TABLE users ADD COLUMN reset_password_token TEXT;
ALTER TABLE users ADD COLUMN reset_password_expires TIMESTAMPTZ;

CREATE INDEX IF NOT EXISTS idx_users_reset_token ON users(reset_password_token);
CREATE INDEX IF NOT EXISTS idx_users_reset_expires ON users(reset_password_expires);
```

Puis :

```
npx prisma db pull
npx prisma generate
```

---

## Endpoints

### 1) Demande de reset

`POST /auth/password/forgot`

Body :

```json
{ "email": "user@mail.com" }
```

Réponse (toujours la même, pour éviter l’énumération) :

```json
{ "message": "Si un compte existe, un email a été envoyé." }
```

---

### 2) Reset avec token

`POST /auth/password/reset`

Body :

```json
{
  "token": "TOKEN_RECU_PAR_MAIL",
  "password": "nouveauMotDePasse"
}
```

Réponse :

```json
{ "message": "Mot de passe réinitialisé." }
```

---

## Front (UX)

### Landing (connexion)

- Un bouton **“Mot de passe oublié ?”** est ajouté sur le formulaire de connexion.
- Il envoie l’email via `POST /auth/password/forgot`.

### Page de reset

Route : `/reset-password?token=...`

- L’utilisateur saisit le nouveau mot de passe.
- On appelle `POST /auth/password/reset`.
- Redirection vers la landing après succès.

Fichiers front :

- `frontend/src/components/Form/Form.jsx`
- `frontend/src/pages/ResetPassword/ResetPassword.jsx`

---

## Email (Nodemailer)

### Variables d’environnement à ajouter dans `backend/.env`

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=yapmaa67720@gmail.com
SMTP_PASS=APP_PASSWORD_GMAIL
MAIL_FROM=yapmaa67720@gmail.com
RESET_PASSWORD_URL=http://localhost:5173/reset-password
```

> Pour Gmail, il faut activer la 2FA et générer un **App Password**.

---

## Notes de sécurité

- Le token est hashé avant d’être stocké en DB.
- Le reset expire (par défaut 1h).
- L’email est envoyé uniquement si l’utilisateur existe, mais la réponse est toujours la même.

---

## Fichiers modifiés

- `backend/src/services/auth.service.js`
- `backend/src/controllers/auth.controller.js`
- `backend/src/routes/auth.routes.js`
- `backend/src/repositories/user.repository.js`
- `backend/src/lib/mailer.js`
- `backend/package.json`
- `frontend/src/components/Form/Form.jsx`
- `frontend/src/pages/ResetPassword/ResetPassword.jsx`
