const { execSync } = require('child_process')

const output = execSync(
	`node -e "console.log('subprocess stdio output')"`
	// `ls -l`
	// `cat repeat.js`
)

console.log(output.toString())
