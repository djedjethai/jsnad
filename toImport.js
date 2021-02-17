const { exec } = require('child_process')


exec('find ./ -name cours', (e,d) => {
	exec(`namei -l ${d}`, (e, d) => {
		console.log(d)
	})
})




