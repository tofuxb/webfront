<template>
  <div id="app">
    <img src="./assets/logo.png">
    <product-list></product-list>
  </div>
</template>

<script>
import ProductList from './components/ProductList'

export default {
  name: 'app',
  components: {
    ProductList
  }
}
</script>

<style lang="less">
@import url('./assets/style/fn.less');
#app {
  font-family: @fontDefault;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
