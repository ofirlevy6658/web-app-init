FROM node:16

WORKDIR /usr/app/web-app-init

COPY . .

RUN yarn

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]

