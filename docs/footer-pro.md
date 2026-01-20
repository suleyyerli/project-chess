# Footer pro

Ce document décrit la mise en place du nouveau footer “pro”.

---

## Objectif

- Afficher une zone claire et structurée en bas de page.
- Donner les infos du projet (stack).
- Donner les infos du développeur + liens.

---

## Emplacement

Le footer est global, car il est inclus dans le layout :
`frontend/src/components/Layout/Layout.jsx`

---

## Contenu

Le footer affiche :

- Nom du projet : **ChessBattle**
- Description courte
- Développeur : **suleyyerli**
- Liens : GitHub + Portfolio
- Stack utilisée
- Mention copyright

---

## Fichiers modifiés

- `frontend/src/components/Footer/Footer.jsx`
- `frontend/src/components/Footer/Footer.module.css`

---

## Résultat

Le footer est responsive et propre, visible sur toutes les pages.
