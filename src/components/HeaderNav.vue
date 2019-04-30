<template>
  <div class="container">
    <div class="nav">
      <router-link to="/LoginView">登录</router-link>
      <router-link to="/RegisterView">注册</router-link>
      <div></div>
    </div>
  <img src="@/assets/bg.jpg" alt="京东logo" />
  </div>
</template>

<script>
export default {
  name: 'HeaderNav'
}
</script>

<style lang="stylus" scoped>
.nav
  position: relative
  height: 30px
  // text-align: center
  // line-height: 30px
  display: flex
  justify-content: center
  align-items: center
  margin-top: 20px
  a
    font-size: 20px
    &:first-child
      margin-right: 8px
    &:last-child
      margin-left: 8px
    &.router-link-exact-active
      color: #42b983
  div
    width: 2px
    height: 100%
    background: #000
    position: absolute
    left: 50%
    top: 0
    margin-left: -1.5px

img
  display: block
  width: 312px
  height: 181.6px
  margin: 20px auto
</style>
