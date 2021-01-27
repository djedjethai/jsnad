const os = require('os')
const stats = [process.memoryUsage()]


function mesure() {

	console.log(process.uptime())
	console.log(process.cpuUsage().user)
	console.log(process.cpuUsage().system)
	console.log('============= ggggggggggg ==============')
	console.log(os.freemem())
	console.log(os.totalmem())

}

function prc() {
	mesure()
		stats.push(process.memoryUsage())
	setTimeout(() => {
		console.log('---------')
		mesure()	
		console.log('---------')
		stats.push(process.memoryUsage())
	}, 500)
	console.log(process.platform)
	console.log(os.platform())
}

prc()

console.table(stats)
