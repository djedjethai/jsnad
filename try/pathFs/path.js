'use strict'

// const { join } = require('path')
// console.log('out file: ', join(__dirname, 'out.txt'))

const { parse, basename, dirname, extname } = require('path')
console.log('filename parsed: ', parse(__filename))
console.log('filename basename: ', basename(__filename))
console.log('filename dirname: ', dirname(__filename))
console.log('filename extname: ', extname(__filename))

// The parse method returns an object with root, dir, base, ext, and name properties. The root and name values can only be ascertained with the path module by using the parse method. The base, dir and ext properties can be individually calculated with the path.dirname and path.basename methods respectively.
