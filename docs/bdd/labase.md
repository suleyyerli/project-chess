# Schéma de la base de données ChessBattle

Ce fichier décrit le schéma complet de la base de données, ainsi que le
diagramme Mermaid associé.

---

## Explication du schéma

La base de données de **ChessBattle** gère :

- les utilisateurs\
- les puzzles\
- les amis\
- les défis\
- les signalements\
- l'historique des matchs\
- la modération (bans, signalements)\
- la réinitialisation de mot de passe\

Les détails complets sont visibles dans le code et le diagramme
ci-dessous.

---

## Diagramme Mermaid (mmd)

```mmd
flowchart TD

    %% ========= TABLES ========= %%

    USERS["USERS
    -----------------------
    id PK
    email
    password
    pseudo
    avatar (BYTEA)
    banner
    emblem
    trophy
    nbgame
    nbwin
    nblose
    nbdraw
    bio
    joined_at
    role
    is_active
    nbreport
    is_banned
    ban_reason
    last_seen
    reset_password_token
    reset_password_expires
    ban_label
    banned_until
    "]


    PUZZLES["PUZZLES
    -----------------------
    id PK
    fen
    solution (JSONB)
    elo
    themes (TEXT[])
    "]


    MATCHES["MATCHES
    -----------------------
    id PK
    mode
    finished_at
    state (JSONB)
    "]


    MATCH_PLAYERS["MATCH_PLAYERS
    -----------------------
    id PK
    match_id FK
    user_id FK
    is_winner
    puzzles_solved
    trophies_delta
    "]


    FRIENDS["FRIENDS
    -----------------------
    id PK
    requester_id FK
    receiver_id FK
    status
    created_at
    "]


    CHALLENGES["CHALLENGES
    -----------------------
    id PK
    from_user_id FK
    to_user_id FK
    status
    created_at
    "]


    REPORTS["REPORTS
    -----------------------
    id PK
    reporter_id FK
    reported_id FK
    reason
    created_at
    status
    "]


    %% ========= RELATIONS ========= %%

    %% USERS - FRIENDS
    USERS -- "1 .. n\n(requests)" --> FRIENDS
    USERS -- "1 .. n\n(receives)" --> FRIENDS

    %% USERS - CHALLENGES
    USERS -- "1 .. n\n(sent)" --> CHALLENGES
    USERS -- "1 .. n\n(received)" --> CHALLENGES

    %% USERS - REPORTS
    USERS -- "1 .. n\n(reporter)" --> REPORTS
    USERS -- "1 .. n\n(reported)" --> REPORTS

    %% MATCHES - MATCH_PLAYERS
    MATCHES -- "1 .. n" --> MATCH_PLAYERS

    %% USERS - MATCH_PLAYERS
    USERS -- "1 .. n" --> MATCH_PLAYERS

    %% PUZZLES : aucune relation externe
```

---

# Explication du schéma de la base de données

La base de données de **ChessBattle** est conçue pour gérer :

- les comptes utilisateurs
- le système d’amis
- les défis
- les signalements
- l’historique des parties
- les puzzles d’échecs avec difficulté croissante
- les statistiques des joueurs
- la présence (dernier passage)
- la modération (bans temporaires/permanents)
- la réinitialisation du mot de passe

Le schéma est organisé en **7 tables principales** :  
`USERS`, `PUZZLES`, `MATCHES`, `MATCH_PLAYERS`, `FRIENDS`, `CHALLENGES` et `REPORTS`.

---

## 1. Table `USERS`

La table **USERS** contient toutes les informations liées à un joueur :

- informations de connexion (email, mot de passe)
- identité (pseudo, avatar)
- apparence (banner, emblem)
- statistiques (trophy, nbwin, nblose, etc.)
- statut du compte (role, is_active, last_seen)
- modération (is_banned, ban_reason, ban_label, banned_until, nbreport)
- sécurité (reset_password_token, reset_password_expires)

Chaque utilisateur peut :

