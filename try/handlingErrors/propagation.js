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

// using async/await a REVOIR for include the setTimeout inside......
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
// 		// const res = await setTimeout(() => {
// 		// 	return 	786
// 		// }, 200)
// 		const e = new Error('tesssts throw...')
// 		e.code = 'TEST_ERR'
// 		throw e
// 		return n / 2
// }
// 
// async function run(n) {
// 	try {
// 		const result = await toDo(n) 
// 		console.log('result', result)
// 	}
// 	catch(e) {
// 		// re-throw the err which has been throw from toDo() func
// 		throw(e)
// 	}
// }
// run(3).catch(e => console.log(e.code))

// propagation of the err by re-throwing the err without async/await
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
		// const res = await setTimeout(() => {
		// 	return 	786
		// }, 200)
		const e = new Error('tesssts throw...')
		e.code = 'TEST_ERR'
		throw e
		return n / 2
}

function run(n) {
	try {
		const result = toDo(n) 
		console.log('result', result)
	}
	catch(e) {
		// re-throw the err which has been throw from toDo() func
		throw(e)
	}
}

try { run(4) } catch(e) { console.log(e.code) }

// same same as, but in the previous function, we re-throw the err
// here we use try/catch without async/await, as we throw err and return result, 
// so Promise based, and Promise base works with try/catch
try { toDo(3) } catch(e) { console.log(e.code) }


