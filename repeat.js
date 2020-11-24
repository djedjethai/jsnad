arr1 = []
arr2 = []
arr3 = []

const { readFile } = require('fs').promises

const files = Array.from(Array(arr1, arr2, arr3)).fill(__filename)

const data = []
const print = (contents) => {
	if (contents) console.log(contents.toString())
	// else console.log(contents.toString())
}

let index = 0
const lg = files.length
function read(file) {
	return readFile(file)
		.then(contents => {
			index++
			data.push(contents)
			if (index < lg) return read(files[index])
			return data
		})	
}

read(files[index])
	.then(data => {
		print(Buffer.concat(data))
	})
	.catch(err => console.error(err))


