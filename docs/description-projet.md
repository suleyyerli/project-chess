# ChessBattle — Description complète du projet

## 1. Vision et objectifs

- ChessBattle est une plateforme web qui propose des puzzles tactiques d'échecs jouables en duel temps réel ou en solo chronométré. Chaque affrontement met les joueurs sous pression via un score dynamique et une limite d'erreurs.
- **Objectif pédagogique** : démocratiser l'entraînement tactique en rendant la progression ludique, mesurable et sociale (classements, suivi ELO interne, défis entre amis).

## 2. Cibles et usages

| Profil                                 | Besoin principal                | Usage clé                                              |
| -------------------------------------- | ------------------------------- | ------------------------------------------------------ |
| Joueurs débutants (ELO < 1200)         | Apprendre à calculer rapidement | Mode solo pour s'entraîner                             |
| Joueurs intermédiaires (ELO 1200–1800) | Renforcer la vision tactique    | Duels classés avec gamification                        |
| Administrateurs                        | Superviser la communauté        | Modération, gestion des puzzles, gestion des sanctions |

## 3. Fonctionnalités attendues

- **Score** : points gagnés par puzzle résolu.
- **Timer** : compte à rebours.
- **Gestion des erreurs** : 3 coeurs en duel, 3 en solo. La partie se termine si un des deux utilisateurs fais 3 erreurs.
- **Matchmaking & classement** : ELO interne, ladder, classement publiques.
- **Mode solo** : Permet juste de simuler une partie pour l'entrainement.
- **Mode duel** : parties de 2 minutes l'utilisateur qui résout le plus de problème dans le temps impartis gagne.
- **Social** : liste d'amis, défis directs.
- **Cosmétiques** : Skin de bannière et emblème. Donne un objectif si l'on souhaite avoir un skin en particulier.
- **Admin** : bannissement utilisateurs, analytics.

## 4. Technologies pressenties

| Couche                | Technologie                                   | Rôle                                                 |
| --------------------- | --------------------------------------------- | ---------------------------------------------------- |
| Frontend              | React + Vite                                  | SPA responsive, hydration rapide                     |
| State management      | Zustand                                       | Stores légers (timer, score, overlay duel)           |
| Routing               | React Router                                  | Navigation multi-pages (solo, duel, boutique, admin) |
| Backend HTTP          | Express.js                                    | API REST (auth, puzzles, inventaires, admin)         |
| Temps réel            | Socket.IO (Node)                              | Synchronisation des duels et présence des amis       |
| Base de données       | PostgreSQL                                    | Données relationnelles avec contraintes fortes       |
|                       |
| Auth & sécurité       | Passport.js, JWT, Helm chart / Docker secrets | Auth et déploiement sécurisé                         |
| Gestion et deployment | GitHub Actions                                | build Docker, Github TICKET                          |
