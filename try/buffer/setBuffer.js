jerome@jerome-PORTEGE-M900 ~/Documents/code/jsnad/try/asynchronousControlFlow $ node
Welcome to Node.js v12.18.0.
Type ".help" for more information.
> var buf1, buf2, buf3, buf4
undefined
> buf1 = Buffer.alloc(10)
<Buffer 00 00 00 00 00 00 00 00 00 00>
> buf2 = buf1.slice(4, 6)
<Buffer 00 00>
> buf2[0] = 45
45
> buf2[1] = 255
255
> buf2
<Buffer 2d ff>
> buf1
<Buffer 00 00 00 00 2d ff 00 00 00 00>
> buf3 = new Uint8Array
Uint8Array(0) []
> buf3 = new Uint8Array(10)
Uint8Array(10) [
  0, 0, 0, 0, 0,
  0, 0, 0, 0, 0
]
> buf4 = buf3.slice(2,4)
Uint8Array(2) [ 0, 0 ]
> buf4[0] = 34
34
> buf4[1] = 255
255
> buf4
Uint8Array(2) [ 34, 255 ]
> buf3
Uint8Array(10) [
  0, 0, 0, 0, 0,
  0, 0, 0, 0, 0
]
> 

// using unicode point
> '\x41\x42\x43'
'ABC'
> 'i \u2661 you'
'i ♡ you'
> '\u{1F4A9}'
'💩'
> '\u{1D400}'
'𝐀'
> '\u{1D400}'.length
2
// For backwards compatibility with ECMAScript 5 and older environments, the unfortunate solution is to use surrogate pairs:
// THAT WHY THE LENGTH OF THIS CHAR IS 2. and that is one pb of js.
> '𝐀' == '\uD835\uDC00'
true 
> '𝐀' == '\u{1D400}'
true
> '𝐀' == '\u1D400'
false
> '𝐀'.length
2
> '\u{1D400}'.length
2
> '\u{1D400}'
'𝐀'

// Even though there is one character in the string, it has a length of 2. This is to do with how Unicode symbols work, but explaining the reasons for this in depth are far out of scope for this subject. However for a full deep dive into reasons for a single character string having a length of 2 see the following article "JavaScript Has a Unicode Problem" by Mathias Bynes.

// When the string is converted to a buffer however, it has a length of 4. This is because in UTF8 encoding, the eyes emoji is represented with four bytes:
jerome@jerome-PORTEGE-M900 ~ $ node -p "Buffer.from('\u{1D400}').length"
4
jerome@jerome-PORTEGE-M900 ~ $ node -p "Buffer.from('\u{1D400}')"
<Buffer f0 9d 90 80>


// When the first argument passed to Buffer.from is a string, a second argument can be supplied to set the encoding. There are two types of encodings in this context: character encodings and binary-to-text encodings.
// UTF8 is one character encoding, another is UTF16LE.
// When we use a different encoding it results in a buffer with different byte values:
jerome@jerome-PORTEGE-M900 ~ $ node -p "Buffer.from('\u{1D400}', 'utf16le')"
<Buffer 35 d8 00 dc>
jerome@jerome-PORTEGE-M900 ~ $ node -p "Buffer.from('A')"
<Buffer 41>
jerome@jerome-PORTEGE-M900 ~ $ node -p "Buffer.from('A', 'utf16le')"
<Buffer 41 00>
jerome@jerome-PORTEGE-M900 ~ $ node -p "Buffer.from('A').length"
1
jerome@jerome-PORTEGE-M900 ~ $ node -p "Buffer.from('A', 'utf16le').length"
2


Base64 is a method to encode a byte sequence to a string.

So, these are widely different concepts and should not be confused.

Things to keep in mind:

Not every byte sequence represents an Unicode string encoded in UTF-8 or UTF-16.

Not every Unicode string represents a byte sequence encoded in Base64.


// The supported byte-to-text encodings are hex and base64. Supplying one of these encodings allows us to represent the data in a string, this can be useful for sending data across the wire in a safe format.
//Assuming UTF8 encoding, the base64 representation of the eyes emoji is 8J+RgA==. If we pass that to Buffer.from and pass a second argument of 'base64' it will create a buffer with the same bytes as Buffer.from('👀'):
// here l'ex du prof, les 2 yeux.
jerome@jerome-PORTEGE-M900 ~ $ node -p "Buffer.from('8J+RgA==', 'base64')"
<Buffer f0 9f 91 80>
jerome@jerome-PORTEGE-M900 ~ $ node -p "Buffer.from('\u{1D400}')"
<Buffer f0 9d 90 80>

// my ex
//'\u{1D400}' is the A with special font with UTF-8 encoding
// here i tramsfome it into 'string base64 encoding' 
jerome@jerome-PORTEGE-M900 ~ $ node -p "Buffer.from('\u{1D400}').toString('base64')"
8J2QgA==
// let's convert it in 'hex'
jerome@jerome-PORTEGE-M900 ~/Documents/code/jsnad/try $ node -p "Buffer.from('\u{1D400}').toString('hex')"
f09d9080
// here i get the byte data of this A special font encoded base64 
jerome@jerome-PORTEGE-M900 ~ $ node -p "Buffer.from('8J2QgA==', 'base64')"
<Buffer f0 9d 90 80>
// here i get the byte data of the A special font with UTF-8 encoding (see the byte data are same)
jerome@jerome-PORTEGE-M900 ~ $ node -p "Buffer.from('\u{1D400}')"
<Buffer f0 9d 90 80>
// same, from 'hex' encoding
jerome@jerome-PORTEGE-M900 ~/Documents/code/jsnad/try $ node -p "Buffer.from('f09d9080', 'hex')"
<Buffer f0 9d 90 80>



