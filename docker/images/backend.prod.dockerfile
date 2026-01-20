FROM node:25-alpine AS builder

WORKDIR /app

COPY backend ./

RUN npm install

CMD [ "npm","run","start" ]
