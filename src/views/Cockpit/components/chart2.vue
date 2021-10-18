<template>
  <div class="chart2_root">
    <el-scrollbar>
      <div class="item" v-for="index in 20" :key="index">
        <div :class="getClassName(index)">{{ index }}</div>
        <span>数据展示数据展示数据展示数据展示数据 数据展示数据展示数据展示数据展示数据 数据展示数据展示数据展示数据展示数据 数据展示数据</span>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>

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
  },

  mounted () {
  },

  methods: {
    getClassName (index) {
      switch (index) {
        case 1:
          return 'icon one'
        case 2:
          return 'icon two'
        case 3:
          return 'icon three'
        default:
          return 'icon else'
      }
    }
  }
}
</script>
<style lang="less" scoped>
.chart2_root {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 10px;
  box-sizing: border-box;

  .item {
    width: 100%;
    height: 26px;
    overflow: hidden;
    display: flex;
    align-items: center;
    margin-top: 16px;

    &:first-child {
      margin-top: 0;
    }

    .icon {
      width: 26px;
      height: 26px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 27px;
    }

    .one {
      background: rgba(121, 144, 255, 1);
    }

    .two {
      background: rgba(54, 157, 253, 1);
    }

    .three {
      background: rgba(82, 197, 168, 1);
    }

    .else {
      background: url('../../../assets/img/组 21 拷贝 3.png');
      background-size: 100% 100%;
    }

    span {
      flex: 1;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      font-size: 16px;
      font-weight: 400;
      color: #FFFFFF;
    }
  }
}
</style>
