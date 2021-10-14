<template>
  <div class="com-container">
    <div class="com-chart"
         ref="Etwo" />
  </div>
</template>
<script>

export default {
  data () {
    return {
      chartInstance: null,
      allData: null, // 服务器返回的数据
      initOption: null
    }
  },
  mounted () {
    this.initChart()
    this.getData()
    // this.$socket.send({
    //   action: "getData",
    //   socketType: "sellerData",
    //   chartName: "seller",
    //   value: "",
    // });
    // window.addEventListener('resize', this.screenAdapter)
    // 在页面加载完成的时候, 主动进行屏幕的适配
    this.screenAdapter()
  },
  methods: {
    // 初始化echartInstance对象
    initChart () {
      this.chartInstance = this.$root.echarts.init(
        this.$refs.Etwo
      )
      // 对图表初始化配置的控制
      this.initOption = {
        tooltip: {
            show: true,
          formatter: '{a} <br/>{c} {b}'
        },
        stateAnimation: {
          duration: 30000,
          easing: 'cubicOut'
        },
        animation: true,
        animationDuration: 1000,
        animationDurationUpdate: 500,
        animationThreshold: 2000,
        progressiveThreshold: 3000,
        progressive: 400,
        hoverLayerThreshold: 3000,
        useUTC: false,
        series: [{
          name: '单位面积能耗',
          type: 'gauge',
          color: '#42E4FB',
          min: 0,
          max: 100,
          splitNumber: 5,
          radius: '60%',
          center: ['26%', '50%'],
          axisLine: { // 坐标轴线
            lineStyle: { // 属性lineStyle控制线条样式
              width: 10,
              color: [
                [0.4, '#3488DB'],
                [1, '#40DAF4']
              ]
            },
            backgroundColor: 'none'
          },
          tooltip: {
            formatter: function () {
              if (this.dataArry.one) {
                return '单位面积能耗:' + this.dataArry.one
              }
            }
          },
          axisTick: { // 坐标轴小标记
            length: 5, // 属性length控制线长
            lineStyle: { // 属性lineStyle控制线条样式
              color: 'auto'
            }
          },
          splitLine: { // 分隔线
            length: 5, // 属性length控制线长
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
              color: 'rgba(255,255,255,0.7)'
            }
          },
          axisLabel: {
            borderRadius: 1,
            color: 'rgba(255,255,255,0.7)',
            padding: 1
          },
          title: {
            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            // fontWeight: 'bolder',
            fontSize: 15,
            fontColor: '#567db6',
            color: '#567db6',
            paddingTop: 5,
            offsetCenter: [0, '80%']
            // fontStyle: 'italic'
          },
          itemStyle: {
            color: '#1092ff'
          },
          detail: {
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            // borderWidth: 1,
            textBorderColor: '#000',
            textBorderWidth: 0,
            textShadowBlur: 0,
            textShadowColor: '#fff',
            textShadowOffsetX: 0,
            textShadowOffsetY: 0,
            paddingTop: 10,
            fontFamily: 'digital',
            fontSize: 14,
            width: 30,
            color: '#fff',
            rich: {},
            offsetCenter: [0, '120%'],
            formatter: function (value) {
              console.info(value)
              return value + 'kecg/人'
            }
          },
          data: [{
            value: 80,
            name: '单位面积能耗'
          }]
        },
        {
          name: '人均能耗',
          type: 'gauge',
          color: ['#f00'],
          min: 0,
          max: 100,
          splitNumber: 5,
          radius: '60%',
          center: ['72%', '50%'],
          axisLine: { // 坐标轴线
            lineStyle: { // 属性lineStyle控制线条样式
              width: 10,
              color: [
                [0.4, '#3488DB'],
                [1, '#40DAF4']
              ]
            },
            backgroundColor: 'none'
          },
          axisTick: { // 坐标轴小标记
            length: 5, // 属性length控制线长
            lineStyle: { // 属性lineStyle控制线条样式
              color: 'auto'
            }
          },
          tooltip: {
            formatter: function () {
              if (this.allData.two) {
                return '人均能耗:' + this.allData.two
              }
            }
          },
          splitLine: { // 分隔线
            length: 5, // 属性length控制线长
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
              color: 'rgba(255,255,255,0.7)'
            }
          },
          axisLabel: {
            borderRadius: 1,
            color: 'rgba(255,255,255,0.7)',
            padding: 1
          },
          title: {
            fontSize: 15,
            fontColor: '#567db6',
            color: '#567db6',
            paddingTop: 10,
            offsetCenter: [0, '80%']
          },
          itemStyle: {
            color: '#1092ff'
          },
          detail: {
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            textBorderColor: '#000',
            textBorderWidth: 0,
            textShadowBlur: 1,
            textShadowColor: '#fff',
            textShadowOffsetX: 0,
            textShadowOffsetY: 0,
            paddingTop: 10,
            fontFamily: 'digital',
            fontSize: 13,
            width: 31,
            color: '#FFF',
            rich: {},
            offsetCenter: [0, '120%'],
            formatter: function (value) {
              return value + 'kecg/人'
            }
          },
          data: [{
            value: 100,
            name: '人均能耗'
          }]
        }
        ]
      }

      this.chartInstance.setOption(this.initOption)
      // 对图表对象进行鼠标事件的监听
      // this.chartInstance.on('mouseover', () => {
      //   clearInterval(this.timerId)
      // })
      // this.chartInstance.on('mouseout', () => {
      //   this.startInterval()
      // })
    },
    // async
    getData () {
      // const { data: ret } = await this.$http.get('seller')s
      this.allData = {
        one: 500,
        two: 300
      }
      // // 对数据排序
      // this.allData.sort((a, b) => {
      //   return a.value - b.value // 从小到大的排序
      // })
      // // 每5个元素显示一页
      // this.totalPage =
      //   this.allData.length % 5 === 0
      //     ? this.allData.length / 5
      //     : this.allData.length / 5 + 1
      // this.updateChart()
      // 启动定时器
      this.startInterval(this.initOption)
    },
    // 更新图表
    updateChart () {
    },
    startInterval (initOption) {
      // if (this.timerId) {
      //   clearInterval(this.timerId)
      // }
      // this.timerId = setInterval(() => {
      //   this.currentPage++
      //   if (this.currentPage > this.totalPage) {
      //     this.currentPage = 1
      //   }
      //   this.updateChart()
      // }, 3000)
      setInterval(() => {
        initOption.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0
      }, 2000)
    },
    // 当浏览器的大小发生变化的时候, 会调用的方法, 来完成屏幕的适配
    screenAdapter () {
      // 手动的调用图表对象的resize 才能产生效果
      this.chartInstance.resize()
    }

  }
}
</script>
