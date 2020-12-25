const net = require('net')
const { finished } = require('stream')

const socket = net.connect(3000)

// socket.on('data', data => {
// 	console.log('retour encoded: ', data)
// })

socket.pipe(process.stdout)

const interval = setInterval(() => {
	socket.write('ahhhhhhh')
}, 1000)

setTimeout(() => {
	socket.end('finnnex')
}, 5200)

finished(socket, err => {
	clearInterval(interval)
	if(err) {
		console.error(err)
	}
})


