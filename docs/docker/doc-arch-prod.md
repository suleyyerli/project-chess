# Mise en place de l’architecture Docker (mode production)

## Objectif

Deployer l’application ChessBattle en production sur un serveur accessible en SSH,
avec Docker, et exposer le domaine via Cloudflare Tunnel.

## Architecture (prod)

```mermaid
flowchart LR
  U[Utilisateur] -->|HTTPS| CF[Cloudflare DNS + Tunnel]

  subgraph S["Serveur Linux"]
    subgraph D["Docker Compose (prod)"]
      FE[Frontend (Nginx)]
      BE[Backend (Node/Express + Socket.IO)]
      DB[(PostgreSQL)]
      UP[(Volume uploads)]
    end
  end

  CF -->|app.DOMAINE| FE
  CF -->|api.DOMAINE| BE
  BE --> DB
  BE --> UP
```

Points clefs :

- Aucun port public n’est necessaire : le tunnel sortant Cloudflare suffit.
- Le frontend est un build statique (Vite) servi par Nginx.
- L’API et le websocket (Socket.IO) passent par `api.DOMAINE`.

## Prerequis serveur

- Acces SSH au serveur.
- Docker Engine + Docker Compose v2 installes.
- Acces Cloudflare (Zero Trust) pour creer un Tunnel.

## Etapes de deploiement

### 1) Recuperer le projet sur le serveur

```bash
mkdir -p /opt/chessbattle
cd /opt/chessbattle
git clone <URL_DU_REPO> .
git checkout dev
```

### 2) Configurer les variables d’environnement

#### Backend (`backend/.env.production`)

Exemple minimal :

```bash
NODE_ENV=production
PORT=4000

DB_HOST=db
DB_PORT=5432
POSTGRES_USER=project_chess_user
POSTGRES_PASSWORD=change_me
POSTGRES_DB=project_chess_db
DATABASE_URL=postgresql://project_chess_user:change_me@db:5432/project_chess_db

JWT_SECRET=change_me
JWT_REFRESH_SECRET=change_me

FRONTEND_ORIGIN=https://app.DOMAINE
RESET_PASSWORD_URL=https://app.DOMAINE/reset-password

SMTP_HOST=smtp.example.com
SMTP_PORT=465
SMTP_USER=example@example.com
SMTP_PASS=change_me
MAIL_FROM=example@example.com
```

#### Frontend (`frontend/.env.production`)

```bash
VITE_API_URL=https://api.DOMAINE
```

### 3) Creer le tunnel Cloudflare

1. Cloudflare Zero Trust > Access > Tunnels > Create tunnel.
2. Recuperer le `CLOUDFLARE_TUNNEL_TOKEN`.
3. Creer les hostnames publics :
   - `app.DOMAINE` -> `http://frontend:80`
   - `api.DOMAINE` -> `http://backend:4000`

Astuce : active les websockets sur ton domaine si besoin (Socket.IO).

### 4) Lancer la stack Docker prod

```bash
CLOUDFLARE_TUNNEL_TOKEN=xxx \
docker compose -f docker-compose.prod.yml up -d --build
```

### 5) Synchroniser le schema Prisma (premier deploiement)

```bash
docker compose -f docker-compose.prod.yml exec backend npx prisma db push
```

### 6) Verifications rapides

- API : `curl https://api.DOMAINE/health`
- Front : ouvrir `https://app.DOMAINE`
- Logs tunnel : `docker compose -f docker-compose.prod.yml logs -f cloudflared`

## Fichiers de prod utilises

- `docker-compose.prod.yml`
- `backend/Dockerfile.prod`
- `frontend/Dockerfile.prod`
- `frontend/nginx.conf`

## Depannage rapide

- **502 via Cloudflare** : verifier que `cloudflared` tourne et que les hostnames
  pointent vers `http://frontend:80` / `http://backend:4000`.
- **CORS** : verifier `FRONTEND_ORIGIN` dans `backend/.env.production`.
- **API non accessible** : `docker compose logs backend -f`.
