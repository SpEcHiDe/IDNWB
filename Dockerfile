# NodeJS Alpine Build
FROM node:alpine3.10

# Add your source files
COPY . .

RUN npm install --production=false && \
    npm run dev-build

CMD ["node","dist/app.js"]
