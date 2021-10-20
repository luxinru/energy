<template>
  <div class="screen-container">
    <header class="screen-header">
      <div>
        <img src="../assets/img/top.png" alt="" />
      </div>
      <span class="title">XXX能源管理—能耗查询</span>
      <div class="title-right">
        <span class="datetime">{{ now }}</span>
      </div>
    </header>

    <section class="search_bar">
      <LSelect label="能耗种类" placeholder="请选择能耗种类"></LSelect>
      <LSelect label="能耗种类" placeholder="请选择能耗种类" style="margin-left: 16px;"></LSelect>
      <LSelect label="对象选择" placeholder="请选择对象选择" style="margin-left: 16px;"></LSelect>
      <LDateTimeSelect label="查询日期" style="margin-left: 16px;"></LDateTimeSelect>
      <LButton label="搜索" style="margin-left: 16px;"></LButton>
    </section>

    <section class="title_bar">
      <span class="name">电耗  1#楼</span>
      <span class="date">2021-10-08-2021-10-08</span>
    </section>

    <section class="container">
      <div class="box">
        <div class="chart">
          <div class="btns">
            <img src="../assets/img/矢量智能对象.png" alt="">
            <img src="../assets/img/矢量智能对象1.png" alt="">
            <img src="../assets/img/矢量智能对象2.png" alt="">
            <img src="../assets/img/矢量智能对象3.png" alt="">
            <img src="../assets/img/矢量智能对象4.png" alt="">
          </div>
          <div class="chart_box" ref="lineChart" ></div>
        </div>

        <div class="content">
          <span class="content_title">单位： kwh</span>
          <div class="content_box">
            <img src="../assets/img/组10492.png" alt="">
            <div class="content_label">
              <span>累计耗能</span>
              <span class="value">1598</span>
              <span>kwh</span>
            </div>
            <div class="quota">
              <QuotaChart></QuotaChart>
              <QuotaChart2></QuotaChart2>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import moment from 'moment'
// import LInput from '../components/LInput.vue'
import LSelect from '../components/LSelect.vue'
import LDateTimeSelect from '../components/LDateTimeSelect.vue'
import LButton from '../components/LButton.vue'

import QuotaChart from '../components/quota-chart.vue'
import QuotaChart2 from '../components/quota-chart2.vue'

export default {
  components: {
    // LInput,
    LSelect,
    LDateTimeSelect,
    LButton,
    QuotaChart,
    QuotaChart2
  },
  data () {
    return {
      timer: null,
      now: moment().format('YYYY-MM-DD hh:mm:ss'),

      chartInstance: null
    }
  },

  computed: {
    defaultOption () {
      return {
        grid: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 20,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(255,255,255,0)' // 0% 处的颜色
                  },
                  {
                    offset: 0.5,
                    color: 'rgba(255,255,255,1)' // 100% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(255,255,255,0)' // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            }
          }
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              formatter: '{value}',
              fontSize: 14,
              margin: 20,
              textStyle: {
                color: '#7ec7ff'
              }
            },
            axisLine: {
              lineStyle: {
                color: '#243753'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#243753'
              }
            },
            axisTick: {
              show: false
            },
            data: [233, 233, 200, 180, 199, 233, 210, 180]
          }
        ],
        yAxis: [
          {
            boundaryGap: false,
            type: 'value',
            axisLabel: {
              textStyle: {
                color: '#7ec7ff'
              }
            },
            nameTextStyle: {
              color: '#fff',
              fontSize: 12,
              lineHeight: 40
            },
            splitLine: {
              lineStyle: {
                color: '#243753'
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#283352'
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: '报名',
            type: 'line',
            smooth: true,
            showSymbol: true,
            symbolSize: 8,
            zlevel: 3,
            itemStyle: {
              color: '#19a3df',
              borderColor: '#a3c8d8'
            },
            lineStyle: {
              normal: {
                width: 2,
                color: '#19a3df'
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(88,255,255,0.2)'
                    },
                    {
                      offset: 0.8,
                      color: 'rgba(88,255,255,0)'
                    }
                  ],
                  false
                )
              }
            },
            data: [233, 233, 200, 180, 199, 233, 210, 180]
          }
        ]
      }
    }
  },

  mounted () {
    this.timer = setInterval(() => {
      this.now = moment().format('YYYY-MM-DD hh:mm:ss')
    }, 1 * 1000)

    this.$nextTick(() => {
      this.chartInstance = this.$root.echarts.init(this.$refs.lineChart)

      const option = this.defaultOption
      this.chartInstance.setOption(option)
    })
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
  background: url('../assets/img/bj.jpg') no-repeat;
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

  .title_bar {
    width: 700px;
    height: 40px;
    background-image: url('../assets/img/微信图片_20211020105416.png');
    background-size: 100% 100%;
    padding: 0 80px 13px 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-top: 16px;

    span {
      font-size: 15px;
      font-weight: 400;
      color: #B8F9FF;

      &:last-child {
        font-size: 15px;
        font-weight: 400;
        color: #72AEFF;
        margin-left: 16px;
      }
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

          img {
            width: 17px;
            height: 17px;
            margin-left: 24px;
            cursor: pointer;
          }
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
          flex-direction: column;
          align-items: center;

          img {
            width: 141px;
            height: 258px;
            margin-top: 100px;
          }

          .content_label {
            margin-top: 16px;
            font-size: 18px;
            font-weight: 400;
            color: #6392D3;

            .value {
              margin: 0 8px;
              font-size: 32px;
              font-weight: bold;
              color: #FFFFFF;
            }
          }

          .quota {
            width: 100%;
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
}
</style>
