#!/bin/bash
npm run build
npm run export
cp -R out/ ../publish/
cd ../publish
git add .
git commit -m 'auto deploy'
git push -f origin master
