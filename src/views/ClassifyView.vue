<template>
  <div class="classify">
    <cube-scroll class="left-classify">
      <ul>
        <li v-for="(item, index) in tagList" :key="index" @click="selectTag(index)" :class="item.active ? 'active' : ''"> 
          <!-- :class="index == current ? 'active' : ''"    -->
          {{ item.label }}
        </li>
      </ul>
    </cube-scroll>
    <cube-scroll class="right-classify">
      <ul>
        <li v-for="(item, index) in imgList" :key="index">
          <img :src="item.image" alt="">
          <p>{{ item.label }}</p>
          <i class="cubeic-add" @click="addCart($event, item)"></i>
        </li>
      </ul>
    </cube-scroll>
    <div class="ball-wrap">
      <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:after-enter="afterEnter"
      >
        <div class="ball" v-if="ball.show">
          <div class="inner">
            <i class="cubeic-add"></i>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClassifyView',
  data() {
    return {
      // current: '', 
      ball: {
        show: false,
        el: ''
      },
      imgList: [], // 右侧分类图片数组
      tagList: [  //  左侧分类标签数组
        {
          label: '热门推荐',
          active: true
        },
        {
          label: '手机数码',
          active: false
        },
        {
          label: '家用电器',
          active: false
        },
        {
          label: '电脑办公',
          active: false
        },
        {
          label: '计生情趣',
          active: false
        },
        {
          label: '美妆护肤',
          active: false
        },
        {
          label: '个护清洁',
          active: false
        },
        {
          label: '汽车生活',
          active: false
        },
        {
          label: '京东城市',
          active: false
        },
        {
          label: '男装',
          active: false
        },
        {
          label: '男鞋',
          active: false
        },
        {
          label: '女装',
          active: false
        },
        {
          label: '女鞋',
          active: false
        },
        {
          label: '口红',
          active: false
        },
        {
          label: '手袋',
          active: false
        }
      ]
    }
  },
  methods: {
    // 获取左侧分类标签数据
    selectTag(index) {
      this.current = index
      this.tagList.forEach( (val, i) => {
        if(index == i) {
          val.active = true
        } else {
          val.active = false
        }
      })
      this.getClassify(index)
    },
    // 获取右侧分类图片数据
    async getClassify(index) {
      const result = await this.$http.get('/api/classify',{
        params: {
          type: index
        }
      })
      this.imgList = result.data
    }, 
    // 添加分类页商品至购物车
    addCart(e, item) {
      this.$store.commit('toCart', item)
      // 让小球显示
      this.ball.show = true
      // 获取点击元素
      this.ball.el = e.target
    },
    // 让小球移动到点击的位置
    beforeEnter: function (el) {
      const dom = this.ball.el // 获取点击的DOM元素
      console.log(dom)
      const rect = dom.getBoundingClientRect() // 获取点击DOM元素的水平垂直位置
      console.log(rect)
      const x = rect.left - window.innerWidth * 0.7
      const y = -(window.innerHeight - rect.top)
      console.log(x, y)
      el.style.display = 'block'
      el.style.transform = `translate3d(0, ${y}px, 0)`
      const inner = el.querySelector('.inner')
      inner.style.transform = `translate3d(${x}px, 0, 0)`
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    enter: function (el, done) {
      // 触发重绘
      document.body.offsetHeight
      // 小球移动回到购物车
      el.style.transform = `translate3d(0, 0, 0)`
      const inner = el.querySelector('.inner')
      inner.style.transform = `translate3d(0, 0, 0)`
      // 过渡完后执行的事件
      el.addEventListener("transitionend", done)
    },
    afterEnter: function (el) {
      // 隐藏小球
      this.ball.show = false
      el.style.display = 'none'
    }
  },
  created() {
    // 获取默认分类数据
    this.getClassify(0)
  },
  mounted() {
    // 设置滚动盒子高度
    const leftClassify = document.querySelector('.left-classify')
    const rightClassify = document.querySelector('.right-classify')
    const bodyHeight = document.documentElement.clientHeight
    leftClassify.style.height = bodyHeight - 60 + 'px'
    rightClassify.style.height = bodyHeight - 60 + 'px'
  }
}
</script>

<style lang="stylus" scoped>
.classify
  display: flex
  .left-classify
    width: 30%
    li
      height: 50px
      line-height: 50px
      text-align: center
      border-bottom: 1px solid #fff
      color: #333
      background: #f8f8f8
      font-size: 14px
    .active
      background: #fff
      color: #e93b3d
  .right-classify
    width 70%
    ul
      display flex
      flex-wrap  wrap
      li
        width 50%
        font-size 15px
        text-align center
        img 
          width 80px
          height 80px
        i
          font-size: 25px

.ball-wrap
  .ball
    position: fixed
    left: 70%
    bottom: 10px
    z-index: 3
    color: red
    transition: all 1s cubic-bezier(0.49, -0.29, 0.75, 0.41)
    .inner
      width: 28px
      height: 27px
      transition: all 1s linear
      i
        font-size: 25px
</style>