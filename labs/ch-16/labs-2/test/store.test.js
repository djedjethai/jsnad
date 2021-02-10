const st = require('../store.js')
const { test } = require('tap')

test('if buffer', ({ end,strictDeepEqual }) => {
	st('ff', e => {
		strictDeepEqual(e, Error('input must be a buffer'))
		end()
	})
})

test('render store', ({ end,strictDeepEqual,ifError }) => {
	st(Buffer.from('cool'), (e,d) => {
		ifError(e)
		strictDeepEqual(d.id.length, 4)
		end()
	})
})
