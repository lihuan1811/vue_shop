import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// http://119.23.53.78:8888/api/private/v1

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
