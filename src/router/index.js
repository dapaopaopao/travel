import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import City from '../views/components/city/city.vue'
import Detail from '../views/components/detail/detail.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: City
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }

]

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

export default router
