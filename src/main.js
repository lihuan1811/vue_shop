import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局样式
import "./assets/css/global.css"

// 引入element.js文件
import "./plugins/element"

// element-Ui样式
import 'element-ui/lib/theme-chalk/index.css';
// 挂载弹出框



// 引入axios
import axios from "axios"
axios.defaults.baseURL = "http://119.23.53.78:8888/api/private/v1"
Vue.prototype.$http = axios

// 导入字体图标
import "./assets/fonts/iconfont.css"
Vue.config.productionTip = false

// http://119.23.53.78:8888/api/private/v1

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
