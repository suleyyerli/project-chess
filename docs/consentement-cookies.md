# Consentement cookies (localStorage)

Ce document explique comment j’ai mis en place le **consentement cookies** côté front.
L’objectif est simple : informer l’utilisateur et stocker son choix, sans complexité.

---

## Objectif

- Afficher une bannière de consentement au premier chargement.
- Enregistrer le choix dans `localStorage`.
- Garder l’authentification via `localStorage` (token JWT).

---

## Comportement

- **Si aucun choix n’a été fait** → la bannière s’affiche.
- **Si un choix existe** → la bannière ne s’affiche plus.

La clé utilisée est :

```
cookie_consent
```

Valeurs possibles :

- `accepted`
- `refused`

Pour réafficher la bannière, il suffit de supprimer cette clé dans le navigateur.

---

## Implémentation

### Composant

Fichier : `frontend/src/components/ui/CookieConsent/CookieConsent.jsx`

```js
const stored = localStorage.getItem("cookie_consent");
if (!stored) setVisible(true);
```

Quand l’utilisateur clique sur un bouton :

```js
localStorage.setItem("cookie_consent", "accepted");
```

### Intégration globale

La bannière est injectée dans le layout commun :

Fichier : `frontend/src/components/Layout/Layout.jsx`

```js
<CookieConsent />
```

---

## Remarques

- Aucun cookie serveur n’est ajouté.
- Le token JWT reste stocké dans `localStorage` (`auth_token`).
- Ce mécanisme est volontairement simple pour rester léger.
