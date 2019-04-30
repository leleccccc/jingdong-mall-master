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
      <cube-button>清空购物车</cube-button>
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

    },
    increaseCart(index) {

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

// .goods-button
//   position: absolute
//   // bottom: 60px
</style>
