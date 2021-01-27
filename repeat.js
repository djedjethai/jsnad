const os = require('os')

setInterval(() => {
	console.log('ggggg')
	console.log(os.platform())
	process.exitCode = 1
}, 100)

setTimeout(() => {
	console.log('exiting')
	process.exit()
}, 501)
