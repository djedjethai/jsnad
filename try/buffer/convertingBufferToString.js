> Buffer.from('\u{1D400}')
<Buffer f0 9d 90 80>
> var buf1 = Buffer.from('\u{1D400}')
undefined
> buf1
<Buffer f0 9d 90 80>
> buf1.toString()
'𝐀'
> buf1.toString('utf-8')
'𝐀'
> buf1.toString('ascii')
'p\u001d\u0010\u0000'
> buf1.toString('base64')
'8J2QgA=='
> buf1.toString('hex')
'f09d9080'
> buf1.toString('utf16le')
'鷰肐'
> buf1 + ' eheh'
'𝐀 eheh'

// if we send byte-data through the wire (like internet) it must be string encoded (base64, hex)
// we create a new buf1Hex having the value of buf1 encoded into 'hex' / format during transfert
> var buf1Hex = buf1.toString('hex')

// so when we get the encoded string (after transfert) we need to decode it
// but i can not convert it back directly to utf-8
> buf1Hex.toString('utf-8')
'f09d9080'

// for that i need to recreate one more buffer, en precisant son string encodage.
> var buf1Dec = Buffer.from(buf1Hex, 'hex')
undefined
> buf1Dec.toString('utf-8')
'𝐀'


// second exemple
> var buf1 = Buffer.from('\u{41}')
undefined
> buf1
<Buffer 41>
> buf1.toString()
'A'
// at this time the buf1 is a byte-data so to send it into a string packet like into http protocol
// i need to encode it as a string, let use base64
> var buf164 = buf1.toString('base64')
undefined
> buf164
'QQ=='

// now buf164 is base64 encoded and can be send as a string
// but at reception i need to decode it
// but decoding it straight does not work
> buf164.toString()
'QQ=='
// so the solution i found is to create a new buffer, and then decode it
> var buf1Dec = Buffer.from(buf164, 'base64')
undefined
> buf1Dec
<Buffer 41>
> buf1Dec.toString()
'A'
> buf1Dec.toString('utf-8')
'A'


// do the same (decode it into utf-8) with buf1Hex
// same as previously i can not decode directly the buffer, i need to create a new one.

// The Buffer object is not just limited to Base64 conversions. You can even use it to perform ASCII, HEX, UTF-16, and UCS2 encodings and decodings.
 
