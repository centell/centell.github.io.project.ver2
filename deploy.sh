#!/bin/bash
npm run build
echo "[system] build completed"
npm run export
echo "[system] export completed"
cp -R out/ ../publish_centell.me/
echo "[system] copy completed"
cd ../publish_centell.me
git add .
git commit -m 'auto deploy'
git push origin main
echo "[system] deploy completed"
cd ../centell.github.io.project.ver2