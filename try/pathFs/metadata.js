'use strict'

const { readdirSync, statSync } = require('fs')

const files = readdirSync('.')

// The difference between change time and modified time, is modified time only applies to writes (although it can be manipulated by fs.utime), whereas change time applies to writes and any status changes such as changing permissions or ownership.
for (const name of files) {
	const stat = statSync(name)
	const typeLabel = stat.isDirectory() ? 'dir: ' : 'file: '
	
	const { atime, birthtime, ctime, mtime } = stat
	console.group(typeLabel, name)
	console.log('atime: ', atime.toLocaleString())
	console.log('ctime: ', ctime.toLocaleString())
	console.log('mtime: ', mtime.toLocaleString())
	console.log('birthtime: ', birthtime.toLocaleString())
	console.groupEnd()

	console.log('eeennnndd')
}

