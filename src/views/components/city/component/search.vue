<template>
  <div>
    <div class="search">
      <input class="search-input" type="text" placeholder="输入城市" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import '../../../../assets/varibles.styl';

.search {
  overflow: hidden;
  height: 0.72rem;
  background: $bgColor;
  padding: 0 0.1rem;
}

.search-input {
  border-radius: 0.06rem;
  height: 0.62rem;
  line-height: 0.62rem;
  box-sizing: border-box;
  padding: 0 0.1rem;
  width: 100%;
  color: #666;
  text-align: center;
}
</style>