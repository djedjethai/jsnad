function outerFn() {
	let foo = true
	function print(foo) { console.log(foo) }
	print(1)
	foo = false
	print(2)
}

// outerFn()


// function init(type) {
// 	var id = 0
// 	return (name) => {
// 		id += 1
// 		return { id, type, name }
// 	}
// }
// 
// const createUser = init('user')
// const createBook = init('book')
// 
// const dave = createUser('Dave')
// const annie = createUser('Annie')
// const ncb = createBook('Node CookBook')
// 
// console.log(dave)
// console.log(annie)
// console.log(ncb)

// createKeyPair() amd cryptoSign() are imaginary func for the exemple
// keyPair is not directly accessible from outside so is 'private'
// this is the pattern for private properties
// function createSigner(secret) {
// 	const keyPair = createKeyPair(secret)
// 	return function(content) {
// 		return {
// 			signed: cryptoSign(content, keyPair.privateKey),
// 			publicKey: keyPair.publickey
// 		}
// 	}
// }
// const sign = createSigner('super secret thing')
// const signedContent = sign('sign me')
// const moreSignedContent sign('sign me as well')


// equivalent to prototypal inheritance BUT using closure scope
// better to use than prototypal inheritance
// function wolf(name) {
// 	const howl = () => {
// 		console.log(name + " :aaaooooouuuuu")
// 	}
// 	return { howl: howl }
// }
// 
// function dog(name) {
// 	name = name + " the dog"
// 	bark = () => console.log(name + " :woooooff")
// 	return {
// 		...wolf(name),
// 		bark: bark
// 	}
// } 
// const harry = dog('harry')
// harry.bark()
// harry.howl()



