# ChessBattle

Front-end React (Vite) branche sur un JSON Server local pour simuler l'API. Le backend Express/Socket n'est pas encore en place; tout s'appuie sur le mock JSON.

## Architecture

- `frontend/` : SPA React + Vite et mock API (`db.json`).
- `docs/` : cahier de conception (description, diagrammes, bdd, figma).
- `backend/` : dossier reserve pour le futur serveur Node.

## Prerequis

- Node.js 20+ et npm.
- Deux terminaux (un pour le front, un pour le JSON Server).

## Installation

```bash
cd frontend
npm install
```

## Lancer en developpement

1. Lancer le mock API (port 3000) :

```bash
cd frontend
npm run api
```

2. Dans un autre terminal, lancer le front (port 5173) :

```bash
cd frontend
npm run dev
```

3. Ouvrir http://localhost:5173. Le front consomme le JSON Server sur http://localhost:3000.

## Donnees et endpoints (JSON Server)

- Base : `frontend/db.json` (puzzles, users, matches). Les modifications du fichier sont auto-reflechies.
- Endpoints principaux :
  - `GET /puzzles`
  - `GET /users`
  - `GET /matches`
- Exemple : `GET http://localhost:3000/users?id=1` renvoie le profil utilise sur la page Profil.
- Les assets references par `avatar` ou `emblem` pointent soit vers `src/assets`, soit vers des URLs externes.

## Scripts utiles (dans `frontend/`)

- `npm run dev` : serveur Vite.
- `npm run api` : JSON Server sur le `db.json` local.
- `npm run build` : build de production.
- `npm run preview` : previsualisation du build.
- `npm run lint` : linting eslint.

## Etat fonctionnel actuel

- Routes : `/` (Landing), `/home`, `/game`, `/classement`, `/profil`.
- Stores et API client bases sur `http://localhost:3000` (`src/api/*.js`).
- Auth/temps reel non encore implantes; les donnees sont statiques/mockees.

## Ressources projet

Consulter `docs/description-projet.md` pour la vision produit, `docs/diagrammes-sequence.md` pour les flows et `docs/JSONSERVER.md` pour un extrait des donnees mockees.
Dossier figma pour les maquettes et la charte graphique du projet.
