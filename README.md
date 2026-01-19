# ChessBattle

Application full-stack de puzzles d'echecs avec mode multi en temps reel.

## Stack

- Frontend : React + Vite + Zustand + Socket.IO client
- Backend : Node.js + Express + Socket.IO
- Donnees : PostgreSQL + Prisma

## Structure du repo

- `frontend/` : SPA React
- `backend/` : API + websocket
- `docs/` : documentation projet
- `docker-compose.yaml` : stack locale complete

## Prerequis

- Node.js 20+
- PostgreSQL (ou Docker)

## Configuration

1. Copier `backend/.env.example` vers `backend/.env`.
2. Ajouter les variables manquantes dans `backend/.env` :
   - `JWT_SECRET` (obligatoire)
   - `JWT_REFRESH_SECRET` (recommande)
   - `FRONTEND_ORIGIN` (ex: `http://localhost:5173`)
   - `RESET_PASSWORD_URL` (ex: `http://localhost:5173/reset-password`)
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `MAIL_FROM` (pour le reset mdp)
3. Cote front, `VITE_API_URL` pointe sur l'API (defaut: `http://localhost:4000`).

## Lancer avec Docker (recommande)

```bash
cp backend/.env.example backend/.env
# ajouter les variables JWT/SMTP dans backend/.env

docker compose up --build
# au premier demarrage, synchroniser le schema
# docker compose exec backend npx prisma db push
```

## Lancer en local

1. Demarrer Postgres.
2. Backend :

```bash
cd backend
npm install
npx prisma db push
npm run dev
```

3. Frontend :

```bash
cd frontend
npm install
npm run dev
```

Acces : `http://localhost:5173` (front) et `http://localhost:4000` (API).

## Authentification

- Login retourne `token` (access) + `refreshToken`.
- Rafraichissement via `POST /auth/refresh` avec `{ "refreshToken": "..." }`.
- Les endpoints proteges utilisent `Authorization: Bearer <token>`.

## Scripts utiles

- `frontend/`
  - `npm run dev` : serveur Vite
  - `npm run build` : build
  - `npm run preview` : preview
- `backend/`
  - `npm run dev` : API + Socket.IO en watch
  - `npm run start` : API en prod
  - `npm run prisma:studio` : Prisma Studio

## Ressources

Voir `docs/` (diagrammes, flux, etc.).
