#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deployed' &&
git remote add origin git@gitee.com:spym404/r-money-website.git &&
git push -u origin "master" -f
cd -