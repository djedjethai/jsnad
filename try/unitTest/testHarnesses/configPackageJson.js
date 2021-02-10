// Any field in the "scripts" field of package.json is expected to be a shell command, and these shell commands have their PATH enhanced with the path to node_modules/.bin in the same project as the package.json file. This means to run our tests we don't have to reference ./node_modules/.bin/jest (or ./node_modules/.bin/tap) we can instead write jest (or tap) knowing that the execution environment will look in ./node_modules/.bin for that executable.

{
  "name": "testHarnesses",
  "version": "1.0.0",
  "description": "",
  "main": "add.js",
  "scripts": {
    "test": "jest --coverage" // --coverage set the tableau
    "test": "tap" // or using the tap module
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jest": "^26.6.3",
    "tap": "^14.11.0"
  }
}



// [jerome@thearch testHarnesses]$ npm test
// 
// > testHarnesses@1.0.0 test
// > jest --coverage
// 
//  PASS  test/req.test.js
//  PASS  test/req-prom.test.js
//  PASS  test/add.test.js
// -------------|---------|----------|---------|---------|-------------------
// File         | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
// -------------|---------|----------|---------|---------|-------------------
// All files    |     100 |      100 |     100 |     100 |                   
//  add.js      |     100 |      100 |     100 |     100 |                   
//  req-prom.js |     100 |      100 |     100 |     100 |                   
//  req.js      |     100 |      100 |     100 |     100 |                   
// -------------|---------|----------|---------|---------|-------------------
// 
// Test Suites: 3 passed, 3 total
// Tests:       6 passed, 6 total
// Snapshots:   0 total
// Time:        2.396 s
// Ran all test suites.

