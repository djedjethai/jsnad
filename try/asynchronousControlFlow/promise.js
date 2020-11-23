// normal call back
function asyncOperation(cb) {
	doSomethingAsync ((err, value) => {
		cb(err, value)
	}) 
}
asyncOperation(functionThatHandleTheResult)


// now the same using a promise
function asyncOperation() {
	return new Promise((resolve, reject) => {
		doSomethingAsync(err, value) {
			if (err) reject(err)
			else resolve(value)
		}
	})
}
const pr = asyncOperation()
pr
	.then(res => {})
	.catch(err => console.log(err))




