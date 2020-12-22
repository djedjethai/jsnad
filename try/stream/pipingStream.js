// 'use strict'
// const net = require('net')
// const socket = net.connect(3000)
// 
// socket.on('data', data => {
// 	console.log('got data', data.toString())
// })
// 
// socket.write('hello')
// setTimeout(() => {
// 	socket.write('all done')
// 	setTimeout(() => {
// 		socket.end()
// 	}, 200)
// }, 3450)

// We'll replace the data event listener with a pipe:
'use strict'
const net = require('net')
const socket = net.connect(3000)

socket.pipe(process.stdout)

socket.write('hello')
setTimeout(() => {
	socket.write('all done')
	setTimeout(() => {
		socket.end()
	}, 200)
}, 3400)

// The process object will be explored in detail in Section 14 - "Process & Operating System", but to understand the code it's important to know that process.stdout is a Writable stream. Anything written to process.stdout will be printed out as process output. Note that there are no newlines, this is because we were using console.log before, which adds a newline whenever it is called.

//The pipe method exists on Readable streams (recall socket is a Duplex stream instance and that Duplex inherits from Readable), and is passed a Writable stream (or a stream with Writable capabilities). Internally, the pipe method sets up a data listener on the readable stream and automatically writes to the writable stream as data becomes available.

