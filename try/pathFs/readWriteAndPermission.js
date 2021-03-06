const { openSync, 
	chmod, 
	fchmod, 
	readFileSync, 
	writeFileSync,
	chmodSync
} = require('fs')

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


// Sync method
chmodSync('todel.txt', 0o000)


// ============== ASYNC ==================

// original code but it s async... so that s wrong like it
// fchmod(fd, 0o333, e => { if(e) console.log(e) })

// should use async/await to deal with the asynchronicite
// async function rr() {
// 	// error should be handle with try/catch, like this is good	
// 	// try{
//      	//      	await fchmod(fd, 0o000, e => e )
// 	// } catch(e) {
// 	// 	console.error(e)
// 	// }
// 	
// 	// here is for the sake of the ex
// 	// promisify the fchmod, then handle the e returned 
// 	const re = await require('util').promisify(fchmod)(fd, 0o000, e => e)	
// 	if (re) console.log(re)
// }
// rr()

// WITH fs.chmod()
// async function rt() {
// 	try {
// 		await chmod('todel.txt', 0o000, (e) => { 
// 			if(e) console.log(e) 
// 		}) 
// 	} catch(e) {
// 		console.error(e)
// 	}
// }
// rt()




// If there's a problem with an operation the *Sync APIs will throw. So to perform error handling they need to be wrapped in a try/catch:
try{
	console.log(readFileSync('./todel.txt', 'utf-8'))
} catch(e) {
	console.log('fr error')
	console.log(e.code)
}

// Sync method
chmodSync('todel.txt', 0o777)

// =================== ASYNC =======================

// reset the file permission to read, write and execute (need to await as it async)
// WITH fs.chmod()
// async function ret() {
// 	try {
// 		await chmod('todel.txt', 0o666, (e) => { 
// 			if(e) console.log(e) 
// 		}) 
// 	} catch(e) {
// 		console.error(e)
// 	}
// }
// ret()

// WITH fs.fchmod()
// async function re() {
// 	// error should be handle with try/catch, like this is good	
// 	// try{
//      	//      	await fchmod(fd, 0o000, e => e )
// 	// } catch(e) {
// 	// 	console.error(e)
// 	// }
// 	
// 	// here is for the sake of the ex
// 	// promisify the fchmod, then handle the e returned 
// 	const re = await require('util').promisify(fchmod)(fd, 0o777, e => e)	
// 	if (re) console.log(re)
// }
// re()


// now read it again
try{
	console.log(readFileSync('./todel.txt', 'utf-8'))
} catch(e) {
	console.log('sec error')
	console.log(e.code)
}

// remove a file
[jerome@thearch pathFs]$ node -e "fs.rm('testAsyc', e => e)"
[jerome@thearch pathFs]$ node -e "fs.rmSync('grrr.txt')"




// ========================= Change Group ========================
[jerome@thearch pathFs]$ node -e "fs.fchown(fs.openSync('testAsyc'), 1000, 998, e => {if(e) console.log(e)})"
[jerome@thearch pathFs]$ ls -l testAsyc 
-rwxrwxrwx 1 jerome wheel 13 Jan 22 16:19 testAsyc
[jerome@thearch pathFs]$ node -e "fs.fchown(fs.openSync('testAsyc'), 1000, 1000, e => {if(e) console.log(e)})"
[jerome@thearch pathFs]$ ls -l testAsyc 
-rwxrwxrwx 1 jerome jerome 13 Jan 22 16:19 testAsyc
[jerome@thearch pathFs]$ 


// ======================= shell commands =======================
// get all systhem groups
[jerome@thearch pathFs]$ cat /etc/group
root:x:0:root
sys:x:3:bin
mem:x:8:
ftp:x:11:
mail:x:12:
log:x:19:
smmsp:x:25:
proc:x:26:pol

// get permission, user and group of a file
[jerome@thearch pathFs]$ ls -l testAsyc 
-rwxrwxrwx 1 jerome jerome 13 Jan 22 16:19 testAsyc
// of a dir
[jerome@thearch pathFs]$ ls -ld dirAsync
d--x--x--x 2 jerome jerome 4096 Jan 22 16:21 dirAsync
// print info about specified user ans its group
[jerome@thearch pathFs]$ id
uid=1000(jerome) gid=1000(jerome) groups=1000(jerome),998(wheel)
[jerome@thearch pathFs]$ id jerome
uid=1000(jerome) gid=1000(jerome) groups=1000(jerome),998(wheel)
// get group of current user
[jerome@thearch pathFs]$ id -nG
jerome wheel

