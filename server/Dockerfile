FROM node:23-slim

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 443

CMD ["node", "server.js"]
