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
