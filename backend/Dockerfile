FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache libc6-compat dumb-init

COPY package.json yarn.lock ./
COPY .yarnrc.yml* ./
COPY .yarn ./.yarn

RUN yarn install

COPY . .

EXPOSE 1337

ENTRYPOINT ["dumb-init", "--"]
CMD ["yarn", "develop"]
