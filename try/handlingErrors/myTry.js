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

// that works. as the err will be delayed, it won t be catch
// here is a work around using async/await and setTimeout() 
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

// ====================== INTERRESTING =======================

const timeout = require('util').promisify(setTimeout)
async function handleErrAndAsyncReq(d) {
	if(typeof d !== 'number' ) throw codify(new TypeError('must be number'), 'MUST_BE_NUMBER')
	if(d < 0) throw codify(new RangeError('input must be positif'), 'MUST_BE_POSITIF')
	if(d % 2 !== 0) throw codify(new OddError('the input'), 'MUST_BE_EVEN')

	// simulate async exec
	await timeout(1000)
	console.log(d / 2)
}

// works
// stangeErr(-3).catch(e => console.log('grrr: ', e))

// but to use try/catch i need to wrap in an async/await func
async function gr() {
try { 
 await handleErrAndAsyncReq(-3)
} catch(e) { console.error('catched: ', e) }
}
gr()





// ============== another try ==================
// a finir, i don t know if really util

const { createReadStream } = require('fs')
const { Transform, pipeline } = require('stream')
// const { StringDecoder } = require('string_decoder');

// transform stream into buffer
function objectifyStream() {
    return new Transform({
        objectMode: true,
        transform: function(chunk, encoding, next) {

            if (!buffer) {
                buffer = Buffer.from([...chunk]);
            } else {
                buffer = Buffer.from([...buffer, ...chunk]);
            }
            next(null, buffer);
        }
    });
}


const d = createReadStream('jhgf.cv')

d.on('error', () => console.log('errrrrrr'))

d.on('readable', () => {
        console.log(d.read().toString())
})

d.on('end', () => {
        console.log('ennnnddd')
})



