// defining constructors
function D() {}
function C() {}

C.prototype = Object.create(D.prototype)
console.log(Object.getPrototypeOf(C.prototype) === D.prototype)

let o = new C()

// true, because: Object.getPrototypeOf(o) === C.prototype
console.log(Object.getPrototypeOf(o) === C.prototype) // true

console.log('=======')
console.log(Object.getPrototypeOf(o) === D.prototype) // false 
// BUT
console.log(Object.getPrototypeOf(C.prototype) === D.prototype) // true

console.log("----------------------------------------")
		
console.log(o instanceof C)

// false, because D.prototype is nowhere in o's prototype chain
console.log(o instanceof D)
// 
// o instanceof Object           // true, because:
console.log(D.prototype instanceof Object) // true
console.log(C.prototype instanceof D) // true
console.log(C.prototype instanceof Object) // true
//

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++")

// 
C.prototype = {} 
let o2 = new C() 
 
console.log(o2 instanceof C)  // true
 
// false, because C.prototype is nowhere in
// o's prototype chain anymore
console.log(o instanceof C) // false
// 
D.prototype = new C()  // add C to [[Prototype]] linkage of D
let o3 = new D() 
console.log(o3 instanceof D)        // true
console.log(o3 instanceof C)        // true since C.prototype is now in o3's prototype chain

console.log("+=+=+=+=+=+=+=++++++======++++++=====++++++++=====++++==")

console.log(Object.getPrototypeOf(D.prototype) === C.prototype) // true
console.log(Object.getPrototypeOf(C.prototype) === Object.prototype) // true
console.log(Object.getPrototypeOf(C.prototype) === D.prototype) // false
console.log(Object.getPrototypeOf(D.prototype) === Object.prototype) // false


