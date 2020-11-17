// function fn() { console.log(this.id) }
// 
// const obj = { id: 99 }
// const obj2 = { id: 2 }
// 
// fn.call(obj)
// fn.call(obj2)
// fn.call({ id: 67 })

// const add = (a, b) => a + 1;
// console.log(add(4)) // 5

function fn() {
	return (offset) => {
		console.log(this.id + offset +' - ' + this.gr)
	}
}
const obj = { id: 99, gr: "ouahhh" }
// console.log(fn.call()) // function
const offset = fn.call(obj)

offset(3); // 102 - ouahhh

function normalFunc() {}
const arrowFunc = () => {}

console.log(typeof normalFunc.prototype);
console.log(typeof arrowFunc.prototype);
