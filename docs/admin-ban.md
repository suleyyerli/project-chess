# Système de bannissement (admin) + signalement utilisateur

Ce document décrit le système de bannissement simple :
- **Un joueur peut signaler un adversaire** (labels “Triche” / “Anti‑jeu”).
- **Un admin voit les joueurs + nombre de signalements** et décide d’un ban.

---

## 1) Modifs DB (psql)

```sql
ALTER TABLE users ADD COLUMN ban_label TEXT;
ALTER TABLE users ADD COLUMN banned_until TIMESTAMPTZ;

CREATE INDEX IF NOT EXISTS idx_users_ban_label ON users(ban_label);
CREATE INDEX IF NOT EXISTS idx_users_banned_until ON users(banned_until);
```

Puis :
```
npx prisma db pull
npx prisma generate
```

---

## 2) Signalement (user)

Endpoint :
```
POST /reports
```
Body :
```json
{ "reportedId": 2, "label": "Triche" }
```

Labels autorisés :
- `Triche`
- `Anti‑jeu`

> Un signalement ne bannit pas automatiquement, il sert juste d’alerte admin.

---

## 3) Admin — Liste des joueurs

Endpoint :
```
GET /admin/users?search=&status=all|banned|active&minReports=
```

Réponse :
```json
[
  {
    "id": 2,
    "pseudo": "sikeligame",
    "email": "test@mail.com",
    "trophy": 450,
    "isBanned": false,
    "banLabel": null,
    "bannedUntil": null,
    "reportCount": 3
  }
]
```

---

## 4) Admin — Bannir / Débannir

### Bannir
```
POST /admin/users/:id/ban
```
Body :
```json
{ "label": "Triche", "duration": "1w" }
```

Durées supportées :
- `1h`
- `1w`
- `1m`
- `permanent`

### Débannir
```
POST /admin/users/:id/unban
```

---

## 5) Admin — Supprimer un compte

```
DELETE /admin/users/:id
```

---

## 6) Fichiers modifiés

- `backend/src/middlewares/admin.middleware.js`
- `backend/src/routes/admin.routes.js`
- `backend/src/controllers/admin.controller.js`
- `backend/src/services/admin.service.js`
- `backend/src/routes/report.routes.js`
- `backend/src/controllers/report.controller.js`
- `backend/src/services/report.service.js`
- `backend/src/repositories/report.repository.js`
- `backend/src/repositories/user.repository.js`
