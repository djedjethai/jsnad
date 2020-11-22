const { readFile } = require('fs')

const [bigFile, mediumFile, smallFile] =
	Array.from(Array(3)).file(__filename)

const data = []
const print = (err, content) => {
	if(err) {
		console.log(err)
		return
	}
	return content
}


readFile(bigFile, (err, content) => {
	if (err) print(err)
	else data.push(content)
	readFile(mediumFile, (err, content) => {
		if (err) print(err)
		else data.push(content)
		readFile(smallFile, (err, content) => {
			if (err) print(err)
			else data.push(content)
			print(null, Buffer.concat(data))
		})
	})
})

