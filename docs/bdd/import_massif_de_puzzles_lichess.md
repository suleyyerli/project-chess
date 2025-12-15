# Import massif de puzzles Lichess dans PostgreSQL (Projet ChessBattle)

## 1. Contexte et objectif

Dans le cadre du projet **ChessBattle** (Licence / Bac +3), l’objectif est d’alimenter la table `puzzles` de la base de données avec des **puzzles d’échecs variés**, afin d’éviter que les utilisateurs rencontrent toujours les mêmes problèmes lors des parties.

Contraintes fonctionnelles :
- Utiliser une source fiable et massive de puzzles
- Garantir une progression par niveau (Elo)
- Limiter le nombre de puzzles par tranche de difficulté
- Préparer les données au format exact attendu par l’application

La source retenue est la **base officielle de puzzles Lichess**.

---

## 2. Source des données : Lichess Open Database

Lichess met à disposition une base publique contenant **plus de 5,6 millions de puzzles**, évalués et tagués.

- Fichier : `lichess_db_puzzle.csv.zst`
- Taille : ~280 Mo compressé / ~1 Go décompressé
- Format : CSV

### Colonnes principales du CSV Lichess

```text
PuzzleId,FEN,Moves,Rating,RatingDeviation,Popularity,NbPlays,Themes,GameUrl,OpeningTags
```

Colonnes utilisées dans le projet :
- `FEN` : position initiale du puzzle
- `Moves` : solution en notation UCI
- `Rating` : difficulté du puzzle (Elo)
- `Themes` : tags (mateIn1, mateIn2, fork, etc.)

---

## 3. Environnement technique

- **OS** : Windows + WSL2 (Ubuntu)
- **Langage** : Python 3
- **Base de données** : PostgreSQL (conteneur Docker)
- **Gestion des données** : CSV + scripts Python

Organisation recommandée :

```text
/home/user/
├── data/        # données (CSV, dumps)
│   ├── lichess_db_puzzle.csv
│   ├── puzzles_small.csv
│   └── puzzles_mate_123_small.csv
└── scripts/     # scripts Python
    ├── make_small_csv.py
    └── make_mate_123_csv.py
```

---

## 4. Téléchargement et préparation du CSV

### 4.1 Téléchargement

Le fichier `lichess_db_puzzle.csv.zst` est téléchargé depuis le site officiel Lichess, puis copié dans le système de fichiers **WSL** (et non `/mnt/c`) afin d’éviter les problèmes de permissions NTFS.

### 4.2 Décompression

```bash
zstd -d ~/data/lichess_db_puzzle.csv.zst -o ~/data/lichess_db_puzzle.csv
```

Le fichier CSV décompressé (~1 Go) est ensuite utilisé comme source pour les scripts Python.

---

## 5. Script 1 : puzzles généraux (100 par tranche de 50 Elo)

### Objectif

Créer un CSV réduit contenant :
- des puzzles entre **300 et 1999 Elo**
- **100 puzzles maximum par tranche de 50 Elo**
- tous types de puzzles confondus

### Principe

Le script :
1. Lit le CSV ligne par ligne (sans charger tout en mémoire)
2. Classe chaque puzzle dans une tranche `(rating // 50) * 50`
3. Sélectionne aléatoirement 100 puzzles par tranche (reservoir sampling)
4. Génère un fichier `puzzles_small.csv`

### Résultat

- ~3300 puzzles
- répartition équilibrée
- CSV léger et rapide à importer

---

## 6. Script 2 : puzzles "Mat en 1 / 2 / 3" (300 par tranche)

### Objectif

Créer un CSV spécifique pour les puzzles de type **échec et mat** :
- uniquement `mateIn1`, `mateIn2`, `mateIn3`
- exclusion de `mateIn4+`
- **300 puzzles par tranche de 50 Elo**
- Elo entre **300 et 1999**

### Principe

Le script :
1. Filtre les puzzles par Elo
2. Filtre les puzzles dont `Themes` contient `mateIn1|mateIn2|mateIn3`
3. Sélectionne jusqu’à 300 puzzles par tranche
4. Génère `puzzles_mate_123_small.csv`

### Résultat

- 33 tranches
- 9900 puzzles
- forte variété pour le gameplay

---

## 7. Import dans PostgreSQL (Docker)

### 7.1 Copie du CSV dans le conteneur

```bash
docker cp ~/data/puzzles_mate_123_small.csv dev-chessbattle-db:/tmp/puzzles_mate_123_small.csv
```

### 7.2 Table de staging

```sql
CREATE TABLE puzzles_mate_raw (
  fen TEXT,
  moves TEXT,
  rating INT,
  themes TEXT
);

COPY puzzles_mate_raw (fen, moves, rating, themes)
FROM '/tmp/puzzles_mate_123_small.csv'
WITH (FORMAT csv, HEADER true);
```

---

## 8. Transformation et insertion dans la table finale `puzzles`

### Schéma de la table `puzzles`

```sql
CREATE TABLE puzzles (
  id SERIAL PRIMARY KEY,
  fen TEXT NOT NULL,
  solution JSONB NOT NULL,
  elo INT NOT NULL,
  themes TEXT[] NOT NULL
);
```

### Insertion (transformation des données)

```sql
INSERT INTO puzzles (fen, solution, elo, themes)
SELECT
  fen,
  to_jsonb(string_to_array(moves, ' ')),
  rating,
  string_to_array(themes, ' ')
FROM puzzles_mate_raw;
```

Transformations appliquées :
- `moves` → tableau JSON (`solution`)
- `rating` → `elo`
- `themes` → tableau PostgreSQL (`TEXT[]`)

---

## 9. Vérifications finales

### Répartition par tranche

```sql
SELECT (elo/50)*50 AS bucket, COUNT(*)
FROM puzzles
GROUP BY bucket
ORDER BY bucket;
```

### Exemple de requête métier

```sql
SELECT *
FROM puzzles
WHERE themes @> ARRAY['mateIn2']
AND elo BETWEEN 1200 AND 1250
ORDER BY RANDOM()
LIMIT 1;
```

---

## 10. Conclusion

Cette méthode permet :
- un **import massif maîtrisé**
- une **progression Elo cohérente**
- une **grande variété de puzzles**
- une base propre, performante et exploitable côté backend

La solution est réaliste, professionnelle et adaptée à un projet Bac +3 / Licence.

