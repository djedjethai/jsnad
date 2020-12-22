'use strict'

const fs = require('fs')
const path = require('path')
// 
// const file = fs.readFileSync(__filename)
// console.log(file)
// 
// // The above code will synchronously read its own contents into a buffer and then print the buffer:
// 
// // The above code will synchronously read its own contents into a buffer and then print the buffer:
// const file1 = fs.readFileSync(__filename, { encoding:'utf8' })
// console.log(file1)
// 
// The fs.writeFileSync function takes a path and a string or buffer and blocks the process until the file has been completely written:
// const contents = fs.readFileSync(__filename, { encoding:'utf8' })
// fs.writeFileSync(path.join(__dirname, 'out1.txt'), contents.toUpperCase())

// An options object can be added, with a flag option set to 'a' to open a file in append mode:
// means that any time we run the code, 'out1.txt' isn t overwrited but contents are added 
// to the already existing's one
const contents = fs.readFileSync(__filename, { encoding: 'utf8' })
fs.writeFileSync(path.join(__dirname, 'out1.txt'), contents.toUpperCase(), {
	flag: 'a'
})

// If there's a problem with an operation the *Sync APIs will throw. So to perform error handling they need to be wrapped in a try/catch:

// change the permission to block any writing (reading..?) opertation on this 'out1.txt' file
// node -e "fs.chmodSync('out1.txt', 0o666)"
// DO NOR WORKKKKKK... A VOIR.....
