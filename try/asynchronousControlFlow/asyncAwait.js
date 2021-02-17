// const files = Array.from(Array(3)).fill(__filename)
const [s, m, b] = Array.from(Array(3)).fill(__filename)
const { readFile } = require('fs')
const { promisify } = require('util')


// parallele execution is better using cb or Promise.all 
// but to set the logic into a serial flow, like in the run() func
// we can wrap the over all logic of cb, and promisify it
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

// same a previous but with iterate the array
const { readFile } = require('fs')
const { promisify } = require('util')

const files = Array.from(Array(4)).fill(__filename)


const run = promisify(cb => {

	const lgt = files.length
	let i = 0

	function print(e,d) {
		i++
		if(e) {
			console.error(e)
			if(i === lgt) cb()
			return
		}
		else {
			console.log(d.toString())
			if(i === lgt) cb()
			return
		}
	}

	for(let file of files) {
		readFile(file, print)
	}
})

async function go() {
	await run()
	console.log('finished')
}

go().catch(e => console.error(e))


// const { readFile } = require("fs").promises
// const files = Array.from(Array(1)).fill(__filename)
// 
// const gd = async function readData() {
// 	const c = await readFile(files[0])
// 	console.log(c.toString())
// }
// 
// gd().catch(e => console.error(e))
