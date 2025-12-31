# Systeme de trophees (multijoueur)

## Objectif
J'ai mis en place un calcul de trophées simple et lisible pour les matchs
multijoueur, avec des paliers basés sur le nombre de trophées actuel du joueur.
Le but est de récompenser la progression des joueurs débutants, tout en
stabilisant les gains pour les joueurs les plus haut classés.

## Regles appliquees
J'applique les deltas de trophées uniquement en multijoueur au moment où un
match se termine (timer, erreurs max ou abandon).

- Trophee < 500 :
  - Victoire : +8
  - Defaite : 0
- Trophee >= 500 et < 1000 :
  - Victoire : +8
  - Defaite : -8
- Trophee >= 1000 :
  - Victoire : +5
  - Defaite : -8
- Match nul : 0 pour les deux joueurs

## Comment je l'ai mis en place
Le calcul est centralise dans le service multijoueur, au moment où le match
est finalise.

Fichier principal :
- `backend/src/services/match-multi.service.js`

Etapes techniques :
1. Je recupere le trophee courant du joueur depuis le match charge en DB
   (`match.match_players[].users.trophy`).
2. Je calcule `trophiesDelta` via une fonction unique qui applique les paliers
   ci-dessus.
3. Je persiste :
   - `match_players` : `puzzles_solved`, `is_winner`, `trophies_delta`
   - `users` : `nbgame`, `nbwin`, `nblose`, `nbdraw`, `trophy`

Fonctions clefs dans `match-multi.service.js` :
- `calculateTrophiesDelta({ trophy, isWinner, isDraw })`
- `getUserTrophy(match, userId)`
- `finishMatch(...)` : applique et persiste toutes les stats

## Pourquoi dans `finishMatch`
`finishMatch` est declenche quand le match se termine (timer, 3 erreurs,
abandon). C'est l'endroit ideal pour centraliser :
- le gagnant/perdant
- le resultat (nul ou non)
- le calcul et la persistance des stats

## Verification rapide
Apres un match multi, je controle :

```sql
SELECT match_id, user_id, puzzles_solved, is_winner, trophies_delta
FROM match_players
ORDER BY match_id DESC, user_id DESC
LIMIT 4;

SELECT id, trophy, nbgame, nbwin, nblose, nbdraw
FROM users
WHERE id IN (1,2);
```

Si les deltas correspondent aux regles ci-dessus, le systeme de trophees est OK.
