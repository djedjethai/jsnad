// function testEwithBetterErrors(n) {
// 	if (typeof n !== 'number') throw new TypeError('this is not a number')
// 	if (n < 0) throw new RangeError('negatif number are not allow')
// 	if (n % 2) {
// 		const err = Error('amount must be even')
// 		err.code = 'ERR_MUST_BE_EVEN'
// 		throw err
// 	} 
// 	return n / 2
// } 
// testEwithBetterErrors(3)

// We can also inherit from Error ourselves to create a custom error instance for a particular use case. Let's create an OddError constructor:
// class OddError extends Error {
// 	constructor(varname = '') {
// 		super(varname + ' must be even')
// 	}
// 
// 	get name() { return 'OddError' }
// }
// use our custom Error class with the previous ex
function testEwithBetterErrors(n) {
	if (typeof n !== 'number') throw new TypeError('this is not a number')
	if (n < 0) throw new RangeError('negatif number are not allow')
	if (n % 2) throw new OddError('amount') 
	return n / 2
} 
// testEwithBetterErrors(3)

// same as previous but with the err code 'ERR_MUST...' en plus
class OddError extends Error {
	constructor(varname = '') {
		super(varname + ' must be even')
		this.code = 'ERR_MUST_BE_EVEN'
	}
	get name() {// get name() if from an Error method, must be call like it
		return 'OddError [' + this.code + ']'
	}
}
testEwithBetterErrors(3)

