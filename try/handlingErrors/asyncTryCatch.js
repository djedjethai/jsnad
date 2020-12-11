function utilErr(err, code) {
	err.code = code
	return err
}

class OddErr extends Error {
	constructor(varname= '') {
		super(varname + ' must be even')
		this.code = 'MUST_BE_EVEN'
	}
	get name() {
		return 'OddErr ['+ this.code + ']'
	}
}


// function toDo(n) {
// 	return new Promise((resolve, reject) => {
// 		if(typeof n !== 'number') {
// 			reject(utilErr(
// 				new TypeError('must be a number'),
// 				'MUST_NUMBER'
// 			))
// 		}
// 		if(n < 0) {
// 			reject(utilErr(
// 				new RangeError('must be positif'),
// 				'MUST_POSITIF'
// 			))
// 		}
// 		if(n % 2 !== 0) {
// 			reject(new OddErr('amount'))	
// 		}
// 		resolve(n / 2)
// 	})
// }
// 
// // can use the try/catch on a promise because i am using async/await 
// // (otherwise it have to be .catch())
// async function run(n) {
// 	try {
// 		const result = await toDo(n)
// 		console.log('result', result)
// 	}
// 	catch(e) {
// 		console.log(e.code)
// 	}
// }
// run(3)

// we can convert our toDo function from returning a promise where we explicitly call reject within a Promise tether function to simply throwing again.


// here, as i am not propagating the err via another func (like in propagation.js)
// i don t need to async toDo(), it works perfectly like it
function toDo(n) {
		if(typeof n !== 'number') {
			throw utilErr(
				new TypeError('must be a number'),
				'MUST_NUMBER'
			)
		}
		if(n < 0) {
			throw utilErr(
				new RangeError('must be positif'),
				'MUST_POSITIF'
			)
		}
		if(n % 2 !== 0) {
			throw new OddErr('amount')
		}
		// must create manually the promise to reproduce an async render of a method (like readFile)
		const res = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(n / 2)
			}, 200)

		})
		return res
}

async function run(n) {
	try {
		const result = await toDo(n) 
		console.log('result', result)
	}
	catch(e) {
		console.log(e.code)
	}
}

run(4)
