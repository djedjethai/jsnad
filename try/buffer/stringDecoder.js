// The UTF8 encoding format has between 1 and 4 bytes to represent each character,
// Calling decoder.write will output a character only when all of the bytes representing that character have been written to the decoder:

const { StringDecoder } = require('string_decoder')
const frag1 = Buffer.from('f09f', 'hex')
const frag2 = Buffer.from('9180', 'hex')
console.log(frag1.toString()) // �
console.log(frag2.toString()) // ��

const decoder = new StringDecoder()
// same as const decoder = new StringDecoder('utf8')
console.log(decoder.write(frag1)) // empty
console.log(decoder.write(frag2)) // 👀

const cent = Buffer.from([0xC2, 0xA2])
console.log(decoder.write(cent))

const euro = Buffer.from([0xE2, 0x82, 0xAC])
console.log(decoder.write(euro))

// we can also write like it
decoder.write(Buffer.from([0xE2]))
decoder.write(Buffer.from([0x82]))
console.log(decoder.end(Buffer.from([0xAC])))
