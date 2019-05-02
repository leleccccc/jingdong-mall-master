<template>
  <div>
    <img class="header-img" src="@/assets/mine.jpg" alt="我的背景图片">
    <ul>
      <li v-for="(item, index) in mineList" :key="index" @click="itemClick(item)">
        <span>{{ item.label }}</span>
        <i class="cubeic-arrow"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MineView',
  data() {
    return {
      mineList: [
        { label: '商品收藏', type: 'goods' },
        { label: '我的足迹', type: 'footmark' },
        { label: '店铺收藏', type: 'shop' },
        { label: '我的订单', type: 'order' },
        { label: '退出', type: 'exit' }
      ]
    }
  },
  methods: {
    itemClick(item) {
      if(item.type == 'exit') {
        this.$store.commit('setToken', '')
        localStorage.removeItem('token')
        this.$router.replace({ path: '/LoginView' })
        // 退出时应该提交购物车数组给后端数据库， 这里我只清空购物车数组
        this.$store.state.cartList = []
        localStorage.removeItem('cartList')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.header-img
  width: 100%
  vertical-align: middle
ul
  li
    font-size: 24px
    text-align: left
    height: 50px
    line-height: 50px
    padding-left: 5%
    border-bottom: 1px solid #eee
    span
      display: inline-block
      width: 90%
</style>