- envoyer ou recevoir des demandes d’amis
- envoyer ou recevoir des défis
- participer à plusieurs matchs
- signaler ou être signalé par d’autres joueurs

> **Note :**  
> L’avatar est stocké sur le disque (`/uploads/avatars`) et la colonne `avatar` reste généralement à `NULL`.

**Cardinalités :**

- 1 utilisateur → 0..n demandes d’amis
- 1 utilisateur → 0..n signalements
- 1 utilisateur → 0..n participations de matchs

---

## 2. Table `PUZZLES`

Cette table contient tous les puzzles disponibles dans le jeu.  
Elle sert de **catalogue indépendant**.

Chaque puzzle inclut :

- un **FEN** (position d’échecs)
- une **solution** sous forme de JSONB (liste de coups)
- un **niveau de difficulté (elo)**
- des **thèmes** (`themes`, tableau de tags : mateIn1, fork, sacrifice…)

> **Important :**  
> La table `PUZZLES` n’a _aucune relation directe_ avec les autres tables.  
> Le backend pioche les puzzles en fonction de l'ELO pour générer une partie avec difficulté croissante.

---

## 3. Table `MATCHES`

Cette table représente les **parties jouées**.

Chaque match contient :

- un mode : `solo` ou `multi`
- une date de fin (`finished_at`)
- un état (`state`) au format JSON (progression, score, erreurs, puzzles utilisés)

Un match est lié à ses participants via la table `MATCH_PLAYERS`.

---

## 4. Table `MATCH_PLAYERS`

C’est une table **de liaison** entre :

- un utilisateur (`user_id`)
- un match (`match_id`)

Chaque entrée représente la **participation d’un joueur dans un match**, avec :

- s’il a gagné (`is_winner`)
- combien de puzzles il a résolus (`puzzles_solved`)
- combien de trophées il a gagnés ou perdus (`trophies_delta`)

**Cardinalités :**

- 1 match → 1..n joueurs
- 1 joueur → 0..n participations

---

## 5. Table `FRIENDS`

Gère le système d’amis entre utilisateurs.

Chaque relation contient :

- un `requester_id` (celui qui envoie la demande)
- un `receiver_id` (celui qui reçoit la demande)
- un statut : `pending`, `accepted`, `blocked`
- une date de création (`created_at`)

**Cardinalités :**

- 1 utilisateur → peut envoyer 0..n demandes
- 1 utilisateur → peut recevoir 0..n demandes

---

## 6. Table `CHALLENGES`

Gère les défis envoyés entre joueurs.

Chaque défi contient :

- un `from_user_id` (l’expéditeur)
- un `to_user_id` (le destinataire)
- un statut : `PENDING`, `ACCEPTED`, `REFUSED`
- une date de création (`created_at`)

**Cardinalités :**

- 1 utilisateur → peut envoyer 0..n défis
- 1 utilisateur → peut recevoir 0..n défis

---

## 7. Table `REPORTS`

La table `REPORTS` gère les **signalements** entre utilisateurs.

Chaque report contient :

- `reporter_id` : celui qui signale
- `reported_id` : celui qui est signalé
- un motif
- une date de création (`created_at`)
- un statut (par défaut `pending`)

**Cardinalités :**

- 1 utilisateur → peut signaler 0..n autres utilisateurs
- 1 utilisateur → peut être signalé 0..n fois

---

## Résumé simplifié des relations

- **USERS ↔ FRIENDS** : gestion du réseau d’amis
- **USERS ↔ CHALLENGES** : gestion des défis
- **USERS ↔ REPORTS** : gestion des signalements
- **MATCHES ↔ MATCH_PLAYERS ↔ USERS** : historique des parties
- **PUZZLES** : catalogue indépendant pour les parties

La table `PUZZLES` est volontairement isolée pour permettre au backend de :

- piocher aléatoirement un puzzle
- respecter la progression de difficulté
- renvoyer uniquement les puzzles utilisés

---
