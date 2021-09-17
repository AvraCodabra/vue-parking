#!/usr/bin/env sh

set -env

npm run build

cd dist

git add -A
git commit -m "New Deployment"
git push

cd -