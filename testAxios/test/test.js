// const assert = require('assert')
// const { test } = require('tap')
const { read } = require('../index.js')
const { readFile } = require('fs').promises
const { join } = require('path')



test('grrrrr ok', async(done) => {
	const p = join(__dirname, '../', 'index.js')
 	const dd = await readFile(p, 'utf8') 	
	read(p, (e, d) => {
		//expect(e === null).toBe(true)
		expect(d).toStrictEqual(dd)
		done()
	})
})

test('grrrrr ok nottt', async(done) => {
	
	read('jh.b', (e, d) => {
		expect(e).toStrictEqual(Error('err'))
		done()
	})
})

