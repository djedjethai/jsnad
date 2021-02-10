// ========================== ASSERT ============================
// const assert = require('assert')

global.setTimeout = require('timers').setTimeout
const req = require('../req-prom')
// 
// assert.doesNotReject(req('http://exemple.com'))
// assert.rejects(req('http://error.com'), Error('wrong url'))

// function add(a, b) {
// 	return a + b
// }
// 
// assert.strict.equal(add(2,2),4)
// console.log('first passed')
// 
// 
// const obj = {
// 	id: 1,
// 	name: {first:"jj", last:"bdt"}
// }
// 
// // err as id is '1' instead of 1
// assert.strict.deepEqual(obj, {
// 	id:'1',
// 	name: {first:'jj', last:'bdt'}
// })
// console.log('passed')

// ======================== TAP ===========================
// const { test } = require('tap')

// test('wrong network', async ({ rejects }) => {
// 	await rejects(req('http://error.com', Error('wrong url')))
// })
// 
// // test always pass.....
// test('good network', async ({ ok,strictDeepEqual }) => {
// 	await(req('http://ok.com', (e,d) => {
// 		ok(Buffer.isBuffer(d))
// 		strictDeepEqual(d, Buffer.from('some data'))
// 	}))
// })

// like it sound better
// test('good network', async ({ ok,strictDeepEqual }) => {
// 		const d = await req('http://ok.com')
// 		strictDeepEqual(d, Buffer.from('some data'))
// 	}))
// })



// ======================= JEST  ==========================
 

// test('error network', async () => {
// 	await expect(req('http://error.com'))
// 		.rejects
// 		.toStrictEqual(Error('wrong url'))
// })
// 
// test('test de putain de ta mere', async () => {
// 	const data = await req('http://encule.com')
// 	expect(Buffer.isBuffer(data)).toBeTruthy()
// 	expect(data).toStrictEqual(Buffer.from('some data'))
// })


