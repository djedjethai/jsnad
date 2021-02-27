const { test } = require('tap')
const { readFile } = require('fs')
const { join } = require('path')
const { read } = require('../index')

test('get err', ({ strictDeepEqual, end }) => {
	read('uy.d', (e,d) => {
		strictDeepEqual(e, Error('err'))
		end()
	})
})

test('get files', ({ strictDeepEqual, ifError, end }) => {
	console.log(join(__dirname,'../','index.js'))
	readFile(join(__dirname,'../','index.js'),'utf8', (e,dr) => { 
	
	read(join(__dirname, '../', 'index.js'), (e,d) => {
		ifError(e)
		strictDeepEqual(dr, d)
		end()
	})
	})
})
