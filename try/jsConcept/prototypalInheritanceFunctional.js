// const wolf = {
// 	howl: function() { console.log(this.name + ': aaaouuuu') }
// }
// 
// const dog = Object.create(wolf, {
// 	woof: { value: function() { console.log(this.name + ': ouuuafff') } }
// })
// 
// const rufus = Object.create(dog, {
// 	name: { value: "i am rufus" }
// })
// 
// rufus.howl();
// rufus.woof();


// console.log(Object.getOwnPropertyDescriptor(rufus, 'name'))
// return 
// {
//   value: 'i am rufus',
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// console.log(Object.getOwnPropertyDescriptor(rufus, 'woof'))
// undefined

const wolf =  { 
	howl: function() { console.log(this.name + ': aouuuuuuuuu') }
}

const dog = Object.create(wolf, {
	bark: { value: function() { console.log(this.name + ': ouuuaafff') } }
})

function createDog(n) {
	return Object.create(dog, {
		name: { value: n  }
	})
}

const doggy = createDog('harry')

doggy.bark() // harry: ouuuaafff 
doggy.howl() // harry: aouuuuuuuuu 

console.log(Object.getPrototypeOf(doggy) === dog) // true
console.log(Object.getPrototypeOf(dog) === wolf) // true
console.log(Object.getPrototypeOf(wolf) === Object) // false
console.log(Object.getPrototypeOf(wolf) === Object.prototype) // true


