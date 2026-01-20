# Mode multijoueur temps réel (WebSocket) — documentation technique

Ce document décrit **comment j’ai conçu et implémenté le mode multijoueur** de ChessBattle (backend + frontend), en expliquant :

- l’architecture (Express + Socket.IO + JWT + Prisma + React/Zustand),
- les endpoints REST des défis,
- les événements WebSocket et leurs payloads,
- le déroulé complet d’un match,
- le plan de tests.

---

## 1) Objectif

Mon objectif est d’offrir un **mode multijoueur en temps réel** où :

- deux joueurs reçoivent **le même pack de puzzles** dans le même ordre,
- le score, les erreurs et le timer sont **synchronisés en live**,
- la partie se termine automatiquement (timer, erreurs, abandon),
- les statistiques et les trophées sont **persistés**.

---

## 2) Stack et architecture globale

### Backend

- **Express** pour l’API REST
- **Socket.IO** pour le temps réel
- **JWT** pour authentifier les sockets
- **Prisma + PostgreSQL** pour la persistance

Fichiers clés :

- `backend/src/server.js` : création du serveur HTTP + attache Socket.IO
- `backend/src/socket.js` : gestion Socket.IO (auth, registry, events, rate‑limit)
- `backend/src/services/match-multi.service.js` : logique multijoueur (state, score, fin)
- `backend/src/controllers/challenge.controller.js` : acceptation d’un défi = création du match

### Frontend

- **React** + **Zustand** pour l’état global
- **socket.io-client** pour la connexion WS

Fichiers clés :

- `frontend/src/api/socket.js` : connexion Socket.IO avec JWT
- `frontend/src/pages/Game/Game.jsx` : branchement des events
- `frontend/src/zustandstore/useGameStore.js` : état et actions multi
- `frontend/src/components/GameBoard/GameBoard.jsx` : affichage score / erreurs / timer

---

## 3) Modèle de données (DB)

### Table `challenges`

Je stocke les défis REST dans la table `challenges` :

- `from_user_id`, `to_user_id`
- `status` : `PENDING | ACCEPTED | REFUSED`
- `created_at`

Le modèle Prisma est dans `backend/prisma/schema.prisma` :

```prisma
model challenges {
  id           Int      @id @default(autoincrement())
  from_user_id Int
  to_user_id   Int
  status       String   @default("PENDING")
  created_at   DateTime @default(now()) @db.Timestamptz(6)
}
```

### Tables `matches` et `match_players`

Un match multijoueur est stocké dans :

- `matches` (mode + state JSON + finished_at)
- `match_players` (joueurs, puzzles_solved, is_winner, trophies_delta)

```prisma
model matches {
  id          Int       @id @default(autoincrement())
  mode        String
  finished_at DateTime? @db.Timestamptz(6)
  state       Json?
}

model match_players {
  id             Int     @id @default(autoincrement())
  match_id       Int
  user_id        Int
  is_winner      Boolean @default(false)
  puzzles_solved Int     @default(0)
  trophies_delta Int     @default(0)
}
```

Le champ `matches.state` est un JSON qui contient **l’état temps réel** :

```json
{
  "status": "running",
  "createdAt": "2025-12-30T22:33:56.159Z",
  "currentIndex": 1,
  "puzzleIds": [3883, 3813, ...],
  "packSize": 20,
  "startElo": 399,
  "stepElo": 30,
  "maxErrors": 3,
  "players": {
    "1": { "score": 1, "errors": 0 },
    "2": { "score": 0, "errors": 0 }
  },
  "finishedReason": "timeout",
  "finishedAt": "2025-12-30T22:35:56.159Z",
  "winnerId": 1,
  "isDraw": false
}
```

---

## 4) Brancher Socket.IO au serveur Express

Je crée un serveur HTTP et j’attache Socket.IO (CORS aligné avec le front) :

```js
// backend/src/server.js
const server = http.createServer(app);
initSocket(server);
```

```js
// backend/src/socket.js
io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_ORIGIN || "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});
```

---

## 5) Auth WebSocket (JWT)

Chaque socket doit passer par un middleware `io.use` :

