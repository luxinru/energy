<template>
  <div class="chart3_root">
    <div ref="gauge1"></div>
    <div ref="gauge2"></div>
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
      gauge1: null,
      gauge2: null
    }
  },

  computed: {
    gauge1Options () {
      return {
        series: [{
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: 180,
          splitNumber: 12,
          center: ['50%', '70%'],
          itemStyle: {
            color: 'RGBA(36, 201, 218, 1)',
            shadowColor: 'RGBA(36, 201, 218, 1)',
            shadowBlur: 10,
            shadowOffsetX: 2,
            shadowOffsetY: 2
          },
          progress: {
            show: true,
            roundCap: true,
            width: 4
          },
          axisLine: {
            roundCap: true,
            lineStyle: {
              width: 4
            }
          },
          axisTick: {
            splitNumber: 2,
            lineStyle: {
              width: 1,
              color: 'RGBA(36, 201, 218, 1)'
            }
          },
          splitLine: {
            length: 2,
            lineStyle: {
              width: 1,
              color: 'RGBA(36, 201, 218, 1)'
            }
          },
          pointer: {
            show: false
          },
          axisLabel: {
            show: false
          },
          title: {
            show: false
          },
          detail: {
            offsetCenter: [0, 0],
            formatter: function (value) {
              return '{value|' + value.toFixed(0) + '}\n{unit|数据展示}'
            },
            rich: {
              value: {
                fontSize: 28,
                fontWeight: 'bolder',
                color: 'rgba(26, 252, 255, 1)'
              },
              unit: {
                fontSize: 14,
                color: 'rgba(86, 124, 184, 1)',
                marginTop: 23
              }
            }
          },
          data: [{
            value: 100
          }]
        }]
      }
    },

    gauge2Options () {
      return {
        series: [{
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: 180,
          splitNumber: 12,
          center: ['50%', '70%'],
          itemStyle: {
            color: 'rgba(107, 224, 195, 1)',
            shadowColor: 'rgba(107, 224, 195, 1)',
            shadowBlur: 10,
            shadowOffsetX: 2,
            shadowOffsetY: 2
          },
          progress: {
            show: true,
            roundCap: true,
            width: 4
          },
          axisLine: {
            roundCap: true,
            lineStyle: {
              width: 4
            }
          },
          axisTick: {
            splitNumber: 2,
            lineStyle: {
              width: 1,
              color: 'rgba(107, 224, 195, 1)'
            }
          },
          splitLine: {
            length: 2,
            lineStyle: {
              width: 1,
              color: 'rgba(107, 224, 195, 1)'
            }
          },
          pointer: {
            show: false
          },
          axisLabel: {
            show: false
          },
          title: {
            show: false
          },
          detail: {
            offsetCenter: [0, 0],
            formatter: function (value) {
              return '{value|' + value.toFixed(0) + '}\n{unit|数据展示}'
            },
            rich: {
              value: {
                fontSize: 28,
                fontWeight: 'bolder',
                color: 'rgba(26, 252, 255, 1)'
              },
              unit: {
                fontSize: 14,
                color: 'rgba(86, 124, 184, 1)',
                marginTop: 16
              }
            }
          },
          data: [{
            value: 100
          }]
        }]
      }
    }
  },

  mounted () {
    this.gauge1 = echarts.init(this.$refs.gauge1)
    this.gauge1.setOption(this.gauge1Options)

    this.gauge2 = echarts.init(this.$refs.gauge2)
    this.gauge2.setOption(this.gauge2Options)

    // window.onresize = () => {
    //   this.gauge1.resize()
    //   this.gauge2.resize()
    // }
  }
}
</script>
<style lang="less" scoped>
.chart3_root {
  width: 100%;
  display: flex;

  div {
    flex: 1;
  }
}
</style>
