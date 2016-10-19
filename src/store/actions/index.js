// Use require.context to require getters automatically
// Ref: https://webpack.github.io/docs/context.html
const context = require.context('./', false, /\.js$/)
const keys = context.keys().filter(item => item !== './index.js') || []

const actions = keys.reduce((memo, key) => {
  return context(key)
}, {})

export default actions
