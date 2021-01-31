const { exec, execSync, spawn, spawnExec } = require('child_process')

// const sp = spawn(
// 	process.execPath,
// 	[
// 	'-e',
// 	`console.error('err output'); process.stdin.pipe(process.stdout)`
// 	],
// 	{ stdio: ['pipe', 'pipe', 'pipe'] }
// )
// 
// sp.stdout.pipe(process.stdout)
// sp.stderr.pipe(process.stdout)
// sp.stdin.write("this input will become output\n")
// sp.stdin.end()

// A VOIR>>>>
// const { Transform } = require('stream')
// const tr = () => {
// 	return new Transform({
// 		transform(chunk, enc, next) {
// 			next(null, chunk.toString().toUpperCase())
// 		}
// 	})
// }
// 
// const trr = tr()
// 
// const tt = spawn(
// 	process.execPath,
// 	[
// 		'-e',
// 		'process.stdin.pipe(tr()).pipe(process.stdout)'
// 	]
// )
// 
// tt.stdout.pipe(process.stdout)
// tt.stderr.pipe(process.stdout)
// tt.stdin.write('ouuuuaaah\n')
// tt.stdin.end()



// const { IS_CHILD } = process.env
// 
// if(IS_CHILD) {
// 	console.log('Subprocess pwd: ', process.cwd())
// 	console.log('process env: ', process.env)
// }
// else {
// 	const { parse } = require('path')
// 	const { root } = parse(process.cwd())
// 	const p = spawn(process.execPath, [__filename], {
// 		cwd: root,
// 		env:{IS_CHILD:1}
// 	})
// 	p.stdout.pipe(process.stdout)
// }

// A VOIR >>>>> OOOKKK
const { TEST } = process.env

if (TEST) {
	// console.log('oookkk')
	console.log('child process env: ', process.env)
	console.log('child process path: ', process.cwd())
}
else {
	const { parse } = require('path')
	const { root } = parse(process.cwd())

	// const pr = exec(`${process.execPath} ${__filename}`, { // this works as well..
	const pr = exec(`${process.execPath} "${__filename}"`, {
		cwd: root,
		env: {TEST:1}
	})
	
	pr.stdout.pipe(process.stdout)
}


