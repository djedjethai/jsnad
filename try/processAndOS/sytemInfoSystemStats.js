'use strict'

const os = require('os')

// ---------- System info ------------

// console.log('hostname: ', os.hostname())
// console.log('home dir: ', os.homedir())
// console.log('temp dir: ', os.tmpdir())
// 
// console.log('platform: ', os.platform())
// console.log('type: ', os.type())
// 
// // [jerome@thearch processAndOS]$ node repeat.js
// // hostname:  thearch
// // home dir:  /home/jerome
// // temp dir:  /tmp
// // platform:  linux
// // type:  Linux

// ---------- System stat ------------

setInterval(() => {
	console.log('system uptime: ', os.uptime())
	console.log('freeMem: ', os.freemem())
	console.log('system totalMem: ', os.totalmem())
	console.log()
}, 1000)
// 
// // [jerome@thearch processAndOS]$ node repeat.js
// // system uptime:  24615
// // freeMem:  13570736128
// // system totalMem:  16183267328
// // 
// // system uptime:  24616
// // freeMem:  13570736128
// // system totalMem:  16183267328
// // 
// // system uptime:  24617
// // freeMem:  13570736128
// // system totalMem:  16183267328
// // 
// // system uptime:  24618
// // freeMem:  13570736128
// // system totalMem:  16183267328
// // 
// // system uptime:  24619
// // freeMem:  13570736128
// // system totalMem:  16183267328
// // 
// // system uptime:  24620
// // freeMem:  13570867200
// // system totalMem:  16183267328


