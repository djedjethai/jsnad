const { promisify } = require('util')

const print = (err, contents) => { 
  if (err) console.error(err)
  else console.log(contents) 
}

const opA = (cb) => {
  setTimeout(() => {
    cb(null, 'A')
  }, 500)
}

const opB = (cb) => {
  setTimeout(() => {
    cb(null, 'B')
  }, 250)
}

const opC = (cb) => {
  setTimeout(() => {
    cb(null, 'C')
  }, 125)
}

const a = promisify(opA)
const b = promisify(opB)
const c = promisify(opC)

a.then(print)




// function test(x) {
// 	return new Promise((resolve, reject) => {
// 		x((e,d) => {
// 			if(e) reject(print(e))
// 			resolve(print(null, d))
// 		})
// 	})
// }
// async function ok() {
// 	await test(a)
// 	await test(b)
// 	await test(c)
// }
// ok()



// function test(x) {
// 	return new Promise((resolve, reject) => {
// 		x((e,d) => {
// 			if(e) reject(e)
// 			resolve(d)
// 		})
// 	})
// }
// need the previous promise
// test(a).then(r => {
// 		print(null, r)
// 		return test(b)
// 	})
// 	.then(r => {
// 		print(null, r)
// 		return test(c)
// 	})
// 	.then(r => {
// 		print(null, r)
// 	})
// 	.catch(e => print(e))


// no need promise
// a((err, d) => {
// 	print(err, d)
// 	b((e, d) => {
// 		print(e, d)
// 		c((e,d) => {
// 			print(e, d)
// 		})
// 	})
// })
