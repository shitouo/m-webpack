/**轮子入口
 */
const configJson = require('../webpack.config')
const fs = require('fs')
const path = require('path')
const acorn = require('acorn-dynamic-import').default

const entryPath = path.join(__dirname, `../${configJson.entry}`)

const entryContent = fs.readFileSync(entryPath)
const ast = acorn.parse(entryContent, {
  plugins: {
    dynamicImport: true
  },
  sourceType: 'module'
})

console.log(ast)
