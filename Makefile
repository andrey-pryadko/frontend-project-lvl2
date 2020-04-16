install:
	npm install

start:
	npx babel-node 'src/bin/gendiff.js' ./__fixtures__/before.yml ./__fixtures__/after.yml

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