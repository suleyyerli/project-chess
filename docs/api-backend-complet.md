# Endpoints REST du backend ChessBattle (prévisionnel)

Base URL prévue : `https://api.chessbattle.com`. Les réponses incluent des objets `error` standardisés `{ code, message }` en cas d'échec. Auth via JWT (access + refresh).

## Authentification & session

| Verbe | Endpoint              | Requête Body                  | Réponse attendue                          | Fonction                                   |
| ----- | --------------------- | ----------------------------- | ----------------------------------------- | ------------------------------------------ |
| POST  | /auth/signup          | `{ email, pseudo, password }` | `201 { user, accessToken, refreshToken }` | Créer un compte et connecter l'utilisateur |
| POST  | /auth/login           | `{ email, password }`         | `{ user, accessToken, refreshToken }`     | Authentifier et retourner les tokens       |
| POST  | /auth/refresh         | `{ refreshToken }`            | `{ accessToken }`                         | Renouveler le token d'accès                |
| POST  | /auth/logout          | `{ refreshToken }`            | `{ message }`                             | Invalider le refresh token côté serveur    |
| POST  | /auth/password/forgot | `{ email }`                   | `{ message }`                             | Envoyer un lien de réinitialisation        |
| POST  | /auth/password/reset  | `{ token, newPassword }`      | `{ message }`                             | Réinitialiser le mot de passe              |

## Utilisateurs & profils

| Verbe | Endpoint                 | Requête Body                          | Réponse attendue                                     | Fonction                               |
| ----- | ------------------------ | ------------------------------------- | ---------------------------------------------------- | -------------------------------------- |
| GET   | /users/me                | -                                     | `{ user }`                                           | Récupérer le profil connecté           |
| PATCH | /users/me                | `{ bio?, avatar?, banner?, emblem? }` | `{ user }`                                           | Mettre à jour les infos publiques      |
| PATCH | /users/me/password       | `{ currentPassword, newPassword }`    | `{ message }`                                        | Changer le mot de passe                |
| GET   | /users/:id               | -                                     | `{ user }`                                           | Consulter un profil public             |
| GET   | /users/search?pseudo=abc | -                                     | `{ users: [] }`                                      | Recherche par pseudo (auto-complétion) |
| GET   | /users/:id/stats         | -                                     | `{ trophy, nbgame, nbwin, nblose, nbdraw, winrate }` | Stats détaillées d'un joueur           |

## Cosmétiques & déblocage (pas d'achat)

| Verbe | Endpoint           | Requête Body               | Réponse attendue                                                                                  | Fonction                                                                  |
| ----- | ------------------ | -------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| GET   | /cosmetics/banners | -                          | `{ items: [{ id, name, requiredGames }] }`                                                        | Lister les bannières avec le nombre de parties requis                     |
| GET   | /cosmetics/emblems | -                          | `{ items: [{ id, name, requiredTrophy }] }`                                                       | Lister les emblèmes avec le palier de trophées requis                     |
| GET   | /inventory/me      | -                          | `{ banners: [{ id, unlocked }], emblems: [{ id, unlocked }], progress: { gamesPlayed, trophy } }` | Inventaire + progression actuelle                                         |
| POST  | /cosmetics/claim   | `{ itemId, type }`         | `{ inventory }`                                                                                   | Marquer comme débloqué quand le prérequis est atteint (optionnel si auto) |
| PATCH | /users/me/skin     | `{ bannerId?, emblemId? }` | `{ user }`                                                                                        | Équiper une bannière ou un emblème déjà débloqué                          |

## Puzzles (catalogue & génération)

| Verbe  | Endpoint        | Requête Body                        | Réponse attendue     | Fonction                                                             |
| ------ | --------------- | ----------------------------------- | -------------------- | -------------------------------------------------------------------- |
| GET    | /puzzles        | -                                   | `{ puzzles: [] }`    | Lister avec filtres `theme`, `eloMin`, `eloMax`, pagination          |
| GET    | /puzzles/:id    | -                                   | `{ puzzle }`         | Récupérer un puzzle précis                                           |
| GET    | /puzzles/random | -                                   | `{ puzzle }`         | Tirer un puzzle aléatoire (avec filtres `eloMin`, `eloMax`)          |
| GET    | /puzzles/pool   | -                                   | `{ puzzles: [ids] }` | Générer une pool mixée pour une partie (`count`, `progressive=true`) |
| POST   | /puzzles        | `{ fen, solution, elo, theme }`     | `201 { puzzle }`     | Ajouter un puzzle (si le temps)(admin)                               |
| PATCH  | /puzzles/:id    | `{ fen?, solution?, elo?, theme? }` | `{ puzzle }`         | Mettre à jour un puzzle (si le temps)                                |
| DELETE | /puzzles/:id    | -                                   | `{ message }`        | Supprimer un puzzle (si le temps)                                    |

## Parties solo

