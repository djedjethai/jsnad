// =========================== TAP ===============================
// const { test } = require('tap')
// const req = require('../req-prom')
// 
// test('handles network error', async ({ rejects }) => {
// 	await rejects(req('http://error.com'), Error('network error'))
// })
// 
// test('responds with data', async ({ ok, strictDeepEqual }) => {
// 	const data = await req('http://example.com')
// 	ok(Buffer.isBuffer(data))
// 	strictDeepEqual(data, Buffer.from('some data'))
// })

// =========================== JEST ==============================

'use strict'

// make jest work with nodes setTimeout instead of overwrite it
global.setTimeout = require('timers').setTimeout
const req = require('../req-prom')

test('handles network error', async () => {
	await expect(req('http://error.com'))
		.rejects
		.toStrictEqual(Error('network error'))
})

test('respond with data', async () => {
	const data = await req('http://exemple.com')
	expect(Buffer.isBuffer(data)).toBeTruthy()
	// expect(data).toStrictEqual(Buffer.from('some data'))
	expect(data.toString()).toStrictEqual('some data') // works as well
})

// [jerome@thearch testHarnesses]$ ./node_modules/.bin/jest test/req-prom.test.js

// run all tests
// [jerome@thearch testHarnesses]$ ./node_modules/.bin/jest
//  PASS  test/req.test.js
//  PASS  test/req-prom.test.js
//  PASS  test/add.test.js
// 
// Test Suites: 3 passed, 3 total
// Tests:       6 passed, 6 total
// Snapshots:   0 total
// Time:        2.292 s
// Ran all test suites.

