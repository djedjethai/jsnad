const { opendir, statSync, readdirSync, readdir } = require('fs')

opendir(__dirname, async(e,d) => {
	for await( const Dirent of d) {
		console.log(Dirent.name)
		const stat = statSync(Dirent.name)
		console.log(stat.isDirectory() ? `${Dirent.name} is a directory` : `${Dirent.name} is not a dierectory`)
		console.log(stat)
	}
})

// const files = readdirSync('.')
// console.log(files)

// readdir(__dirname, (e,d) => {
// 	console.log(d)
// })


