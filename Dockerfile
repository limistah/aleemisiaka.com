FROM node:10

RUN npm i -g gatsby

user node

WORKDIR /home/node/app

EXPOSE 8000