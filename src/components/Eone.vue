<template>
  <div class="com-container">
    <div class="com-chart">
      <div class="top-box">
        <div class="top">
          <div class="tit-t">25</div>
          <div class="twinkle-container">
            <img src="../assets/img/shine-top.png"
                 alt="" />
          </div>
          <img class="img-b"
               src="../assets/img/shine-bottom.png" />
        </div>
        <div class="top-tit">新增的报警</div>
      </div>
      <div class="top-box">
        <div class="top">
          <div class="tit-t">25</div>
          <div class="twinkle-container">
            <img src="../assets/img/shine-top.png"
                 alt="" />
          </div>
          <img class="img-b"
               src="../assets/img/shine-bottom.png" />
        </div>
        <div class="top-tit">已处理的报警</div>
      </div>
      <div class="top-box">
        <div class="top">
          <div class="tit-t">25</div>
          <div class="twinkle-container">
            <img src="../assets/img/shine-top.png"
                 alt="" />
          </div>
          <img class="img-b"
               src="../assets/img/shine-bottom.png" />
        </div>
        <div class="top-tit">未处理的报警</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Eone'
  // data () {
  //   return {
  //     chartInstance: null
  //   }
  // },
  // mounted () {
  //   this.chartInstance = this.$refs.Eone
  //   window.addEventListener('resize', this.screenAdapter)

  //   // this.getOption()
  //   // 在页面加载完成的时候, 主动进行屏幕的适配
  // },
  // methods: {
  //   // getOption () {
  //   //   // const option = defaultOption
  //   //   // const { yAxis, series } = option
  //   //   // // 处理数据
  //   //   // yAxis.data = ['低', '中', '高']
  //   //   // series[0].data = seriesData
  //   //   // series[1].data = seriesData.map((item, index) => Object.assign(item, { label: { color: colorss[index] } }))
  //   //   // this.chartInstance.setOption(option)
  //   // }
  // }
}
</script>
<style lang="less" scoped>
.com-chart {
  padding: 0 30px;
  .top-box {
    width: 100px;
    height: 110px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .top {
      width: 71px;
      height: 76px;
      display: flex;
      justify-content: center;
      position: relative;
    }
    .img-b {
      width: 71px;
      height: 44px;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    .tit-t {
      position: absolute;
    }
    .top-tit {
      color: #567db6;
    }
  }
}

/* 图片闪烁 */
.twinkle-container {
  animation: ma1 1.5s ease-out infinite alternate;
}

@keyframes ma1 {
  /*---每图片切换有两个阶段：位移切换和静置。中间的效果可以任意定制----*/
  0%,
  20% {
    opacity: 0.1;
  }

  85%,
  100% {
    opacity: 1;
  }
}
/* 图片闪烁 end*/
</style>
