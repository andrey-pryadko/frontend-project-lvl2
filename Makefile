install:
	npm install

start:
	npm run babel-node -- src/bin/getdiff.js

publish:
	npm publish

lint:
	npm run eslint .