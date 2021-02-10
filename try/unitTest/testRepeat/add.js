module.exports = (a, b) => {
	if(typeof a !== 'number' || typeof b !== 'number') {
		throw Error('must be number')
	}
	return a + b
}
