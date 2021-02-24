// const { exec } = require('child_process')
// 
// 
// exec('find ./ -name cours', (e,d) => {
// 	exec(`namei -l ${d}`, (e, d) => {
// 		console.log(d)
// 	})
// })

const net = require('net')
const { finished } = require('stream')

net.createServer((socket) => {

	const inter = setInterval(() => {
		socket.write(JSON.stringify({name: 'ping'}))
	}, 500)

	setTimeout(() => {
		socket.end()
	}, 4001)

	finished(socket, () => {
		console.log('done')
		clearInterval(inter)
	})
}).listen(3000)

