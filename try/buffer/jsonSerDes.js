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

// An exemple
// decode a string to binary
> bin = Buffer.from('oulalalalala')
<Buffer 6f 75 6c 61 6c 61 6c 61 6c 61 6c 61>
// stringify the binary
// that create a json object with a "type" and "data" key
// the value of the "data" are the binaries 
> jsstr = JSON.stringify(bin)
'{"type":"Buffer","data":[111,117,108,97,108,97,108,97,108,97,108,97]}'
// as we parse the jsstr stringified json object
// we get back a javascript object
> JSON.parse(jsstr)
{
  type: 'Buffer',
  data: [
    111, 117, 108,  97, 108,
     97, 108,  97, 108,  97,
    108,  97
  ]
}
// decode the js object to binary
// OR only the value of the "data" key, the result is the same
// then apply .toString() (underlying 'utf8'), that return back the string....
> Buffer.from(JSON.parse(jsstr).data).toString('utf8')
'oulalalalala'
> Buffer.from(JSON.parse(jsstr)).toString('utf8')
'oulalalalala'

// ex 2 refactored
> a = JSON.stringify(Buffer.from('sabsone'))
'{"type":"Buffer","data":[115,97,98,115,111,110,101]}'
> a
'{"type":"Buffer","data":[115,97,98,115,111,110,101]}'
> Buffer.from(JSON.parse(a).data).toString()
'sabsone'
> 

