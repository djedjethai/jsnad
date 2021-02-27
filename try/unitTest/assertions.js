const assert = require('assert')

function add(a,b) {
	return a + b
}
// this test do not care the value's type
// assert.equal(add(2,2),4) // deprecated

// so that is much better
const res = add(2,2)
assert.equal(typeof res, 'number')
assert.equal(res, 4)

// or use strict equal => check value and type
assert.strictEqual(add(2,2),4)

// The assert module also exposes a strict object where namespaces for non-strict methods are strict, so the above code could also be written as:
assert.strict.equal(add(2,2),4)
// It's worth noting that assert.equal and other non-strict (i.e. coercive) assertion methods are deprecated, which means they may one day be removed from Node core. Therefore if using the Node core assert module, best practice would be always to use assert.strict rather than assert, or at least always use the strict methods (e.g. assert.strictEqual).

// To compare this object to another object, a simple equality check won't do because equality in JavaScript is by reference for objects:
const obj = { id:1, name:{first:"David", second:"Clements" }}
// this assert will fail because they are differents obj
assert.equal(obj, {
	id:1,
	name: {first:"David", second:"Clements"}
})

// To compare object structure we need a deep equality check:
assert.deepEqual(obj, {
	id:1,
	name: {first:"David", second:"Clements"}
})

// The difference between assert.deepEqual and assert.deepStrictEqual (and assert.strict.deepEqual) is that the equality checks of primitive values (in this case the id property value and the name.first and name.second strings) are coercive, which means the following will also pass:
assert.deepEqual(obj, {
	id:'1',
	name: {first:"David", second:"Clements"}
})

// this assert is much better as it check they type of the obj values as well
assert.strict.deepEqual(obj, {
	id:1,
	name: {first:"David", second:"Clements"}
})

const add = (a,b) => {
	if(typeof a !== 'number' || typeof b !== 'number') {
		throw Error('inputs must be numbers')
	}
	return a + b
}

assert.throws(() => add('5','5'), Error('inputs must be numbers'))
assert.doesNotThrow(() => add(5,5))
// Notice that the invocation of add is wrapped inside another function. This is because the assert.throws and assert.doesNotThrow methods have to be passed a function, which they can then wrap and call to see if a throw occurs or not. When executed the above code will pass, which is to say, no output will occur and the process will exit.


const pseudoReq = (url, cb) => {
	setTimeout(() => {
		if(url === 'http://error.com') cb(Error('network error'))
		else cb(null, Buffer.from('some data'))
	}, 300) 
}

pseudoReq('http://exemple.com', (e, d) => {
	assert.ifError(e)
})

pseudoReq('http://error.com', (e, d) => {
	assert.deepStrictEqual(e, Error('network error'))
})
// We create a function called pseudoReq which is a very approximated emulation of a URL fetching API. The first time we call it with a string and a callback function we pass the err parameter to assert.ifError. Since err is null in this scenario, assert.ifError does not throw an AssertionError. The second time we call pseudoReq we trigger an error. To test an error case with a callback API we can check the err param against the expected error object using assert.deepStrictEqual.


const { promisify } = require('util')
const timeout = promisify(setTimeout)
const pseudoReq = async (url) => {
	await timeout(300)

	if(url === 'http://error.com') throw Error('network error')
	return Buffer.from('some data')
}
assert.doesNotReject(pseudoReq('http://exemple.com'))
assert.rejects(pseudoReq('http://error.com'), Error('network error'))
// Recall that async functions always return promises. So we converted our previously callback-based faux-request API to an async function. We can then use assert.reject and assert.doesNotReject to test the success case and the error case. One caveat with these assertions is that they also return promises, so in the case of an assertion error a promise will reject with an AssertionError rather than AssertionError being thrown as an exception.


// ================== assert some streams ====================
// code
const fs = require('fs')
const { pipeline, Transform, Readable } = require('stream')

const createUppercase = () => {
	return new Transform({
		objectMode: true,
		transform(chunk, enc, next) {
			// console.log(chunk)
			next(null, chunk.name.toUpperCase())
		}
	})
}

const createReverse = () => {
	return new Transform({
		objectMode: true,
		transform(chunk, enc, next) {
			// console.log(chunk)
			next(null, chunk.name.split("").reverse().join(""))
		}
	})
}

module.exports = { createUppercase, createReverse }


// fs.readdir(__dirname, (e,d) => {
// 	console.log(d)
// })

// transform to upper
const cu = createUppercase()
fs.opendir(__dirname, (e,d) => {
	pipeline(d, cu, e => console.error("pipe error first: ", e))
})
cu.on('data', d => console.log(d))

// reverse 
const cr = createReverse()
fs.opendir(__dirname, (e,d) => {
	pipeline(d, cr, e => console.error("pipe error second: ", e))
})
cr.on('data', d => console.log(d))

// from a test file import the previous code and test the transform streams
const { pipeline, Readable } = require('stream')
const assert = require('assert')

const { createUppercase, createReverse } = require('./repeat')

const test = createUppercase()
const t = Readable.from([{name:'aaa'}, {name:'bbb'}])
t.pipe(test)
test.once('data', d => {
	assert.equal(d, 'AAA')
	test.once('data', d => {
		assert.equal(d, 'BBB')
		console.log('test upper passed')
	})
})

const testR = createReverse()
const rr = Readable.from([{name:'qwerty'}, {name: 'asdfgh'}])
rr.pipe(testR)
testR.once('data', d => {
	assert.strictEqual(d, 'ytrewq')
	testR.once('data', d => {
		assert.strictEqual(d, 'hgfdsa')
		console.log('test reverse passed')
	})
})

