function testE(n) {
	if(typeof n !== 'number') throw new Error('this is not a number')
	// not recommanded, an err should always come from the Error(or inherited class) constructor
	// if(n < 0) throw('number should be positif')
	return n / 2
}
// testE("e")

function testEwithBetterErrors(n) {
	if(typeof n !== 'number') throw new TypeError('this is not a number')
	if(n < 0) throw new RangeError('negatif number are not allow')
	return n / 2
} 

testEwithBetterErrors()


// test err prototype
console.log(Object.getPrototypeOf(EvalError.prototype) === Error.prototype) // true
console.log(Object.getPrototypeOf(SyntaxError.prototype) === Error.prototype) // true
console.log(Object.getPrototypeOf(RangeError.prototype) === Error.prototype) // true
console.log(Object.getPrototypeOf(ReferenceError.prototype) === Error.prototype) // true
console.log(Object.getPrototypeOf(TypeError.prototype) === Error.prototype) // true
console.log(Object.getPrototypeOf(URIError.prototype) === Error.prototype) // true

console.log(Object.getPrototypeOf(Error.prototype) === Object.prototype) // true
console.log('--------------')
console.log(Object.getPrototypeOf(EvalError.prototype) === Object.prototype) // false

// ran in terminal
// jerome@jerome-PORTEGE-M900 ~/ $ node -p "var e = new SyntaxError(); e instanceof SyntaxError"
// true
// jerome@jerome-PORTEGE-M900 ~/ $ node -p "var e = new SyntaxError(); e instanceof Error"
// true
// jerome@jerome-PORTEGE-M900 ~/ $ node -p "var e = new SyntaxError(); e instanceof EvalError"
// false
// 
// // Native errors objects also have a name property which contains the name of the error that created it:
// jerome@jerome-PORTEGE-M900 ~/ $ node -e "let e = new TypeError(); console.log('e is: ', e.name)"
// e is:  TypeError
// jerome@jerome-PORTEGE-M900 ~/ $ node -e "let e = new Error(); console.log('e is: ', e.name)"
// e is:  Error


