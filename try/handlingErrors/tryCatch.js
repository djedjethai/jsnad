// create an utility function
function codify(err, code) {
	err.code = code
	return err
}

class OddError extends Error {
	constructor(varname = '') {
		super(varname + ' must be odd')
	}

	get name() {
		return 'OddError ['+ this.code +']'
	}
}

function doTask(n) {
	if(typeof n !== 'number') throw codify(
		new TypeError('must be a number'),
		'ERR_MUST_BE_A_NUMBER'
	)
	if(n < 0) throw codify(
		new RangeError('must be positif'),
		'ERR_MUST_BE_POSITIF'
	)
	if(n % 2 !== 0) throw codify(
		new OddError('amount'),
		'MUST_BE_EVEN'
	)
	return console.log(n / 2)
}

// this will create an err in the else block as reasult is not a function
// try {
// 	const result = doTask(4)
// 	result()
// 	console.log('result', result)
// 
// }
// catch(e) {
// 	if(e.code === 'ERR_MUST_BE_A_NUMBER') {
// 		console.error('wrong type')
// 	}
// 	else if(e.code === 'ERR_MUST_BE_POSITIF') {
// 		console.error('out of range')
// 	}
// 	else if(e.code === 'MUST_BE_EVEN') {
// 		console.error('must be even')
// 	}
// 	else {
// 		console.error('unknow error', e)
// 	}
// }


// It's important to realize that try/catch cannot catch errors that are thrown in a callback function that is called at some later point. Consider the following:
// try {
// 	setTimeout(() => {
// 		// const result = doTask(3)
// 		// result()
// 		// console.log('result', result)
// 		doTask(3)
// 	}, 200)
// }
// catch(e) {
// 	if(e.code === 'ERR_MUST_BE_A_NUMBER') {
// 		console.error('wrong type')
// 	}
// 	else if(e.code === 'ERR_MUST_BE_POSITIF') {
// 		console.error('out of range')
// 	}
// 	else if(e.code === 'MUST_BE_EVEN') {
// 		console.error('must be even')
// 	}
// 	else {
// 		console.error('unknow error', e)
// 	}
// }

// When encountering such an antipattern, an easy fix is to move the try/catch into the body of the callback function:
setTimeout(() => {
	try {
			doTask(3)
		}
	catch(e) {
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
	}

}, 200)
