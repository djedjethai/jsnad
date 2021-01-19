// const { readFile, writeFile } = require('fs')
// const { join } = require('path')

// readFile(__filename, { encoding:'utf8' }, (err, contents) => {
// 	if(err) {
// 		console.error(err)
// 		return
// 	}
// 	writeFile(join(__dirname, 'outAsync.txt'), contents.toUpperCase(), (err) => {
//  		if(err) { console.log(err)}
// 	})
// })

// using promise and async await
// async function print() {
// 	const data = await new Promise((resolve, reject) => {
// 		readFile(__filename, { encoding:'utf8' }, (err, contents) => {
// 			if(err) reject(err)
// 			else resolve(contents)
// 		})
// 	})
// 
// 	await writeFile(join(__dirname, 'asncAw.txt'), data.toUpperCase(), (err) => {
// 		if(err) console.error(err)
// 	})
// 
// 	console.log('donnne')
// }
// 
// try {
// 	print()
// } 
// catch(e) {
// 	console.error(e)
// }

// MUCH BETTTTTERRRR
const { readFile, writeFile } = require('fs').promises
const { join } = require('path')

async function better() {
	const data = await readFile(__filename, { encoding:'utf8' })
	const out = join(__dirname, 'ouaa.txt')
	await writeFile( out, data.toUpperCase())
}

better().catch(console.error)

// const { readFile } = require('fs')
// readFile(__filename, 'utf-8', (e, d) => {
// 	if (e) {
// 		console.log(e)
// 	}
// 	else {
// 		console.log('aaaa')
// 		console.log(d)
// 	}
// })

// async function as() {
// 	try{
// 		const re = await require('util').promisify(readFile)(__filename, 'utf-8')
// 		console.log(re)
// 	} catch(e) {
// 		console.error(e)
// 	}
// }
// as()


const { readFile, writeFile } = require('fs').promises
// async function pr() {
// 	try{
// 		// console.log(await readFile(__filename)) // return bytes data
// 		const data = await readFile(__filename, 'utf-8')
// 		await writeFile('out', data.toUpperCase()) // same as './out'
// 	} catch(e) {
// 		console.error(e)
// 	}
// }
// pr()
// SAME AS
async function pr() {
	const data = await readFile(__filename, 'utf-8')
	await writeFile(out, data.toUpperCase()) // same as './out'
}
pr().catch(e => console.log(e))

