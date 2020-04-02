#!/bin/sh

ionic build --prod --release

cp -r /home/alpine/app/www/* /home/alpine/app/build/