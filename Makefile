install:
	npm ci

test:
	npm run test

twatch:
	npm run twatch

single-test:
	npm test  -- __tests__/f-notebooks.test.js

wsingle-test:
	npx jest  --watch __tests__/f-notebooks.test.js

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

fix-lint:
	npx eslint . --fix

update-git-hooks:
	npx simple-git-hooks
