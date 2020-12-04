const EventEmitter = require('events')

const oo = new EventEmitter()

oo.once('go', () => console.log('event oo'))
oo.on('go', () => console.log('second event oo'))
oo.prependListener('go', () => console.log('prepend event oo'))

oo.emit('go')
oo.emit('go')
oo.emit('go')
oo.emit('go')
oo.emit('go')


