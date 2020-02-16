<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-mid">
      <span class="iconfont">&#xe632;搜索</span>
    </div>
    <div class="header-right">
      城市
      <span class="iconfont">&#xe62d;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
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
  width: 1.24rem;
  text-align: center;
}
</style>