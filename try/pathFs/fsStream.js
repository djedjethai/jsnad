const { createReadStream, createWriteStream } = require('fs')
const { pipeline, Transform } = require('stream')
const { join } = require('path')

// // WORKS GREAT LIKE IT
// const tr = new Transform({
// 	decodeStrings:false, // useless
// 	transform(chunk, enc, next){
// 		next(null, chunk.toString().toUpperCase())
// 	}
// })

// THE TEACHER ADD THE FUNCTION
const createTransformStream = () => {
	return new Transform({
		transform(chunk, enc, next){
			next(null, chunk.toString().toUpperCase())
		}
	})
}

// note that here it s 'flags'
pipeline(
	createReadStream(__filename, { encoding:'utf8' }),
	createTransformStream(),
	createWriteStream(join(__dirname, 'str.txt'), {flags:'a'}),
	err => {
		if(err) {
			console.error(err)
			return
		}
		console.log('finished writing')
	}
)

