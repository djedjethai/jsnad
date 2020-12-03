// const files = Array.from(Array(3)).fill(__filename)
const [s, m, b] = Array.from(Array(3)).fill(__filename)
const { readFile } = require('fs')
const { promisify } = require('util')

const read = promisify((cb) => {
	let index = 0
	const print = (err, contents) => {
		index++
		if(err) {
			console.error(err)
			if(index === 3) cb()
			return
		}
		console.log(contents.toString())
		if (index === 3) cb()
	}
	readFile(b, print)
	readFile(m, print)
	readFile(s, print)
})

async function run() {
	await read()
	console.log("finished")
}

run().catch(console.error)




// const { readFile } = require("fs").promises
// const files = Array.from(Array(1)).fill(__filename)
// 
// const gd = async function readData() {
// 	const c = await readFile(files[0])
// 	console.log(c.toString())
// }
// 
// gd().catch(e => console.error(e))
