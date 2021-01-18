const { createGzip } = require('zlib')
const { pipeline, Transform } = require('stream')
// const {
// 	createReadStream,
// 	createWriteStream
// } = require('fs')

// create a gzip file using the transform stream createGzip
// const transformToGzip = createGzip()
// const source = createReadStream(__filename)
// const destination = createWriteStream('./dddd/delete.txt.gz')
// 
// pipeline(source, transformToGzip, destination, e => {
// 	if(e) {
// 		console.error(e)
// 		process.exitCode = 1
// 	}
// })

// with promise, async/await
// const { promisify } = require('util')
// const promPipe = promisify(pipeline)
// 
// async function gg() {
// 	const trGz = createGzip()
// 	const source = createReadStream(__filename)
// 	const destination = createWriteStream('./dddd/file.gz')
// 	try{ await promPipe(source, trGz, destination) } 
// 	catch(e){ if(e) console.error(e) }
// }
// gg()

// const trGz = createGzip()
// 
// trGz.on('data', d => {
// 	console.log('got data: ', d.toString('base64'))
// })
// trGz.write('one')
// trGz.write('one')
// trGz.write('one')
// trGz.write('one')
// 
// trGz.end('donne')

const { scrypt } = require('crypto')

const myTransformStream = () => {
	return new Transform({
		decodeStrings:false,
		encoding:'hex',
		transform(chunk, enc, next) {
			scrypt(chunk, 'a-salt', 32, (e, k) => {
				if (e) {
					next(e)
					return 
				}
				else next(null, k)
			})
		}
	})
}

const mts = myTransformStream()
mts.on('data', d => {
	console.log('got data: ', d)
})
mts.on('finish', () => {
	console.log('it s donne coool')
})

mts.write('first')
mts.write('deux')
mts.write('trois')

setTimeout(() => {
	mts.end('finex')
}, 1000)
