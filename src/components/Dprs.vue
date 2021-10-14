<template>
  <div class="com-container">
    <div class="com-chart"
         ref="Dprs" />
  </div>
</template>
<script>
import * as echarts from 'echarts'
var data = [
  { stock: '其他用电', fundPost: '100.377176' },
  { stock: '特殊用电', fundPost: '19.127404' },
  { stock: '照明与插座用电', fundPost: '18.40882' },
  { stock: '空调用电', fundPost: '17.980597' },
  { stock: '动力用电', fundPost: '21.987691' }

]

var attackSourcesColor = [
  '#7A91FF',
  '#0B75E3',
  '#567DB6',
  '#4089F0',
  '#52DEBB'

]
var attaData = []
var attaName = []
var topName = []
data.forEach((it, index) => {
  attaData[index] = parseFloat(it.fundPost).toFixed(2)
  attaName[index] = it.stock
  topName[index] = `${it.stock}`
})
var salvProMax = [] // 背景按最大值
for (let i = 0; i < attaData.length; i++) {
  salvProMax.push(attaData[0])
}
function attackSourcesDataFmt (sData) {
  var sss = []
  sData.forEach(function (item, i) {
    const itemStyle = {
      color: i > 2 ? attackSourcesColor[2] : attackSourcesColor[i]
    }
    sss.push({
      value: item,
      itemStyle: itemStyle
    })
  })
  return sss
}

const defaultOption = {
  tooltip: {
    show: true,
    zlevel: 10,
    z: 20,
    textStyle: {
      fontSize: 12
    }

  },
  color: ['#F7B731'],
  legend: {
    pageIconSize: [12, 12],
    itemWidth: 20,
    itemHeight: 10,
    textStyle: {
      // 图例文字的样式
      fontSize: 14,
      color: '#567DB6'
    },
    selectedMode: false
    // data: ["个人所得(亿元)"]
  },
  grid: {
    width: '100%',
    bottom: '2%',
    top: '8%'
    // containLabel: true
  },
  xAxis: {
    type: 'value',

    splitLine: {
      show: false
    },
    axisLabel: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    }
  },
  yAxis: [
    {
      type: 'category',
      inverse: true,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisPointer: {
        label: {
          show: true
          // margin: 30
        }
      },

      data: attaName,
      axisLabel: {

        align: 'left',
        padding: [2, 0, 0, 0],
        color: '',
        fontSize: 0

      }
    },
    {
      type: 'category',
      inverse: true,
      axisTick: 'true',
      axisLine: 'true',
      show: true,
      axisLabel: {
        textStyle: {
          color: '#567db6',
          fontSize: '0'
        }
      },
      data: attackSourcesDataFmt(attaName)
    },
    { // 名称
      type: 'category',
      offset: -10,
      position: 'left',
      axisLabel: {
        color: '#567db6',
        fontSize: 14
      },
      axisLine: {
        show: false
      },
      inverse: false,
      axisTick: {
        show: false
      },
      // eslint-disable-next-line no-dupe-keys
      axisLabel: {
        interval: 0,
        color: ['#05325F'],
        align: 'left',
        verticalAlign: 'bottom',
        lineHeight: 40,
        fontSize: 14
      },
      data: topName
    }
  ],
  series: [
    {
      zlevel: 1,
      // name: "个人所得(亿元)",
      type: 'bar',
      barWidth: 10,
      animationDuration: 1500,
      data: attackSourcesDataFmt(attaData),
      align: 'center',
      itemStyle: {
        normal: {
          barBorderRadius: 10
        }
      }
    },
    {
      // name: "个人所得(亿元)",
      type: 'bar',
      barWidth: 10,
      barGap: '-100%',
      // margin: "20",
      data: salvProMax,
      textStyle: {
        // 图例文字的样式
        fontSize: 10,
        color: '#567db6'
      },
      itemStyle: {
        normal: {
          color: '#1F4987',
          // width:"100%",
          fontSize: 10,
          barBorderRadius: 30
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
    this.chartInstance = echarts.init(this.$refs.Dprs)
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
    }

  }
}
</script>
