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






const { TEST } = process.env

if (TEST) {
	console.log('oookkk')
}
else {

const sp =  exec(`${process.execPath} -e "console.log(__filename)"`)

sp.stdout.pipe(process.stdout)

}


