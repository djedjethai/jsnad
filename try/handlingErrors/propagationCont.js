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

function toDo(n, cb) {
	if(typeof n !== 'number') {
		cb(utilErr(
			new TypeError('must be a number'),
			'MUST_NUMBER'
		))
		return
	}
	if(n < 0) {
		cb(utilErr(
			new RangeError('must be positif'),
			'MUST_POSITIF'
		))
		return
	}
	if(n % 2 !== 0) {
		cb(new OddErr('amount'))
		return
	}
		
	// similate an unknow err
	cb(Error('some other err'))
	return
	
	// here as we are not dealing with async/await, we don t need to return a Promise
	setTimeout(() => {
		 cb(null, n / 2)
	}, 200)
		
}

// Similarly the run function has to be adapted to take a callback (cb) so that errors can propagate via that callback function. When calling doTask we need to now supply a callback function and check whether the first err argument of the callback is truthy to generate the equivalent of a catch block: 
function run(cb) {
	toDo(4, (e,r) => {
		if(e) {
			if(e.code === 'MUST_NUMBER') {
				cb(Error('wrong type'))
			}
			else if(e.code === 'MUST_POSITIF') {
				cb(Error('out of range'))
			}
			else if(e.code === 'MUST_BE_EVEN') {
				cb(Error('must be even'))
			}
			else {
				cb(e)
			}
		}
		return console.log('result', r)
	})	
}

run(e => {
	if(e) console.error('Error caught', e)
})


// function run(e, r) {
// 	// re-throw the err which has been throw from toDo() func
// 	if(e) {
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
// 	return console.log('result', r)
// }
// try { toDo(4, run) } catch(e) { console.log(e) }


