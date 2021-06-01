FROM node:14-alpine

COPY ["package.json","package-lock.json","/home/node/app/"]

WORKDIR /app

RUN apk update && \
    apk add --update nodejs

COPY [".","."]

CMD npm install -g @angular/cli && \
    npm rebuild node-sass && \
    npm install && \
    npm run dev
EXPOSE 8000