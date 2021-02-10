// ========================= using assert ==========================
// const assert = require('assert')
// const add = require('../add')
// 
// assert.throws(() => add('2',2), Error('must be number'))
// assert.doesNotThrow(() => add(2, 2))
// assert.strict.equal(add(2,2),4)
// console.log('passed')

// ======================== TAP =================================
// const { test } = require('tap')
const add = require('../add')

// test('the arg type', async ({throws}) => {
// 	throws(() => add(9,'9'), Error('must be number'))
// 	throws(() => add({}, null), Error('must be number'))
// })
// 
// test('result from add', async ({equal}) => {
// 	equal(add('1','1'),'11')
// })

// ======================= JEST =================================

// test('arg type', async () => {
// 	expect(() => add('3',3)).toThrowError(Error('must be number'))
// 	expect(() => add(3,'3')).toThrowError(Error('must be number'))
// 	expect(() => add({},null)).toThrowError(Error('must be number'))
// })
// 
// test('result add', async () => {
// 	expect(() => add(3,3).toStrictEqual(6))
// 	expect(() => add(10,3).toStrictEqual(13))
// })


