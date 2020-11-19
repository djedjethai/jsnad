const leopard = {
	hiss: function() {console.log(this.name + ' hsss')}
}

const lynx = Object.create(leopard, {
	purr: {value: function() {console.log(this.name + ' prrr')}}
})

const cat = Object.create(lynx, {
	meow: {value: function() {console.log(this.name + ' meow')}}
})

const felix = Object.create(cat, {
	name: {value: "Felix the cat"}
})

felix.hiss()
felix.purr()
felix.meow()
