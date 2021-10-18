<template>
  <div class="screen-container">
    <header class="screen-header">
      <div>
        <img src="static/img/top.png" alt="" />
      </div>
      <span class="title">XXX能源管理—驾驶舱</span>
      <div class="title-right">
        <span class="datetime">{{ now }}</span>
      </div>
    </header>

    <div class="container">
      <section class="box">
        <ContentBox :height="'450px'">
          <Chart1></Chart1>
        </ContentBox>
        <ContentBox style="margin-top: 30px;flex: 1;">
          <Chart2></Chart2>
        </ContentBox>
      </section>
      <section class="box"></section>

      <section class="btns"></section>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import ContentBox from './components/content-box.vue'
import Chart1 from './components/chart1.vue'
import Chart2 from './components/chart2.vue'

export default {
  name: 'Cockpit',
  components: {
    ContentBox,
    Chart1,
    Chart2
  },
  data () {
    return {
      timer: null,
      now: moment().format('YYYY-MM-DD hh:mm:ss')
    }
  },

  computed: {
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
  padding: 20px 20px;
  background: url('../../assets/img/背景.png') no-repeat;
  background-size: 100% 100%;
  color: #fff;
  box-sizing: border-box;
  overflow-y: scroll;
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

  .container {
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;

    .box {
      width: 414px;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      z-index: 1;
      overflow: hidden;
    }

    .btns {
      position: absolute;
      bottom: 30px;
      width: 100%;
      height: 46px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      z-index: 0;
    }
  }

}
</style>
