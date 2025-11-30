# Documentation des endpoints API (JSON Server)

Les appels front utilisent `json-server` lancé depuis `frontend` (`npm run api`). Base URL locale : `http://localhost:3000`. Les routes sont RESTful et supportent `GET`, `POST`, `PUT/PATCH`, `DELETE` ainsi que les filtres/query params fournis par json-server (`?_sort=...`, `?_order=...`, etc.).

## Puzzles
- Route : `/puzzles`
- Données : `{ id: number, fen: string, solution: string[] }`
- Endpoints principaux :
  - `GET /puzzles` : liste complète des puzzles.
  - `GET /puzzles/:id` ou `GET /puzzles?id=:id` : un puzzle par identifiant (le front fait `GET /puzzles?id=ID`).
  - `POST /puzzles` : créer un puzzle (exemple de body : `{ "fen": "...", "solution": ["a1a2"] }`).
  - `PUT/PATCH /puzzles/:id` : mise à jour d’un puzzle existant.
  - `DELETE /puzzles/:id` : suppression.
- Exemple de réponse `GET /puzzles?id=1` :
```json
[
  {
    "id": 1,
    "fen": "6k1/5ppp/8/8/8/7Q/5PPP/6K1 w - - 0 1",
    "solution": ["h3c8"]
  }
]
```
- Appels front : `fetchPuzzleById(id)` dans `src/api/puzzleApi.js`.

## Users
- Route : `/users`
- Données : `{ id, avatar, email, pseudo, banner, emblem, password, trophy, nbgame, nbwin, nblose, nbdraw, bio, joinedAt, role, isactive, nbreport, isbanned, banreason }`
- Endpoints principaux :
  - `GET /users` : liste complète des utilisateurs.
  - `GET /users/:id` ou `GET /users?id=:id` : un utilisateur par identifiant (le front utilise la variante query).
  - `POST /users` : création.
  - `PUT/PATCH /users/:id` : mise à jour (par exemple modifier `isactive`, `isbanned`, `trophy`…).
  - `DELETE /users/:id` : suppression.
- Exemple de réponse `GET /users?id=1` :
```json
[
  {
    "id": 1,
    "pseudo": "sikeligame",
    "trophy": 811,
    "isactive": true,
    "isbanned": false,
    "...": "autres champs du profil"
  }
]
```
- Appels front :
  - `getUsersClassement()` (`GET /users`) puis tri côté client par trophée et exclusion des bannis.
  - `getActiveUsers()` (`GET /users`) puis filtre côté client `isactive && !isbanned`.
  - `getUserById(userId)` (`GET /users?id={userId}`) pour la page profil.

## Matches
- Route : `/matches`
- Données : `{ id, finishedAt, mode, players: [{ userId, pseudo, isWinner, puzzlesSolved, trophiesDelta }] }`
- Endpoints principaux :
  - `GET /matches` : historique complet.
  - `GET /matches/:id` : un match précis.
  - `GET /matches?_sort=finishedAt&_order=desc` : tri du plus récent au plus ancien (pattern utilisé par le front).
  - `POST /matches` : enregistrer un nouveau match.
  - `PUT/PATCH /matches/:id` : mise à jour d’un match existant.
  - `DELETE /matches/:id` : suppression.
- Exemple de réponse `GET /matches?_sort=finishedAt&_order=desc` :
```json
[
  {
    "id": 501,
    "finishedAt": "2025-01-12T18:32:00Z",
    "mode": "multi",
    "players": [
      { "userId": 1, "pseudo": "sikeligame", "isWinner": true, "puzzlesSolved": 22, "trophiesDelta": 5 },
      { "userId": 2, "pseudo": "aliceMoves", "isWinner": false, "puzzlesSolved": 18, "trophiesDelta": -5 }
    ]
  },
  "..."
]
```
- Appels front : `getMatchesByUser(userId)` fait `GET /matches?_sort=finishedAt&_order=desc` puis filtre côté client les matchs où `players` contient le `userId`.

## Récapitulatif rapide
- Base URL : `http://localhost:3000` (lancée via `npm run api` dans `frontend`).
- Collections exposées par `db.json` : `puzzles`, `users`, `matches`.
- Tous les verbes REST sont disponibles sur chaque collection (`GET/POST/PUT/PATCH/DELETE /<collection>[/id]`).
- Filtres courants : `?id=...` (lookup par id), `_sort` + `_order` (tri), et tout autre opérateur json-server selon besoin (ex : `?field_like=...`, `?field_ne=...`, `?field_gte=...`).
