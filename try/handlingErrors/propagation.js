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

// in the case this func is not async the err propagation is not handle by run()
// but the the toDo() render(the res) asynchronously without any err
// (which is normal as we run() do not re-throw it)
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
// 		
// 		// similate an unknow err
// 		throw Error('some other err')
// 		
// 		// instead of some fetch() which return a Promise
// 		// to simulate an sync process with setTimeout(), we must create manually the promise. 
// 		const res = new Promise((resolve, reject) => {
// 			setTimeout(() => {
// 		 		resolve(n / 2)
// 			}, 200)
// 		})
// 		
// 		return res
// }
// // this run func handle some err and throw the others
// // toDo() MUST BE ASYNC for run to be able to re-throw the err
// async function run(n) {
// 	try {
// 		const result = await toDo(n) 
// 		console.log('result', result)
// 	}
// 	catch(e) {
// 		// re-throw the err which has been throw from toDo() func
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
// }
// 
// // try { run(-2) } catch(e) { console.log(e) }
// 
// run(3).catch(e => console.error(e))


// let propagate the err using sychonous code
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
		
		// similate an unknow err
		throw Error('some other err')	
		
		return n / 2
}

function run(n) {
	try {
		const result = toDo(n) 
		console.log('result', result)
	}
	catch(e) {
		// re-throw the err which has been throw from toDo() func
		if(e.code === 'MUST_NUMBER') {
			throw Error('wrong type')
		}
		else if(e.code === 'MUST_POSITIF') {
			throw Error('out of range')
		}
		else if(e.code === 'MUST_BE_EVEN') {
			throw Error('must be even')
		}
		else {
			throw e
		}
	}
}

try { run('j') } catch(e) { console.error(e) }


// run(3).catch(e => console.error(e))


//ex of propagation with call-back. INTERESSANT !!!
const { pipeline } = require('stream')
const { createGzip } = require('zlib')

const gz = createGzip()

const {
	createReadStream,
	createWriteStream
} = require('fs')

const rd = createReadStream('./unko')
const sr = createWriteStream('./delete.gz')


// try {
function handler(cb) {
pipeline(rd, gz, sr, e => {
	if(e) {
		const e = Error()
		e.code = 'TEST_ERROR'
		cb(e)
	}
})
}

// propage the err
function runErr(rth) {
	function cb(rt) {
		rt.code = 'grrrrrrr'	
		rth(rt)
	}
	handler(cb)
}

// seconde propagation of the err
function rThrow(se) {
	function cb2(r) {
		r.code = 'aaaaah'
		se(r)
	}
	runErr(cb2)
}

function showErr(e) {
	console.log(e.code)
}

rThrow(showErr)



// ONE MORE VERY INTERRESTING EXERCICE....
function codify(err, code) {
	err.code = code
	return err
}

class MyErr extends Error {
	constructor(varname = '') {
		super(varname + 'is my err')
		this.code = 'MY_ERROR'
	}

	get name() {
		return 'My Err: ',this.code,''
	}
}



const run = (n) => {
	console.log(n)
	if(typeof n !== 'number') { 
		throw codify (
		new TypeError('type err'),
		'WRONG_TYPE'
	)}
	else if(n < 0) throw codify (
		new RangeError('range err'),
		'WRONG_RANGE'
	)
	else if(n % 2 !== 0) { throw codify (
		new MyErr(),
		'ANOTHER ERR'
	)}
	return n/2
}

// async/await PROMISIFY LA FUNCTION !!!! THEN AND ONLY THEN I CAN USE .catch()
// otherwise(without async/await), i only can use try{}catch(e){}
async function ooo(x) {
	try {
		await run(x)
	}
	catch(e){
		if(e.code !== 'WRONG_TYPE') {
			// throw Error('fdp')
			throw codify(
				new Error('la merde'),
				'PROPAG'
			)
		}
		else {
			console.log('passed')
			throw e
		}
	}
}

// try{
// 	ooo('jhf')
// } catch(e){
// 	console.log(e.code)
// }


ooo(3).catch(e => console.log(e.code))


