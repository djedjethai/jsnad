const axios = require('axios')
const { readFile } = require('fs')


const url = 'http://localhost:3000/'


const theReq = (url) => axios.get(url)
	.then(r => {
		// console.log(r.data)
		return r.data
	})
	.catch(e => Error('err') )

theReq(url).then(d => console.log('the: ', d))


// const read = (file, cb) => {
// 	readFile(file, 'utf8', (e,d) => {
// 		if(e) {
// 			cb(Error('err'))
// 		}
// 		else {
// 			// console.log(d)
// 			cb(null, d)
// 		}
// 	})
// }
// read(__filename, (e,d) => {
// 	if(e)return e
// 	else return d
// })

module.exports = { url, theReq }

