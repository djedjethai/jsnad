const { openSync, chmod, fchmod, readFileSync, writeFileSync } = require('fs')

const dt = readFileSync(__filename, {encoding:'utf-8'})

// 7 — read, write, and execute
// 6 — read and write
// 5 — read and execute
// 4 — read only
// 3 — write and execute
// 2 — write only
// 1 — execute only
// 0 — no permission

writeFileSync(require('path').join(__dirname,'todel.txt'), dt.toUpperCase(), {
	flag:'a'
})

const fd = openSync('todel.txt') // return 19

// original code but it s async... so that s wrong like it
// fchmod(fd, 0o333, e => { if(e) console.log(e) })

// should use async/await to deal with the asynchronicite
async function rr() {
	// error should be handle with try/catch, like this is good
	
	// const { promisify } = require('util')
	// const promFchmod = promisify(fchmod)
	// try{
     		// await promFchmod(fd, 0o000, e => e )
	// } catch(e) {
	// 	console.error(e)
	// }
	
	// here is for the sake of the ex
	const re = await require('util').promisify(fchmod)(fd, 0o000, e => e)	
	if (re) console.log(re)
}
rr()

// If there's a problem with an operation the *Sync APIs will throw. So to perform error handling they need to be wrapped in a try/catch:
try{
	console.log(readFileSync('./todel.txt', 'utf-8'))
} catch(e) {
	console.log('fr error')
	console.log(e.code)
}

console.log('alll ggoood')
// reset the file permission to read, write and execute
// does not work as i don t have permission anymore..... ah ah ah .
chmod('todel.txt', 0o777, (e) => { if(e) console.log(e) } )


// now read it again
try{
	console.log(readFileSync('./todel.txt', 'utf-8'))
} catch(e) {
	console.log('sec error')
	console.log(e.code)
}

