const { readFile } = require('fs').promises

const files = Array.from(Array(3)).fill(__filename)

let index = 0
const data = []
const lg = files.length
const r = function read(file) {
	readFile(file, (err, contents) => {
		if(err) print(err)
		index++
		data.push(contents)
		if(index < lg) return read(files[index])
		return data
	}) 
}

r(files[index]).then(d => console.log(Buffer.concat(d).toString())).catch(console.error)






// normal call back
// function asyncOperation(cb) {
// 	doSomethingAsync ((err, value) => {
// 		cb(err, value)
// 	}) 
// }
// asyncOperation(functionThatHandleTheResult)
// 
// 
// // now the same using a promise
// function asyncOperation() {
// 	return new Promise((resolve, reject) => {
// 		doSomethingAsync(err, value) {
// 			if (err) reject(err)
// 			else resolve(value)
// 		}
// 	})
// }
// const pr = asyncOperation()
// pr
// 	.then(res => {})
// 	.catch(err => console.log(err))
// 

// promisify function from the util module
// const { promisify } = require('util')
// const doSmth = promisify(doSmthAsync)
// function myAsyncFunc() {
// 	return doSmth()
// }
// const promise = myAsyncFunc()
// then do something with the promise

// const { promisify } = require('util')
// const { readFile } = require('fs')
// 
// const readFileProm = promisify(readFile)
// const promise = readFileProm(__filename)
// 
// promise
// 	.then(contents => console.log(contents.toString()))
// 	.catch(err => console.log(err))

// const { promisify } = require('util')
// const files = Array.from(Array(5)).fill(__filename)
// 
// const { readFile } = require('fs').promises

// const data = []
// let index = 0
// const lg  = files.length
// console.log(lg)
// 
// function read(file) {
// 	return readFile(file)
// 		.then(content => {
// 			if(content) data.push(content)
// 			index++
// 			if(index < lg) return read(files[index])
// 			else return Buffer.concat(data).toString()
// 		})
// }
// 
// const getData = read(files[index])
// 
// getData
// 	.then(dt => console.log(dt))
// 	.catch(err => console.error(err))

// use Promise.all
// const readers = files.map(file => readFile(file))
// 
// Promise.all(readers)
// 	.then(data => console.log(Buffer.concat(data).toString()))
// 	.catch(err => console.error(err))

// using Promise.allSettled, to still render in case some Promise fail
// const files = [__filename, "not a file", __filename] 
// const { readFile } = require('fs').promises
// 
// const print = res => {
// 	res
// 		.filter(({status}) => status === 'rejected')
// 		.forEach(({reason}) => console.error(reason))
// 	const data = res
// 		.filter(({status}) => status === 'fulfilled')
// 		.map(({value}) => value)
// 	const contents = Buffer.concat(data)
// 	console.log(contents.toString())
// }
// 
// const readers = files.map(file => readFile(file))
// Promise.allSettled(readers)
// 	.then(print)
// 	.catch(console.error)

// Finally, if we want promises to run in parallel independently 
//we can either use Promise.anySettled or simple execute each of them with their own then and catch handlers:







