# https://github.com/grammyjs/create-grammy/blob/36c0dedf486221f132b2734c084c9b5405bf4f03/configs/docker/node/Dockerfile
FROM node:lts-alpine

RUN mkdir -p /app
WORKDIR /app

COPY . /app

RUN cd /app && \
    npm install --production=false && \
    npm run dev-build

CMD ["node", "dist/app.js"]
