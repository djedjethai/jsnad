const { statSync, stat, fstat, readFileSync, openSync } = require('fs')
const { join, resolve } = require('path')


// const statCurrentFile = statSync(__filename)
// console.log(statCurrentFile.mtime)
// console.log(statCurrentFile.ctime)
// console.log(statCurrentFile.birthtime)
// console.log(statCurrentFile.atime)

// stat WORKS ONLY with the file name as first arg
// stat(__filename, (e, statCurrentFile) => {
// 	if(e) console.error(e)
// 	else {
// 		console.log(statCurrentFile.mtime)
// 		console.log(statCurrentFile.ctime)
// 		console.log(statCurrentFile.birthtime)
// 		console.log(statCurrentFile.atime)
// 	}
// })

// fstat WORKS ONLY with openSync('filename') as first arg
// fstat(openSync('.'), (e, statCurrentFile) => {
// 	if(e) console.error(e)
// 	else {
// 		console.log(statCurrentFile.mtime)
// 		console.log(statCurrentFile.ctime)
// 		console.log(statCurrentFile.birthtime)
// 		console.log(statCurrentFile.atime)
// 	}
// })

// const st =  new Promise((resolve, reject) => {
// 		stat('watch.js', (e, data) => {
// 			if (e) reject(e)
// 			else resolve(data)
// 		})
// 	})
// st.then(d => console.log(d.mtime))



function getPr() {
	return new Promise((resolve, reject) => {
		stat('watch.js', (e, data) => {
			if (e) reject(e)
			else resolve(data)
		})
	})
}
// getPr()
// 	.then(d => console.log(d.birthtime)) 
// 	.catch(console.error)// ok

// async function delay() {
// 	try{
// 		const d = await getPr()
// 		console.log(d.atime)
// 	} catch (e) {
// 		console.log(e)
// 	}
// }
// delay()// ok

// DO NOT WORKKKKKK
// async function delay() {
// 	return await getPr()
// }
// const st = delay()
// console.log(st.mtime)
// DO NOT WORKKKKKK


const prom = require('util').promisify()() // a finir....

