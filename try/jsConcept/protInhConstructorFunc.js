// USING function inherit
// function Wolf(name) {
// 	this.name = name
// }
// 
// Wolf.prototype.howl = function() {
// 	console.log(this.name + " : aooooouuuuuu")
// }
// 
// function Dog(name) {
// 	Wolf.call(this, name + ' the dog')
// }
// 
// function inherit(proto) {
// 	function ChainLink() {}
// 	ChainLink.prototype = proto
// 	return new ChainLink()
// }
// 
// Dog.prototype = inherit(Wolf.prototype)
// 
// Dog.prototype.woof = function() {
// 	console.log(this.name + " : wouf wouf")
// }
// 
// const rufus = new Dog("Harry");
// 
// rufus.howl()
// rufus.woof()
// 
// console.log(Object.getPrototypeOf(rufus) === Dog.prototype)
// console.log(Object.getPrototypeOf(Dog.prototype) === Wolf.prototype)


// EQUIVALENT USING Object.create
// function Wolf(name) {
// 	this.name = name
// }
// 
// Wolf.prototype.howl = function() {
// 	console.log(this.name + " : aaooouuu")
// }
// 
// function Dog(name) {
// 	Wolf.call(this, name + ' the dog')
// }
// 
// Dog.prototype = Object.create(Wolf.prototype)
// 
// Dog.prototype.woof = function() {
// 	console.log(this.name + " : woof woof")
// }
// 
// const ooo = new Dog("ooo")
// ooo.howl()
// ooo.woof()


// EQUIVALENT using "utile" module
const util = require('util')

function Wolf(name) {
	this.name = name
}

Wolf.prototype.howl = function() {
	console.log(this.name + " : aoooouuuuuuu")
}


function Dog(name) {
	Wolf.call(this, name + ' the doog ')
}

util.inherits(Dog.prototype, Wolf.prototype)

Dog.prototype.woof = function() {
	console.log(this.name + " : wouf wouf")
}

// Object.setPrototypeOf(Dog.prototype, Wolf.prototype)

const harry = new Dog('Harry')
harry.woof()
harry.howl()
















