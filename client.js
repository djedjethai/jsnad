const { connect } =require('net')
const { Writable, finished, Transform, pipeline } =require('stream')
const { EventEmitter } = require('events')

const getDataOutOfSocket = new EventEmitter()

const data = []
const createTransform = (data) => {
	return new Transform({
		readableObjectMode: true,
		writableObjectMode: false,
		transform(chunk, enc, next) {
			if(chunk)  {
				const res = JSON.parse(chunk)		
				data.push(res)
				next(null, data)
			}
		}
	})
} 


function gd() {
	console.log(data)
	console.log('carry on logique')
}

getDataOutOfSocket.on('getData', gd)

const socket = connect(3000)

const cw = createTransform(data)

pipeline(socket, cw, e => console.log(e))

finished(socket, (e) => {
	console.error('end of connection or err: ', e)
	getDataOutOfSocket.emit('getData')
})

