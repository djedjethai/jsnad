// const { readFile } = require('fs')
// 
// const arr1 = []
// for(let i=0; i < 100; i++) {
// 	arr1.push("first arr1: " + 1)
// }
// 
// const arr2 = []
// for(let i=0; i < 1000; i++) {
// 	arr2.push("first arr2: " + 1)
// }
// 
// const arr3 = []
// for(let i=0; i < 10000; i++) {
// 	arr3.push("first arr3: " + 1)
// }

// first: manual exemple. 
// execute async code in serial mode 
// start to make sense.... next one using fastseries library
//
// const files = Array.from(Array(arr1, arr2, arr3)).fill(__filename)
// // console.log(files); // okkkk.
// const data = []
// const print = (err, contents) => {
// 	if(err) {
// 		console.log(err)
// 		return
// 	}
// 	return console.log(contents.toString())
// }
// let count = files.length
// let index = 0
// const read = (file) => { 	
// 	readFile(file, (err, contents) => {
// 		index++
// 		if(err) print(err)
// 		else data.push(contents)
// 		if (index < count) read(files[index])
// 		else print(null, Buffer.concat(data))
// 	})
// }
// 
// read(files[index])

// serial execution of async code, using fastseries library

// const series = require('fastseries')()
// const files = Array.from(Array(arr1, arr2, arr3)).fill(__filename)
// 
// const print = (err, data) => {
// 	if(err) {
// 		console.log(err)
// 		return
// 	}
// 	console.log(Buffer.concat(data).toString())
// }
// 
// const readers = files.map(file => {
// 	return (_, cb) => {
// 		readFile(file, (err, contents) => {
// 			if (err) cb(err)
// 			else cb(null, contents)
// 		})
// 	}
// })
// series(null, readers, null, print)


// this utilisation of the fastseries is not completly quivalent to the first exemple 
// as in case in err, with fastseries, the execution stop
// but in the first ex, we print the err and carry on to read 
// for fastseries to carry on in case of err, ht efunction should like this
// const readers = files.map(file => {
// 	return (_, cb) => {
// 		readFile(file, (err, contents) => {
// 			if (err) {
// 				print(err)
// 				cb(null, Buffer.alloc(0))
// 			}
// 			else cb(null, contents)
// 		})
// 	}
// })





