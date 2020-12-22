'use strict'

const { Transform } = require('stream')
const { scrypt } = require('crypto')
const createTransform = () => {
	return new Transform({
		decodeStrings: false,
		encoding: 'hex',
		transform(chunk, enc, next) {
			scrypt(chunk,'a-salt',32,(err, key) => {
				if(err) {
					next(err)
					return
				}
				next(null, key)
			})
		}
	})
}

const tr = createTransform()
tr.on('data', data => {
	console.log('the data: ', data)
})
tr.write('firsyt')
tr.write('second')
tr.write('third')
tr.write('last')
tr.end('finishhhhiiiiiii')
