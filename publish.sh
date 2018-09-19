rm -rf ./publish
mkdir publish
cp -R ./src ./publish/lib
cp ./index.js ./publish/index.js
cp ./package.json ./publish/package.json
cp ./package-lock.json ./publish/package-lock.json
cp ./README.md ./publish/README.md
npm login
cd ./publish
npm publish .
rm -rf ./publish