import Vue from 'vue'

export default {
  getProducts (cb, payload) {
    Vue.http.get('/products', payload).then((response) => {
      cb(response.data)
    }, (response) => {
      console.log('ERROR: ' + JSON.stringify(response))
    })
  }
}
