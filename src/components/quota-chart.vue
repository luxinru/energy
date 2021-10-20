<template>
  <div class="com-container">
    <div class="com-chart"  ref="QuotaChart" />
    <div class="content">
      <div class="item">
        <span class="value">1698</span>
        <span class="label">去年同期</span>
      </div>
      <div class="line"></div>
      <div class="item">
        <span class="value up">25%↑</span>
        <span class="label">同比</span>
      </div>
    </div>
  </div>
</template>
<script>
import 'echarts-liquidfill'

export default {
  name: 'QuotaChart',

  data () {
    return {
      chartInstance: null
    }
  },

  computed: {
    defaultOption () {
      return {
        series: [
          {
            type: 'liquidFill',
            radius: '47%',
            center: ['30%', '50%'],
            color: [
              {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 1,
                    color: '#6CDEFC'
                  },
                  {
                    offset: 0,
                    color: '#429BF7'
                  }
                ],
                globalCoord: false
              }
            ],
            data: [0.5],
            backgroundStyle: {
              borderWidth: 1,
              color: 'RGBA(51, 66, 127, 0.7)'
            },
            label: {
              normal: {
                // 相对的百分比
                position: ['50%', '30%'],
                formatter: (0.5 * 100).toFixed(1) + '%',
                textStyle: {
                  fontSize: 14,
                  color: 'rgba(0, 255, 255, 1)'
                }
              }
            },
            outline: {
              show: true,
              itemStyle: {
                borderWidth: 0
              },
              borderDistance: 0
            }
          },
          {
            type: 'pie',
            zlevel: 1,
            silent: true,
            center: ['30%', '50%'],
            radius: ['55%', '54%'],
            hoverAnimation: false,
            color: 'rgba(88,142,197,0.5)',
            label: {
              normal: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [1]
          },
          {
            type: 'pie',
            zlevel: 2,
            silent: true,
            center: ['30%', '50%'],
            radius: ['63%', '60%'],
            startAngle: 50,
            hoverAnimation: false,
            label: {
              normal: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this._pie2()
          },
          {
            type: 'pie',
            zlevel: 3,
            silent: true,
            center: ['30%', '50%'],
            radius: ['58%', '59%'],
            label: {
              normal: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this._pie2()
          }
        ]
      }
    }
  },

  mounted () {
    this.chartInstance = this.$root.echarts.init(this.$refs.QuotaChart)

    const option = this.defaultOption
    this.chartInstance.setOption(option)

    // window.onresize = () => {
    //   this.chartInstance.resize()
    // }
  },
  methods: {
    _pie2 () {
      const dataArr = []
      for (var i = 0; i < 8; i++) {
        if (i % 2 === 0) {
          dataArr.push({
            name: (i + 1).toString(),
            value: 25,
            itemStyle: {
              normal: {
                color: 'rgba(88,142,197,0.5)'
              }
            }
          })
        } else {
          dataArr.push({
            name: (i + 1).toString(),
            value: 20,
            itemStyle: {
              normal: {
                color: 'rgba(0,0,0,0)'
              }
            }
          })
        }
      }
      return dataArr
    }

  }
}
</script>

<style lang="less" scoped>
.com-container{
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    position: absolute;
    width: 295px;
    height: 70px;
    background: linear-gradient(to right, rgba(86, 124, 184, 0) ,  rgba(86, 124, 184, 0) 30%,rgba(86, 124, 184, 0.4));
    border-radius: 0px 35px 35px 0px;
    padding: 0 0 0 30%;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .value {
        font-size: 20px;
        font-weight: 400;
        color: #FFFFFF;
      }

      .up {
        font-size: 20px;
        font-weight: 400;
        color: #5FD5AA;
      }

      .down {
        font-size: 20px;
        font-weight: 400;
        color: #E03A3E;
      }

      .label {
        margin-top: 2px;
        height: 12px;
        font-size: 12px;
        font-weight: 400;
        color: #6392D3;
      }
    }

    .line {
      width: 2px;
      height: 40px;
      background: linear-gradient(rgba(98, 162, 205, 0), rgba(98, 162, 205, 1) 40%, rgba(98, 162, 205, 1) 60%, rgba(98, 162, 205, 0));
    }
  }
}
</style>
