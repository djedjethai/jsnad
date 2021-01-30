const { spawn, exec, execSync, spawnSync } = require('child_process')


// const { IS_CHILD } = process.env
// 
// if (IS_CHILD) {
// 	console.log("process path: ", process.cwd())
// 	console.log("ENV VAR: ", process.env)
// }
// else {
// 	const { parse } = require('path')
// 	const { root } = parse(process.cwd())
// 	const sp =  exec(`${process.execPath} -e "__filename"`, {
// 		cwd: root,
// 		env: {IS_CHILD:1}
// 	})
// 
// 	sp.stdout.pipe(process.stdout)
// }



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
	
