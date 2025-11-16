---
title: Diagramme de cas d'utilisation - ChessBattle
---

flowchart LR
subgraph Actors
player((Joueur))
admin((Admin))
end

    subgraph "ChessBattle"
        login([Se connecter])
        solve([Résoudre un puzzle])
        duel([Lancer un duel])
        leaderboard([Consulter le classement])
        challenge([S'entraîner])
        profile([Gérer son profil])
        report([Signaler un joueur])
        moderate([Modérer les joueurs])
        manageUser([Bannir])
    end

    player --> login
    player --> solve
    player --> duel
    player --> leaderboard
    player --> challenge
    player --> profile
    player --> report

    admin --> login
    admin --> manageUser
    admin --> moderate
