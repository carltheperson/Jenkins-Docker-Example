FROM node:latest

ENV PROJECTDIR /nodeApp

WORKDIR $PROJECTDIR

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]