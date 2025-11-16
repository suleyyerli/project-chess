{
"puzzles": [
{
"id": 1,
"fen": "6k1/5ppp/8/8/8/7Q/5PPP/6K1 w - - 0 1",
"solution": ["h3c8"]
},
{
"id": 2,
"fen": "r1bq2r1/b4pk1/p1pp1p2/1p2pP2/1P2P1PB/3P4/1PPQ2P1/R3K2R w - - 0 1",
"solution": ["d2h6", "g7h6", "h4f6"]
},
{
"id": 3,
"fen": "2r3k1/p4p2/3Rp2p/1p2P1pK/8/1P4P1/P3Q2P/1q6 b - - 0 1",
"solution": ["b1g6", "h5g4", "g6f5", "g4h5", "f5h3"]
}
],

"users": [
{
"id": 1,
"avatar": "src/assets/berserk.png",
"email": "devtest@gmail.com",
"pseudo": "sikeligame",
"banner": "challenger",
"emblem": "src/assets/iconheader/shieldbattle.png",
"password": "xx1234xx (simulé)",
"trophy": 811,
"nbgame": 503,
"nbwin": 218,
"nblose": 253,
"nbdraw": 32,
"bio": "Fan d'échecs et de puzzles",
"joinedAt": "2020-11-29T00:00:00Z",
"role": "user",
"isactive": true,
"nbreport": 0,
"isbanned": false,
"banreason": null
},

    {
      "id": 2,
      "avatar": "https://i.pravatar.cc/150?img=5",
      "email": "alice@example.com",
      "pseudo": "aliceMoves",
      "banner": "ascendant",
      "emblem": "src/assets/iconheader/shieldbattle.png",
      "password": "azerty (simulé)",
      "trophy": 650,
      "nbgame": 210,
      "nbwin": 120,
      "nblose": 70,
      "nbdraw": 20,
      "bio": "Débutante mais motivée",
      "joinedAt": "2021-04-12T00:00:00Z",
      "role": "user",
      "isactive": true,
      "nbreport": 0,
      "isbanned": false,
      "banreason": null
    },
    {
      "id": 3,
      "avatar": "https://i.pravatar.cc/150?img=7",
      "email": "bob@example.com",
      "pseudo": "bobTheBuilder",
      "banner": "immortal",
      "emblem": "src/assets/iconheader/shieldbattle.png",
      "password": "bobpwd (simulé)",
      "trophy": 420,
      "nbgame": 150,
      "nbwin": 60,
      "nblose": 80,
      "nbdraw": 10,
      "bio": "Joue pour le fun",
      "joinedAt": "2022-02-05T00:00:00Z",
      "role": "user",
      "isactive": true,
      "nbreport": 0,
      "isbanned": false,
      "banreason": null
    },
    {
      "id": 4,
      "avatar": "https://i.pravatar.cc/150?img=12",
      "email": "charlie@example.com",
      "pseudo": "charlie_check",
      "banner": "diamond",
      "emblem": "src/assets/iconheader/shieldbattle.png",
      "password": "charlie123 (simulé)",
      "trophy": 300,
      "nbgame": 90,
      "nbwin": 30,
      "nblose": 50,
      "nbdraw": 10,
      "bio": "Entraîneur occasionnel",
      "joinedAt": "2023-06-18T00:00:00Z",
      "role": "user",
      "isactive": true,
      "nbreport": 0,
      "isbanned": false,
      "banreason": null
    },
    {
      "id": 5,
      "avatar": "https://i.pravatar.cc/150?img=20",
      "email": "dora@example.com",
      "pseudo": "doraQueen",
      "banner": "bronze",
      "emblem": "src/assets/iconheader/shieldbattle.png",
      "password": "doraSim (simulé)",
      "trophy": 120,
      "nbgame": 40,
      "nbwin": 10,
      "nblose": 28,
      "nbdraw": 2,
      "bio": "Apprend encore les bases",
      "joinedAt": "2024-01-22T00:00:00Z",
      "role": "user",
      "isactive": false,
      "nbreport": 4,
      "isbanned": true,
      "banreason": "Accumulation de signalements pour triche"
    }

],

"matches": [
{
"id": 501,
"finishedAt": "2025-01-12T18:32:00Z",
"mode": "multi",
"players": [
{
"userId": 1,
"pseudo": "sikeligame",
"isWinner": true,
"puzzlesSolved": 22,
"trophiesDelta": 5
},
{
"userId": 2,
"pseudo": "aliceMoves",
"isWinner": false,
"puzzlesSolved": 18,
"trophiesDelta": -5
}
]
},
{
"id": 502,
"finishedAt": "2025-01-10T21:05:00Z",
"mode": "solo",
"players": [
{
"userId": 3,
"pseudo": "bobTheBuilder",
"isWinner": true,
"puzzlesSolved": 19,
"trophiesDelta": 4
},
{
"userId": 1,
"pseudo": "sikeligame",
"isWinner": false,
"puzzlesSolved": 16,
"trophiesDelta": -4
}
]
},
{
"id": 503,
"finishedAt": "2025-01-07T09:12:00Z",
"mode": "multi",
"players": [
{
"userId": 4,
"pseudo": "charlie_check",
"isWinner": true,
"puzzlesSolved": 14,
"trophiesDelta": 3
},
{
"userId": 2,
"pseudo": "aliceMoves",
"isWinner": false,
"puzzlesSolved": 11,
"trophiesDelta": -3
}
]
}
]
}
