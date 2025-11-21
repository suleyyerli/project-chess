# Diagrammes de séquence ChessBattle

## Duel temps réel

```mermaid
sequenceDiagram
    autonumber
    participant A as Joueur A (client)
    participant F as Frontend React
    participant S as API/Socket backend
    participant B as Joueur B (client)

    A->>F: Clique sur \"Défier B\" (liste joueurs en ligne)
    F->>S: POST /duels/invitations {opponentId=B}
    S-->>F: 201 {invitationId, status: \"sent\"}
    S-->>B: event challenge_received(invitationId, from=A)
    B->>S: PATCH /duels/invitations/:id {decision: \"accepted\"}
    S-->>A: event challenge_response(invitationId, accepted, roomId)
    S-->>B: event challenge_response(invitationId, accepted, roomId)
    A->>S: Socket join(roomId)
    B->>S: Socket join(roomId)
    S-->>A: event start_game(premierPuzzleFEN, timer=120s)
    S-->>B: event start_game(premierPuzzleFEN, timer=120s)
    loop Résolution d'un puzzle
        A->>S: event submit_move(solution)
        S->>S: Vérifie coup / solution, maj score/erreurs
        S-->>A: event score_update | next_puzzle
        S-->>B: Broadcast score_update
    end
    S-->>A: event end_game(resultat, deltaELO)
    S-->>B: event end_game(resultat, deltaELO)
    F-->>A: Modal résumé + score final
```

## Consultation du classement

```mermaid
sequenceDiagram
    autonumber
    participant U as Joueur
    participant F as Frontend React
    participant API as API REST / JSON Server

    U->>F: Ouvre page /classement
    F->>API: GET /users
    API-->>F: 200 [users]
    F->>F: Filtre isbanned=false, trie trophy décroissant
    F-->>U: Rend tableau classement
```
