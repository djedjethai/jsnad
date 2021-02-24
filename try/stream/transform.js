'use strict'
// const { createGzip } = require('zlib')
// const transform = createGzip()
// 
// transform.on('data', (data) => {
// 	console.log('got gzip data', data.toString('base64'))
// })
// transform.write('first')
// setTimeout(() => {
// 	transform.end('second')
// }, 500)
	
const { Transform } = require('stream')
const { scrypt } = require('crypto')
const createTransformStream = () => {
	return new Transform({
		decodeStrings: false,
		// encoding: 'hex',
		transform(chunk, enc, next) {
			scrypt(chunk, 'a-salt', 32, (err, key) => {
				if(err) {
					next(err)
					return
				}
				next(null, key)
			})
		}
	})
}

const transform = createTransformStream()
transform.on('data', data => {
	console.log('got data: ', data)
}) 
transform.write('A\n')
transform.write('B\n')
transform.write('C\n')
transform.write('D\n')
transform.end('nothing more to write')

transform.on('finish', () => console.log('fffiinnniisshh')) // finish is emited before end
transform.on('end', () => console.log('eeennnddd'))

finished(transform, e => {
	if(e) console.log(e)
})

// =========================== my try ==============================

// here is the client
const { connect } = require('net')
const { pipeline } = require('stream')
const { createReadStream, createWriteStream } = require('fs')
const { join } = require('path')

const socket = connect(3000)


pipeline(createReadStream(__filename), socket, e => console.error('read: ', e))


pipeline(socket, createWriteStream(join(__dirname, 'out.txt')), e => console.error('to write: ', e))

// here is the server
const { createReadStream, createWriteStream } =require('fs')
const { join } = require('path')
const { pipeline, Readable, Writable, Transform } = require('stream')
const { createServer } = require('net')


const td = (data) => {
	return new Transform({
		transform(chunk, enc, next)  {
			const d = chunk.toString().toUpperCase()
			next(null, d)
		}
	})
}


// createReadStream(__filename).pipe(t).pipe(createWriteStream(join(__dirname,'out.txt'), 'utf8'))

createServer((socket) => {


const t = td()

// we transform any incomming streams and send them back
pipeline(socket, t, socket, e => console.error('err from serv: ', e))


}).listen(3000)


// pipeline(createReadStream(__filename), t, createWriteStream(join(__dirname,'out.txt')), e => {
// 	if(e) console.error('the error: ', e)
// })

