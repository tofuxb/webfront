import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import modules from './modules'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'
console.log('getters', getters)
export default new Vuex.Store({
  actions,
  getters,
  modules
})
