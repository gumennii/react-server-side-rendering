require('webpack-hot-middleware/client?reload=true')
require('./index.html')
require('./styles.css')

var a = async args => {
  const { a, b } = args
  await console.log('Hello from the future!', a, b)
}

a({ a: 1, b: 2 })