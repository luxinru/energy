<template>
  <div class="com-container">
    <div class="com-chart" ref="dline" />
  </div>
</template>
<script>
import { graphic } from 'echarts'
var fontColor = '#30eee9'
var defaultOption = {
  grid: {
    left: '3%',
    right: '2%',
    top: '10%',
    bottom: '2%',
    containLabel: true
  },
  tooltip: {
    trigger: 'axis'
  },

  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      axisLabel: {
        color: fontColor
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#397cbc'
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: '#195384'
        }
      },
      data: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月'
      ]
    }
  ],
  yAxis: [
    {
      type: 'value',
      min: 0,
      max: 1000,
      axisLabel: {
        formatter: '{value}',
        textStyle: {
          color: '#2ad1d2'
        }
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#27b4c2'
        }
      },
      axisTick: {
        show: false,
        itemStyle: {
          color: '#27b4c2'
        }
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: '#10193B'
        }
      }
    }
  ],
  series: [
    {
      name: '已采纳',
      type: 'line',
      stack: '总量',
      symbol: 'circle',
      symbolSize: 5,
      itemStyle: {
        normal: {
          color: '#94C9EC',
          lineStyle: {
            color: '#4E73A9',
            width: 2
          },
          areaStyle: {
            // color: '#94C9EC'
            color: graphic.LinearGradient(0, 1, 0, 0, [
              {
                offset: 0,
                color: 'rgba(64,94,143,0.3)'
              },
              {
                offset: 1,
                color: 'rgba(19,29,64,0.9)'
              }
            ])
          }
        }
      },
      markPoint: {
        itemStyle: {
          normal: {
            color: 'red'
          }
        }
      },
      data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330]
    }
  ]
}

export default {
  data () {
    this.chartInstance1 = null
    return {}
  },
  props: {
    /**
     * 控制刷新
     */
    isRefresh: Number
  },
  watch: {
    isRefresh () {
      this.chartInstance1.clear()
      this.chartInstance1.setOption(defaultOption, true)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.chartInstance1 = this.$root.echarts.init(this.$refs.dline)
      this.getOption()
      window.addEventListener('resize', this.screenAdapter)
    })

    // 在页面加载完成的时候, 主动进行屏幕的适配
  },
  methods: {
    getOption () {
      const option = defaultOption
      // const { yAxis, series } = option
      // // 处理数据
      // yAxis.data = ['低', '中', '高']
      // series[0].data = seriesData
      // series[1].data = seriesData.map((item, index) => Object.assign(item, { label: { color: colorss[index] } }))
      this.chartInstance1.setOption(option, true)
    },

    screenAdapter () {
      this.chartInstance.resize()
    }
  }
}
</script>
