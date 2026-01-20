FROM node:25-alpine AS builder

WORKDIR /app

COPY frontend ./


RUN npm install

RUN npm run build

FROM nginx:1.29-alpine AS prod

COPY docker/config/frontend/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/dist /usr/share/nginx/html
