# Dictionnaire de données – ChessBattle

## Table : USERS

| Champ     | Type              | Null | Défaut | Description                         |
| --------- | ----------------- | ---- | ------ | ----------------------------------- |
| id        | INT, PK           | Non  | Auto   | Identifiant unique de l’utilisateur |
| email     | VARCHAR           | Non  | –      | Email unique du joueur              |
| password  | VARCHAR           | Non  | –      | Mot de passe hashé                  |
| pseudo    | VARCHAR           | Non  | –      | Pseudo unique du joueur             |
| avatar    | VARCHAR           | Oui  | null   | URL de l’avatar                     |
| banner    | VARCHAR           | Oui  | null   | Nom ou code de la bannière          |
| emblem    | VARCHAR           | Oui  | null   | Nom ou chemin de l’emblème          |
| trophy    | INT               | Non  | 0      | Trophées du joueur                  |
| nbgame    | INT               | Non  | 0      | Parties jouées                      |
| nbwin     | INT               | Non  | 0      | Victoires                           |
| nblose    | INT               | Non  | 0      | Défaites                            |
| nbdraw    | INT               | Non  | 0      | Parties nulles                      |
| bio       | TEXT              | Oui  | null   | Biographie du joueur                |
| joinedAt  | DATETIME          | Non  | NOW()  | Date d'inscription                  |
| role      | ENUM(user, admin) | Non  | user   | Rôle                                |
| isactive  | BOOLEAN           | Non  | true   | Le compte est actif                 |
| nbreport  | INT               | Non  | 0      | Signalements reçus                  |
| isbanned  | BOOLEAN           | Non  | false  | L'utilisateur est banni             |
| banreason | TEXT              | Oui  | null   | Raison du bannissement              |

---

## Table : PUZZLES

| Champ     | Type     | Null | Défaut | Description              |
| --------- | -------- | ---- | ------ | ------------------------ |
| id        | INT, PK  | Non  | Auto   | Identifiant du puzzle    |
| fen       | TEXT     | Non  | –      | Position FEN             |
| solution  | JSONB    | Non  | –      | Liste des coups solution |
| elo       | INT      | Non  | –      | Difficulté               |
| theme     | VARCHAR  | Non  | –      | Thème du puzzle          |
| createdAt | DATETIME | Non  | NOW()  | Date d'ajout             |

---

## Table : MATCHES

| Champ      | Type              | Null | Défaut | Description  |
| ---------- | ----------------- | ---- | ------ | ------------ |
| id         | INT, PK           | Non  | Auto   | Identifiant  |
| mode       | ENUM(solo, multi) | Non  | –      | Mode de jeu  |
| finishedAt | DATETIME          | Non  | –      | Fin du match |

---

## Table : MATCH_PLAYERS

| Champ         | Type    | Null | Défaut | Description            |
| ------------- | ------- | ---- | ------ | ---------------------- |
| id            | INT, PK | Non  | Auto   | Participation          |
| match_id      | INT, FK | Non  | –      | Identifiant du match   |
| user_id       | INT, FK | Non  | –      | Identifiant du joueur  |
| isWinner      | BOOLEAN | Non  | false  | Gagnant                |
| puzzlesSolved | INT     | Non  | 0      | Puzzles résolus        |
| trophiesDelta | INT     | Non  | 0      | Gain/perte de trophées |

---

## Table : FRIENDS

| Champ        | Type                             | Null | Défaut  | Description          |
| ------------ | -------------------------------- | ---- | ------- | -------------------- |
| id           | INT, PK                          | Non  | Auto    | Identifiant          |
| requester_id | INT, FK                          | Non  | –       | ID de l'envoyeur     |
| receiver_id  | INT, FK                          | Non  | –       | ID du receveur       |
| status       | ENUM(pending, accepted, blocked) | Non  | pending | Statut de la demande |
| createdAt    | DATETIME                         | Non  | NOW()   | Date de création     |

---

## Table : REPORTS

| Champ       | Type                                  | Null | Défaut  | Description             |
| ----------- | ------------------------------------- | ---- | ------- | ----------------------- |
| id          | INT, PK                               | Non  | Auto    | Identifiant             |
| reporter_id | INT, FK                               | Non  | –       | Utilisateur qui signale |
| reported_id | INT, FK                               | Non  | –       | Utilisateur signalé     |
| reason      | TEXT                                  | Non  | –       | Motif                   |
| createdAt   | DATETIME                              | Non  | NOW()   | Date                    |
| status      | ENUM(pending, reviewed, action_taken) | Non  | pending | État                    |
