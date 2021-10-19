import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as echarts from 'echarts'
// import axios from 'axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// 引入字体的文件
import './assets/font/iconfont.css'
// 引入全局的样式文件
import './assets/css/global.less'

import '../src/assets/css/element-variables.scss'

import countTo from 'vue3-count-to'

const app = createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus, {
    locale: zhCn
  })
  .use(countTo)
  .mount('#app')
app.echarts = echarts
// // 请求基准路径的配置
// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/'
// // // 将axios挂载到Vue的原型对象上
// // // 在别的组件中 this.$http
// app.config.globalProperties.$http = echarts

// 将全局的echarts对象挂载到Vue的原型对象上
// 别的组件中 this.$echarts
