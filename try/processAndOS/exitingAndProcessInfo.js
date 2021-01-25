'use strict'

// function testExit() {
// 	setInterval(() => {
// 		console.log('interval each 500ms')
// 		process.exitCode = 1
// 	}, 500)
// 	setTimeout(() => {
// 		console.log('exit')
// 		process.exit()
// 		// process.exit(1)
// 	}, 3100)
// }
// 
// testExit()
// 
// // this event handler will be ex at the 'exit' event
// // a final code then can be executed, but NO ASYNC code
// process.on('exit', (code) => {
// 	console.log('Current directory: ', process.cwd())
// 	console.log('Process platform: ', process.platform)
// 	console.log('Current process ID: ', process.pid)
// // console.log('Process env: ', process.env)
// 	console.log('exit code: ', code )
// 	setTimeout(() => {
// 		console.log('this will never appear')
// 	},1)
// })
// 
// // The process.chdir command can also change the current working directory, in which case process.cwd() would output the new directory
	

// ATTENTION !!!!
console.log(process.cwd())
process.chdir('/home/jerome/Documents/code/jsnad/try/pathFs')
console.log(process.cwd())
try{
	// DON T WORK, the __dirname still point where the file is load from	
	console.log(require('fs').readFileSync(require('path').join(__dirname,'fsAsync.js'), 'utf8'))
	// OK WORKS
	console.log(require('fs').readFileSync(require('path').join(process.cwd(),'fsAsync.js'), 'utf8'))
} catch(e) {
	console.log(e)
}
console.log(process.cwd())

// 'use strict'
// 
// console.log(process.env)
// process.env.ONEMORE = 'oneMoreEnv'
// console.log(process.env)
//   NVM_BIN: '/home/jerome/.nvm/versions/node/v14.15.1/bin',
//   MAIL: '/var/spool/mail/jerome',
//   OLDPWD: '/home/jerome/Documents/code/jsnad/try',
//   _: '/home/jerome/.nvm/versions/node/v14.15.1/bin/node',
//   ONEMORE: 'oneMoreEnv'
// }

// [jerome@thearch processAndOS]$ echo $ONEMORE
// NO ENV IN THE OS'S SHELL	
// [jerome@thearch processAndOS]$ env
//  NVM_BIN=/home/jerome/.nvm/versions/node/v14.15.1/bin
//  MAIL=/var/spool/mail/jerome
//  OLDPWD=/home/jerome/Documents/code/jsnad/try
//  _=/usr/bin/env
//  [jerome@thearch processAndOS]$
//  HERE STILL NO ENV VAR. MEANS THIS ENV STAY ONLY INTO THE NODE PROCESS
//  ONLY IN THE RUNNING PROCESS AS SOON AS IT RESTART THE ADDED ENV VAR ARE LOST

// process.cwd() is the PWD of the node process, so process.chdir('new/path') will take effect
// BUT process.env.PWD is the path of the shell from where the .js file is run.
// in this case process.chdir() won t change it (as it do not depends of node process)
