const { pipeline, Transform, Readable } = require('stream')
const http = require('http')
const fs = require('fs')

const createTransform = () => {
  let syntax = '[\n'
  return new Transform({
    writableObjectMode: true,
    readableObjectMode: false,
    transform (entry, enc, next) {
      next(null, `${syntax} "${entry.name}"`)
      syntax = ',\n'
    }
    ,
    final (cb) {
      this.push('\n]\n')
      cb()
    }
  })	
}

http.createServer(async(req, res) => {
	
	if(req.url !== '/') {
		res.statusCode = 400
		res.end('Server error')
		return
	}

	try{
		const ct = createTransform()
		const files = await fs.promises.opendir(__dirname)
		console.log(files)
		const fileStream = Readable.from(files)
		// for response server
		// res.setHeader("Content-Type","application/json")
		// pipeline(fileStream, ct, res, e => console.log(e))
		
		// for printing output in a file, in this dir
		pipeline(fileStream, ct, fs.createWriteStream('./fileList.txt', {flags:'a'}), e => console.log(e))

	} catch(e) {
		console.log('errooorr: prom.readdir: ', e)
	}

	
}).listen('3000')
