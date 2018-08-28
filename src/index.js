require('@babel/plugin-transform-runtime')
require('webpack-hot-middleware/client?reload=true')
require('./index.html')
require('./styles.css')
require('./root.js')

var a = async args => {
  const { a, b } = args
  await console.log('Hello from the future!', a, b)
}

a({ a: 1, b: 2 })