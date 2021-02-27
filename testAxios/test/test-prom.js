/**
 * @jest-environment node
 */
const { url, theReq } = require('../index')
const assert = require('assert')
const {test} = require('tap')

// jest.setTimeout(30000)
// 
// test('test axios payload', async(done)  => {
// 
// 	const result = await theReq(url)
// 	expect(result).toStrictEqual({return: 'reached'})
// 	done()
// })

// theReq(url)
// 	.then(d => {
// 		assert.deepStrictEqual(d, {return: 'reached'})
// 		console.log('passed')
// 	})
	
test('good req', async({strictDeepEqual, ifError}) => {
	try{	
	const data = await theReq(url)
	strictDeepEqual(data, {return: 'reached'})
	} catch(e) {
		ifError(e)
	}	
})

test('req fail', async({ rejects }) => {
	rejects( await theReq('jhgf'), Error('err') )
})
