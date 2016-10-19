// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import store from './store'
import './assets/style/fn.less'

/* eslint-disable no-new */
Vue.use(VueResource)

const app = new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

export default app
