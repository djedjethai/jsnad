const { EventEmitter } = require('events')
// or 
const EventEmitter = require('events')



const myEmitter = new EventEmitter()
myEmitter.emit('eventName', some, args)
// or
class MyEmitter extends EventEmitter {
	constructor(opts = {}) {
		super(opts)
		this.name = opts.name
	},
	destroy(err) {
		if(err) { this.emit('error', err) }
		this.emit('close')
	}
}


