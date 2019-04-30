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
  </div>
</template>

<script>
export default {
  name: 'ClassifyView',
  data() {
    return {
      // current: '', 
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
    addCart(event, item) {
      this.$store.commit('toCart', item)
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
</style>