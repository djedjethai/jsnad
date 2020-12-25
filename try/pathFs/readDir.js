'use strict'

const { readdirSync, readdir } = require('fs')
// We aliased fs.promises.readdir to readdirProm to avoid namespace collision
const { readdir:readdirProm } = require('fs').promises

try {
     console.log('sync: ', readdirSync(__dirname))
}
catch(e) {
     console.error(e)
}

readdir(__dirname, (err, files) => {
	if(err) {
		console.error(err)
		return
	}
	console.log('callback: ', files)
})

async function run() {
	const files = await readdirProm(__dirname)
	console.log('promise: ', files)
}
run().catch(e => console.error(e))

