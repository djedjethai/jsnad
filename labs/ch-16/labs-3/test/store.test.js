// const { test } = require('tap')
global.setTimeout = require('timers').setTimeout
const st = require('../store')

// // ok with tap but still strange....
// test('if buffer', async({ rejects }) => {
// 	await rejects(() => st('uy'), (Error('input must be a buffer')))
// })
// 
// test('output', async({ ifError,strictDeepEqual,ok }) => {
// 	const d = await st(Buffer.from('rtsrt')) 
// 	strictDeepEqual(d.id.length, 4)
// })


// ok with jest
test('if buffer', async() => {
	await expect(st('uy')).rejects.toStrictEqual(Error('input must be a buffer'))
})

test('output', async() => {
	const d = await st(Buffer.from('jhgf'))
	expect(d.id.length).toStrictEqual(4)
})

