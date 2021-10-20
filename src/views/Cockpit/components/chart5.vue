<template>
  <div class="chart5_root">
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
        radar: {
          radius: '80%', // 大小
          nameGap: 1, // 图中工艺等字距离图的距离
          center: ['50%', '50%'], // 图的位置
          name: {
            textStyle: {
              color: 'rgba(101, 213, 255, 1)',
              fontSize: 16
            },
            formatter: function (name) {
              return name
            }
          },
          indicator: [
            { name: '数据展示', max: '100' },
            { name: '数据展示', max: '100' },
            { name: '数据展示', max: '100' },
            { name: '数据展示', max: '100' },
            { name: '数据展示', max: '100' }

          ],
          axisLine: {
            lineStyle: {

              color: 'rgba(153, 209, 246, 0.2)'
            }
          },
          splitArea: {
            show: false,
            areaStyle: {
              color: 'rgba(255,0,0,0)' // 图表背景的颜色
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              width: 1,
              color: 'rgba(153, 209, 246, 0.2)' // 设置网格的颜色
            }
          }
        },

        series: [
          {
            name: '报警类型分析',
            type: 'radar',
            symbol: 'angle',
            itemStyle: {
              normal: {
                areaStyle: { type: 'default' }
              }
            },
            label: {
              show: true,
              color: 'rgba(86, 124, 184, 1)'
            },
            data: [
              {
                symbol: 'circle',
                symbolSize: 5,
                value: [70, 42, 63, 84, 75],
                areaStyle: { color: 'rgba(64, 205, 241, 0.2)' },
                itemStyle: {
                  normal: {
                    borderWidth: 1,
                    color: 'RGBA(0, 34, 66, 1)',
                    borderColor: 'rgba(146, 225, 255, 1)'
                  }
                },
                lineStyle: {
                  color: 'rgba(146, 225, 255, 1)',
                  width: 1
                }
              }
            ]
          }
        ]
      }
    }
  },

  mounted () {
    this.bar = echarts.init(this.$refs.bar)
    this.bar.setOption(this.barOptions)

    window.onresize = () => {
      this.bar.resize()
    }
  }
}
</script>
<style lang="less" scoped>
.chart5_root {
  width: 100%;
  display: flex;

  div {
    flex: 1;
  }
}
</style>
