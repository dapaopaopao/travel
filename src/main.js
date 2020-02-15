import Vue from 'vue'
import App from './App.vue'
import './assets/reset.css'
import './assets/border.css'
import fastClick from 'fastclick'
import router from './router'

Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
