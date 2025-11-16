# Logique alatoire pour les problème côté backend

## Ce que j'ai penser

**exemple:**
**Générer une partie de 20 puzzles, difficulté progressive:**

```js
const puzzles = [];

let startElo = 0;
let step = 50;

for (let i = 0; i < 20; i++) {
  const min = startElo + i * step;
  const max = min + step;

  const puzzle = await db.query(
    `
        SELECT id, fen, solution, elo
        FROM puzzles
        WHERE elo BETWEEN $1 AND $2
        ORDER BY RANDOM()
        LIMIT 1
    `,
    [min, max]
  );

  puzzles.push(puzzle);
}
```

**Résultat côté front**

```js
{
  "puzzles": [ 1, 88, 305, 22, 66, 120, 200, ... ]
}

```

Le front parcourera ainsi les problèmes avec cette logique chaque partie sera différentes.
Les joueuers ne tomberont pas sur les mêmes problèmes à chaque partie.
