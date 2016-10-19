import shop from 'api/shop'
import * as types from '../mutation-types'

export const getAllProducts = ({ commit }, page) => {
  shop.getProducts(products => {
    commit(types.RECEIVE_PRODUCTS, { products })
  })
}