```js
// backend/src/socket.js
io.use((socket, next) => {
  const token = socket.handshake?.auth?.token;
  if (!token) return next(new Error("Unauthorized"));

  const payload = jwt.verify(token, getJwtSecret());
  const userId = Number(payload?.sub);
  if (!Number.isInteger(userId)) return next(new Error("Unauthorized"));

  socket.data.userId = userId;
  next();
});
```

Côté front, je connecte ainsi :

```js
// frontend/src/api/socket.js
socket = io(API_BASE, {
  auth: { token },
  transports: ["websocket"],
});
```

---

## 6) Registry des sockets (multi‑onglets)

Je maintiens un registry `Map userId -> Set<socketId>` pour supporter plusieurs onglets :

```js
// backend/src/socket.js
const userSockets = new Map();

function registerSocket(userId, socketId) {
  const sockets = userSockets.get(userId);
  if (sockets) {
    sockets.add(socketId);
    return;
  }
  userSockets.set(userId, new Set([socketId]));
}
```

Je m’en sers pour :

- **émettre** à tous les sockets d’un même joueur,
- **faire rejoindre** tous les sockets à la room `match:<id>`.

---

## 7) API REST — Défis (challenge)

Endpoints (auth JWT obligatoire) :

- `POST /challenges` → créer un défi
- `GET /challenges/me` → lister mes défis
- `POST /challenges/:id/accept` → accepter
- `POST /challenges/:id/refuse` → refuser

Exemple :

```bash
curl -X POST http://localhost:4000/challenges \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"toUserId": 2}'
```

Réponse normalisée :

```json
{
  "id": 11,
  "from": { "id": 1, "pseudo": "NouveauPseudo" },
  "to": { "id": 2, "pseudo": "sikeligame" },
  "status": "PENDING",
  "createdAt": "2025-12-30T22:27:08.967Z"
}
```

---

## 8) Présence et joueurs en ligne (REST)

Même si le gameplay est en WebSocket, **la présence est gérée en REST** :

- `POST /users/online` → je marque l’utilisateur “en ligne”
- `POST /users/offline` → je le passe “hors ligne”
- `GET /users/active` → je récupère la liste des joueurs actifs

Côté front (`frontend/src/pages/Game/Game.jsx`) :

- j’appelle `setUserOnline()` au montage,
- j’appelle `setUserOffline({ keepalive: true })` sur `pagehide/beforeunload`,
- je charge la liste via `getActiveUsers()`.

---

## 9) Events WebSocket — liste complète

### Events entrants (client → serveur)

**`match:submit`**

```json
{
  "matchId": 31,
  "puzzleId": 3813,
  "result": true
}
```

Ack:

```json
{ "ok": true }
```

Validation côté serveur (extrait) :

```js
// backend/src/services/match-multi.service.js
if (!state.players?.[actorId]) throw new Error("Accès interdit");
if (submittedPuzzleId !== expectedPuzzleId) throw new Error("Puzzle inattendu");
if (normalizeResult(result) === null) throw new Error("Résultat invalide");
```

**`ping`** (test) → reçoit **`pong`**

### Events sortants (serveur → client)

**`challenge:received`**

```json
{
  "id": 11,
  "from": { "id": 1, "pseudo": "NouveauPseudo" },
  "to": { "id": 2, "pseudo": "sikeligame" },
  "status": "PENDING",
  "createdAt": "2025-12-30T22:27:08.967Z"
}
```

**`challenge:accepted`** / **`challenge:refused`**  
(même payload que ci‑dessus, avec `status` mis à jour)

**`match:state`**

```json
{
  "matchId": 31,
  "state": {
    "status": "running",
    "currentIndex": 1,
    "puzzleIds": [3883, 3813, 4045],
    "packSize": 20,
    "startElo": 399,
    "stepElo": 30,
    "maxErrors": 3,
    "players": {
      "1": { "score": 1, "errors": 0 },
      "2": { "score": 0, "errors": 0 }
    }
  }
}
```

**`match:score`**

```json
{ "matchId": 31, "userId": 1, "score": 1 }
```

**`match:error`**

```json
{ "matchId": 31, "userId": 2, "errors": 1, "maxErrors": 3 }
```

**`match:puzzle`**

