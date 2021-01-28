const { execSync, exec } = require('child_process')

// const output = execSync(
// 	`node -e "console.log('subprocess stdio output')"`
// 	`${process.execPath} -e "console.log('using process.execPath')"` // same as previous line
// 	// `ls -l`
// 	// `cat repeat.js`
// )
// 
// console.log(output.toString())

// works but print bytes.....
// const rep = execSync(
// 	`node -p "console.log(fs.readFileSync('repeat.js'))"`
// )
// console.log(rep.toString()

// coool
// const cmd = process.platform === 'win32' ? 'dir' : 'ls'
// const output = execSync(cmd)
// console.log(output.toString())

// If we do want to execute the node binary as a child process, it's best to refer to the full path of the node binary of the currently executing Node process. This can be found with process.execPath:
// Using process.execPath ensures that no matter what, the subprocess will be executing the same version of Node.
// [jerome@thearch childProcess]$ node -p "process.execPath"
// /home/jerome/.nvm/versions/node/v14.15.1/bin/node
// [jerome@thearch childProcess]$ node -p process.execPath
// /home/jerome/.nvm/versions/node/v14.15.1/bin/node
// [jerome@thearch childProcess]$ 

// const out = execSync(
// 	`${process.execPath} -e "console.log('using process.execPath')"`
// )
// console.log(out.toString())



// If the subprocess exits with a non-zero exit code, the execSync function will throw:
// The error object that we log out in the catch block has some additional properties
// try{
// 	execSync(`${process.execPath} -e "process.exit(1)"`)
// } catch(e) {
// 	console.error('CAUGHT ERR: ', e)
// }

// The output array indices correspond to the standard I/O file descriptors. 
// the file descriptor of STDERR is 2. Ergo the err.stderr property will contain the same buffer as err.output[2], so err.stderr or err.output[2] can be used to discover any error messages written to STDERR by the subprocess.
// try{
// 	execSync(`${process.execPath} -e "throw Error('err de ouff')"`)
// } catch(e) {
// 	console.error('CAUGHT ERR: ', e)
// }
// [eval]:1
// throw Error('err de ouff')
// ^
// 
// Error: err de ouff
//     at [eval]:1:7
//     at Script.runInThisContext (vm.js:132:18)
// etc ...................

// When we log the error, it's preceded by a message saying that the command failed and prints two stacks with a gap between them. The first stack is the functions called inside the subprocess, the second stack is the functions called in the parent process. 


// exec(
// 	`${process.execPath} -e "console.log('A'); console.error('B')"`,
// 	(err, stdout, stderr) => {
// 		console.log('err: ', err)
// 		console.log('subprocess stdout: ', stdout.toString())
// 		console.log('subprocess stderr: ', stderr.toString())
// 	}
// )

exec(
	`${process.execPath} -e "console.log('A'); throw Error('B')"`,
	(err, stdout, stderr) => {
		console.log('err: ', err)
		console.log('subprocess stdout: ', stdout.toString())
		console.log('subprocess stderr: ', stderr.toString())
	}
)





