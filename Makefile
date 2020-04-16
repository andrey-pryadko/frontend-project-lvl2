install:
	npm install

start:
	npx babel-node 'src/bin/gendiff.js' ./__fixtures__/before.ini ./__fixtures__/after.ini

publish:
	npm publish

build:
	rm -rf dist
	npm run build

test:
	npm test

test-coverage:
	npm test -- --coverage

lint:
	npm run eslint .