const { Transform, pipeline, finished } = require('stream')
const { scrypt } = require('crypto')
const net = require('net')

const createTr = () => {
	return new Transform({
		decodeStrings: false,
		encoding: 'hex',
		transform(chunk, enc, next) {
			scrypt(chunk,'a-salt',32, (err, key) => {
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
	socket.on('data', data => {
		console.log('the data coming to server: ', data)
	})

	const tr = createTr()

	pipeline(socket, tr, socket, err => {
		if(err) {
			console.error(err)
		}
	})

	finished(socket, err => {
		if(err) {
			console.error(err)
		}
	})
}).listen(3000)
