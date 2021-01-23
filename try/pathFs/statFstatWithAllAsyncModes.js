// const { statSync, stat, fstat, readFileSync, openSync } = require('fs')
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



// function getPr() {
// 	return new Promise((resolve, reject) => {
// 		stat('watch.js', (e, data) => {
// 			if (e) reject(e)
// 			else resolve(data)
// 		})
// 	})
// }
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

// ==================== with promisify ====================
const { promisify } = require('util')
// const prom = promisify((cb) => { 
// 	const print = (e, d) => {
// 		if(e) {
// 			cb(e, null)
// 			return
// 		}
// 		cb(null, d)
// 	}
// 	stat('watch.js', print)
// })		

// or HEREEEE same previously but  much simpler
// const prom = promisify((cb) => stat('watche.js', cb))

// prom().then(d => console.log('ddd: ',d.birthtime)).catch(e => console.log('errr: ', e.code))

// or with async await
// async function as() {
// 	try{
// 		const aa = await prom()
// 		console.log('async/aw: ', aa.ctime)
// 	} catch(e) {
// 		console.error(e)
// 	}
// }
// as()

// ==================== with fs.promises ====================
const { stat } = require('fs').promises

const prom = stat('watch.js')

prom.then(d => console.log('ddd: ',d.birthtime)).catch(e => console.log('errr: ', e.code))
