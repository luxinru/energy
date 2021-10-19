<template>
  <div class="LDateTimeSelect_root" :style="`width: ${width}px`">
    <span class="label">{{ label }}</span>
    <el-date-picker
      v-model="dateTime"
      type="datetimerange"
      range-separator="To"
      size="mini"
      prefix-icon="LDateTimeSelect_root_prefix-icon"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
    >
    </el-date-picker>
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
    width: {
      type: Number,
      default: 320
    }
  },

  data () {
    return {
      dateTime: []
    }
  }
}
</script>
<style lang="less">
.LDateTimeSelect_root_prefix-icon{
  display: none;
}

input {
  background-color: transparent;
}

.el-picker-panel {
  background: none !important;
}

.el-picker-panel__footer {
  background-color: #162346 !important;
}
</style>
<style lang="less" scoped>
.LDateTimeSelect_root {
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
