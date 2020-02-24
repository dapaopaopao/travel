<template>
  <div>
    <div class="list" v-for="(item,index) of list" :key="index">
      <div>{{item.title}}</div>
      <DetailList :list="item.children"></DetailList>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>
 <style lang="stylus" scoped>
 .list {
   padding: 0.1rem;
 }
</style>