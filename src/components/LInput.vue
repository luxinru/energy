<template>
  <div class="LInput_root" :style="`width: ${width}px`">
    <span>{{ label }}</span>
    <input type="text" :placeholder="placeholder">
  </div>
</template>

<script>

export default {
  name: 'LInput',

  props: {
    label: {
      type: String,
      default: '地区'
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    width: {
      type: Number,
      default: 330
    }
  }
}
</script>
<style lang="less" scoped>
.LInput_root {
  height: 40px;
  background-image: url('../assets/img/1.png');
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  padding: 0 6px 10px 20px;
  box-sizing: border-box;

  span {
    font-size: 15px;
    font-weight: 400;
    color: #B8F9FF;
    padding: 0 9px;
    box-sizing: border-box;
    flex-shrink: 0;
  }

  input {
    flex: 1;
    height: 100%;
    margin-left: 10px;
    border: none;
    user-select: none;
    outline: none;
    background: transparent;
    color: #B8F9FF;
  }
}
</style>
