// If we attempt to use the command line to pipe the output from the random byte command into our process, nothing will happen beyond the process printing that it was initialized:

[jerome@thearch processAndOS]$ node -p "crypto.randomBytes(100).toString('hex')" | node exemple.js
initialised

// ===========================

'use strict'
const { pipeline } = require('stream')


console.log('initialised')
process.stdin.pipe(process.stdout)

[jerome@thearch processAndOS]$ node -p "crypto.randomBytes(100).toString('hex')" | node exemple.js
initialised
0dbadf3f10133972c50c3c8961f5240e52c81dcb92ca973b2083e4ed102f1970d7ec4e87205532ac452d342cbbb0746f6f4c2a4b9a794508e07967a84e537ec6bd2fe696ed60d899fa018bbde7111ef99868c9449278dabc583945c1dda29ccced71dcbf
[jerome@thearch processAndOS]$ 

'use strict'
const { pipeline, Transform } = require('stream')


const createTransf = () => {
	return new Transform({

		transform(chunk, enc, next) {
			next(null, chunk.toString().toUpperCase())
		}
	})
}

const upperCase = createTransf()

console.log(process.stdin.isTTY ? 'terminale' : 'piped to')

process.stdin.pipe(upperCase).pipe(process.stdout)

// the 2 following lines output the same
process.stderr.write(process.stdin.isTTY ? 'Terminal\n' : 'Is pipe\n')
console.log(process.stdin.isTTY ? 'Terminal\n' : 'Is pipe\n')

// process.stdin.pipe(process.stdout)


// [jerome@thearch processAndOS]$ node -p "crypto.randomBytes(100).toString('hex')" | node exemple.js > out.txt 2>err.txt
// [jerome@thearch processAndOS]$ ls
// err.txt  exemple.js  out.txt  repeat.js  stdio.js
// [jerome@thearch processAndOS]$ cat err.txt
// Is pipe
// [jerome@thearch processAndOS]$

// This command wrote STDOUT to out.txt and STDERR to err.txt. On both Windows and POSIX systems (Linux, macOS) the number 2 is a common file handle representing STDERR, this is why the syntax is 2>


// ---------------- implement for understanding my own stdout and err -------------
const fs = require('fs')

const mySTDOUT = fs.createWriteStream(null, {fd:1})
const mySTDERR = fs.createWriteStream(null, {fd:2})

mySTDOUT.write('stdout stream\n')
mySTDERR.write('stderr stream\n')

[jerome@thearch processAndOS]$ node repeat.js
stdout stream
stderr stream
[jerome@thearch processAndOS]$ node repeat.js > out.txt
stderr stream
[jerome@thearch processAndOS]$ node repeat.js > out.txt 2> err.txt
[jerome@thearch processAndOS]$ cat out.txt
stdout stream
[jerome@thearch processAndOS]$ cat err.txt
stderr stream

// ----------- i try that ---------------
const mySTDOUT = fs.createWriteStream(null, {fd:1})
const mySTDERR = fs.createWriteStream(null, {fd:2})
const mySTDGG = fs.createWriteStream(null, {fd: 1}) // if i change to {fd: 3} // err core dumped

mySTDOUT.write('stdout stream\n')
mySTDERR.write('stderr stream\n')
mySTDGG.write('stdGG stream\n')

[jerome@thearch processAndOS]$ node repeat.js 
stdout stream
stderr stream
stdGG stream
[jerome@thearch processAndOS]$ node repeat.js > out.txt
stderr stream
[jerome@thearch processAndOS]$ cat out.txt 
stdout stream
stdGG stream
[jerome@thearch processAndOS]$ 

