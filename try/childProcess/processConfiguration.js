const { spawn, exec, execSync, spawnSync } = require('child_process')
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



// meme chose with exec
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



// process.env.SUBPROCESS='i am'

// console.log(node.env)

// const xx = spawn(process.execPath, ['-p', 'process.env'])

// const xx = spawn(process.execPath, ['-p', 'process.env'], {
// 	env:{SUBPROCESS_SPECIFIC:'ENV VAR',
// 		OTHERVAR:'jhgfjhgf',
// 		LJH:'cccccccc'
// 	}
// })
// 
// xx.stdout.pipe(process.stdout)

// const { IS_CHILD } = process.env
// 
// if(IS_CHILD) {
// 	console.log('Subprocess cwd: ', process.cwd())
// 	console.log('env', process.env)
// } else {
// 	const { parse } = require('path')
// 	const { root } = parse(process.cwd())
// 	const { spawn } = require('child_process')
// 	const sp = spawn(process.execPath, [__filename], {
// 		cwd: root,
// 		env: {IS_CHILD:'1'}
// 	})
// 	sp.stdout.pipe(process.stdout)
// }
	
