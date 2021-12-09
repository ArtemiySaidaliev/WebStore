FROM node:12.16.3

WORKDIR /WebStore

ENV PORT 80

COPY package.json /WebStore/package.json

COPY package-lock.json /WebStore/package-lock.json

RUN npm install

COPY . /WebStore

CMD ["node", "server.js"]