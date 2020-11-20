'use strict'

const pino = require('pino')

// const { upper } = require('./format.js') // module.exports = {upper: upper}
// const test = upper("un test en upper")

// const format = require('./format.js') // exports.upper = (str) => {.......} 
// const test = format.upper("un test en upper")

const fff = require('./format')
const test = fff("un test en upper")

const logger = pino()

logger.info(test)
process.stdin.resume()

