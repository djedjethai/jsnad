// modify a buffer

const buf1 = Buffer.from('cooal', 'utf8')
console.log(buf1) // <Buffer 63 6f 6f 61 6c>

// to modify a single byte of a buffer, we must go with ascii/utf8 unicode in 'decimal'
buf1[1] = 97 // 97 is 'a' in decimal, and is 61 in hexadecimal
console.log(buf1) // <Buffer 63 61 6f 61 6c>
console.log(buf1.toString()) // caoal

// the .write()  method allow us to modify the content of the full buffer
buf1.write('lili') 
console.log(buf1.toString()) // lilil !!! the last char is not replaced so stay the same as before.

// let s try to modify with more bytes data
buf1.write('roberta') // rober the size of the buffer can not be change
console.log(buf1.toString())

// Buffer.from() resize the buffer if not enought space
buffSmall = Buffer.alloc(2)
buffSmall = Buffer.from('longString')
console.log(buffSmall.toString()) // longString


buff2 = Buffer.alloc(2)
buff2.write('longText')
console.log(buff2.toString()) // lo

// The write() function adds the bytes in sequential order, so only the first three bytes were placed in the buffer.

//============ Copy a buffer to another ==============

const wordsBuf = Buffer.from('Banana Nananana');
const catchphraseBuf = Buffer.from('Not sure Turtle!');

// The wordsBuf and catchphraseBuf buffers both contain string data. We want to modify catchphraseBuf so that it stores Nananana Turtle! instead of Not sure Turtle!. We’ll use copy() to get Nananana from wordsBuf to catchphraseBuf.
// To copy data from one buffer to the other, we’ll use the copy() method on the buffer that’s the source of the information. Therefore, as wordsBuf has the string data we want to copy, we need to copy like this:

wordsBuf.copy(catchphraseBuf)
console.log(wordsBuf.toString()) // Banana Nananana
console.log(catchphraseBuf.toString()) // Banana Nananana! // note that the ! remain

// The copy() function has a few more parameters that allow us to customize what data is copied to the other buffer. Here’s a list of all the parameters of this function:
catchphraseBuf.write('Not sure Turtle!'); // reset buff

wordsBuf.copy(catchphraseBuf, 0, 7, wordsBuf.length);
console.log(catchphraseBuf.toString()) // Nananana Turtle!
catchphraseBuf.write('Not sure Turtle!'); // reset buff

wordsBuf.copy(catchphraseBuf, 7, 0, wordsBuf.length);
console.log(catchphraseBuf.toString()) // Not surBanana Na
