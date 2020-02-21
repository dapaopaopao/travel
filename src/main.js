import Vue from 'vue'
import App from './App.vue'
import './assets/reset.css'
import './assets/border.css'
import './assets/iconfont.css'
import fastClick from 'fastclick'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index.js'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
