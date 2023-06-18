FROM node:20-alpine3.16

WORKDIR /app

RUN apk add yarn

COPY . .

RUN yarn install

CMD ["yarn", "dev"]
