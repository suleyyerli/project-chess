# Logique aléatoire pour les puzzles côté backend

## Principe réel utilisé (progression Elo)

Le backend construit un pack de puzzles avec une difficulté progressive :

- **taille du pack** : 20 puzzles par défaut
- **Elo de départ** : 399
- **incrément** : +30 Elo par puzzle
- **exclusion des puzzles déjà utilisés**
- **fallback** : si aucune trouvaille dans la tranche, on élargit la recherche

```js
const DEFAULT_PACK_SIZE = 20;
const DEFAULT_START_ELO = 399;
const DEFAULT_STEP_ELO = 30;

async function generateProgressivePack({
  count = DEFAULT_PACK_SIZE,
  startElo = DEFAULT_START_ELO,
  stepElo = DEFAULT_STEP_ELO,
  excludeIds = [],
} = {}) {
  const used = new Set(excludeIds);
  const puzzles = [];

  for (let i = 0; i < count; i += 1) {
    const minElo = Math.max(0, Math.floor(startElo + i * stepElo));
    const maxElo = minElo + stepElo;

    let puzzle = await findRandomByEloRange({
      minElo,
      maxElo,
      excludeIds: Array.from(used),
      take: 1,
    });

    if (!puzzle) {
      const widen = stepElo * 3;
      puzzle = await findRandomByEloRange({
        minElo: Math.max(0, minElo - widen),
        maxElo: maxElo + widen,
        excludeIds: Array.from(used),
        take: 1,
      });
    }

    if (!puzzle) {
      puzzle = await findRandomByEloRange({
        minElo: 0,
        maxElo: 10000,
        excludeIds: Array.from(used),
        take: 1,
      });
    }

    if (!puzzle) break;

    puzzles.push(puzzle);
    used.add(puzzle.id);
  }

  return puzzles;
}
```

## Exemple de flux (solo)

1. `POST /matches/start` → création d’un match + premier puzzle
2. `POST /matches/:id/submit` → validation du coup, mise à jour score/erreurs
3. `GET /matches/:id/next` → puzzle suivant (progression Elo)
4. `POST /matches/:id/finish` → fin de partie (erreurs max, abandon, etc.)

Ce mécanisme garantit :

- une montée en difficulté progressive
- la non-répétition des puzzles sur un même match
- un fallback si une tranche Elo est vide
