<template>
  <div>
    <div class="header">城市选择</div>
    <router-link to="/">
      <div class="header-left iconfont">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../assets/varibles.styl';

.header {
  overflow: hidden;
  height: 0.86rem;
  line-height: 0.86rem;
  text-align: center;
  color: #fff;
  background: $bgColor;
  position: relative;
}

.header-left {
  position: absolute;
  width: 0.64rem;
  top: 0.215rem;
  left: 0.215rem;
  font-size: 0.4rem;
  text-align: center;
  color: #fff;
}
</style>