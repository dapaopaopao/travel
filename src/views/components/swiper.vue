<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="swiperShow">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true,
        autoplay: true
      }
    }
  },
  computed: {
    swiperShow() {
      return this.swiperList.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>>.swiper-pagination-bullet-active {
  background: #ffffff;
}

.swiper-img {
  width: 100%;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 30.5%;
  background: #eee;
}
</style>