<template>
  <div class="content">
    <transition :name="transitionName">
      <router-view class="second-grade-router"></router-view>
    </transition>
    <cube-tab-bar
    v-model="selectedLabelDefault"
    :data="tabs"
    @click="clickHandler"
    @change="changeHandler"
    ></cube-tab-bar>
    <span class="count-sum">{{ countSum }}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'FooterNav',
  data () {
    return {
      // countSum: 30,
      transitionName: 'slide-right',
      selectedLabelDefault: '首页',
      tabs: [{
        label: '首页',
        icon: 'cubeic-home'
      }, {
        label: '分类',
        icon: 'cubeic-tag'
      }, {
        label: '搜索',
        icon: 'cubeic-search'
      }, {
        label: '购物车',
        icon: 'cubeic-mall'
      }, {
        label: '我的',
        icon: 'cubeic-person'
      }]
    }
  },
  methods: {
    clickHandler (label) {
      // if you clicked home tab, then print 'Home'
      console.log(label)
    },
    changeHandler (label) {
      // if you clicked different tab, this methods can be emitted
      switch(label) {
        case '首页':
        this.$router.push('/FooterNav/HomeView');
        break;
        case '分类':
        this.$router.push('/FooterNav/ClassifyView');
        break;
        case '搜索':
        this.$router.push('/FooterNav/SearchView');
        break;
        case '购物车':
        this.$router.push('/FooterNav/CartView');
        break;
        case '我的':
        this.$router.push('/FooterNav/MineView');
        break;
      }
    }
  },
  created() {
    switch(this.$route.path) {
      case '/FooterNav/HomeView':
      this.selectedLabelDefault='首页';
      break;
      case '/FooterNav/ClassifyView':
      this.selectedLabelDefault='分类';
      break;
      case '/FooterNav/SearchView':
      this.selectedLabelDefault='搜索';
      break;
      case '/FooterNav/CartView':
      this.selectedLabelDefault='购物车';
      break;
      case '/FooterNav/MineView':
      this.selectedLabelDefault='我的';
      break;
    }
  },
  computed: {
    ...mapGetters({
      countSum: 'countSum'  // countSum
    })
  }
}
</script>

<style lang="stylus" scoped>
.content
  width: 100vw
  height: 100vh

.cube-tab-bar
  width: 100%
  position: fixed
  bottom: 0
  z-index: 1
  background: #fff

.content >>> .cube-tab div
  font-size: 14px
  margin-top: 8px

.content >>> .cube-tab i
  font-size: 24px

.content >>> .cube-slide-dots span
  width: 10px
  height: 10px
  border-radius: 50%

.second-grade-router
  position: absolute
  width: 100%
  transition: all 0.8s ease 0.1s

.slide-left-enter, .slide-right-leave-active
  opacity: 0
  -webkit-transform: translate(100%, 0)
  transform: translate(100%, 0)

.slide-left-leave-active, .slide-right-enter
  opacity: 0
  -webkit-transform: translate(-100%, 0)
  transform: translate(-100%, 0)

.count-sum
  position: fixed
  bottom: 33px
  right: 23%
  z-index: 2
  width: 20px
  height: 20px
  line-height: 20px
  text-align: center
  border-radius: 50%
  background: red
  color: #fff
  font-size: 14px
</style>