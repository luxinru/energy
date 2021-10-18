<template>
  <div class="screen-container">
    <header class="screen-header">
      <div>
        <img src="static/img/top.png" alt="" />
      </div>
      <span class="title">XXX能源管理—能耗分项</span>
      <div class="title-right">
        <span class="datetime">{{ now }}</span>
      </div>
    </header>

    <section class="search_bar">
      <LInput label="能耗种类" placeholder="请选择能耗种类" :width="340"></LInput>
      <LInput label="对象选择" placeholder="请选择对象选择" :width="340" style="margin-left: 16px;"></LInput>
      <LInput label="查询日期" placeholder="请选择查询日期" :width="340" style="margin-left: 16px;"></LInput>
      <LInput label="" placeholder="2021-10-08" :width="340" style="margin-left: 16px;"></LInput>
      <LInput label="" placeholder="2021-10-09" :width="340" style="margin-left: 16px;"></LInput>
      <LButton label="搜索" style="margin-left: 16px;"></LButton>
    </section>

    <section class="title_bar">
      <span class="name">电耗  1#楼</span>
      <span class="date">2021/10/08-2021/10/08</span>
    </section>

    <section class="container">
      <div class="box">
        <div class="chart">
          <div class="btns">按钮组</div>
          <div class="chart_box" ref="lineChart" ></div>
        </div>
        <div class="content">
          <span class="content_title">单位： kwh</span>
          <div class="content_box">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import * as echarts from 'echarts'
import moment from 'moment'
import LInput from '../components/LInput.vue'
import LButton from '../components/LButton.vue'

export default {
  name: 'Compared',
  components: {
    LInput,
    LButton
  },
  data () {
    return {
      timer: null,
      now: moment().format('YYYY-MM-DD hh:mm:ss'),

      chartInstance: null
    }
  },

  computed: {
  },

  mounted () {
    this.timer = setInterval(() => {
      this.now = moment().format('YYYY-MM-DD hh:mm:ss')
    }, 1 * 1000)

    // this.$nextTick(() => {
    //   this.chartInstance = this.$root.echarts.init(this.$refs.lineChart)

    //   const option = this.defaultOption
    //   this.chartInstance.setOption(option)
    // })
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
  background: url('../../public/static/img/bj.jpg') no-repeat;
  // background: url("../../public/static/img/first.png") no-repeat;
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

  .search_bar {
    width: 100%;
    height: 46px;
    display: flex;
    align-items: center;
  }

  .title_bar {
    width: max-content;
    height: 46px;
    background-image: url('../assets/img/组 1.png');
    background-size: 100% 100%;
    padding: 0 80px 10px 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-top: 16px;

    span {
      font-size: 15px;
      font-weight: 400;
      color: #B8F9FF;
    }

    .name {
      margin-left: 16px;

      &:first-child {
        margin-left: 0;
      }
    }

    .date {
      font-size: 15px;
      font-weight: 400;
      color: #72AEFF;
      margin-left: 16px;
    }
  }

  .container {
    flex: 1;
    display: flex;
    padding-bottom: 20px;
    box-sizing: border-box;
    overflow: hidden;

    .box {
      flex: 1;
      background: url('../assets/img/2 拷贝 4.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      margin-top: 20px;
      display: flex;
      align-items: center;
      padding: 20px 15px;
      box-sizing: border-box;
      overflow: hidden;

      .chart {
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;

        .btns {
          width: 100%;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .chart_box{
          width: 100%;
          flex: 1;
        }
      }

      .content {
        width: 449px;
        height: 100%;
        margin-left: 20px;
        display: flex;
        flex-direction: column;

        .content_title {
          width: 100%;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          font-size: 15px;
          font-weight: 400;
          color: #567DB6;
        }

        .content_box {
          flex: 1;
          background: rgba(93, 113, 212, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}
</style>
