/**
 * 入口
 */
const Mwebpack = require('./Mwebpack')
const configs = require('../../m-webpack_config')

const mwebpack = new Mwebpack(configs)
mwebpack.run()
