const { exec, execSync, spawn, spawnSync } = require('child_process')


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
