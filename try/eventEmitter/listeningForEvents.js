const EventEmitter = require('events')

const myEvent = new EventEmitter()

// myEvent.on('grrr', () => console.log('grrrr fired'))
// or
myEvent.addListener('grrr', () => console.log('grr addListener'))
myEvent.addListener('grrr', () => console.log('grr addListener222'))
myEvent.addListener('grrr', () => console.log('grr addListener333'))
myEvent.emit('grrr')


const oo = new EventEmitter()
oo.on('add', (a, b) => console.log(a + b))
oo.emit('add', 23, 45) // 68

// prependListener inject listener at the top position
// works only for among the events of the same eventEmitter
const prep = new EventEmitter()
prep.on('prepend', () => console.log('iam the first'))
prep.on('prepend', () => console.log('i am the second'))
prep.prependListener('prepend', () => console.log('i am the last'))
prep.emit('prepend')
