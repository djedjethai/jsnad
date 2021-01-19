// const fs = require('fs')
// const { opendir } = require('fs').promises
// 
// async function readDirStream() {
// 	// const dir = await fs.promises.opendir(__dirname)
// 	const dir = await opendir(__dirname)
// 	for await (const dirent of dir) {
// 		console.log(dirent.name)
// 	}
// } 
// readDirStream().catch(e => console.error(e))

// let s have fun and return a file with the list as uppercase
const fs = require('fs')
const { Transform, pipeline, Readable } = require('stream')

const streamUpper = () => {
	return new Transform({
		transform(chunk, enc, next) {
			next(null, chunk.toString().toUpperCase())
		}
	})
}

async function readDirStream() {
	const dir = await fs.promises.opendir(__dirname)
	
	for await (const dirent of dir) {
		await require('util').promisify(pipeline)(
	 		Readable.from(dirent.name+'\n'),
	 		streamUpper(),
	 		fs.createWriteStream('./fileList.txt', {flags:'a'})
	 	)	
	}
}
readDirStream().catch(e => console.error(e))
