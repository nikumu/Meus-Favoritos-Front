FROM node:20-alpine

WORKDIR /app

COPY . ./

RUN yarn install

RUN yarn build

EXPOSE 3000

CMD ["yarn", "dev"]