```json
{
  "matchId": 31,
  "puzzleId": 3813,
  "index": 1,
  "puzzle": {
    "id": 3813,
    "fen": "r2qnrk1/3bbppp/p1n1p3/1pppP3/3P1B2/2PQ1N1P/PPB2PP1/RN3RK1 b - - 2 13",
    "solution": ["c5c4", "d3h7"],
    "elo": 434,
    "themes": ["kingsideAttack", "mate", "mateIn1", "oneMove", "opening"]
  }
}
```

**`match:timer`**

```json
{ "matchId": 31, "timeLeft": 117 }
```

**`match:ended`**

```json
{
  "matchId": 31,
  "winnerId": 1,
  "isDraw": false,
  "reason": "timeout",
  "state": { "...": "state final" }
}
```

**`match:opponent_disconnected`**

```json
{ "matchId": 31, "userId": 2, "opponentId": 1 }
```

---

## 10) Déroulé complet d’un match multijoueur

Voici le scénario complet que j’ai implémenté :

1. **Les deux joueurs se connectent**
   - Le front appelle `connectSocket()` (Socket.IO client).
   - Le backend authentifie avec JWT.

2. **A défie B**
   - REST `POST /challenges` → un challenge est créé.
   - Émission WS `challenge:received` pour B.

3. **B accepte**
   - REST `POST /challenges/:id/accept`.
   - Côté backend je crée un match multi + deux match_players.
   - J’ajoute les sockets des deux joueurs à la room `match:<id>`.
   - J’émet `match:state` + `match:puzzle` (premier puzzle).
   - Je démarre le timer serveur.
   - Je notifie `challenge:accepted` aux deux.

Code réel (extrait) :

```js
// backend/src/controllers/challenge.controller.js
const match = await matchMultiService.createMultiMatch({
  fromUserId: challenge?.from?.id,
  toUserId: challenge?.to?.id,
});
const socketsJoined = joinUsersToRoom(
  [challenge?.from?.id, challenge?.to?.id],
  match.room,
);
startMatchTimer(match.matchId);
io.to(match.room).emit("match:state", {
  matchId: match.matchId,
  state: match.state,
});
```

4. **Les joueurs jouent**
   - Chaque puzzle résolu/raté envoie `match:submit`.
   - Le serveur valide et met à jour l’état.
   - Les deux joueurs reçoivent :
     - `match:score` ou `match:error`
     - `match:state`
     - `match:puzzle` (si puzzle suivant).

5. **Fin de partie**
   - `timer` à 0 → `match:ended`
   - `maxErrors` atteint → `match:ended`
   - déconnexion d’un joueur → `match:opponent_disconnected` puis `match:ended`
   - le match est persisté et les stats mises à jour.

---

## 11) Génération des puzzles (même pack pour les 2 joueurs)

Je réutilise **la même logique que le solo** :

```js
// backend/src/services/match-multi.service.js
const puzzles = await puzzleService.generateProgressivePack({
  count: DEFAULT_PACK_SIZE,
  startElo: DEFAULT_START_ELO,
  stepElo: DEFAULT_STEP_ELO,
});
```

Ensuite je stocke `puzzleIds` dans le state, pour que **les deux joueurs jouent la même séquence**.

Si le pack est épuisé, j’en régénère un nouveau en excluant les puzzles déjà utilisés.

Côté serveur, je garde un cache mémoire `matchStates` (Map matchId → state) pour éviter
de relire la DB à chaque action. À chaque update validée, je persiste `matches.state`
et je mets à jour ce cache.

---

## 12) Timer serveur (2 minutes)

Le timer est serveur‑side, et le client reçoit `match:timer` toutes les secondes.

Variables d’environnement :

- `MATCH_DURATION_MS` (par défaut 120000)
- `MATCH_TIMER_TICK_MS` (par défaut 1000)

Quand le timer arrive à 0, j’appelle `finishMatch` et j’émets `match:ended`.
Je garde aussi un `matchTimers` (Map matchId → interval) pour pouvoir stopper proprement
le timer à la fin d’un match.

---

## 13) Fin de match, stats et trophées

À la fin d’un match multijoueur, je :

- marque `matches.finished_at`
- écrit `winnerId` + `isDraw` dans `state`
- met à jour `match_players` (score, winner, trophées)
- met à jour `users` (nbgame, nbwin, nblose, nbdraw, trophy)

La logique de trophées est dans `backend/src/services/match-multi.service.js` :

