'use strict'

const { watch } = require('fs')
watch('.', (evt, filename)  => {
	console.log(evt, filename)
})

// from another tty
[jerome@thearch pathFs]$ node -e "fs.writeFileSync('test', 'test', {mode: 0o777})"
[jerome@thearch pathFs]$ node -e "fs.mkdirSync('test-dir', {mode: 0o666})"
[jerome@thearch pathFs]$ node -e "fs.chmodSync('test-dir', 0o644)"
[jerome@thearch pathFs]$ node -e "fs.writeFileSync('test', 'reTest', {mode: 0o667})"
[jerome@thearch pathFs]$ node -e "fs.chmodSync('test-dir', 0o777)"
[jerome@thearch pathFs]$ node -e "fs.unlinkSync('test')" // delete file. 
[jerome@thearch pathFs]$ node -e "fs.rmdir('test-dir', e => console.log(e))" // delete directory
null

// console print
rename test
change test
rename test-dir
rename test-dir
change test
change test
rename test-dir
rename test
rename test-dir
// all this report events are useless so strongly advise to use "chokidar"

// EX DE RAPPORT DE FILE AND DIRECTORY MOVEMENT
'use strict'

const { join, resolve } = require('path')
const { watch, readdirSync, statSync } = require('fs')


const cwd = resolve('.')
const files = new Set(readdirSync('.'))
watch('.', (evt, filename) => {
	try{
		const { ctimeMs, mtimeMs } = statSync(join(cwd, filename))
		if (files.has(filename) === false) {
			evt = 'created'
			files.add(filename)
		} 
		else {
			if (ctimeMs === mtimeMs) evt = 'content-updated'
			else evt = 'status-updated'
		}
	} catch(e) {
		if(e.code === 'ENOENT') {
			files.delete(filename)
			evt = 'deleted'
		}
		else {
			console.log(e)
		}
	} finally {
		console.log(evt, filename)
	}
})

// from another tty
[jerome@thearch pathFs]$ node -e "fs.writeFileSync('test', 'some datas', {mode: 0o777})"
[jerome@thearch pathFs]$ node -e "fs.mkdir('test-dir', {mode: 0o666}, e => e)"
[jerome@thearch pathFs]$ node -e "fs.chmodSync('test', 0o666)"
[jerome@thearch pathFs]$ node -e "fs.writeFile('test', 'some datas', {mode: 0o777}, e => e)"
[jerome@thearch pathFs]$ node -e "fs.chmod('test-dir', 0o777, e => e)"
[jerome@thearch pathFs]$ node -e "fs.unlinkSync('test')"
[jerome@thearch pathFs]$ node -e "fs.rmdir('test-dir', e => e)"

// return on the watched tty
created test
content-updated test
created test-dir
status-updated test
content-updated test
content-updated test
status-updated test-dir
deleted test
deleted test-dir


