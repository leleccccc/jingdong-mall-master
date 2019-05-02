<template>
  <div class="cart">
    <div class="goods" v-for="(item, index) in cartList" :key="index">
      <p>{{ item.title }}</p>
      <div class="goods-control">
        <i class="cubeic-remove" @click="decreaseCart(index)"></i>
        <span>{{ item.cartCount }}</span>
        <i class="cubeic-add" @click="increaseCart(index)"></i>
      </div>
    </div>
    <div class="goods-button">
      <cube-button>下单</cube-button>
      <cube-button @click="clearCart">清空购物车</cube-button>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'CartView',
  data() {
    return {
      // cartList: []
    }
  },
  computed: {
    ...mapState({
      cartList: state => state.cartList
    })
  },
  methods: {
    decreaseCart(index) {
      this.$store.commit('cartReduce', index)
    },
    increaseCart(index) {
      this.$store.commit('cartAdd', index)
    },
    clearCart() {
      this.$store.commit('cartClear')
    }
  }
}
</script>

<style lang="stylus" scoped>
.goods
  padding: 10px
  overflow hidden
  font-size: 18px
  p
    float: left
  .goods-control
    float: right

.cart >>> i
  font-size: 22px
</style>
