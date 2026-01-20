FROM nginx:1.29-alpine AS prod

COPY docker/config/proxy/nginx.conf /etc/nginx/nginx.conf