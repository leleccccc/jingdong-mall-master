import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import './cube-ui.js'
import axios from 'axios'
import setAxios from './setAxios'

Vue.config.productionTip = false
Vue.prototype.$http = axios
setAxios()

// 全局导航守卫
router.beforeEach((to, from, next) => {
  // 无论刷新还是路由跳转，都会先进入全局导航守卫
  store.commit('setToken', localStorage.getItem('token'))
  if(to.matched.some(record => record.meta.requireAuth)) {
    if(store.state.token){
      next()
      console.log('a')
    } else {
      console.log('b')
      next({
        path: '/LoginView',
        query: { redirect: to.fullPath }
      })
    } 
  } else {
    next()
    console.log('c')
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
