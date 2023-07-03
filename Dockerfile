FROM node:16

WORKDIR /usr/app/web-app-init

COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]

