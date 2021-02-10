const up = require('./uppercase')
const assert = require('assert')

assert.throws(() => up(89), Error('input must be a string'))
assert.strict.equal(up('qwe'), 'QWE')

