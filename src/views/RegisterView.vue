<template>
  <div class="register">
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
  name: 'RegisterView',
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
          // // 重复密码配置
          // {
          //   type: 'input',
          //   modelKey: 'affirmPassword',
          //   label: '确认密码',
          //   props: {
          //     placeholder: '请确认密码',
          //     type: 'password',
          //     eye: {
          //       open: false
          //     }
          //   },
          //   rules: {
          //     // 检验规则
          //     required: true,
          //     type: 'string',
          //     min: 6,
          //     max: 18
          //   }
          // },
          // 注册配置
          {
            type: 'submit',
            label: '注册'
          }
        ]
      }
    }
  },
  computed: {
    // showAlert(e) {
    //   e.preventDefault();
    //   this.$createDialog({
    //     type: 'alert',
    //     title: 'res.data.success',
    //     content: '',
    //     icon: 'cubeic-alert'
    //   }).show()
    // }
  },
  methods: {
    submitHandle(e) {
      e.preventDefault();
      this.$http.get('/api/register',{
         params: this.model
      })
      .then( res => {
        // console.log(res.data.success)
        alert(res.message)
        // showAlert()
      })
      .catch( err => {
        // console.log(err)
        alert(err)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.cube-form
  margin-top: 40px
</style>
