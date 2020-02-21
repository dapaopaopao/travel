<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-mid">
      <span class="iconfont">&#xe632;搜索</span>
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont">&#xe62d;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  props: {},
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
.header {
  background: #00bcd4;
  line-height: 0.86rem;
  display: flex;
}

.header-left {
  float: left;
  width: 0.64rem;
  text-align: center;
}

.header-mid {
  flex: 1;
  background: white;
  margin-top: 0.12rem;
  height: 0.64rem;
  line-height: 0.64rem;
  border-radius: 0.1rem;
  color: #ccc;
  padding: 0 0 0 0.1rem;
}

.header-right {
  float: right;
  min-width: 1.04rem;
  padding: 0 0.1rem;
  text-align: center;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
  color: #fff;
}
</style>