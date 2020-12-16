// jerome@jerome-PORTEGE-M900 ~/ $ node -p ''"function Stream(opts) { EE.call(this, opts); }" 
// undefined
// jerome@jerome-PORTEGE-M900 ~/ $ node -p "stream.prototype"
// Stream { pipe: [Function] }

'use strict'

// const fs = require('fs')
// const readable = fs.createReadStream(__filename)
// readable.on('data', data => console.log('got data: ' + data))
// readable.on('end', () => console.log('finished'))

// Readable streams are usually connected to an I/O layer via a C-binding, but we can create a contrived readable stream ourselves using the Readable constructor:

// const { Readable } = require('stream')
// const createReadStream = () => {
// 	const data = ['some', 'dAta', 'to', 'read']
// 	return new Readable({
// 		read() {
// 			if (data.length === 0) this.push(null)
// 			else this.push(data.shift())
// 		}
// 	})
// }
// const readable2 = createReadStream()
// readable2.on('data', data => console.log('data2 are: ', data))
// readable2.on('end', () => console.log('end of the second exemple'))
// data2 are:  <Buffer 73 6f 6d 65>
// data2 are:  <Buffer 64 41 74 61>
// data2 are:  <Buffer 74 6f>
// data2 are:  <Buffer 72 65 61 64>
// end of the second exemple



// =========================================

// Readable streams emit buffers by default, which makes sense since most use-cases for readable streams deal with binary data.
// We can set an encoding option when we instantiate the readable stream for the stream to automatically handle buffer decoding:

const { Readable } = require('stream')
const createReadStream = () => {
	const data = ['data', 'to', 'read', 'cooool']
	return new Readable({
		encoding: 'utf8',
		read() {
			if(data.length === 0) this.push(null)
			else this.push(data.shift())
		}
	})
}

const readable = createReadStream()
readable.on('data', (data) => console.log('the data retuned are: ', data))
readable.on('end', () => console.log('donnnnnne'))
// the data retuned are:  data
// the data retuned are:  to
// the data retuned are:  read
// the data retuned are:  cooool
// donnnnnne
// Now when each data event is emitted it receives a string instead of a buffer. However because the default stream mode is objectMode: false, the string is pushed to the readable stream, converted to a buffer and then decoded to a string using UTF8.


