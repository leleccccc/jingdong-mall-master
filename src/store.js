import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    token: '', 
    countSum: '',
    cartList: JSON.parse(localStorage.getItem('cartList')) || [] // 存储购物车的商品数据
  },
  mutations: {
    //设置vuex的token，把传进来的token存入vuex
    setToken(state, token) {
      state.token = token
    },
    // 添加分类页商品到购物车，购物车已有就加一，没有就添加
    toCart(state, item) {
      let goods = state.cartList.find(v => v.title == item.label) // find方法如果true，返回整个数组
      if(goods){
        goods.cartCount+=1
      } else {
        state.cartList.push({title: item.label, cartCount: 1})
      }
    },
    // 购物车页某个商品加一
    cartAdd(state, index) {
      state.cartList[index].cartCount++
    },
    // 购物车页某个商品减一
    cartReduce(state, index) {
      if (state.cartList[index].cartCount > 1) {
        state.cartList[index].cartCount--
      } else {
        if(window.confirm('确认从购物车删除该商品吗？')) {
          state.cartList.splice(index, 1)
        }
      }
    },
    // 清空购物车
    cartClear(state) {
      if(state.cartList.length == 0) {
        alert('购物车已经是空的')
        console.log('空空')
      } else {
        if (window.confirm('确认清空购物车吗？')) {
          state.cartList = []
        }
      }
    }
  },
  actions: {

  },
  getters: {
    countSum: state => {
      let number=0
      state.cartList.forEach( v => {
        number+=v.cartCount
      })
      return number
    }
  }
});
// 每次调用mutation的时候都会先进入这个方法
store.subscribe((mutation, state) => {
  localStorage.setItem('cartList', JSON.stringify(state.cartList))
})

export default store
