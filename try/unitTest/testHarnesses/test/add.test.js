// ====================== with TAP =============================
// const { test } = require('tap')
// const add = require('../add')
// 
// test('throw when input are not numbers', async({ throws }) => {
// 	throws(() => add('5', '5'), Error('inputs must be numbers'))
// 	throws(() => add('5', '5'), Error('inputs must be numbers'))
// 	throws(() => add('5', '5'), Error('inputs must be numbers'))
// 	throws(() => add({}, null), Error('inputs must be numbers'))
// })
// 
// test('adds two numbers', async ({ equal }) => {
// 	equal(add(5,5),10)
// 	equal(add(-5,5),0)
// })

// RUN THIS COMMAND FROM THE node_modules dir. give a kind of interface
// ./node_modules/.bin/tap test/add.test.js 

// =================== with JEST ================================
const add = require('../add')

test('throw when input are not numbers', async() => {
	expect(() => add('5', '5')).toThrowError(
		Error('inputs must be numbers')
	)
	expect(() => add('5', '5')).toThrowError(
		Error('inputs must be numbers')
	)
	expect(() => add('5', '5')).toThrowError(
		Error('inputs must be numbers')
	)
	expect(() => add({}, null)).toThrowError(
		Error('inputs must be numbers')
	)
})

test('adds two numbers', async () => {
	expect(add(5,5)).toStrictEqual(10)
	expect(add(-5,5)).toStrictEqual(0)
})

// here we can not run our test with node. 
// means that there one more layer between the tests and the code (not good)
// the test must be run with the Jest binary
// install jest first: npm i --save-dev jest
// [jerome@thearch testHarnesses]$ ./node_modules/.bin/jest test/add.test.js 
