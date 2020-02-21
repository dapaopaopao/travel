<template>
  <div>
    <router-link to="/" tag="div" class="header-abs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed">
      <div>
        <router-link to="/" tag="div" class="iconfont header-fixed-back">&#xe624;</router-link>景点详情
      </div>
    </div>
    <div class="test"></div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader'
}
</script>

<style lang="stylus" scoped>
@import '../../../../assets/varibles.styl';

.header-abs {
  position: absolute;
  background: red;
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

.test {
  height: 20rem;
}
</style>