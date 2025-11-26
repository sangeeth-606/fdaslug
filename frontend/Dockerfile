# Frontend Dockerfile - React dev server

FROM node:14-alpine

WORKDIR /usr/src/app

# copy package.json first to install dependencies
COPY package.json package-lock.json* ./

RUN npm install

# copy app source
COPY . .

ENV PORT=3000
ENV HOST=0.0.0.0
ENV CHOKIDAR_USEPOLLING=true

EXPOSE 3000

CMD ["npm", "start"]
