// Use require.context to require getters automatically
// Ref: https://webpack.github.io/docs/context.html
const context = require.context('./', false, /\.js$/)
const keys = context.keys().filter(item => item !== './index.js') || []

const modules = keys.reduce((memo, key) => {
  memo[key.match(/([^\/]+)\.js$/)[1]] = context(key)
  return memo
}, {})

export default modules
