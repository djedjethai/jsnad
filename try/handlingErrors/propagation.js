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

// in the case this func is not async the err propagation is not handle by run()
// but the the toDo() render(the res) asynchronously without any err
// (which is normal as we run() do not re-throw it)
// async function toDo(n) {
// 		if(typeof n !== 'number') {
// 			throw utilErr(
// 				new TypeError('must be a number'),
// 				'MUST_NUMBER'
// 			)
// 		}
// 		if(n < 0) {
// 			throw utilErr(
// 				new RangeError('must be positif'),
// 				'MUST_POSITIF'
// 			)
// 		}
// 		if(n % 2 !== 0) {
// 			throw new OddErr('amount')
// 		}
// 		
// 		// similate an unknow err
// 		throw Error('some other err')
// 		
// 		// instead of some fetch() which return a Promise
// 		// to simulate an sync process with setTimeout(), we must create manually the promise. 
// 		const res = new Promise((resolve, reject) => {
// 			setTimeout(() => {
// 		 		resolve(n / 2)
// 			}, 200)
// 		})
// 		
// 		return res
// }
// // this run func handle some err and throw the others
// // toDo() MUST BE ASYNC for run to be able to re-throw the err
// async function run(n) {
// 	try {
// 		const result = await toDo(n) 
// 		console.log('result', result)
// 	}
// 	catch(e) {
// 		// re-throw the err which has been throw from toDo() func
// 		if(e.code === 'MUST_NUMBER') {
// 			throw Error('wrong type')
// 		}
// 		else if(e.code === 'MUST_POSITIF') {
// 			throw Error('out of range')
// 		}
// 		else if(e.code === 'MUST_BE_EVEN') {
// 			throw Error('must be even')
// 		}
// 		else {
// 			throw e
// 		}
// 	}
// }
// 
// // try { run(-2) } catch(e) { console.log(e) }
// 
// run(3).catch(e => console.error(e))


// let propagate the err using sychonous code
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
		
		// similate an unknow err
		throw Error('some other err')	
		
		return n / 2
}

function run(n) {
	try {
		const result = toDo(n) 
		console.log('result', result)
	}
	catch(e) {
		// re-throw the err which has been throw from toDo() func
		if(e.code === 'MUST_NUMBER') {
			throw Error('wrong type')
		}
		else if(e.code === 'MUST_POSITIF') {
			throw Error('out of range')
		}
		else if(e.code === 'MUST_BE_EVEN') {
			throw Error('must be even')
		}
		else {
			throw e
		}
	}
}

try { run('j') } catch(e) { console.error(e) }


// run(3).catch(e => console.error(e))



