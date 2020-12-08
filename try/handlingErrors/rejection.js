// create an utility function
function codify(err, code) {
	err.code = code
	return err
}


class OddError extends Error {
	constructor(varname = '') {
		super(varname + ' must be even')
		this.code = 'MUST_BE_EVEN'
	}

	get name() {
		return 'OddError ['+ this.code +']'
	}
}


function doTask(n) {
	return new Promise((resolve, reject) => {
		if(typeof n !== 'number') {
			reject(new codify(
				TypeError('must be a number'),
				'ERR_MUST_BE_NUMBER'
			))
			return
		}
		if(n < 0) {
			reject(new codify(
				RangeError('must be positif'),
				'ERR_MUST_BE_POSITIF'
			))
			return
		}
		if(n % 2 !== 0) {
			reject(new OddError('amount'))
			return
		}
		resolve(n / 2)
	})

}

// doTask(-3)
// 	.then(r => {
// 		console.log('r', r)
// 	})
// 	.catch(e => {
// 		if(e.code === 'ERR_MUST_BE_A_NUMBER') {
// 			console.error('wrong type')
// 		}
// 		else if(e.code === 'ERR_MUST_BE_POSITIF') {
// 			console.error('out of range')
// 		}
// 		else if(e.code === 'MUST_BE_EVEN') {
// 			console.error('must be even')
// 		}
// 		else {
// 			console.error('unknow error', e)
// 		}
// 	})


//t's very important to realize that when the throw appears inside a promise handler, that will not be an exception, that is it won't be an error that is synchronous. Instead it will be a rejection, the then or catch handler will return a new promise that rejects as a result of a throw within a handler.

// Let's modify the then handler so that a throw occurs inside the handler function:
doTask(4)
	.then(r => {
		throw Error('a throw err, even in then create an err')
	})
	.catch(e => {
		if(e.code === 'ERR_MUST_BE_A_NUMBER') {
			console.error('wrong type')
		}
		else if(e.code === 'ERR_MUST_BE_POSITIF') {
			console.error('out of range')
		}
		else if(e.code === 'MUST_BE_EVEN') {
			console.error('must be even')
		}
		else {
			console.error('unknow error', e)
		}
	})


// Even though doTask(4) does not cause a promise rejection, the throw in the then handler does. So the catch handler on the promise returned from then will reach the final else branch and output unknown error. Bear in mind that functions can call functions, so any function in a call stack of functions that originates in a then handler could throw, which would result in a rejection instead of the normally anticipated exception.


