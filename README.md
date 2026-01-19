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

### Backend

1. Copier `backend/.env.example` vers `backend/.env`.
2. Completer les variables manquantes (`JWT_SECRET`, SMTP, etc.).
3. En production, utiliser `backend/.env.production` ou `ENV_FILE=backend/.env.production`
   (chemin relatif au dossier courant) avec `NODE_ENV=production`
   (les variables requises sont alors verifiees au demarrage).

### Frontend

- En dev, utiliser `frontend/.env` avec `VITE_API_URL` (defaut local).
- En prod, utiliser `frontend/.env.production` (ou `vite build --mode <mode>`).
  `VITE_API_URL` est obligatoire car il est injecte au build.

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
