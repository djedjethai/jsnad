// So Buffer instances are represented in JSON by an object that has a type property with a string value of 'Buffer' and a data property with an array of numbers, representing the value of each byte in the buffer
// jerome@jerome-PORTEGE-M900 ~/try/buffer $ node -p "Buffer.from('\u{1D400}').toJSON()"
// { type: 'Buffer', data: [ 240, 157, 144, 128 ] }
// jerome@jerome-PORTEGE-M900 ~/try/buffer $ node -p "JSON.stringify(Buffer.from('\u{1D400}'))"
// {"type":"Buffer","data":[240,157,144,128]}

// When deserializing, JSON.parse will only turn that JSON representation of the buffer into a plain JavaScript object, to turn it into an object the data array must be passed to Buffer.from:
var buf1 = Buffer.from('\u{1D400}')
console.log(buf1) // <Buffer f0 9d 90 80>
buf1B64 = buf1.toString('Base64')
console.log(buf1B64) // 8J2QgA==

buf1 = Buffer.from('\u{41}')
console.log(buf1) // <Buffer 41> 
buf1B64 = buf1.toString('Base64')
console.log(buf1B64) // QQ==
var buf1json = buf1.toJSON()
var buf1jsonStr = JSON.stringify(buf1)
// 65 IS THE DECIMAL VALUE === TO 41 WHICH THE HEXADECIMAL'ONE MATCHING THE DATA-BYTE VALUE
console.log(buf1json) // { type: 'Buffer', data: [ 65 ] }
console.log(buf1jsonStr) // {"type":"Buffer","data":[65]}
console.log(JSON.parse(buf1jsonStr)) // { type: 'Buffer', data: [ 65 ] }

// When an array of numbers is passed to Buffer.from they are converted to a buffer with byte values corresponding to those numbers.
console.log(Buffer.from(JSON.parse(buf1jsonStr))) // <Buffer 41> 


const json = JSON.stringify(Buffer.from('\u{1D400}'))
const jsParsed = JSON.parse(json)
console.log(jsParsed) // { type: 'Buffer', data: [ 240, 157, 144, 128 ] }
console.log(Buffer.from(jsParsed)) // <Buffer f0 9d 90 80>


