@echo off

npm run build
cd dist
git init
git add -A
git commit -m "deploy"
git push -f git@github.com:AvraCodabra/vue-parking.git master:gh-pages
cd -