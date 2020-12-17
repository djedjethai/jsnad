'use strict'

// const fs = require('fs')
// const writable = fs.createWriteStream('./out')
// writable.on('finish', () => console.log('finished writing'))
// writable.write('A\n')
// writable.write('B\n')
// writable.write('C\n')
// writable.write('D\n')
// writable.end('end event, nothing more to write\n')

// const { Writable } = require('stream')
// const createWriteStream = (data) => {
// 	return new Writable({
// 		write(chunk, enc, next) {
// 			data.push(chunk)
// 			next()
// 		}
// 	})
// }
// const data = []
// const writable = createWriteStream(data)
// writable.on('finish', () => console.log('finish writing', data))
// writable.write('A\n')
// writable.write('B\n')
// writable.write('C\n')
// writable.write('D\n')
// writable.end('end event, nothing more to write')

// Note again, as with readable streams, the default objectMode option is false, so each string written to our writable stream instance is converted to a buffer before it becomes the chunk argument passed to the write option function. This can be opted out of by setting the decodeStrings option to false:
// const { Writable } = require('stream')
// const createWriteStream = (data) => {
// 	return new Writable({
// 		decodeStrings: false,
// 		write(chunk, enc, next) {
// 			data.push(chunk)
// 			next()
// 		}
// 	})
// }
// const data = []
// const writable = createWriteStream(data)
// writable.on('finish', () => console.log('finish writing', data))
// writable.write('A\n')
// writable.write('B\n')
// writable.write('C\n')
// writable.write('D\n')
// writable.end('end event, nothing more to write')

// this code will emit an err as we write a number (1)
// this code can only write strings, instance of buffer or Uint8Array 
// to fix this problem we add: objectMode: true
const { Writable } = require('stream')
const createWritableStream = (data) => {
	return new Writable({
		objectMode: true, // can write numbers and other types with this option
		write(chunk, enc, next) {
			data.push(chunk)
			next()
		}
	})
}
const data = []
const writable = createWritableStream(data)
writable.on('finish', () => console.log('it s finish: ', data))
writable.write('A\n')
writable.write('B\n')
writable.write('C\n')
writable.write(1)
writable.end('end event, nothing more to write')
// Typically writable streams would be binary streams. However, in some cases object-mode readable-writable streams can be useful. In the next section we'll look at the remaining stream types.
