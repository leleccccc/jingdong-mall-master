import axios from 'axios'
import store from './store'
import router from './router'

// http全局拦截
// token要放在请求的头部传给后端
function setAxios() {
  axios.interceptors.request.use(
    config => {
      if(store.state.token) {
        config.headers.token = store.state.token
        console.log(123)
      }
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )

  axios.interceptors.response.use(
    response => {
      if(response.status == 200) {
        const data = response.data
        console.log(456)
        if(data.code == 1) {
        // 登录过期，清除vuex的和localStorage的token,需要重新登录
        store.commit('setToken', '')
        localStorage.removeItem('token') 
        // 跳转到登录界面,不会向history添加记录   
        router.replace({path: '/LoginView'})
        }
        return data  // 直接返回数据主体
      }
      return response
    },
    error => {
      return Promise.reject(error)
    }
  )
}

export default setAxios