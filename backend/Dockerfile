# Backend Dockerfile - Node + Express
# Builds a small image for running the backend server

FROM node:14-alpine

WORKDIR /usr/src/app

# copy package.json first to install dependencies (leverage Docker cache)
COPY package.json package-lock.json* ./

RUN npm install --production

# copy app source
COPY . .

ENV PORT=5000

EXPOSE 5000

CMD ["npm", "start"]
