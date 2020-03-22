FROM node:13.10-alpine

RUN apk add --no-cache git

RUN npm install -g @ionic/cli cordova

COPY ./emmaliefert/ /home/alpine/app/

EXPOSE 8100

WORKDIR /home/alpine/app/

ENTRYPOINT [ "ionic","serve","--all" ]