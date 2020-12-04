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

// ok
// function read(x) {
// 	return new Promise((resolve, reject) => {
// 		x((e,d) => {
// 			if(e) reject({e, d:null})
// 			resolve({e:null, d})
// 		})
// 	})
// } 
// read(opA).then(r => {
// 		print(r.e, r.d)
// 		return read(opB)
// 	})
// 	.then(r => {
// 		print(r.e, r.d)
// 	})
// 

// function read(x) {
// 	return new Promise((resolve, reject) => {
// 		x((e,d) => {
// 			if(e) reject(print(e))
// 			resolve(print(null, d))
// 		})
// 	})
// }
// read(opA) 
// async function as() {
// 	await read(opA)
// 	await read(opB)
// 	await read(opC)
// }
// 
// as()


// that work as well but as the above code works there is not point to promisify (with util).....
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


// same here, no point to promisify (with util)....
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
