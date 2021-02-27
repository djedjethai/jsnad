const { createServer } = require('http')


createServer((req, res) => {
	if(req.url !== '/') {
		res.status = 404
		res.end('unknow url')
	}

	res.status = 200
	res.write(JSON.stringify({return: 'reached'}))
	res.end()
}).listen(3000)