| Verbe | Endpoint                  | Requête Body                          | Réponse attendue                                         | Fonction                                      |
| ----- | ------------------------- | ------------------------------------- | -------------------------------------------------------- | --------------------------------------------- |
| POST  | /solo/sessions            | `{ mode: "chrono", duration, count }` | `201 { sessionId, puzzles: [ids], timer }`               | Créer une session solo avec pool              |
| GET   | /solo/sessions/:id        | -                                     | `{ session, progress }`                                  | Récupérer l'état courant (pause/reprise)      |
| POST  | /solo/sessions/:id/submit | `{ puzzleId, move }`                  | `{ valid: boolean, score, mistakesLeft, nextPuzzleId? }` | Valider un coup et avancer                    |
| POST  | /solo/sessions/:id/finish | `{ reason }`                          | `{ summary: { score, errors, duration } }`               | Clôturer la session (timer expiré ou erreurs) |

## Duels temps réel & matchmaking

| Verbe  | Endpoint               | Requête Body                   | Réponse attendue                       | Fonction                                            |
| ------ | ---------------------- | ------------------------------ | -------------------------------------- | --------------------------------------------------- | ------------------------- |
| POST   | /duels/queue           | `{ mode: "ranked", eloRange }` | `{ ticketId }`                         | Entrer en file d'attente                            |
| DELETE | /duels/queue           | -                              | `{ message }`                          | Quitter la file                                     |
| POST   | /duels/invitations     | `{ opponentId }`               | `201 { invitationId, status: "sent" }` | Inviter un ami en duel                              |
| PATCH  | /duels/invitations/:id | `{ decision: "accepted"        | "declined" }`                          | `{ status, roomId? }`                               | Répondre à une invitation |
| POST   | /duels/:roomId/submit  | `{ puzzleId, move }`           | `{ valid, scores, nextPuzzleId }`      | Soumettre un coup (fallback HTTP si Socket indispo) |
| POST   | /duels/:roomId/finish  | `{ result }`                   | `{ matchId, deltaELO }`                | Valider la fin de duel                              |

## Historique & classement

| Verbe | Endpoint               | Requête Body | Réponse attendue                          | Fonction                                     |
| ----- | ---------------------- | ------------ | ----------------------------------------- | -------------------------------------------- |
| GET   | /matches               | -            | `{ matches: [] }`                         | Historique global (paginé, tri `finishedAt`) |
| GET   | /matches/:id           | -            | `{ match }`                               | Détail d'un match                            |
| GET   | /matches?userId=123    | -            | `{ matches: [] }`                         | Historique filtré par joueur                 |
| GET   | /leaderboard/global    | -            | `{ users: [] }`                           | Top classement global (limit, offset)        |
| GET   | /leaderboard/around-me | -            | `{ users: [], meRank }`                   | Classement centré sur le joueur              |
| GET   | /stats/daily           | -            | `{ activeUsers, matches, puzzlesSolved }` | Stats agrégées (dashboard)                   |

## Amis & social

| Verbe  | Endpoint               | Requête Body            | Réponse attendue                       | Fonction                  |
| ------ | ---------------------- | ----------------------- | -------------------------------------- | ------------------------- | ---------------------- |
| GET    | /friends               | -                       | `{ friends: [] }`                      | Liste des amis acceptés   |
| POST   | /friends/requests      | `{ toUserId }`          | `201 { requestId, status: "pending" }` | Envoyer une demande d'ami |
| PATCH  | /friends/requests/:id  | `{ decision: "accepted" | "declined" }`                          | `{ status }`              | Répondre à une demande |
| DELETE | /friends/:id           | -                       | `{ message }`                          | Supprimer un ami          |
| POST   | /friends/block         | `{ userId }`            | `{ status: "blocked" }`                | Bloquer un utilisateur    |
| DELETE | /friends/block/:userId | -                       | `{ status: "unblocked" }`              | Débloquer                 |

## Signalements & modération

| Verbe | Endpoint               | Requête Body                        | Réponse attendue                      | Fonction                         |
| ----- | ---------------------- | ----------------------------------- | ------------------------------------- | -------------------------------- |
| POST  | /reports               | `{ reportedId, reason }`            | `201 { reportId, status: "pending" }` | Signaler un joueur               |
| GET   | /reports               | -                                   | `{ reports: [] }`                     | Liste des signalements (admin)   |
| PATCH | /reports/:id           | `{ status, action?, banDuration? }` | `{ report }`                          | Mettre à jour l'état d'un report |
| POST  | /admin/users/:id/ban   | `{ reason, durationDays? }`         | `{ user, bannedUntil? }`              | Bannir un compte                 |
| POST  | /admin/users/:id/unban | -                                   | `{ user }`                            | Lever un ban                     |

## Administration (puzzles & rôles)

| Verbe | Endpoint              | Requête Body | Réponse attendue                           | Fonction                         |
| ----- | --------------------- | ------------ | ------------------------------------------ | -------------------------------- |
| POST  | /admin/users/:id/role | `{ role }`   | `{ user }`                                 | Promouvoir/dégrader (admin/user) |
| GET   | /admin/analytics      | -            | `{ users, matches, revenue?, retention? }` | KPI backend pour dashboard       |
