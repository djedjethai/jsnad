'use strict'

const net = require('net')
const { pipeline,  Transform } = require('stream')
const { scrypt } = require('crypto')

const writeScrypt = () => {
	return new Transform({
		decodeStrings:false,
		encoding:'hex',
		transform(chunk, enc, next) {
			scrypt(chunk, 'a-slat', 32, (err, key) => {
				if(err) {
					next(err)
					return
				}
				next(null, key)
			})
		}

	})
}

net.createServer(socket => {
	const tr = writeScrypt()

	socket.on('data', data => {
		console.log(data.toString())
	})

	// setInterval(() => {
	// 	socket.write('olla')
	// }, 1000)

	pipeline(socket, tr, socket, (err) => {
		if(err) {
			console.error('errrrrorrr')
		}
		clearInterval(interval)
	})
}).listen(3000)
