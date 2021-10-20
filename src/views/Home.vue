<template>
  <div class="screen-container">
    <header class="screen-header">
      <div>
        <img src="../assets/img/top.png" alt="" />
      </div>
      <span class="title">XXX能源管理—GIS地图</span>
      <div class="title-right">
        <span class="datetime">{{ now }}</span>
      </div>
    </header>

    <section class="search_bar">
      <LInput label="地区" placeholder="请输入地区"></LInput>
      <LInput label="地点" placeholder="请输入地点" style="margin-left: 16px;"></LInput>
      <LInput label="项目类型" placeholder="请输入项目类型" style="margin-left: 16px;"></LInput>
      <LInput label="工程名称" placeholder="请输入工程名称" style="margin-left: 16px;"></LInput>
      <LSelect label="报警状态" placeholder="请选择报警状态" style="margin-left: 16px;"></LSelect>
      <LButton label="搜索" style="margin-left: 16px;"></LButton>
      <LButton label="列表模式" style="margin-left: 6px;"></LButton>
    </section>

    <section class="container">
      <div class="map-allter">
        <div class="map-allter-t">
          <span>
            <img src="../assets/img/icon1.png" alt="" />
            风险预警
          </span>
          <span> 能耗消耗过高 </span>
        </div>
        <div class="map-allter-b">
          <span>
            <img src="../assets/img/dian.png" alt="" />
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import moment from 'moment'
import LInput from '../components/LInput.vue'
import LSelect from '../components/LSelect.vue'
import LButton from '../components/LButton.vue'

export default {
  components: {
    LInput,
    LSelect,
    LButton
  },
  data () {
    return {
      timer: null,
      now: moment().format('YYYY-MM-DD hh:mm:ss')
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.now = moment().format('YYYY-MM-DD hh:mm:ss')
    }, 1 * 1000)
  },
  beforeUnmount () {
    if (this.timer) {
      window.clearInterval(this.timer)
      this.timer = null
    }
  }
}
</script>
<style lang="less" scoped>
.screen-container {
  width: 100%;
  height: 100%;
  padding: 0 20px;
  background: url('../assets/img/bj.png') no-repeat;
  // background: url("../assets/img/first.png") no-repeat;
  background-size: 100% 100%;
  color: #fff;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .screen-header {
    width: 100%;
    height: 100px;
    font-size: 20px;
    position: relative;
    > div {
      height: inherit;
      display: flex;
      align-items: center;
      padding-bottom: 10px;
      box-sizing: border-box;
      img {
        width: 100%;
      }
    }
    .title {
      position: absolute;
      left: 50.6%;
      top: 44%;
      font-size: 33px;
      transform: translate(-50%, -50%);
    }
    .title-right {
      display: flex;
      align-items: center;
      position: absolute;
      right: 76px;
      top: 72%;
      transform: translateY(-80%);
    }
    .qiehuan {
      width: 28px;
      height: 21px;
      cursor: pointer;
    }
    .datetime {
      font-size: 17px;
      color: #00b9f6;
    }
    .logo {
      position: absolute;
      left: 0px;
      top: 50%;
      transform: translateY(-80%);
      img {
        height: 35px;
        width: 128px;
      }
    }
  }

  .search_bar {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
  }
  .container {
    flex: 1;

    .map-allter {
      position: absolute;
      width: 193px;
      height: 103px;
      top: 300px;
      left: 45%;
      .map-allter-t {
        width: 193px;
        height: 103px;
        background: url(../assets/img/tip_box.png) no-repeat;
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        span {
          height: 40px;
          line-height: 40px;
          display: flex;
          align-items: center;
          img {
            margin-right: 6px;
          }
        }
      }
      .map-allter-b {
        width: 193px;
        height: 103px;
        text-align: center;
        padding-top: 15px;
      }
    }
  }
}
</style>
