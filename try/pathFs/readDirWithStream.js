'use strict'

const { createServer } = require('http')
const { Readable, Transform, pipeline } = require('stream')
const { opendir } = require('fs')

const createEntryStream = () => {
	let syntax = '[\n'
	return new Transform({
		writableObjectMode:true,
		readableObjectMode:false,
		transform(entry, enc, next) {
			next(null, `${syntax}"${entry.name}"`)
			syntax = ',\n'
		},
		final(cb) {
			this.push('\n]\n')
			cb()
		}
	})
}

createServer((req, res) => {
	if(req.url !== '/') {
		res.statusCode = 404
		res.end('not found')
		return
	}

	opendir(__dirname, (err, dir) => {
		if(err) {
			res.statusCode = 500
			res.end('Server error')
			return
		}
		const dirStream = Readable.from(dir)
		const entryStream = createEntryStream()
		res.setHeader('Content-Type','application/json')
		pipeline(dirStream, entryStream, res, err => {
			if(err) console.error(err)
		})
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

