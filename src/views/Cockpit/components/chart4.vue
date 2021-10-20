<template>
  <div class="chart4_root">
    <div ref="bar"></div>
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
      bar: null
    }
  },

  computed: {
    barOptions () {
      return {
        backgroundColor: '#031d33',
        animation: true,
        grid: {
          top: '5%',
          bottom: '15%',
          right: '5%'
        },
        xAxis: {
          data: ['2021', '2022', '2023', '2024', '2025'],
          axisLine: {
            show: false // 隐藏X轴轴线
          },
          axisTick: {
            show: false // 隐藏X轴轴线
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(77, 128, 254, 0.2)',
              width: 2
            }
          },
          axisLabel: {
            show: true,
            margin: 14,
            fontSize: 16,
            textStyle: {
              color: 'rgba(86, 124, 184, 1)' // X轴文字颜色
            }
          }
        },
        yAxis: [
          {
            type: 'value',
            gridIndex: 0,
            min: 0,
            max: 100,
            interval: 25,
            // splitNumber: 4,
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(77, 128, 254, 0.2)',
                width: 2
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgba(77, 128, 254, 0.2)'
              }
            },
            axisLabel: {
              show: true,
              margin: 14,
              fontSize: 16,
              textStyle: {
                color: 'rgba(86, 124, 184, 1)'
              }
            }
          }
        ],
        series: [
          {
            name: '设备在线率',
            type: 'bar',
            barWidth: 16,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgba(146, 225, 255, 1)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(0, 151, 251, 1)'
                  }
                ])
              }
            },
            data: [21, 43, 56, 32, 64],
            z: 10,
            zlevel: 0
          },
          {
            name: '背影',
            type: 'line',
            smooth: true, // 平滑曲线显示
            showAllSymbol: false, // 显示所有图形。
            symbolSize: 0,
            lineStyle: {
              width: 2,
              color: 'RGBA(255, 169, 44, 1)'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'RGBA(255, 169, 44, 0.5)'
                },
                {
                  offset: 1,
                  color: 'RGBA(255, 169, 44, 0)'
                }
              ])
            },
            data: [21, 43, 56, 32, 64],
            z: 5
          }
        ]
      }
    }
  },

  mounted () {
    this.bar = echarts.init(this.$refs.bar)
    this.bar.setOption(this.barOptions)

    // const that = this
    // window.onresize = () => {
    //   console.log('11111111111111111', that.bar)
    //   that.bar.resize()
    // }
  }
}
</script>
<style lang="less" scoped>
.chart4_root {
  width: 100%;
  display: flex;

  div {
    flex: 1;
  }
}
</style>
