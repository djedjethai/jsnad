'use strict'
const net = require('net')
const socket = net.connect(3000)

socket.on('data', data => {
	console.log('got data: ', data.toString())
})

setTimeout(() => {
	socket.write('all done')
	setTimeout(() => {
		socket.end()
	}, 250)
}, 3250)

// betttterrr
// const net = require('net')
// const { finished } = require('stream')
// 
// const socket = net.connect(3000)
// 
// socket.pipe(process.stdout)
// 
// const interval = setInterval(() => {
// 	socket.write('grrrrrr')
// }, 1000)
// 
// setTimeout(()  => {
// 	// socket.on('finish', () => {
// 	// 	console.log('fiinniiish')
// 	// 	clearInterval(interval)
// 	// })
// 
// 	finished(socket, err =>  {
// 		console.log('finex')
// 		clearInterval(interval)
// 	})
// 
// 	setTimeout(() => {
// 		console.log('socket endd')
// 		socket.end('done')
// 	}, 250)
// }, 5200)	
