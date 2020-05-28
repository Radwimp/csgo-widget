FROM node:12.16.0-alpine AS builder

WORKDIR /usr/src/

COPY . ./

RUN yarn install
RUN yarn build

FROM node:12.16.0-alpine

RUN yarn global add serve

WORKDIR /usr/app/

COPY --from=builder /usr/src/build .

EXPOSE 3000

CMD ["serve", "-p", "3000", "-s", "."]
