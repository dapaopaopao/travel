<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item,index) of imgs" :key="index">
          <img class="gallary-img" :src="item" />
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'fraction',
          observer: true,
          observeParents: true,
          renderFraction: function(currentClass, totalClass) {
            return (
              '<span class="' +
              currentClass +
              '"></span>' +
              ' / ' +
              '<span class="' +
              totalClass +
              '"></span>'
            )
          }
        }
      }
    }
  },
  methods: {
    handleGallaryClick() {
      this.$emit('change')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container >>>.swiper-container {
  overflow: inherit;
}

.swiper-pagination {
  color: #fff;
  bottom: -1rem;
}

.container {
  z-index: 99;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.wrapper {
  height: 0;
  padding-bottom: 100%;
  width: 100%;
}

.gallary-img {
  width: 100%;
}
</style>