class OddError extends Error {
	constructor(varname='') {
		super(varname + 'must be even')
		this.code = "MUST_BE_EVEN"
	}

	get name() { return 'OddErr ['+ this.code +']' }
}

function errHandler(e) {
	if(e.code === 'MUST_BE_NUMBER') { console.error('enter a number') }
	else if(e.code === 'MUST_BE_POSITIF') { console.error('enter a positif number') }
	else if(e.code === 'MUST_BE_EVEN') { console.error('enter an even number') }
	else { console.error('unkknow type: ', e) }
}

function codify(e, code) {
	e.code = code
	return e
}

function runErr(d) {
	// try{
	if(typeof d !== 'number' ) throw codify(new TypeError('must be number'), 'MUST_BE_NUMBER')
	if(d < 0) throw codify(new RangeError('input must be positif'), 'MUST_BE_POSITIF')
	if(d % 2 !== 0) throw codify(new OddError('the input'), 'MUST_BE_EVEN')
	console.log(d / 2)
	// } catch(e) {
	//	errHandler(e)
	// }
}

const timeout = require('util').promisify(setTimeout)
;(async () => {
	try{

		await timeout(1000)

		runErr('aa')
// timeout(() => {
//	runErr('er')
//runErr(-4)
//runErr(7)
//runErr(10)
// runErr()
//	}, 1000)
	} catch(e) {
 		errHandler(e)
	}
})()
