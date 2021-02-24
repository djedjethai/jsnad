const { pipeline, Transform, Readable } = require('stream')
const http = require('http')
const fs = require('fs')

// const createTransform = () => {
//   let syntax = '[\n'
//   return new Transform({
//     writableObjectMode: true,
//     readableObjectMode: false,
//     transform (entry, enc, next) {
//       next(null, `${syntax} "${entry.name}"`)
//       syntax = ',\n'
//     }
//     ,
//     final (cb) {
//       this.push('\n]\n')
//       cb()
//     }
//   })	
// }

const createTransform = () => {
        return new Transform({
		readableObjectMode: false,
		writableObjectMode: true,
                transform(chunk, enc, next) {
                	let syntax = '\n'
                        next(null, `${syntax} ${chunk.name.toUpperCase()}`)
		}
        })  
}
 
async function readDirStream() {
        const dir = await fs.promises.opendir(__dirname)
	// const rd = Readable.from(dir)

	// that is good
	pipeline(dir, createTransform(), fs.createWriteStream('newfile.txt', {flags: 'a'}), e => console.error("from piprline: ", e) )

	// my first found, it s sucks........
        // for await (const dirent of dir) {
        //         await require('util').promisify(pipeline)(
        //                 // Readable.from(dirent.name+'\n'),
        //                 streamUpper(),
        //                 fs.createWriteStream('./fileList.txt', {flags:'a'})
        //         )           
        // }   
}
readDirStream().catch(e => console.error(e))
