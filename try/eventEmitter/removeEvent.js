const { EventEmitter } = require('events')

const rm = new EventEmitter()

const event1 = () => console.log('first event')
const event2 = () => console.log('second event')
rm.on('go', event1)
rm.on('go', event2)


const rmvA = new EventEmitter()
const rmv1 = () => console.log('remove all event1')
const rmv2 = () => console.log('remove all event2')
rmvA.addListener('rmvAll', rmv1)
rmvA.addListener('rmvAll', rmv2)

const fnx = new EventEmitter()
fnx.on('finex', () => console.log('all emitters are down'))

setInterval(() => {
	rm.emit('go')
	rmvA.emit('rmvAll')
	fnx.emit('finex')
}, 200)

setTimeout(() => {
	rm.removeListener('go', event1)	
}, 500)

setTimeout(() => {
	rm.removeListener('go', event2)
}, 1100)

setTimeout(() => {
	rmvA.removeAllListeners('rmvAll')
}, 2000)

setTimeout(() => {
	fnx.removeAllListeners()
}, 3000)
