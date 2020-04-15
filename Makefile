install:
	npm install

start:
	npx babel-node 'src/bin/gendiff.js' ./src/bin/before.json ./src/bin/after.json

publish:
	npm publish

lint:
	npm run eslint .