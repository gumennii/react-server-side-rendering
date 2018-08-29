// require('./index.html')
require('./styles.css')
require('./root.js')

console.log('Environemnt is ', process.env.NODE_ENV)

var a = async args => {
  const { a, b } = args
  await console.log('Hello from the future!', a, b)
}

a({ a: 1, b: 2 })