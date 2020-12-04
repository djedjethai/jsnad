const { EventEmitter } = require('events')

const testErr = new EventEmitter()

process.stdin.resume()

// we prevent the stack trace err by setting an error event 
testErr.on('error', (e) => console.log('the err: ' + e.message ))

testErr.emit('error', new Error('oh oh'))



