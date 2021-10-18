<template>
  <div class="content_box_root" :style="rootStyle">
    <section class="title">数据展示</section>
    <section class="box">
      <slot></slot>
    </section>
  </div>
</template>

<script>

export default {
  components: {
  },

  props: {
    height: {
      type: Number || String,
      default: ''
    }
  },

  data () {
    return {
    }
  },

  computed: {
    rootStyle () {
      const result = {}
      if (this.height) {
        result.height = this.height
      }
      return result
    }
  },

  mounted () {
  }
}
</script>
<style lang="less" scoped>
.content_box_root {
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex-shrink: 0;

  .title {
    width: max-content;
    height: 46px;
    background-image: url('../../../assets/img/组 1.png');
    background-size: 100% 100%;
    padding: 0 200px 13px 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }

  .box {
    flex: 1;
    background: url('../../../assets/img/2 拷贝 4.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-top: 6px;
    display: flex;
    padding: 20px 15px;
    box-sizing: border-box;
    overflow: hidden;
  }
}
</style>
