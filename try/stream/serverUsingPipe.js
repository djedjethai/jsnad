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
