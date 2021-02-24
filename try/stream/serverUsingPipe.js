// 'use strict'
// const net = require('net')
// const { Transform, pipeline } = require('stream')
// const { scrypt } = require('crypto')
// 
// const createTransformStream = () => {
// 	return new Transform({
// 		decodeStrings: false,
// 		encoding: 'hex',
// 		transform(chunk, enc, next) {
// 			scrypt(chunk, 'a-salt', 32, (err, key) => {
// 				if(err) {
// 					next(err)
// 					return
// 				}
// 				console.log('bf render')
// 				next(null, key)
// 			})
// 		}
// 	})
// }
// 
// net.createServer(socket => {
// 	const transform = createTransformStream()
// 	const interval = setInterval(() => {
// 		socket.write('socket piped')
// 	}, 3000)
// 	pipeline(socket, transform, socket, err => {
// 		if(err) {
// 			console.error('there was a socket error: ', err)
// 		}
// 		console.log('grrrr')
// 		clearInterval(interval)
// 	})
// 
// }).listen(3000)

'use strict'
const net = require('net')
const { Transform, pipeline  } = require('stream')
const { scrypt  } = require('crypto')
const createTransformStream = () => {
	return new Transform({
		    decodeStrings: false,
		    encoding: 'hex',
		transform (chunk, enc, next) {
			scrypt(chunk, 'a-salt', 32, (err, key) => {
				if (err) {
					          next(err)
					          return
					          
				}
				        next(null, key)
				      
			})
			    
		}
		  
	})
	
}

net.createServer((socket) => {
	  const transform = createTransformStream()
	const interval = setInterval(() => {
		    socket.write('beat')
		  
	}, 1000)
	pipeline(socket, transform, socket, (err) => {
		if (err) {
			      console.error('there was a socket error', err)
			    
		}
		    clearInterval(interval)
		  
	})
	
}).listen(3000)

// =================== another try =======================
// the server
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
	pipeline(socket, t, socket, e => console.error('err from serv: ', e))
}).listen(3000)
// pipeline(createReadStream(__filename), t, createWriteStream(join(__dirname,'out.txt')), e => {
// 	if(e) console.error('the error: ', e)
// })

// the client
const { connect } =require('net')
const { finished } =require('stream')


const socket = connect(3000)

socket.write('aaaaaaa')
socket.write('bbbbbbb')
socket.write('ccccccc')

socket.pipe(process.stdout)

setTimeout(() => {
	socket.write('before close')
	setTimeout(() => {
		socket.end()
	}, 6001)
}, 4001)

finished(socket, e => {
	console.log(e)
})
