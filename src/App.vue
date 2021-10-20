<template>
  <div id="app">
    <div class="rightSide" @mouseenter="onMouseenter"></div>
    <el-drawer
      v-model="isShowDrawer"
      direction="ltr"
      custom-class="drawer"
      size="10%"
    >
      <el-menu
        active-text-color="#ffd04b"
        background-color="rgba(19, 27, 60, 0.95)"
        default-active="2"
        text-color="#fff"

        style="border-right: none;"
      >
        <el-sub-menu index="1">
          <template #title>
            <i class="el-icon-location"></i>
            <span>所有页面</span>
          </template>
          <el-menu-item index="1-1" @click="onItemClick(1)">页面一</el-menu-item>
          <el-menu-item index="1-2" @click="onItemClick(2)">页面二</el-menu-item>
          <el-menu-item index="1-3" @click="onItemClick(3)">页面三</el-menu-item>
          <el-menu-item index="1-4" @click="onItemClick(4)">页面四</el-menu-item>
          <el-menu-item index="1-5" @click="onItemClick(5)">页面五</el-menu-item>
          <el-menu-item index="1-6" @click="onItemClick(6)">页面六</el-menu-item>
          <el-menu-item index="1-7" @click="onItemClick(7)">页面七</el-menu-item>
        </el-sub-menu>
      </el-menu>
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
    },

    onItemClick (index) {
      switch (index) {
        case 1:
          this.$router.push('/home')
          break
        case 2:
          this.$router.push('/sub-option')
          break
        case 3:
          this.$router.push('/screen')
          break
        case 4:
          this.$router.push('/inquire')
          break
        case 5:
          this.$router.push('/compared')
          break
        case 6:
          this.$router.push('/sub-option2')
          break
        case 7:
          this.$router.push('/cockpit')
          break
      }
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
  .drawer {
    background: rgba(19, 27, 60, 0.95);
  }

}
</style>
