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

async function as() {
	try {
		print(null, await a())
		print(null, await b())
		print(null, await c())
	}
	catch(e) {
		print(e)
	}
}
as()

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
// async function as() {
// 	await read(opA)
// 	await read(opB)
// 	await read(opC)
// }
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
// opA((err, d) => {
// 	print(err, d)
// 	opB((e, d) => {
// 		print(e, d)
// 		opC((e,d) => {
// 			print(e, d)
// 		})
// 	})
// })

// using Promise.All() && Promise.AllSettled() 
const { promisify } = require('util')

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

const resu = (d) => {
	d
		.filter(({status}) => status === 'rejected')
		.forEach(({reason}) => console.error("error: ", reason))
	
	const data = d
		.filter(({status}) => status === 'fulfilled')
		.map(({value}) => value)

	return data
}

const a = promisify(opA)
const b = promisify(opB)
const c = promisify(opC)

const arr = [a(), b(), c()]

// crash if any err as no err catch
const res = Promise.all(arr)
res.then(r => console.log(r))

// does not crash, nicely return only the promise wich resolved
// const res = Promise.allSettled(arr)
// res.then(r => console.log(resu(r)))





// =================== Extra Async an heavy computation (using promise) =================
function getPr() {
	return new Promise((resolve, reject) => {
		for (let i = 0; i < 1000000; i++) {
			i++
			if(i === 999999) resolve('loop done')
		}
		reject('err ds unfinished')
	})
}

console.log('start')
getPr()
	.then(d => console.log(d)) 
	.catch(e => console.log(e))

console.log('start1')
console.log('start2')
console.log('start3')

