const wolf = (name) => {
	const howl = () => console.log(name + " aaaooouuu") 
	return {howl}
}

const dog = (name) => {
	name = name + " the dog" 
	const woof = () => console.log(name + " woooffff")
	return {
		...wolf(name),
		woof
	}
}

const p = dog('pierre')

p.woof()
p.howl()
