'use strict'
module.exports = (str) => {
	if ( typeof str === 'symbol' ) str = str.toString()
	str += ''
	return str.toUpperCase()
}

// const upper = (str) => {
// 	if ( typeof str === 'symbol' ) str = str.toString()
// 	str += ''
// 	return str.toUpperCase()
// }
// module.exports = {upper}

// exports.upper = (str) => {
// 	if ( typeof str === 'symbol' ) str = str.toString()
// 	str += ''
// 	return str.toUpperCase()
// }


