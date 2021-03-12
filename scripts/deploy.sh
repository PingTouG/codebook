rm -rf __sapper__/export && 
npm run export && 
git add __sapper__/export && 
git commit -m "deploy" &&
git push origin main