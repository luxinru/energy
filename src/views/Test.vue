<template>
  <div class="test_root">
    <LInput></LInput>
  </div>
</template>

<script>
import LInput from '../components/LInput.vue'

export default {
  components: {
    LInput
  },
  data () {
  }
}
</script>
<style lang="less" scoped>
.test_root {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
