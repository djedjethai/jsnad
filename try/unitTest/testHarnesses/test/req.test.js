// ============================ TAP ==============================
// const { test } = require('tap')
// const req = require('../req')
// 
// test('handle network err', ({ strictDeepEqual, end }) => {
// 	req('http://error.com', (e) => {
// 		strictDeepEqual(e, Error('network error'))
// 		end()
// 	})
// })
// 
// test('respond with data', ({ ok, strictDeepEqual, ifError, end }) => {
// 	req('http://exemple.com', (e, d) => {
// 		ifError(e)
// 		ok(Buffer.isBuffer(d))
// 		strictDeepEqual(d, Buffer.from('some data'))
// 		end()
// 	})
// })

// run this from the node_modules file
// ./node_modules/.bin/tap test/req.test.js
// or this from the req.test.js
// node req.test.js

// THIS SIMPLE COMMAND RUN ALL TEST IN THE 'test' dir
// note that iam at the node_modules level
// [jerome@thearch testHarnesses]$ ./node_modules/.bin/tap
//  PASS  test/add.test.js 6 OK 13.391ms
//  PASS  test/req.test.js 4 OK 613.505ms
// 
//                          
//   🌈 SUMMARY RESULTS 🌈  
//                          
// 
// Suites:   2 passed, 2 of 2 completed
// Asserts:  10 passed, of 10
// Time:     1s
// ----------|----------|----------|----------|----------|-------------------|
// File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
// ----------|----------|----------|----------|----------|-------------------|
// All files |      100 |      100 |      100 |      100 |                   |
//  add.js   |      100 |      100 |      100 |      100 |                   |
//  req.js   |      100 |      100 |      100 |      100 |                   |
// ----------|----------|----------|----------|----------|-------------------|
// [jerome@thearch testHarnesses]$ 

// ================================= JEST ====================================
const req = require('../req')

test('handle network error', (done) => {
	req('http://error.com', (e) => {
		expect(e).toStrictEqual(Error('network error'))
		done()
	})
})

test('respond with data', (done) => {
	req('http://exemple.com', (e, d) => {
		expect(e == null).toBe(true)
		expect(Buffer.isBuffer(d)).toBeTruthy()
		expect(d).toStrictEqual(Buffer.from('some data'))
		done()
	})
})

// [jerome@thearch testHarnesses]$ ./node_modules/.bin/jest test/req.test.js
//  PASS  test/req.test.js
//   ✓ handle network error (306 ms)
//   ✓ respond with data (303 ms)
// 
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        1.449 s, estimated 2 s
// Ran all test suites matching /test\/req.test.js/i.

