#!/bin/bash
npm run build
echo "[system] build completed"
npm run export
echo "[system] export completed"
cp -R out/ ../publish/
echo "[system] copy completed"
cd ../publish
git init
git remote add origin https://github.com/centell/centell.github.io.git
git add .
git commit -m 'auto deploy'
git push -f origin main
echo "[system] deploy completed"
cd ..
rm -rf publish
cd centell.github.io.project.ver2