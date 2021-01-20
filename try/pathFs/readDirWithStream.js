'use strict'

const { opendir } = require('fs')
const { Transform, pipeline, Readable } = require('stream')
const { createServer } = require('http')

const setList = () => {
	let syntax = '['
	return new Transform({
		writableObjectMode:true,
		readableObjectMode:false,
		transform(chunk, enc, next) {
			let data = `${syntax}"${chunk.name}"`
			syntax = '\n'
			next(null, data)
		},
		final(cb) {
			this.push('\n]\n')
			cb()
		}

	})
}

createServer((req, res) => {
	if(req.url !== '/') {
		res.StatusCode = 400
		res.end('Not found')
		return
	}

	// !!! HERE I DON T FOLLOW THE COURSE, I USE DIRECTLY d. (i guess it s better)
	opendir(__dirname, (e, d) => {
		if(e) {
			res.StatusCode = 500
			res.end('Server err')
			return
		}

		res.setHeader('Content-Type','application/json')
		pipeline(d, setList(), res, e => { if(e) console.error(e) })
	})
}).listen(3000)

// [jerome@thearch pathFs]$ node -e "http.get('http://localhost:3000/', res => res.pipe(process.stdout))"
// [
// "path.js",
// "readDirWithStream.js",
// "fsAsync.js",
// "readDir.js",
// "repeat.js",
// "fsSync.js",
// "fsStream.js"
// ]

// let s have fun and return a file with the list as uppercase
const fs = require('fs')
const { Transform, pipeline, Readable } = require('stream')

const streamUpper = () => {
	return new Transform({
		transform(chunk, enc, next) {
			next(null, chunk.toString().toUpperCase())
		}
	})
}

async function readDirStream() {
	const dir = await fs.promises.opendir(__dirname)

	for await (const dirent of dir) {
		await require('util').promisify(pipeline)(
	 		dirent.name+'\n',
	 		streamUpper(),
	 		fs.createWriteStream('./fileList.txt', {flags:'a'})
	 	)	
	}
}
readDirStream().catch(e => console.error(e))

// EXACTLY SAME AS PREVIOUS BUT SIMPLER
// SETTING UP THE writableObjectMode:true. 
// Makes us no need to iterate the cb return from opendir()(dir)
// instead we implement the transformation on chunk.name (.name is a contained property)
const fs = require('fs')
const { Transform, pipeline, Readable } = require('stream')

const streamUpper = () => {
	return new Transform({
		writableObjectMode:true,
		readableObjectMode:false,
		transform(chunk, enc, next) {
			next(null, `${chunk.name.toUpperCase()}\n`)
		},// final(cb) is not an obligation
		final(cb) {
			cb()
		}
	})
}

async function readDirStream() {
	const dir = await fs.promises.opendir(__dirname)

	await require('util').promisify(pipeline)(
	 		dir,
	 		streamUpper(),
	 		fs.createWriteStream('./fileList.txt', {flags:'a'})
	)
}
readDirStream().catch(e => console.error(e))
