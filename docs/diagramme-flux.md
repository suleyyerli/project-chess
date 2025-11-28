# Diagramme de flux — ChessBattle (front + JSON Server)

```mermaid
flowchart TD
    A[Utilisateur] --> B["SPA React (Vite) sur http://localhost:5173"]
    B --> C{Navigation via React Router}
    C -->|Home| H[Accueil /home]
    C -->|Game| G[Jeu /game]
    C -->|Classement| F[Classement /classement]
    C -->|Profil| P[Profil /profil]

    %% Classement / Profil
    F --> F1[fetch GET /users]
    F1 --> J[(JSON Server<br/>http://localhost:3000)]
    J --> F2[Liste des users triés par trophées]
    F2 --> F3[Affichage classement]

    P --> P1[fetch GET /users?id=:id]
    P --> P2[fetch GET /matches]
    P1 --> J
    P2 --> J
    J --> P3[Données profil + matchs]
    P3 --> P4[Stats profil]

    %% Jeu
    G --> G1[fetch GET /puzzles?id=:id]
    G1 --> J
    J --> G2[Puzzle chargé dans Zustand]
    G2 --> G3{Coup joueur}
    G3 -->|Correct| G4[Score + puzzle suivant]
    G3 -->|Incorrect| G5[Coeurs/erreurs décrémentés]
    G4 --> G6[Timer ou limite d'erreurs atteinte ?]
    G5 --> G6
    G6 -->|Oui| M[FinishedModal]
    M --> C

    %% Notes
    subgraph Ports
      J -. écoute .-> L1[3000 JSON Server]
      B -. écoute .-> L2[5173 Vite]
    end
```

- Le flux illustre le front actuel branché sur le mock `db.json` via JSON Server (aucun backend temps réel pour l'instant).
- Les endpoints utilisés : `/users`, `/users?id=:id`, `/matches`, `/puzzles?id=:id`.
