# Dictionnaire de données – ChessBattle

## Table : USERS

| Champ                  | Type        | Null | Défaut | Description                                                 |
| ---------------------- | ----------- | ---- | ------ | ----------------------------------------------------------- |
| id                     | INT, PK     | Non  | Auto   | Identifiant unique de l’utilisateur                         |
| email                  | TEXT        | Non  | –      | Email unique du joueur                                      |
| password               | TEXT        | Non  | –      | Mot de passe hashé                                          |
| pseudo                 | TEXT        | Non  | –      | Pseudo unique du joueur                                     |
| avatar                 | BYTEA       | Oui  | null   | Avatar (stockage disque côté app, colonne conservée)        |
| banner                 | TEXT        | Oui  | null   | Nom ou chemin de la bannière                                |
| emblem                 | TEXT        | Oui  | null   | Nom ou chemin de l’emblème                                  |
| trophy                 | INT         | Non  | 0      | Trophées du joueur                                          |
| nbgame                 | INT         | Non  | 0      | Parties jouées                                              |
| nbwin                  | INT         | Non  | 0      | Victoires                                                   |
| nblose                 | INT         | Non  | 0      | Défaites                                                    |
| nbdraw                 | INT         | Non  | 0      | Parties nulles                                              |
| bio                    | TEXT        | Oui  | null   | Biographie du joueur                                        |
| joined_at              | TIMESTAMPTZ | Non  | NOW()  | Date d'inscription                                          |
| role                   | TEXT        | Non  | user   | Rôle (valeurs utilisées : user, admin)                      |
| is_active              | BOOLEAN     | Non  | true   | Compte actif                                                |
| nbreport               | INT         | Non  | 0      | Signalements reçus                                          |
| is_banned              | BOOLEAN     | Non  | false  | Utilisateur banni                                           |
| ban_reason             | TEXT        | Oui  | null   | Raison du bannissement                                      |
| last_seen              | TIMESTAMPTZ | Oui  | null   | Dernière activité connue                                    |
| reset_password_token   | TEXT        | Oui  | null   | Jeton de réinitialisation                                   |
| reset_password_expires | TIMESTAMPTZ | Oui  | null   | Expiration du jeton                                         |
| ban_label              | TEXT        | Oui  | null   | Libellé de bannissement (Triche, Anti-jeu)                  |
| banned_until           | TIMESTAMPTZ | Oui  | null   | Date de fin du bannissement (null = permanent ou non banni) |

---

## Table : PUZZLES

| Champ    | Type    | Null | Défaut | Description                      |
| -------- | ------- | ---- | ------ | -------------------------------- |
| id       | INT, PK | Non  | Auto   | Identifiant du puzzle            |
| fen      | TEXT    | Non  | –      | Position FEN                     |
| solution | JSONB   | Non  | –      | Liste des coups solution         |
| elo      | INT     | Non  | –      | Difficulté                       |
| themes   | TEXT[]  | Non  | –      | Tags (mateIn1, fork, sacrifice…) |

---

## Table : MATCHES

| Champ       | Type        | Null | Défaut | Description                                   |
| ----------- | ----------- | ---- | ------ | --------------------------------------------- |
| id          | INT, PK     | Non  | Auto   | Identifiant                                   |
| mode        | TEXT        | Non  | –      | Mode de jeu (valeurs utilisées : solo, multi) |
| finished_at | TIMESTAMPTZ | Oui  | null   | Fin du match                                  |
| state       | JSONB       | Oui  | null   | État de la partie (progression, erreurs…)     |

---

## Table : MATCH_PLAYERS

| Champ          | Type    | Null | Défaut | Description            |
| -------------- | ------- | ---- | ------ | ---------------------- |
| id             | INT, PK | Non  | Auto   | Participation          |
| match_id       | INT, FK | Non  | –      | Identifiant du match   |
| user_id        | INT, FK | Non  | –      | Identifiant du joueur  |
| is_winner      | BOOLEAN | Non  | false  | Gagnant                |
| puzzles_solved | INT     | Non  | 0      | Puzzles résolus        |
| trophies_delta | INT     | Non  | 0      | Gain/perte de trophées |

---

## Table : FRIENDS

| Champ        | Type        | Null | Défaut  | Description                         |
| ------------ | ----------- | ---- | ------- | ----------------------------------- |
| id           | INT, PK     | Non  | Auto    | Identifiant                         |
| requester_id | INT, FK     | Non  | –       | ID de l'envoyeur                    |
| receiver_id  | INT, FK     | Non  | –       | ID du receveur                      |
| status       | TEXT        | Non  | pending | Statut (pending, accepted, blocked) |
| created_at   | TIMESTAMPTZ | Non  | NOW()   | Date de création                    |

---

## Table : CHALLENGES

| Champ        | Type        | Null | Défaut  | Description                         |
| ------------ | ----------- | ---- | ------- | ----------------------------------- |
| id           | INT, PK     | Non  | Auto    | Identifiant                         |
| from_user_id | INT, FK     | Non  | –       | ID de l'expéditeur                  |
| to_user_id   | INT, FK     | Non  | –       | ID du destinataire                  |
| status       | TEXT        | Non  | PENDING | Statut (PENDING, ACCEPTED, REFUSED) |
| created_at   | TIMESTAMPTZ | Non  | NOW()   | Date de création                    |

---

## Table : REPORTS

| Champ       | Type        | Null | Défaut  | Description               |
| ----------- | ----------- | ---- | ------- | ------------------------- |
| id          | INT, PK     | Non  | Auto    | Identifiant               |
| reporter_id | INT, FK     | Non  | –       | Utilisateur qui signale   |
| reported_id | INT, FK     | Non  | –       | Utilisateur signalé       |
| reason      | TEXT        | Non  | –       | Motif (Triche, Anti-jeu)  |
| created_at  | TIMESTAMPTZ | Non  | NOW()   | Date                      |
| status      | TEXT        | Non  | pending | État (par défaut pending) |
