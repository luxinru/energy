<template>
  <div class="com-container">
    <div class="com-chart"
         ref="Etwo" />
  </div>
</template>
<script>
import * as echarts from 'echarts'
const bgColor = '#0B1433'
const title = '本日耗能'
const color = ['#7891FF', '#1077EC', '#547EB3', '#4290F4', '#53DCBF']
const echartData = [
  {
    name: '动力用电',
    value: '3720'
  },
  {
    name: '空调用电',
    value: '2920'
  },
  {
    name: '照明与插座用电',
    value: '2200'
  },
  {
    name: '特殊用电',
    value: '1420'
  },
  {
    name: '其他用电',
    value: '1420'
  }
]

const formatNumber = function (num) {
  const reg = /(?=(\B)(\d{3})+$)/
  return num.toString().replace(reg, ',')
}
const total = echartData.reduce((a, b) => {
  return a + b.value * 1
}, 0)

const defaultOption = {
  backgroundColor: bgColor,
  color: color,
  tooltip: {
    trigger: 'item',
    z: 10
  },
  title: [
    {
      text: '{val|' + formatNumber(total) + '}\n{name|' + title + '}',
      top: '35%',
      left: 'center',
      textStyle: {
        rich: {
          val: {
            fontSize: 22,
            fontWeight: 'bold',
            color: '#fff',
            padding: [30, 0, 10, 4]
          },
          name: {
            fontSize: 14,
            fontWeight: 'normal',
            color: '#547bb3',
            padding: [6, 0, 10, 4]
          }

        }
      }
    }
  ],
  // legend: {
  //   orient: 'vertical',
  //   icon: 'rect',
  //   x: '80%',
  //   y: 'center',
  //   itemWidth: 12,
  //   itemHeight: 12,
  //   align: 'left',
  //   textStyle: {
  //     rich: {
  //       name: {
  //         fontSize: 12
  //       },
  //       value: {
  //         fontSize: 16,
  //         padding: [0, 5, 0, 15]
  //       },
  //       unit: {
  //         fontSize: 12
  //       }
  //     }
  //   },
  //   formatter: function (name) {
  //     let res = echartData.filter(v => v.name === name)
  //     res = res[0] || {}
  //     const unit = res.unit || ''
  //     return '{name|' + name + '}  {value|' + res.value + '}{unit|' + unit + '}'
  //   }
  //   // data: legendName
  // },
  series: [
    {
      type: 'pie',
      radius: ['65%', '82%'],
      center: ['52%', '52%'],
      data: echartData,
      hoverAnimation: true,
      z: 10,
      itemStyle: {
        normal: {
          borderColor: bgColor,
          borderWidth: 2
        }
      },

      labelLine: {
        normal: {
          length: 20,
          length2: 120,
          lineStyle: {
            color: '#e6e6e6'
          }
        }
      },
      label: {
        normal: {
          formatter: (params) => {
            return '{icon|●}{name|' + params.name + '}{value|' + formatNumber(params.value) + '}'
          },
          show: false,
          // padding: [0, -100, 25, -100],
          rich: {
            icon: {
              fontSize: 16
            },
            name: {
              fontSize: 14,
              padding: [0, 10, 0, 4],
              color: '#547bb3'
            },
            value: {
              fontSize: 18,
              fontWeight: 'bold',
              color: '#fff'
            }
          }
        }
      }
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
      // const { yAxis, series } = option
      // // 处理数据
      // yAxis.data = ['低', '中', '高']
      // series[0].data = seriesData
      // series[1].data = seriesData.map((item, index) => Object.assign(item, { label: { color: colorss[index] } }))
      this.chartInstance.setOption(option)
    },
    contains (arr, dst) {
      var i = arr.length
      while ((i -= 1)) {
        if (arr[i] === dst) {
          return i
        }
      }
      return false
    }
  }
}
</script>
