<template>
  <div>
    <DetailBanner :bannerImg="bannerImg" :sightName="sightName" :gallaryImgs="gallaryImgs"></DetailBanner>
    <DetailHeader></DetailHeader>
    <DetailList :list="list"></DetailList>
  </div>
</template>

<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/header'
import DetailList from './components/list'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      list: [],
      gallaryImgs: [],
      bannerImg: '',
      sightName: ''
    }
  },
  mounted() {
    this.getDetaiList()
  },

  methods: {
    getDetaiList() {
      axios
        .get('/mock/detail.json', {
          params: {
            id: this.$route.params.id
          }
        })
        .then(res => {
          res = res.data
          if (res.ret && res.data) {
            this.list = res.data.categoryList
            this.gallaryImgs = res.data.gallaryImgs
            this.bannerImg = res.data.bannerImg
            this.sightName = res.data.sightName
          }
        })
    }
  }
}
</script>

<style lang="stylus" scoped></style>

