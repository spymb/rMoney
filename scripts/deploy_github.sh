#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deployed' &&
git remote add origin git@github.com:spymb/money2-deploy.git &&
git push -u origin main -f
cd -