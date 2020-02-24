<template>
  <div>
    <router-link to="/" tag="div" class="header-abs" v-show="headerShow">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div :style="opcityStyle" class="header-fixed" v-show="!headerShow">
      <router-link to="/" tag="div" class="iconfont header-fixed-back">&#xe624;</router-link>景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data() {
    return {
      headerShow: true,
      opcityStyle: {
        opcity: 0
      }
    }
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop
      console.log(this.opcityStyle.opcity)
      if (top > 60) {
        let opcity = top / 140
        opcity = opcity > 1 ? 1 : opcity
        this.opcityStyle = { opcity }
        this.headerShow = false
      } else {
        this.headerShow = true
      }
    }
  },
  activated() {
    window.document.addEventListener('scroll', this.handleScroll)
  },
  deactivated() {
    window.document.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../assets/varibles.styl';

.header-abs {
  position: absolute;
  border-radius: 0.4rem;
  top: 0.2rem;
  left: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  background: rgba(0, 0, 0, 0.8);
  text-align: center;
}

.header-abs-back {
  color: white;
  font-size: 0.4rem;
}

.header-fixed {
  height: 0.86rem;
  line-height: 0.86rem;
  color: #fff;
  text-align: center;
  background: $bgColor;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  font-size: 0.32rem;
}

.header-fixed-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 0.64rem;
  text-align: center;
  font-size: 0.4rem;
}
</style>