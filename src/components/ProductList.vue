<template>
  <ul>
    <li v-for="p in products">
      {{ p.title }} - {{ p.price }}
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    products: 'allProducts'
  }),
  methods: mapActions([
    'addToCart'
  ]),
  created () {
    this.$store.dispatch('getAllProducts', { page: 1 })
  }
}
</script>
