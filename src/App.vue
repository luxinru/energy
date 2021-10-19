<template>
  <div id="app">
    <div class="rightSide" @mouseenter="onMouseenter"></div>
    <el-drawer
      v-model="isShowDrawer"
      direction="ltr"
    >
      <span>Hi, there!</span>
    </el-drawer>
    <!-- 路由占位符 -->
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShowDrawer: false
    }
  },
  methods: {
    onMouseenter () {
      this.isShowDrawer = true
    }
  }
}
</script>

<style lang="less">
#app {
  position: relative;

  .rightSide {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 5px;
    opacity: 0;
  }

}
</style>
