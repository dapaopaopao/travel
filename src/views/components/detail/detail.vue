<template>
  <div>
    <DetailBanner></DetailBanner>
    <DetailHeader></DetailHeader>
  </div>
</template>

<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/header'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="stylus" scoped></style>

