<template>
    <div class="com-container">
    <div class="com-chart"  ref="Etwo" />
  </div>
</template>
<script>
import * as echarts from 'echarts'

const defaultOption = {
  series: [
    {
      type: 'gauge',
      z: 100,
      axisLine: {
        lineStyle: {
          width: 10,
          color: [
            [
              0.3, new echarts.graphic.LinearGradient(
                0, 1, 1, 0, [{
                  offset: 0,
                  color: 'rgba(0, 237, 3,0.1)'
                }, {
                  offset: 0.5,
                  color: 'rgba(0, 237, 3,0.6)'
                },
                {
                  offset: 1,
                  color: 'rgba(0, 237, 3,1)'
                }
                ]
              )
            ],
            [
              0.7, new echarts.graphic.LinearGradient(
                0, 1, 1, 0, [{
                  offset: 0,
                  color: 'rgba(255, 184, 0,0.1)'
                }, {
                  offset: 0.5,
                  color: 'rgba(255, 184, 0,0.6)'
                },
                {
                  offset: 1,
                  color: 'rgba(255, 184, 0,1)'
                }
                ]
              )
            ],
            [
              1, new echarts.graphic.LinearGradient(
                0, 1, 1, 0, [{
                  offset: 0,
                  color: 'rgba(175, 36, 74,0.1)'
                }, {
                  offset: 0.5,
                  color: 'rgba(255, 36, 74,0.6)'
                },
                {
                  offset: 1,
                  color: 'rgba(255, 36, 74,1)'
                }
                ]
              )
            ]
          ]
          // color: [
          //     [0.3, '#00ed03'],
          //     [0.7, '#ffb800'],
          //     [1, '#af00a9']
          // ]
          /* color: [
                    [1, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0.3,
                            color: "#00ed03"
                        },
                        {
                            offset: 0.7,
                            color: "#ffb800"
                        },
                        {
                            offset: 1,
                            color: "#af00a9"
                        }
                    ])]
                ] */
        }
      },
      // radius: '50%',
      pointer: {
        itemStyle: {
          color: 'auto'
        }
      },
      axisTick: {
        distance: 0,
        length: 8,
        lineStyle: {
          color: 'auto',
          width: 2
        }
      },
      splitLine: {
        distance: 0,
        length: 20,
        lineStyle: {
          color: 'auto',
          width: 4
        }
      },
      axisLabel: {
        color: 'white',
        distance: 30,
        fontSize: 15
      },
      detail: {
        valueAnimation: true,
        formatter: '{value} %',
        color: 'white'
      },
      data: [{
        value: 70
      }]
    }, {
      type: 'gauge',
      z: 100,
      axisLine: {
        lineStyle: {
          width: 10,
          color: [
            [
              0.3, new echarts.graphic.LinearGradient(
                0, 1, 1, 0, [{
                  offset: 0,
                  color: 'rgba(0, 237, 3,0.1)'
                }, {
                  offset: 0.5,
                  color: 'rgba(0, 237, 3,0.6)'
                },
                {
                  offset: 1,
                  color: 'rgba(0, 237, 3,1)'
                }
                ]
              )
            ],
            [
              0.7, new echarts.graphic.LinearGradient(
                0, 1, 1, 0, [{
                  offset: 0,
                  color: 'rgba(255, 184, 0,0.1)'
                }, {
                  offset: 0.5,
                  color: 'rgba(255, 184, 0,0.6)'
                },
                {
                  offset: 1,
                  color: 'rgba(255, 184, 0,1)'
                }
                ]
              )
            ],
            [
              1, new echarts.graphic.LinearGradient(
                0, 1, 1, 0, [{
                  offset: 0,
                  color: 'rgba(175, 36, 74,0.1)'
                }, {
                  offset: 0.5,
                  color: 'rgba(255, 36, 74,0.6)'
                },
                {
                  offset: 1,
                  color: 'rgba(255, 36, 74,1)'
                }
                ]
              )
            ]
          ]
          // color: [
          //     [0.3, '#00ed03'],
          //     [0.7, '#ffb800'],
          //     [1, '#af00a9']
          // ]
          /* color: [
                    [1, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0.3,
                            color: "#00ed03"
                        },
                        {
                            offset: 0.7,
                            color: "#ffb800"
                        },
                        {
                            offset: 1,
                            color: "#af00a9"
                        }
                    ])]
                ] */
        }
      },
      // radius: '50%',
      pointer: {
        itemStyle: {
          color: 'auto'
        }
      },
      axisTick: {
        distance: 0,
        length: 8,
        lineStyle: {
          color: 'auto',
          width: 2
        }
      },
      splitLine: {
        distance: 0,
        length: 20,
        lineStyle: {
          color: 'auto',
          width: 4
        }
      },
      axisLabel: {
        color: 'white',
        distance: 30,
        fontSize: 15
      },
      detail: {
        valueAnimation: true,
        formatter: '{value} %',
        color: 'white'
      },
      data: [{
        value: 70
      }]
    }
  ]
}

export default {
  data () {
    return {
      chartInstance: null
    }
  },
  mounted () {
    this.chartInstance = echarts.init(this.$refs.Etwo)
    // window.addEventListener('resize', this.screenAdapter)

    this.getOption()
    // 在页面加载完成的时候, 主动进行屏幕的适配
  },
  methods: {
    getOption () {
      const option = defaultOption
      // setInterval(function () {
      //   option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0
      //   this.chartInstance.setOption(option, true)
      // }, 2000)
      // const { yAxis, series } = option
      // // 处理数据
      // yAxis.data = ['低', '中', '高']
      // series[0].data = seriesData
      // series[1].data = seriesData.map((item, index) => Object.assign(item, { label: { color: colorss[index] } }))
      this.chartInstance.setOption(option)
    }

  }
}
</script>
