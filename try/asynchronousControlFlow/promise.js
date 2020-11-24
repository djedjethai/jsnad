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

const { promisify } = require('util')
const { readFile } = require('fs')

const readFileProm = promisify(readFile)
const promise = readFileProm(__filename)

promise
	.then(contents => console.log(contents.toString()))
	.catch(err => console.log(err))

