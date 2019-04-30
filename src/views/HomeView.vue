<template>
  <div class="home">
    <!-- 轮播图 -->
    <cube-slide ref="slide" :data="slideItems" @change="changePage">
      <cube-slide-item v-for="(item, index) in slideItems" :key="index" @click.native="clickHandler(item, index)">
        <a :href="item.url">
          <img class="banner-img" :src="item.image">
        </a>
      </cube-slide-item>
    </cube-slide>
    <!-- 滚动分类 -->
    <cube-slide ref="scroll" :data="scrollItems" :auto-play="false" @change="changePage">
      <cube-slide-item v-for="(i, index) in scrollItems" :key="index">
        <ul class="scroll-ul">
          <li class="scroll-li" v-for="(item, index1) in i" :key="index1">
            <a :href="item.url">
              <img :src="item.image" alt="" />
              <p>{{ item.label}}</p>
            </a>
          </li>
        </ul>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      slideItems: [],
      scrollItems: []
    }
  },
  methods: {
    changePage(current) {
      console.log('当前轮播图序号为:' + current)
    },
    clickHandler(item, index) {
      console.log(item, index)
    }
  },
  async created() {
    try {
      const slideItems = await this.$http.get('/api/banner')
      this.slideItems = slideItems.data
      const scrollItems = await this.$http.get('/api/scrolllist')
      this.scrollItems = scrollItems.data
    } catch(err) {
      console.log(err)
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner-img
  width: 100%
  height: 200px

.scroll-ul
  display: flex
  flex-wrap: wrap
  .scroll-li
    width: 20%
    text-align: center
    // justify-content: center
    img
      width: 55px
      height: 55px
      border-radius: 50%
      padding 5px 0
    p
      font-size 14px
      padding-bottom 10px
</style>