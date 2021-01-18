const { Readable } = require('stream')
// 
// const xxx = Readable.from(['fdg', 'reqrq', 'oiuouou'])
// 
// 
// xxx.on('data', data => {
// 	console.log(data)
// })
// xxx.on('end', () => console.log('finexxx'))

const myCreateReadable = () => {
	const dt = ['i', 'read', 'data', 'cool']
	return new Readable ({
		objectMode: true, // encoding: 'utf=8', // would have the same effect but not good
		highWaterMark: 64 * 1024, // bigger buffer(64KB), instead of the 16KB default one
		read() {
			if (dt.length === 0) this.push(null)
			else this.push(dt.shift())
		}
	})
}

const rd = myCreateReadable()
rd.on('data', d => {
	console.log('ahhh: ', d)
})
rd.on('end', () => console.log('c est cool, end.'))

//  var rs = fs.createReadStream('/foo/bar', { highWaterMark: 128 * 1024 });

// with Readable.from() which works for iterable. the objectMode default default
// here we set it to false to be binary, and down the Buffer size to only 1KB
const r = Readable.from(['i','am','an','iterable'], {objectMode:false, highWaterMark: 1024})
r.on('data', d => console.log(d))
r.on('end', d => console.log('endddd'))

// to show that any iterable could be read by Readable.from()
async function * generate() {
	yield 'hello'
	yield 'streams'
}

const r = Readable.from(generate())

r.on('data', chunk => console.log(chunk))
r.on('end', () => console.log('doonnee'))


