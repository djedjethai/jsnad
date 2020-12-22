const net = require('net')

const socket = net.connect(3000)

setInterval(() => {
	socket.write('first connection')
}, 1000)

socket.pipe(process.stdout)

setTimeout(() => {
	socket.write('finishhh')
	setTimeout(() => {
		socket.end('eeennnd')
	}, 200)
}, 3250)

