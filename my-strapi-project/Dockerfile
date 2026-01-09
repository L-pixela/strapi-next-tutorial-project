FROM node:20-alpine

RUN apk add --no-cache vips-dev

WORKDIR /opt/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

# RUN yarn build

EXPOSE 1337

CMD ["yarn", "develop"]
