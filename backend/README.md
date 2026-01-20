# Backend ChessBattle

API Node.js/Express + Socket.IO pour ChessBattle, avec base PostgreSQL via Prisma.

## Stack

- Express 5
- Socket.IO
- Prisma + PostgreSQL
- JWT (access + refresh)
- Nodemailer (reset mdp)

## Configuration

1. Copier `backend/.env.example` vers `backend/.env`.
2. Completer les variables suivantes :
   - `JWT_SECRET` (obligatoire)
   - `JWT_REFRESH_SECRET` (recommande)
   - `JWT_EXPIRES_IN` (ex: `7d`)
   - `JWT_REFRESH_EXPIRES_IN` (ex: `30d`)
   - `FRONTEND_ORIGIN` (ex: `http://localhost:5173`)
   - `RESET_PASSWORD_URL` (ex: `http://localhost:5173/reset-password`)
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `MAIL_FROM` (pour l'envoi d'emails)

En production, utilisez `backend/.env.production` ou `ENV_FILE=backend/.env.production`
(chemin relatif au dossier courant) avec `NODE_ENV=production`
(les variables requises sont verifiees au demarrage).

## Installation

```bash
npm install
npx prisma db push
```

## Lancer en developpement

```bash
npm run dev
```

## Endpoints principaux

- `GET /health`
- `POST /auth/signup`
- `POST /auth/login`
- `POST /auth/refresh`
- `GET /auth/me`
- `PUT /auth/me`
- `POST /auth/logout`
- `POST /auth/password/forgot`
- `POST /auth/password/reset`
- `GET /puzzles`
- `POST /matches/start`
- `POST /matches/:id/submit`
- `GET /matches/:id/next`
- `POST /matches/:id/finish`
- `POST /challenges`
- `GET /challenges/me`
- `POST /challenges/:id/accept`
- `POST /challenges/:id/refuse`
- `GET /users/leaderboard`
- `GET /users/active`
- `GET /users/:id`
- `POST /users/online`
- `POST /users/offline`
- `POST /reports`
- `GET /admin/users`
- `POST /admin/users/:id/ban`
- `POST /admin/users/:id/unban`
- `DELETE /admin/users/:id`

## WebSocket

Socket.IO utilise le token d'acces :

```js
io(API_URL, { auth: { token } });
```

## Prisma Studio

```bash
npm run prisma:studio
```
