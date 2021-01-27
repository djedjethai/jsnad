'use strict'

// console.log(process.uptime())
// 
// setTimeout(() => {
// 	console.log(process.uptime())
// }, 1000)


// ------- process.uptime(), process.cpuUsage().user, process.cpuUsage().system ------------- 

const outputStats = () => {
	const uptime = process.uptime()
	const { user, system } = process.cpuUsage()
	console.log(uptime, user, system, (user + system)/1000000)
}

outputStats()

setTimeout(() => {
	outputStats()
	const now = Date.now()
	// make cpu do some work
	while(Date.now() - now < 5000 ) {}
		outputStats()
}, 500)

// -------------- process.memoryUsage() --------------

// const stats = [process.memoryUsage()]
// 
// let iteration = 5
// 
// while (iteration--) {
// 	const arr = []
// 	let i = 10000
// 	// make cpu do some work
// 	while (i--) {
// 		arr.push({[Math.random()]: Math.random()})
// 	}
// 	stats.push(process.memoryUsage())
// } 
// 
// console.table(stats)
// 
// // return
// [jerome@thearch processAndOS]$ node repeat.js
// ┌─────────┬──────────┬───────────┬──────────┬──────────┬──────────────┐
// │ (index) │   rss    │ heapTotal │ heapUsed │ external │ arrayBuffers │
// ├─────────┼──────────┼───────────┼──────────┼──────────┼──────────────┤
// │    0    │ 30666752 │  4333568  │ 2431848  │  800254  │     9386     │
// │    1    │ 34181120 │  9195520  │ 6037912  │  800294  │     9386     │
// │    2    │ 42348544 │ 17113088  │ 8966200  │  800294  │     9386     │
// │    3    │ 45047808 │ 17899520  │ 12162936 │  800294  │     9386     │
// │    4    │ 49639424 │ 20262912  │ 14583960 │  800294  │     9386     │
// │    5    │ 52879360 │ 23146496  │ 16039376 │  800294  │     9386     │
// └─────────┴──────────┴───────────┴──────────┴──────────┴──────────────┘
// [jerome@thearch processAndOS]$
// All of the numbers output by process.memoryUsage are in bytes. We can see each of the memory categories growing in each iteration, except external memory which only grows at index 1. The external metric refers to memory usage by the C layer, so once the JavaScript engine has fully initialized in this case there's no more memory requirements from that layer in our case. The heapTotal metric refers to the total memory allocated for a process. That is the process reserves that amount of memory and may grow or shrink that reserved space over time based on how the process behaves. Process memory can be split across RAM and swap space. So the rss metric, which stands for Resident Set Size is the amount of used RAM for the process, whereas the heapUsed metric is the total amount of memory used across both RAM and swap space. As we increasingly put pressure on the process memory by allocating lots of objects, we can see that the heapUsed number grows faster than the rss number, this means that swap space is being relied on more over time in this case.
