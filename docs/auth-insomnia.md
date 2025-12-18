# Authentification (JWT) — ce qui a été implémenté

Dans ce projet, j’ai mis en place une authentification **simple** côté backend : on crée un compte, on se connecte, et ensuite on appelle des routes protégées avec un **Bearer token**.

Ce document explique rapidement **ce que fait l’API** et **ce que j’ai validé de bout en bout** (signup → login → `/me` → update `/me`).

## Vue d’ensemble

L’auth fonctionne avec un token JWT (“access token”) qui est renvoyé au login.
Ensuite, le front (ou Insomnia) envoie ce token dans le header HTTP `Authorization`.

Le token :
- est signé avec la variable d’environnement `JWT_SECRET`
- contient `sub` (user id), `email`, `pseudo`, `role`
- expire au bout de `7d` (valeur actuelle dans le code)

## Endpoints disponibles

Base URL en local : `http://localhost:4000`

### `POST /auth/signup`

But : créer un utilisateur en base.

Body attendu :

```json
{ "email": "test1@mail.com", "pseudo": "test1", "password": "Password123!" }
```

Réponse :
- `201` avec l’utilisateur créé (sans le mot de passe)
- erreurs possibles : `400` (champs manquants), `409` (email/pseudo déjà utilisé)

Important : le `signup` ne renvoie pas de token. Le token arrive au `login`.

### `POST /auth/login`

But : vérifier email + mot de passe et renvoyer un JWT.

Body attendu :

```json
{ "email": "test1@mail.com", "password": "Password123!" }
```

Réponse :
- `200` avec `{ token, user }`
- erreurs possibles : `404` (utilisateur introuvable), `401` (mot de passe incorrect), `500` si `JWT_SECRET` manque

Exemple de réponse :

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": { "id": 1, "email": "test1@mail.com", "pseudo": "test1" }
}
```

### `GET /auth/me` (protégé)

But : récupérer le profil de l’utilisateur connecté.

Header attendu :

```http
Authorization: Bearer <TOKEN>
```

Réponse :
- `200` avec `{ user: { ... } }`
- erreurs possibles : `401` si token manquant / invalide

### `PUT /auth/me` (protégé)

But : modifier son profil.

Champs supportés :
- `pseudo` (doit être unique)
- `bio`
- `avatar` (string base64) ou `null`

Exemple de body :

```json
{ "bio": "Salut, je teste mon API.", "pseudo": "test1_new" }
```

Réponse :
- `200` avec `{ user: { ... } }` mis à jour
- erreurs possibles : `400` (aucune donnée, avatar mauvais format, etc.), `409` (pseudo déjà utilisé)

Note : si `avatar` est stocké en binaire en base, l’API le renvoie en base64.

### `POST /auth/logout` (protégé)

But : “logout” côté API.

Dans ce projet, le JWT est **stateless** : il n’y a rien à invalider côté serveur.
Donc cet endpoint renvoie juste un message, et c’est le client qui supprime le token.

Réponse :
- `200` `{ "message": "Déconnecté" }`

## Validation (ce que j’ai vérifié)

J’ai validé le scénario complet suivant :

1) Création d’un compte via `POST /auth/signup`
2) Connexion via `POST /auth/login` et récupération du `token`
3) Accès au profil via `GET /auth/me` avec `Authorization: Bearer ...`
4) Mise à jour du profil via `PUT /auth/me` avec le même header

