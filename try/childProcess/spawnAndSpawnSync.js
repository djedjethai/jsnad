const { spawnSync, spawn, exec } = require('child_process')

// const result = spawnSync(
// 	process.execPath,
// 	['-e', `console.log('subprocess stdio output')`]
// )
// 
// // console.log(result) // return an obj
// 
// console.log(result.stdout.toString()) // line 10 and 11 return the same
// console.log(result.output[1].toString())
// 
// 
// //!!!!!! Unlike execSync, the spawnSync method does not need to be wrapped in a try/catch. If a spawnSync process exits with a non-zero exit code, it does not throw
// const res = spawnSync(process.execPath, [`-e`, `process.exit(1)`])
// console.log(res)

// const spn = spawn(
// 	process.execPath,
// 	[`-e`, `console.log('tjhe spawn method')`]
// )
// 
// console.log('the process was: ', spn.pid)
// 
// spn.stdout.pipe(process.stdout)
// 
// spn.on('close', (status) => {
// 	console.log('the status was', status)
// })

// const spn = spawn(
// 	process.execPath,
// 	[`-e`, `process.exit(1)`]
// 	// [`-e`, `process.exitCode(1)`] // same same
// )
// 
// console.log('the process was: ', spn.pid)
// 
// spn.stdout.pipe(process.stdout)
// 
// spn.on('close', (status) => {
// 	console.log('the status was', status)
// })

// !!!! TAKING ABOUT EXEC, The exec command doesn't have to take a callback, and it also returns a ChildProcess instance:
// simpler/faster
// MEANS THAT EXEC TAKE A CALL-BACK. BUT DOES NOT HAVE TO !!!
const spn = exec(
	`${process.execPath} -e "console.log('subprocess stdio output')"`
)

console.log('subprocess id: ', spn.pid)

spn.stdout.pipe(process.stdout)

spn.on('exit', (status) => {
	console.log('status subprocess at exit: ', status)
})

// !!!! ATTENTION !!!
// The spawn method and the exec method both returning a ChildProcess instance can be misleading. There is one highly important differentiator between spawn and the other three methods we've been exploring (namely exec, execSync and spawnSync): the spawn method is the only method of the four that doesn't buffer child process output. Even though the exec method has stdout and stderr streams, they will stop streaming once the subprocess output has reached 1 mebibyte (or 1024 * 1024 bytes). This can be configured with a maxBuffer option, but no matter what, the other three methods have an upper limit on the amount of output a child process can generate before it is truncated. Since the spawn method does not buffer at all, it will continue to stream output for the entire lifetime of the subprocess, no matter how much output it generates. Therefore, for long running child processes it's recommended to use the spawn method.
