<template>
  <div>
    <HomeHeader :city="city"></HomeHeader>
    <HomeSwiper :swiperList="swiperList"></HomeSwiper>
    <HomeIcon :iconList="iconList"></HomeIcon>
    <HomeRecommend :recommendList="recommendList"></HomeRecommend>
    <HomeWeekend :weekendList="weekendList"></HomeWeekend>
    <div></div>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcon from './components/icon'
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/weekend'
import axios from 'axios'
export default {
  name: 'Home',
  data() {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    getHomeInfo() {
      axios.get('/mock/city.json').then(this.getHomeInfoSucca)
      axios.get('/mock/index.json').then(this.getHomeInfoSuccb)
    },
    getHomeInfoSucca(res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.cities.A[1].name
      }
    },
    getHomeInfoSuccb(res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted() {
    this.getHomeInfo()
  }
}
</script>

<style scoped>
</style>