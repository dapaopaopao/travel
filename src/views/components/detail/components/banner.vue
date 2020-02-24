<template>
  <div>
    <div class="banner" @click="handleGallaryShow">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-tittle">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe656;</span>
          39
        </div>
      </div>
    </div>
    <Fade>
      <CommonGallary :imgs="gallaryImgs" v-if="gallaryShow" @change="close"></CommonGallary>
    </Fade>
  </div>
</template>

<script>
import CommonGallary from '../../../../common/gallary'
import Fade from '../../../../common/fade'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },

  data() {
    return {
      gallaryShow: false
    }
  },
  components: {
    CommonGallary,
    Fade
  },
  methods: {
    handleGallaryShow() {
      this.gallaryShow = true
    },
    close() {
      this.gallaryShow = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner {
  height: 0;
  padding-bottom: 55%;
  position: relative;
  overflow: hidden;
}

.banner-img {
  width: 100%;
}

.banner-info {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  line-height: 0.6rem;
  display: flex;
  color: #fff;
  background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
}

.banner-tittle {
  flex: 1;
  font-size: 0.32rem;
  padding: 0 0.2rem;
}

.banner-number {
  padding: 0 0.4rem;
  height: 0.32rem;
  line-height: 0.32rem;
  border-radius: 0.2rem;
  background: rgba(0, 0, 0, 0.8);
  font-size: 0.24rem;
  margin-top: 0.14rem;
}

.banner-icon {
  font-size: 0.24rm;
}
</style>

