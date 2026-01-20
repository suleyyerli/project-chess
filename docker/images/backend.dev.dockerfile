FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

ENV NODE_ENV=developement
EXPOSE 4000

CMD ["npm", "run", "dev"]
