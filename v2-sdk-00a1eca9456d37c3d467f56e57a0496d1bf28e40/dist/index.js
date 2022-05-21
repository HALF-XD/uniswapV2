
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./lxd-uniswap-sdk01.cjs.production.min.js')
} else {
  module.exports = require('./lxd-uniswap-sdk01.cjs.development.js')
}
