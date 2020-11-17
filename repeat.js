const gFather = { fnG: function() {console.log(this.nm + " Grand-father")} }

const father = Object.create(gFather, {
	fnF: {value: function() {console.log(this.nm + " Father")}}
})

function son(name) {
	return Object.create(father, {
		nm: {value: name + " from the son"}
	})
}

const test = son('sony')

test.fnF();
test.fnG();

console.log(Object.getOwnPropertyDescriptor(test, 'nm'))

console.log(Object.getPrototypeOf(test) === father)
console.log(Object.getPrototypeOf(father) === gFather)
