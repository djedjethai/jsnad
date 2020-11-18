// const sayHi = prefixer("Hello")
// const sayBye = prefixer("bye bye")
// 
// function prefixer(say) {
// 	return (name) => {
// 		return say + " " + name
// 	}
// }
// console.log(sayHi("Dave"))
// console.log(sayHi("Annie"))
// console.log(sayBye("Robert"))

const leopard = {
	hiss: function() {console.log(this.name + " hssss")}
}

const lynx = Object.create(leopard, {
	purr: {value: function() {console.log(this.name + " prrrrr")}}
}) 

const cat = Object.create(lynx, {
	meow: {value: function() { console.log(this.name + " meaoww") }}
}) 

const felix = Object.create(cat, {
	name: {value: "felix"}
})

// function createCat(nm) {
// 	return Object.create(cat, {
// 		name: {value: nm}
// 	})
// }
//const felix = createCat("felix")

felix.meow()
felix.purr()
felix.hiss()


