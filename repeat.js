class MyErr extends Error {
	constructor(varname = '') {
		super(varname+ 'must be even')
		this.code = 'MUST BE EVEN'
	}

	get name() {
		return "myErr"
	}
}

const errHelper = (err, code) => {
	err.code = code
	return err
}

function testErr(x, cb) {
		setTimeout(() => {
			if(typeof x !== 'number') { 
				cb(errHelper(
					new TypeError('must be number'),
					'NUMBER'
				))
				return
			}
			if(x < 0) { 
				cb(errHelper(
					new RangeError('must be positif'),
					'POSITIF'
				))
				return
			}
			if(x % 2 !== 0) {
				cb(errHelper(
					new MyErr('must be even'), 
					'EVEN'
				))
				return
			} 
			cb(null, x / 2)		
	})	
}

function toDo(z) {
	testErr(z, (e, d) => {
		if(e !== null) {
			if(e.code === 'NUMBER') console.log('must number')
			if(e.code === 'POSITIF') console.log('must positif')
			if(e.code === 'EVEN') console.log('must even')	
		}
		console.log(d)
	})
}
// toDo().catch(e => console.log(e))
toDo(4)
