<template>
  <div class="login">
    <HeaderNav></HeaderNav>
    <cube-form
      :model="model"
      :schema="schema"
      @submit="submitHandle"></cube-form>
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue'

export default {
  name: 'LoginView',
  components: {
    HeaderNav
  },
  data() {
    return {
      model: {
        username: '',
        password: ''
      },
      schema: {
        fields: [
          // 用户名配置
          {
            type: 'input',
            modelKey: 'username',
            label: '用户名',
            props: {
              placeholder: '请输入用户名'
            },
            rules: {
              // 检验规则
              required: true,
              type: 'string',
              min: 3,
              max: 15
            },
            trigger: 'blur'
            // message: {
            //   required: '用户名不能为空',
            //   min: '用户名不能少于3个字符',
            //   max: '用户名不能多于15个字符'
            // }
          },
          // 密码配置
          {
            type: 'input',
            modelKey: 'password',
            label: '密码',
            props: {
              placeholder: '请输入密码',
              type: 'password',
              eye: {
                open: false
              }
            },
            rules: {
              // 检验规则
              required: true,
              type: 'string',
              min: 6,
              max: 18
            },
            trigger: 'blur'
          },
          // 登录配置
          {
            type: 'submit',
            label: '登录'
          }
        ]
      }
    }
  },
  methods: {
    async submitHandle(e) {
      e.preventDefault();
      try{
        const result = await this.$http.get('/api/login',{
          params: this.model
        })
        if(result.code == 0) {
          alert(result.message)
          this.$store.commit('setToken', result.token)
          window.localStorage.setItem('token', result.token)
          this.$router.replace('/FooterNav/HomeView')
          // 判断登录是否带参数，如果带参数跳转到重定向地址，否则跳转到首页
          if(this.$route.query.redirect){
            this.$router.replace({path: this.$route.query.redirect})
          } else {
            this.$router.replace({path: '/FooterNav/HomeView'})
          }
        } else {
          alert(result.message)
        }
      } catch(err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.cube-form
  margin-top: 40px
</style>
