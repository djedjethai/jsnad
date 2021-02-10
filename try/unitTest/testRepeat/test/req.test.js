// ========================= ASSERT =============================
// const assert = require('assert')
const req = require('../req')
// 
// req('http://whatever.com', (e, d) => {
// 	assert.ifError(e)
// })
// 
// req('http://error.com', (e, d) => {
// 	assert.deepStrictEqual(e, Error('wrong url'))
// })

// ======================== TAP ==========================
// const { test } = require('tap')

// test('network err', ({ strictDeepEqual,end }) => {
// 	req('http://error.com', (e) => {
// 		strictDeepEqual(e, Error('wrong url'))
// 		end()
// 	})
// })
// 
// test('network is fine', ({ ifError,ok,strictDeepEqual,end }) => {
// 	req('http://cool.com', (e,d) => {
// 		ifError(e)
// 		ok(Buffer.isBuffer(d))
// 		strictDeepEqual(d, Buffer.from('some data'))
// 		end()
// 	})
// })

// ========================= JEST ========================

// test('error network', (done) => {
// 	req('http://error.com', e => {
// 		expect(e).toStrictEqual(Error('wrong url'))
// 		done()
// 	})
// })
// 
// test('network ok', (done) => {
// 	req('http://ok.com', (e,d) => {
// 		expect(e === null).toBe(true)
// 		expect(Buffer.isBuffer(d)).toBeTruthy()
// 		expect(d).toStrictEqual(Buffer.from('some data'))
// 		done()
// 	})
// })


