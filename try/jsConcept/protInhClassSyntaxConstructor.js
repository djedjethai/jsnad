class Wolf {
	constructor(name) {
		this.name = name
	}

	howl() { console.log(this.name + " :aaaoooouuuu") }
}

class Dog extends Wolf {
	constructor(name) {
		super(name + " the dog")
	}

	bark() { console.log(this.name + " :wwoooooofff") }
}

const harry = new Dog('polo')

harry.bark()
harry.howl()

console.log(Object.getPrototypeOf(harry) === Dog.prototype)
console.log(Object.getPrototypeOf(Dog.prototype) === Wolf.prototype)
console.log(Object.getPrototypeOf(Wolf.prototype) === Object.prototype)
