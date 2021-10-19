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
      <LInput
        label="能耗种类"
        placeholder="请选择能耗种类"
        :width="340"
      ></LInput>
      <LInput
        label="对象选择"
        placeholder="请选择对象选择"
        :width="340"
        style="margin-left: 16px"
      ></LInput>
      <LInput
        label="查询日期"
        placeholder="请选择查询日期"
        :width="340"
        style="margin-left: 16px"
      ></LInput>
      <LInput
        label=""
        placeholder="2021-10-08"
        :width="340"
        style="margin-left: 16px"
      ></LInput>
      <LInput
        label=""
        placeholder="2021-10-09"
        :width="340"
        style="margin-left: 16px"
      ></LInput>
      <LButton label="搜索" style="margin-left: 16px"></LButton>
    </section>

    <section class="title_bar">
      <span class="name">电耗 1#楼</span>
      <span class="date">2021/10/08-2021/10/08</span>
    </section>

    <section class="container">
      <div class="box">
        <div class="chart">
          <div class="btns">
            <img src="../assets/img/矢量智能对象.png" alt="">
            <img src="../assets/img/矢量智能对象3.png" alt="">
            <img src="../assets/img/矢量智能对象4.png" alt="">
          </div>
          <div class="chart_box" ref="lineChart"></div>
        </div>
        <div class="content">
          <span class="content_title">本级电耗:<span>1832.93</span> kwh</span>
          <div class="content_box">
            <el-scrollbar>
              <table>
                <tr>
                  <th>分项名称</th>
                  <th>总量</th>
                  <th>占比（%）</th>
                </tr>
                <tr v-for="(item, index) in tableData1" :key="index">
                  <td>{{ item.project }}</td>
                  <td>{{ item.number }}</td>
                  <td>{{ item.unit }}</td>
                </tr>
              </table>
            </el-scrollbar>
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
      tableData1: [
        {
          project: '总占地面积',
          number: '54512.00',
          unit: '平米'
        },
        {
          project: '总占地面积',
          number: '54512.00',
          unit: '平米'
        },
        {
          project: '总占地面积',
          number: '54512.00',
          unit: '平米'
        },
        {
          project: '总占地面积',
          number: '54512.00',
          unit: '平米'
        },
        {
          project: '总占地面积',
          number: '54512.00',
          unit: '平米'
        },
        {
          project: '总占地面积',
          number: '54512.00',
          unit: '平米'
        },
        {
          project: '总占地面积',
          number: '54512.00',
          unit: '平米'
        },
        {
          project: '总占地面积',
          number: '54512.00',
          unit: '平米'
        },
        {
          project: '总占地面积',
          number: '54512.00',
          unit: '平米'
        },
        {
          project: '总占地面积',
          number: '54512.00',
          unit: '平米'
        },
        {
          project: '总占地面积',
          number: '54512.00',
          unit: '平米'
        },
        {
          project: '总占地面积',
          number: '54512.00',
          unit: '平米'
        },
        {
          project: '总占地面积',
          number: '54512.00',
          unit: '平米'
        },
        {
          project: '总占地面积',
          number: '54512.00',
          unit: '平米'
        },
        {
          project: '总占地面积',
          number: '54512.00',
          unit: '平米'
        },
        {
          project: '总占地面积',
          number: '54512.00',
          unit: '平米'
        },
        {
          project: '总占地面积',
          number: '54512.00',
          unit: '平米'
        },
        {
          project: '总占地面积',
          number: '54512.00',
          unit: '平米'
        },
        {
          project: '总占地面积',
          number: '54512.00',
          unit: '平米'
        },
        {
          project: '总占地面积',
          number: '54512.00',
          unit: '平米'
        },
        {
          project: '总占地面积',
          number: '54512.00',
          unit: '平米'
        }
      ],

      color: [
        'rgba(22, 172, 142, 1)',
        'rgba(0, 251, 183, 1)',
        'rgba(248, 136, 42, 1)',
        'rgba(20, 218, 255, 1)',
        'rgba(6, 232, 219, 1)',
        'rgba(22, 172, 142, 1)',
        'rgba(0, 251, 183, 1)',
        'rgba(248, 136, 42, 1)',
        'rgba(20, 218, 255, 1)',
        'rgba(6, 232, 219, 1)'
      ].reverse(),
      angle: 0,

      chartInstance: null
    }
  },

  computed: {
    defaultOption () {
      return {
        title: {
          text: '{a|' + 15870 + '} \n {c|总电耗（kwh）}',
          x: 'center',
          y: 'center',
          textStyle: {
            rich: {
              a: {
                fontSize: 46,
                color: '#FFFFFF'
              },

              c: {
                fontSize: 24,
                color: '#6392D3',
                // padding: [5,0],
                marginTop: 24
              }
            }
          }
        },

        legend: {
          bottom: 10,
          left: 'center',
          orient: 'vertical',
          textStyle: {
            color: '#6392D3'
          }
          // data: [{
          //   name: 'pie',
          //   data: [0, 1, 2, 3, 4]
          // }]
        },

        animation: false,

        series: [
          // 紫色
          {
            name: 'ring5',
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: (params, api) => {
              return {
                type: 'arc',
                shape: {
                  cx: api.getWidth() / 2,
                  cy: api.getHeight() / 2,
                  r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6,
                  startAngle: ((0 + this.angle) * Math.PI) / 180,
                  endAngle: ((90 + this.angle) * Math.PI) / 180
                },
                style: {
                  stroke: '#8383FA',
                  fill: 'transparent',
                  lineWidth: 1.5
                },
                silent: true
              }
            },
            data: [0]
          },
          {
            name: 'ring5', // 紫点
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: (params, api) => {
              const x0 = api.getWidth() / 2
              const y0 = api.getHeight() / 2
              const r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6
              const point = this.getCirlPoint(x0, y0, r, 90 + this.angle)
              return {
                type: 'circle',
                shape: {
                  cx: point.x,
                  cy: point.y,
                  r: 4
                },
                style: {
                  stroke: '#8450F9', // 绿
                  fill: '#8450F9'
                },
                silent: true
              }
            },
            data: [0]
          },
          // 蓝色

          {
            name: 'ring5',
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: (params, api) => {
              return {
                type: 'arc',
                shape: {
                  cx: api.getWidth() / 2,
                  cy: api.getHeight() / 2,
                  r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6,
                  startAngle: ((180 + this.angle) * Math.PI) / 180,
                  endAngle: ((270 + this.angle) * Math.PI) / 180
                },
                style: {
                  stroke: '#4386FA',
                  fill: 'transparent',
                  lineWidth: 1.5
                },
                silent: true
              }
            },
            data: [0]
          },
          {
            name: 'ring5', // 蓝色
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: (params, api) => {
              const x0 = api.getWidth() / 2
              const y0 = api.getHeight() / 2
              const r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6
              const point = this.getCirlPoint(x0, y0, r, 180 + this.angle)
              return {
                type: 'circle',
                shape: {
                  cx: point.x,
                  cy: point.y,
                  r: 4
                },
                style: {
                  stroke: '#4386FA', // 绿
                  fill: '#4386FA'
                },
                silent: true
              }
            },
            data: [0]
          },

          {
            name: 'ring5',
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: (params, api) => {
              return {
                type: 'arc',
                shape: {
                  cx: api.getWidth() / 2,
                  cy: api.getHeight() / 2,
                  r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
                  startAngle: ((270 + -this.angle) * Math.PI) / 180,
                  endAngle: ((40 + -this.angle) * Math.PI) / 180
                },
                style: {
                  stroke: '#0CD3DB',
                  fill: 'transparent',
                  lineWidth: 1.5
                },
                silent: true
              }
            },
            data: [0]
          },
          // 橘色

          {
            name: 'ring5',
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: (params, api) => {
              return {
                type: 'arc',
                shape: {
                  cx: api.getWidth() / 2,
                  cy: api.getHeight() / 2,
                  r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
                  startAngle: ((90 + -this.angle) * Math.PI) / 180,
                  endAngle: ((220 + -this.angle) * Math.PI) / 180
                },
                style: {
                  stroke: '#FF8E89',
                  fill: 'transparent',
                  lineWidth: 1.5
                },
                silent: true
              }
            },
            data: [0]
          },
          {
            name: 'ring5',
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: (params, api) => {
              const x0 = api.getWidth() / 2
              const y0 = api.getHeight() / 2
              const r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65
              const point = this.getCirlPoint(x0, y0, r, 90 + -this.angle)
              return {
                type: 'circle',
                shape: {
                  cx: point.x,
                  cy: point.y,
                  r: 4
                },
                style: {
                  stroke: '#FF8E89', // 粉
                  fill: '#FF8E89'
                },
                silent: true
              }
            },
            data: [0]
          },
          {
            name: 'ring5', // 绿点
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: (params, api) => {
              const x0 = api.getWidth() / 2
              const y0 = api.getHeight() / 2
              const r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65
              const point = this.getCirlPoint(x0, y0, r, 270 + -this.angle)
              return {
                type: 'circle',
                shape: {
                  cx: point.x,
                  cy: point.y,
                  r: 4
                },
                style: {
                  stroke: '#0CD3DB', // 绿
                  fill: '#0CD3DB'
                },
                silent: true
              }
            },
            data: [0]
          },
          {
            name: 'pie',
            type: 'pie',
            clockWise: false,
            // radius: [40, 32],
            radius: ['40%', '35%'],
            hoverAnimation: false,
            itemStyle: {
              normal: {
                borderColor: '#0A1934',
                borderWidth: 5,
                color: (params) => {
                  return this.color[params.dataIndex]
                }
              }
            },
            labelLine: {
              show: false
            },
            data: this.realData
          },
          {
            type: 'pie',
            zlevel: 3,
            hoverAnimation: false,
            radius: ['45%', '50%'],
            clockWise: false,
            labelLine: {
              show: false
            },
            label: {
              show: false
            },
            data: this.datas
          }
        ]
      }
    },

    datas () {
      const result = []
      for (let index = 0; index < 5; index++) {
        result.push(
          {
            data: 10,
            value: 15,
            name: index,
            itemStyle: {
              normal: {
                color: this.color[index]
                // borderWidth: 10,
                // borderColor: colorBorder[i]
              }
            }
          },
          {
            value: 2,
            name: '',
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                },
                color: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 0
              }
            }
          }
        )
      }
      return result
    },

    realData () {
      const result = []
      for (let index = 0; index < 5; index++) {
        result.push(
          {
            name: index,
            data: 10,
            value: 1,
            name: '10',
            itemStyle: {
              normal: {
                color: this.color[index]
              }
            }
          },
          {
            value: 45,
            name: '',
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                },
                color: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 0
              }
            }
          }
        )
      }
      return result
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

      let timerId

      if (timerId) {
        clearInterval(timerId)
      }
      timerId = setInterval(() => {
        this.draw()
      }, 100)
    })
  },
  methods: {
    getCirlPoint (x0, y0, r, angle) {
      const x1 = x0 + r * Math.cos((angle * Math.PI) / 180)
      const y1 = y0 + r * Math.sin((angle * Math.PI) / 180)
      return {
        x: x1,
        y: y1
      }
    },

    draw () {
      this.angle = this.angle + 3
      this.chartInstance.setOption(this.defaultOption, true)
      // window.requestAnimationFrame(draw);
    }
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
  background: url("../../public/static/img/bj.jpg") no-repeat;
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
    background-image: url("../assets/img/组 1.png");
    background-size: 100% 100%;
    padding: 0 80px 13px 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-top: 16px;

    span {
      font-size: 15px;
      font-weight: 400;
      color: #b8f9ff;
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
      color: #72aeff;
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
      background: url("../assets/img/2 拷贝 4.png");
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

          img {
            width: 17px;
            height: 17px;
            margin-left: 24px;
            cursor: pointer;
          }
        }

        .chart_box {
          width: 100%;
          flex: 1;
        }
      }

      .content {
        width: 795px;
        height: 100%;
        margin-left: 20px;
        display: flex;
        flex-direction: column;

        .content_title {
          width: 100%;
          height: 60px;
          flex-shrink: 0;
          display: flex;
          align-items: baseline;
          font-size: 15px;
          font-weight: 400;
          color: #567db6;

          span {
            margin: 0 4px;
            font-size: 32px;
            font-weight: bold;
            color: #ffffff;
          }
        }

        .content_box {
          flex: 1;
          background: rgba(93, 113, 212, 0.05);
          overflow: hidden;

          table {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;

            tr {
              min-height: 50px;
              height: 50px;
              display: flex;
              align-items: center;

              &:nth-child(even) {
                background: rgba(93, 113, 212, 0.05);
              }

              &:nth-child(odd) {
                background: rgba(93, 113, 212, 0.1);
              }

              th {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 15px;
                font-weight: 400;
                color: #6392d3;
              }

              td {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 15px;
                font-weight: 400;
                color: #ffffff;
              }
            }
          }
        }
      }
    }
  }
}
</style>
