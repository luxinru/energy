<template>
  <div class="chart1_root">
    <section>
      <div class="item" ref="pie"></div>
      <div class="item">
        <div class="content">
          <span class="label">监控设备总数</span>
          <span class="value">86</span>
        </div>
        <div class="content">
          <span class="online"></span>
          <span class="label">在线设备</span>
          <span class="value">86</span>
        </div>
        <div class="content">
          <span class="offline"></span>
          <span class="label">离线设备</span>
          <span class="value">86</span>
        </div>
      </div>
    </section>
    <section>
      <div class="bar" ref="bar"></div>
    </section>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  components: {
  },

  props: {
  },

  data () {
    return {
      pie: null,
      bar: null
    }
  },

  computed: {
    pieOptions () {
      return {
        title: {
          text: '{a|' + 70 + '} \n {c|在线率}',
          left: '50%',
          top: '30%',
          textAlign: 'center',
          textStyle: {
            rich: {
              a: {
                fontSize: 36,
                color: '#FFFFFF'
              },
              c: {
                fontSize: 14,
                color: '#6392D3',
                marginTop: 12
              }
            }
          }
        },
        series: [
          {
            type: 'pie', // 饼图
            clockWise: false,
            radius: [
              60,
              65
            ],
            hoverAnimation: false,
            itemStyle: {
              borderRadius: 5,
              normal: {
                label: {
                  position: 'outside',
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            tooltip: {
              show: true
            },
            data: [
              {
                value: 70,
                name: '在线率',
                itemStyle: {
                  normal: {
                    borderWidth: 5,
                    borderRadius: 20,
                    shadowBlur: 20,
                    borderColor: 'rgba(54, 157, 253, 1)',
                    shadowColor: 'rgba(54, 157, 253, 1)'
                  }
                }
              },
              {
                value: 30,
                name: '离线率',
                itemStyle: {
                  normal: {
                    borderWidth: 5,
                    borderRadius: 20,
                    shadowBlur: 20,
                    borderColor: '#FE2D19',
                    shadowColor: '#FE2D19'
                  }
                }
              }
            ]
          }
        ]
      }
    },

    barOptions () {
      return {
        color: [
          '#63caff',
          '#49beff',
          '#03387a',
          '#03387a',
          '#03387a',
          '#6c93ee',
          '#a9abff',
          '#f7a23f',
          '#27bae7',
          '#ff6d9d',
          '#cb79ff',
          '#f95b5a',
          '#ccaf27',
          '#38b99c',
          '#93d0ff',
          '#bd74e0',
          '#fd77da',
          '#dea700'
        ],
        grid: {
          containLabel: true,
          left: 0,
          right: 0,
          bottom: 0,
          top: 30
        },
        xAxis: {
          nameTextStyle: {
            color: '#c0c3cd',
            fontSize: 12
          },
          axisLabel: {
            color: '#c0c3cd',
            fontSize: 12
          },
          axisTick: {
            lineStyle: {
              color: '#384267',
              width: 1
            },
            show: true
          },
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#384267',
              width: 1,
              type: 'dashed'
            },
            show: true
          },
          data: [
            'A栋',
            'B栋',
            'C栋',
            'D栋',
            'E栋'
          ],
          type: 'category'
        },
        yAxis: {
          nameTextStyle: {
            color: '#c0c3cd',
            fontSize: 12
          },
          axisLabel: {
            color: '#c0c3cd',
            fontSize: 12
          },
          axisTick: {
            lineStyle: {
              color: '#384267',
              width: 1
            },
            show: true
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#384267',
              type: 'dashed'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#384267',
              width: 1,
              type: 'dashed'
            },
            show: true
          },
          name: ''
        },
        series: [
          {
            data: [
              20,
              30,
              40,
              50,
              60
            ],
            type: 'bar',
            barMaxWidth: 'auto',
            barWidth: 20,
            itemStyle: {
              color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                type: 'linear',
                global: false,
                colorStops: [
                  {
                    offset: 0,
                    color: '#0b9eff'
                  },
                  {
                    offset: 1,
                    color: '#63caff'
                  }
                ]
              }
            },
            label: {
              show: true,
              position: 'top',
              distance: 10,
              color: '#fff'
            }
          },
          {
            data: [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1
            ],
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbol: 'diamond',
            symbolOffset: [
              0,
              '50%'
            ],
            symbolSize: [
              30,
              15
            ]
          },
          {
            data: [
              20,
              30,
              40,
              50,
              60
            ],
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [
              0,
              '-50%'
            ],
            symbolSize: [
              30,
              12
            ],
            zlevel: 2
          },
          {
            data: [
              80,
              80,
              80,
              80,
              80
            ],
            type: 'bar',
            barMaxWidth: 'auto',
            barWidth: 20,
            barGap: '-100%',
            label: {
              show: true,
              position: 'top',
              distance: 10,
              color: '#fff'
            },
            zlevel: -1
          },
          {
            data: [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1
            ],
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbol: 'diamond',
            symbolOffset: [
              0,
              '50%'
            ],
            symbolSize: [
              30,
              15
            ],
            zlevel: -2
          },
          {
            data: [
              80,
              80,
              80,
              80,
              80
            ],
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [
              0,
              '-50%'
            ],
            symbolSize: [
              30,
              12
            ],
            zlevel: -1
          }
        ],
        tooltip: {
          trigger: 'axis',
          show: false
        }
      }
    }
  },

  mounted () {
    this.pie = echarts.init(this.$refs.pie)
    this.pie.setOption(this.pieOptions)

    this.bar = echarts.init(this.$refs.bar)
    this.bar.setOption(this.barOptions)

    window.onresize = () => {
      this.pie.resize()
      this.bar.resize()
    }
  }
}
</script>
<style lang="less" scoped>
.chart1_root {
  width: 100%;
  display: flex;
  flex-direction: column;

  section {
    flex: 1;
    display: flex;

    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .content {
        margin-top: 16px;
        display: flex;
        align-items: center;

        .label {
          font-size: 16px;
          font-weight: 400;
          color: #FFFFFF;
          margin-right: 24px;
        }

        .value {
          font-size: 22px;
          font-weight: 400;
          color: #FFFFFF;
        }

        .online {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(54, 157, 253, 1);
          overflow: hidden;
          margin-right: 8px;
        }

        .offline {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255, 64, 64, 1);
          overflow: hidden;
          margin-right: 8px;
        }

        &:first-child {
          margin-top: 0;
        }
      }
    }

    .bar {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
