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


function toDo(n) {
	return new Promise((resolve, reject) => {
		if(typeof n !== 'number') {
			reject(utilErr(
				new TypeError('must be a number'),
				'MUST_NUMBER'
			))
		}
		if(n < 0) {
			reject(utilErr(
				new RangeError('must be positif'),
				'MUST_POSITIF'
			))	
		}
		if(n % 2 !== 0) {
			reject(new OddErr('amount'))
		}
		resolve (n / 2)
	})
}


toDo('j')
	.then(d => console.log(d))
	.catch(e => console.log(e.code))

