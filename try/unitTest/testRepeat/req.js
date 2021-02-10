module.exports = (url, cb) => {
	setTimeout(() => {
		if(url === 'http://error.com') cb(Error('wrong url'))
		else cb(null, Buffer.from('some data'))
	}, 300)
}

