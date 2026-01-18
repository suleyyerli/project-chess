# Diagramme de flux — ChessBattle (Front + API + Socket)

```mermaid
flowchart TD
    U[Utilisateur] --> F["SPA React (Vite)"]
    F --> R{Navigation}

    R -->|Home| H[Accueil /home]
    R -->|Game| G[Jeu /game]
    R -->|Classement| L[Classement /classement]
    R -->|Profil| P[Profil /profil]
    R -->|Admin| A[Admin /admin]

    subgraph REST_API["API REST (Express)"]
      AUTH["/auth/signup | /auth/login | /auth/me | /auth/password/*"]
      USERS["/users/leaderboard | /users/active | /users/:id | /users/online/offline"]
      MATCHES["/matches/start | /matches/:id/submit | /matches/:id/next | /matches/:id/finish"]
      CHALL["/challenges (create/accept/refuse)"]
      REPORTS["/reports (create)"]
      ADMIN["/admin/users (ban/unban/delete)"]
      PUZZLES["/puzzles | /puzzles/:id | /puzzles/random"]
    end

    subgraph SOCKET["Socket.io (matchs multi)"]
      S1["challenge:received / challenge:accepted / challenge:refused"]
      S2["match:state / match:puzzle / match:timer / match:ended"]
      S3["Client -> match:submit"]
    end

    subgraph DB["PostgreSQL"]
      T1[(users)]
      T2[(puzzles)]
      T3[(matches)]
      T4[(match_players)]
      T5[(challenges)]
      T6[(reports)]
      T7[(friends)]
    end

    %% Classement / Profil
    L --> USERS --> T1
    P --> AUTH --> T1
    P --> USERS --> T1

    %% Présence en ligne
    G --> USERS --> T1

    %% Jeu solo
    G --> MATCHES --> T3
    MATCHES --> T4
    MATCHES --> T2

    %% Défis + multi
    G --> CHALL --> T5
    CHALL --> SOCKET
    SOCKET --> T3
    SOCKET --> T4
    SOCKET --> T2

    %% Signalement & admin
    G --> REPORTS --> T6
    A --> ADMIN --> T1

    %% Accès direct puzzles (debug/admin)
    H --> PUZZLES --> T2

    %% Notes
    subgraph Ports
      F -. écoute .-> P1[5173 Vite]
      REST_API -. écoute .-> P2[4000 API]
      SOCKET -. écoute .-> P3[4000 Socket.io]
    end
```

- Le front consomme l’API REST pour l’auth, le profil, le classement et les matchs solo.
- Les matchs multi sont orchestrés via **Socket.io** après acceptation d’un défi.
