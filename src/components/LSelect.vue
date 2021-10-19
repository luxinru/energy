<template>
  <div class="LSelect_root" :style="`width: ${width}px`">
    <span class="label">{{ label }}</span>
    <el-select v-model="value" :placeholder="placeholder" size="mini">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>

export default {
  name: 'LSelect',

  props: {
    label: {
      type: String,
      default: '地区'
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    width: {
      type: Number,
      default: 320
    }
  },

  data () {
    return {
      value: '',
      options: [
        {
          value: '1',
          label: ''
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.LSelect_root {
  height: 46px;
  background-image: url('../assets/img/1.png');
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  padding: 0 6px 10px 20px;
  box-sizing: border-box;

  .label {
    font-size: 15px;
    font-weight: 400;
    color: #B8F9FF;
    padding: 0 9px;
    box-sizing: border-box;
    flex-shrink: 0;
  }
}
</style>
