ng build ngrid-demo-app --prod --base-href table-demo
cp dist/apps/ngrid-demo-app/index.html dist/apps/ngrid-demo-app/404.html

cd dist/apps/ngrid-demo-app

git init
git remote add origin git@github.com:shlomiassaf/ngrid.git
git remote add public_origin git@github.com:shlomiassaf/table-demo.git
git add .
git commit -m "update"
git branch gh-pages
# git push --set-upstream origin gh-pages -f
git push --set-upstream public_origin gh-pages -f
