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

const cct = new EventEmitter()
let a = "qwe"
let b = "rty"
cct.addListener('test', (a, b) => console.log(a.concat(' - ', b)))
cct.emit('test', a, b)

// prependListener inject listener at the top position
// works only for among the events of the same eventEmitter
const prep = new EventEmitter()
prep.on('prepend', () => console.log('iam the first'))
prep.on('prepend', () => console.log('i am the second'))
prep.prependListener('prepend', () => console.log('i am the last'))
prep.emit('prepend')

// an eventEmitter can be call many time (except it get the .once method)
const multiple = new EventEmitter()
multiple.on('manyOrOnce', () => console.log('can i be many....'))
multiple.emit('manyOrOnce')
multiple.emit('manyOrOnce')
multiple.emit('manyOrOnce')
multiple.emit('manyOrOnce')

const one = new EventEmitter()
one.once('one', () => console.log('can be call only once'))
one.emit('one')
one.emit('one')
one.emit('one')
one.emit('one')
one.emit('one')
