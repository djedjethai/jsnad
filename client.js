const { Transform, Readable } = require('stream')
const assert = require('assert').strict
const streamUpper = () => {
  return new Transform({
    objectMode: true,
    // readableObjectMode: true,
    // writableObjectMode: false,
    transform(chunk, enc, next) {
	    console.log(chunk.toString().toUpperCase())
        next(null, chunk.toString().toUpperCase())
    }   
  })
}



const upper = streamUpper()
Readable.from(['aaaa', 'bbbb']).pipe(upper)


upper.once('data', d => {
	console.log(d)
	assert.strictEqual(d, 'AAAA')
	upper.once('data', da => {
		assert.equal(da, 'BBBB')
		console.log('passed')
	})
})

