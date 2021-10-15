<template>
  <div class="LButton_root" @click="$emit('click')">
    {{ label }}
  </div>
</template>

<script>

export default {
  name: 'LButton',

  props: {
    label: {
      type: String,
      default: '搜索'
    }
  }
}
</script>
<style lang="less" scoped>
.LButton_root {
  padding: 7px 17px;
  background: #567CB8;
  font-size: 16px;
  font-weight: 400;
  color: #000000;
}
</style>