```js
function calculateTrophiesDelta({ trophy, isWinner, isDraw }) {
  if (isDraw) return 0;
  if (isWinner) {
    if (trophy >= 1000) return 5;
    return 8;
  }
  if (trophy < 500) return 0;
  return -8;
}
```

---

## 14) Sécurité WebSocket et anti‑abus

Ce que j’ai mis en place :

- **JWT obligatoire** sur chaque socket.
- **Rate‑limit** sur `match:submit` (`MATCH_SUBMIT_MIN_INTERVAL_MS`, par défaut 300ms).
- En cas d’abus, le serveur renvoie l’ack `{ ok: false, message: "Rate limit" }`.
- **Vérification d’appartenance** : un joueur ne peut soumettre que s’il est dans le match.
- **Déconnexion** :
  - si un joueur n’a plus de socket actif, je termine le match,
  - j’émet `match:opponent_disconnected` + `match:ended`.

---

## 15) Frontend — gestion temps réel avec Zustand

### Connexion socket

- `connectSocket()` envoie le token JWT dans `auth`.
- `Game.jsx` branche tous les events WS.

Extrait :

```js
// frontend/src/pages/Game/Game.jsx
const socket = connectSocket();
socket.on("challenge:received", handleChallengeReceived);
socket.on("challenge:accepted", handleChallengeAccepted);
socket.on("challenge:refused", handleChallengeRefused);
socket.on("match:state", handleMatchState);
socket.on("match:puzzle", handleMatchPuzzle);
socket.on("match:timer", handleMatchTimer);
socket.on("match:ended", handleMatchEnded);
```

### Store multi (Zustand)

- `useGameStore` centralise l’état.
- `startMultiMatch()` initialise le match avec `state`.
- `updateMultiState()` met à jour score/erreurs.
- `applyMultiPuzzle()` charge le puzzle dans `useChessStore`.
- `finishMultiMatch()` affiche l’écran de fin.

Exemple d’envoi :

```js
// frontend/src/zustandstore/useGameStore.js
socket.emit(
  "match:submit",
  { matchId, puzzleId: currentPuzzleId, result },
  (ack) => {
    if (!ack?.ok) console.error("match:submit failed", ack?.message);
  },
);
```

---

## 16) Plan de test multijoueur (manuel)

### Pré‑requis

- 2 comptes utilisateurs
- backend + frontend démarrés

### Scénario complet (2 navigateurs)

1. Ouvrir deux navigateurs (A et B).
2. Se connecter avec deux comptes différents.
3. A défie B.
4. B accepte.
5. La partie démarre → timer + puzzle synchronisés.
6. Faire plusieurs puzzles → scores synchronisés.
7. Provoquer 3 erreurs d’un côté → fin de match.
8. Vérifier l’historique `/matches/me`.

### Vérification DB (psql)

```sql
SELECT id, mode, finished_at, state
FROM matches
ORDER BY id DESC
LIMIT 1;

SELECT match_id, user_id, puzzles_solved, is_winner, trophies_delta
FROM match_players
ORDER BY match_id DESC, user_id DESC
LIMIT 4;
```

---

## 17) Script rapide de test WS (optionnel)

Je garde un script pratique pour valider les notifications :
`backend/src/test-challenge-ws.js`

Usage :

```bash
TOKEN_A=... TOKEN_B=... USER_ID_B=2 node backend/src/test-challenge-ws.js
```

---

## 18) Problèmes fréquents / debug

### WebSocket fermé avant handshake

Ca arrive si :

- le token JWT est manquant/expiré,
- le backend refuse (Unauthorized),
- CORS mal configuré (`FRONTEND_ORIGIN`).

### Prisma EAI_AGAIN (script lancé hors container)

Si un script Node essaie d’accéder à `db` hors Docker :

```
getaddrinfo EAI_AGAIN base
```

Solution : exécuter le script **dans le conteneur backend**.

## 20) Fichiers clés (récap)

- `backend/src/server.js`
- `backend/src/socket.js`
- `backend/src/controllers/challenge.controller.js`
- `backend/src/services/match-multi.service.js`
- `frontend/src/api/socket.js`
- `frontend/src/pages/Game/Game.jsx`
- `frontend/src/zustandstore/useGameStore.js`
- `frontend/src/components/GameBoard/GameBoard.jsx`
