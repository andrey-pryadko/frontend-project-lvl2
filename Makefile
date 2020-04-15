install:
	npm install

start:
	npx babel-node 'src/bin/gendiff.js' ./del/before.json ./del/after.json

publish:
	npm publish

lint:
	npm run eslint .