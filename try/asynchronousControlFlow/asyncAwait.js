const { readFile } = require("fs").promises
const files = Array.from(Array(1)).fill(__filename)

const gd = async function readData() {
	const c = await readFile(files[0])
	console.log(c.toString())
}

gd().catch(e => console.error(e))
