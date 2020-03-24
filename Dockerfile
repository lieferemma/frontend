FROM nginx:1.17.9-alpine

COPY ./build/ /usr/share/nginx/html

