import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '', 
    countSum: '',
    cartList: [] // 存储购物车的商品数据
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
