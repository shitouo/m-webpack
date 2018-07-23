/**
 */
'use strict'

const Compiler = require('./Compiler')


class Mwebpack {
  constructor (configs) {
    this.compiler = new Compiler(configs)
  }

  run () {
    console.log(111111)
  }
}

module.exports = Mwebpack
