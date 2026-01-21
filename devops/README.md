# Guide de deploiement d'une application React avec PostgreSQL sous Linux (ChessBattle)

Lien du depot GitHub : https://github.com/suleyyerli/project-chess

Ce document decrit exactement le deploiement mis en place pour ChessBattle.
Le projet est deployee en production via Docker Compose, Nginx et Cloudflare Tunnel.

## Table des matieres

- [Introduction](#introduction)
- [Prerequis](#prerequis)
- [Hebergement](#hebergement)
- [Preparation du serveur](#preparation-du-serveur)
- [Configuration PostgreSQL](#configuration-postgresql)
- [Deploiement de l'application React](#deploiement-de-lapplication-react)
- [Backend et API](#backend-et-api)
- [Mise en production](#mise-en-production)
- [Reverse proxy et SSL](#reverse-proxy-et-ssl)
- [Securisation de l'environnement](#securisation-de-lenvironnement)
- [Resolution des problemes](#resolution-des-problemes)
- [Conclusion](#conclusion)

## Introduction

ChessBattle est une application web composee :

- d'un frontend React (Vite) servi en fichiers statiques
- d'un backend Node/Express avec Socket.IO
- d'une base PostgreSQL

Deploiement utilise :

- Docker Compose en production
- Nginx en front (serveur statique) et en proxy
- Cloudflare Tunnel pour exposer le domaine `https://suleyyerli.xyz`

Architecture (prod) :

![Docker Compose](images/merimarchiprod.png)

![Docker Compose](images/excaarchiprodpng.png)

## Prerequis

- VPS Linux avec acces SSH
- Un nom de domaine (ici : `suleyyerli.xyz`)
- Compte Cloudflare avec Zero Trust active
- Docker Engine + Docker Compose v2
- Git

## Hebergement

Le deploiement est fait sur un VPS Linux (TP) avec Cloudflare Tunnel.
L'offre mutualisee O2Switch ne permet pas de faire tourner Node/Express et PostgreSQL,
donc elle n'est pas utilisee pour l'API. Le deploiement complet est sur le VPS.

## Preparation du serveur

Mise a jour et outils de base :

```bash
sudo apt update && sudo apt -y upgrade
sudo apt -y install git curl ufw
```

Pare-feu (UFW) :

```bash
sudo ufw allow OpenSSH
sudo ufw enable
```

Installation Docker :

```bash
# Add Docker's official GPG key:
sudo apt update
sudo apt install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
sudo tee /etc/apt/sources.list.d/docker.sources <<EOF
Types: deb
URIs: https://download.docker.com/linux/ubuntu
Suites: $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}")
Components: stable
Signed-By: /etc/apt/keyrings/docker.asc
EOF

sudo apt update

sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

sudo usermod -aG docker $USER
docker compose version
```

## Configuration PostgreSQL

PostgreSQL est fourni par le service `db` de `docker-compose.prod.yaml`.
La base est creee automatiquement au premier demarrage a partir des variables d'environnement.
Les donnees sont stockees dans le volume `db_data`.

Dockerfile utilise :
`docker/images/database.dockerfile`

```dockerfile
FROM postgres:18-alpine

# Create data directory
RUN mkdir -p /var/lib/postgresql/data

# Set proper permissions
RUN chown -R postgres:postgres /var/lib/postgresql/data
```

Variables utilisees dans `.env` (racine) :

- `POSTGRES_USER`
- `POSTGRES_PASSWORD`
- `POSTGRES_DB`
- `DATABASE_URL`

## Deploiement de l'application React

Le build est fait dans l'image Docker `frontend`.

Fichier utilise :
`frontend/.env.production`

```bash
VITE_API_URL=https://suleyyerli.xyz
```

Dockerfile utilise :
`docker/images/frontend.prod.dockerfile`

```dockerfile
FROM node:25-alpine AS builder

WORKDIR /app

COPY frontend ./

RUN npm install

RUN npm run build

FROM nginx:1.29-alpine AS prod

COPY docker/config/frontend/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/dist /usr/share/nginx/html
```

Config Nginx front (serveur statique) :
`docker/config/frontend/nginx.conf`

```nginx
worker_processes auto;
pid /var/run/nginx.pid;
error_log /dev/stderr warn;

events {
    worker_connections 4096;
    multi_accept on;
    use epoll;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    # Use the default "combined" format to avoid undefined log formats.
    access_log /dev/stdout;

    server {
        listen 80;
        server_name _;
        root /usr/share/nginx/html;
        index index.html;


        # Cache static assets aggressively
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
            access_log off;
        }

        # Serve index.html for all routes
        location / {
            try_files $uri $uri/ /index.html;
        }

        # Disable access to hidden files
        location ~ /\. {
            deny all;
            access_log off;
            log_not_found off;
        }

        error_page 404 /index.html;
    }
}
```

## Backend et API

Le backend est une app Node/Express avec Socket.IO, lancee via `npm run start`.

Dockerfile utilise :
`docker/images/backend.prod.dockerfile`

```dockerfile
FROM node:25-alpine AS builder

WORKDIR /app

COPY backend ./

RUN npm install

CMD [ "npm","run","start" ]
```

Container de migrations Prisma :
`docker/images/migration.prod.dockerfile`

```dockerfile
FROM node:25-alpine AS builder

WORKDIR /app

COPY backend ./

RUN npm install


CMD ["sh", "-c", "npm run migrate && npm run seed"]
```

Variables obligatoires en production (validees par `backend/src/config/env.js`) :

- `DATABASE_URL`
- `JWT_SECRET`
- `FRONTEND_ORIGIN`
- `SMTP_HOST`
- `SMTP_USER`
- `SMTP_PASS`

## Mise en production

### Fichiers de prod utilises

- `docker-compose.prod.yaml`
- `docker/images/database.dockerfile`
- `docker/images/backend.prod.dockerfile`
- `docker/images/migration.prod.dockerfile`
- `docker/images/frontend.prod.dockerfile`
- `docker/images/proxy.prod.dockerfile`
- `docker/images/cloudflared.prod.dockerfile`
- `docker/config/frontend/nginx.conf`
- `docker/config/proxy/nginx.conf`
- `frontend/.env.production`
- `.env` (racine, non commite)

### docker-compose.prod.yaml

```yaml
services:
  db:
    build:
      context: .
      dockerfile: ./docker/images/database.dockerfile
    container_name: chessbattle-db
    environment:
      - POSTGRES_USER=${POSTGRES_USER}
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
      - POSTGRES_DB=${POSTGRES_DB}
    volumes:
      - db_data:/var/lib/postgresql/data
    healthcheck:
      test:
        [
          "CMD-SHELL",
          "pg_isready -U $${POSTGRES_USER} -d $${POSTGRES_DB} -h 127.0.0.1",
        ]
      interval: 5s
      timeout: 5s
      retries: 10

    restart: unless-stopped
    networks:
      backend:
        ipv4_address: 192.168.200.11

  backend:
    build:
      context: .
      dockerfile: ./docker/images/backend.prod.dockerfile
    container_name: dev-chessbattle-backend
    environment:
      - PORT=${PORT}
      - DB_HOST=${DB_HOST}
      - DB_PORT=${DB_PORT}
      - POSTGRES_USER=${POSTGRES_USER}
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
      - POSTGRES_DB=${POSTGRES_DB}
      - DATABASE_URL=${DATABASE_URL}
      - JWT_SECRET=${JWT_SECRET}
      - SMTP_HOST=${SMTP_HOST}
      - SMTP_PORT=${SMTP_PORT}
      - SMTP_USER=${SMTP_USER}
      - SMTP_PASS=${SMTP_PASS}
      - MAIL_FROM=${MAIL_FROM}
      - RESET_PASSWORD_URL=${RESET_PASSWORD_URL}

    volumes:
      - backend_uploads:/app/uploads
    depends_on:
      migration:
        condition: service_completed_successfully
    restart: unless-stopped
    networks:
      backend:
        ipv4_address: 192.168.200.10

      frontend:
        ipv4_address: 192.168.201.10

  frontend:
    build:
      context: .
      dockerfile: ./docker/images/frontend.prod.dockerfile
    container_name: dev-chessbattle-frontend
    restart: unless-stopped
    networks:
      frontend:
        ipv4_address: 192.168.201.11
  proxy:
    build:
      context: .
      dockerfile: ./docker/images/proxy.prod.dockerfile
    restart: unless-stopped
    networks:
      public:
        ipv4_address: 192.168.202.1

      frontend:
        ipv4_address: 192.168.201.12

  migration:
    build:
      context: .
      dockerfile: ./docker/images/migration.prod.dockerfile
    environment:
      - DB_HOST=${DB_HOST}
      - DB_PORT=${DB_PORT}
      - POSTGRES_USER=${POSTGRES_USER}
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
      - POSTGRES_DB=${POSTGRES_DB}
      - DATABASE_URL=${DATABASE_URL}
    networks:
      backend:
        ipv4_address: 192.168.200.13
    depends_on:
      db:
        condition: service_healthy

  cloudflared:
    build:
      context: .
      dockerfile: ./docker/images/cloudflared.prod.dockerfile
    environment:
      - TUNNEL_TOKEN=${TUNNEL_TOKEN}
    command: tunnel run
    restart: unless-stopped
    networks:
      public:
        ipv4_address: 192.168.202.2

volumes:
  db_data:
  backend_uploads:

networks:
  backend:
    driver: bridge
    ipam:
      config:
        - subnet: 192.168.200.0/24
          gateway: 192.168.200.254
  frontend:
    driver: bridge
    ipam:
      config:
        - subnet: 192.168.201.0/24
          gateway: 192.168.201.254
  public:
    driver: bridge
    ipam:
      config:
        - subnet: 192.168.202.0/24
          gateway: 192.168.202.254
```

### Fichiers Docker utilises

Proxy Nginx :
`docker/images/proxy.prod.dockerfile`

```dockerfile
FROM nginx:1.29-alpine AS prod

COPY docker/config/proxy/nginx.conf /etc/nginx/nginx.conf
```

Cloudflare Tunnel :
`docker/images/cloudflared.prod.dockerfile`

```dockerfile
FROM cloudflare/cloudflared:latest
```

### Variables d'environnement (racine)

Fichier `.env` a creer a la racine (non commite) :

```bash
NODE_ENV=production
PORT=4000

DB_HOST=db
DB_PORT=5432
POSTGRES_USER=pxxx
POSTGRES_PASSWORD=A_RENSEIGNER
POSTGRES_DB=xxxx
DATABASE_URL=postgresql://pxxxxxx_user:A_RENSEIGNER@dxxxx:5432/pxxxxxxx

JWT_SECRET=A_RENSEIGNER
JWT_REFRESH_SECRET=A_RENSEIGNER
FRONTEND_ORIGIN=https://suleyyerli.xyz
RESET_PASSWORD_URL=https://suleyyerli.xyz/reset-password

SMTP_HOST=A_RENSEIGNER
SMTP_PORT=465
SMTP_USER=A_RENSEIGNER
SMTP_PASS=A_RENSEIGNER
MAIL_FROM=A_RENSEIGNER

MATCH_DURATION_MS=120000
MATCH_TIMER_TICK_MS=1000
MATCH_SUBMIT_MIN_INTERVAL_MS=300

TUNNEL_TOKEN=A_RENSEIGNER
```

### Etapes de deploiement

1. Recuperer le projet sur le serveur :

```bash
sudo mkdir -p /opt/chessbattle
sudo chown $USER:$USER /opt/chessbattle
cd /opt/chessbattle
git clone https://github.com/suleyyerli/project-chess.git .
```

2. Creer le fichier `.env` a la racine et renseigner les secrets.

3. Verifier `frontend/.env.production` :

```bash
VITE_API_URL=https://suleyyerli.xyz
```

4. Creer le tunnel Cloudflare et recuperer le `TUNNEL_TOKEN`.
   Dans Cloudflare Zero Trust, le service pointe vers `http://192.168.202.1:80`. Ip proxy

> ![Cloudflare Tunnel](images/tunnel.png)

5. Lancer la stack Docker :

```bash
docker compose -f docker-compose.prod.yaml up -d --build
```

6. Verification :

```bash
docker compose -f docker-compose.prod.yaml ps
docker compose -f docker-compose.prod.yaml logs -f backend
```

> Capture a ajouter (je m'occupe des images) : resultat `docker compose ps`.
> ![Docker Compose](images/dockerps.png)

Test d'acces public :

```bash
curl https://suleyyerli.xyz/health
```

7. Migrations Prisma (deja lancees par le service `migration`) :

```bash
docker compose -f docker-compose.prod.yaml run --rm migration
```

## Reverse proxy et SSL

Le proxy Nginx route l'API et le frontend sur le meme domaine.

Config Nginx proxy :
`docker/config/proxy/nginx.conf`

```nginx
worker_processes auto;
pid /var/run/nginx.pid;
error_log /dev/stderr warn;

events {
    worker_connections 4096;
    multi_accept on;
    use epoll;
}

http {

    # Upstreams
    upstream web_frontend {
        server 192.168.201.11:80;
        keepalive 16;
    }

    upstream api_backend {
        server 192.168.201.10:4000;
        keepalive 32;
    }

    server {
        listen 80;
        server_name _;

        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
        client_max_body_size 10m;

        # API routes (backend)
        location ^~ /api/ {
            proxy_pass http://api_backend;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        location ~ ^/(auth|matches|challenges|users|reports|admin|puzzles|health)(/|$) {
            proxy_pass http://api_backend;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        location /socket.io/ {
            proxy_pass http://api_backend;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        # Default (frontend)
        location / {
            proxy_pass http://web_frontend;
        }
    }
}
```

SSL est gere par Cloudflare (HTTPS termine chez Cloudflare).
Le serveur n'ouvre pas de ports publics, seul le tunnel sortant est utilise.

## Securisation de l'environnement

- Ne jamais commiter `.env`
- Restreindre les droits sur les secrets : `chmod 600 .env`
- Aucun port public ouvert (hors SSH)
- Surveiller les logs : `docker compose -f docker-compose.prod.yaml logs`
- Sauvegarder les volumes (`db_data`, `backend_uploads`)

## Resolution des problemes

- **Connexion DB refusee** : verifier `POSTGRES_*`, `DATABASE_URL`, et l'etat du service `db`
- **CORS bloque** : verifier `FRONTEND_ORIGIN`
- **502 via proxy** : verifier `proxy` et `backend`, logs `docker compose -f docker-compose.prod.yaml logs`
- **WebSocket KO** : verifier `/socket.io/` et la conf Nginx proxy
- **Migrations en echec** : relancer `docker compose -f docker-compose.prod.yaml run --rm migration`

## Conclusion

Ce guide permet de reproduire le deploiement exact de ChessBattle en production :
Docker Compose, Nginx (frontend + proxy), PostgreSQL en container, et exposition via Cloudflare Tunnel.
