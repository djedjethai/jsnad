const { exec, execSync, spawn, spawnSync } = require('child_process')

// For the spawnSync and execSync functions an input option be used to achieve the same:
// For the input option to work for spawnSync and execSync the stdio[0] option has to be pipe, otherwise the input option is ignored.
// const z = spawnSync(process.execPath,
// 	[
// 		'-e',
// 		'console.error("an errr"); process.stdin.pipe(process.stdout)'
// 	],
// 	{ 
// 		input: "this is the way to pass input\n",
// 		stdio: ['pipe', 'inherit', 'ignore'] 
// 	}
// )


// To send input to a child process created with spawn or exec we can call the write method of the return ChildProcess instance
// const s = exec(`${process.execPath} -e "process.stdin.pipe(process.stdout)"`,
// 	{
// 		stdio: ['pipe', 'pipe', 'pipe']
// 	}
// )
// 
// s.stdout.pipe(process.stdout)
// s.stderr.pipe(process.stderr)
// s.stdin.write('a bah ca allorrs\n')
// s.stdin.end()



// here as the process.stdout is place at the stdio[2] 
// which is the stderr output stream of the spawning process
// any err will be automaticaly/directly send to mother process 
// here the err output is ignore
// const s = spawn(process.execPath, 
// 	[
// 		'-e',
// 		'console.error("err output"); process.stdin.pipe(process.stdout)'
// 	],
// 	{
// 		stdio: ['pipe', 'inherit', process.stdout]
// 	}
// )
// s.stdin.write('full of configuration\n')
// s.stdin.end()


// Let's imagine we want to filter out the STDERR output of the child process instead of writing it to the parent process.stdout stream we can change stdio[2] to 'ignore'. As the name implies this will ignore output from the STDERR of the child process:
// const a = spawn(process.execPath,
// 	[
// 		'-e',
// 		'console.error("err output"); process.stdin.pipe(process.stdout)'
// 	],
// 	{
// 		stdio: ['pipe', 'inherit', 'ignore']
// 	}
// )
// 
// a.stdin.write('uuuuuuuuuuuuuuuuuuu\n')
// a.stdin.end()


// const s = spawn(process.execPath,
// 	[
// 		'-e',
// 		'process.stdin.pipe(process.stdout)'
// 	],
// 	{stdio: ['pipe', 'inherit', 'pipe']}
// )
// 
// s.stderr.pipe(process.stdout)
// s.stdin.write('arrrrgggg\n')
// s.stdin.end()


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


