<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市" />
    </div>
    <div class="search-contnet" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item borde-bottom"
          v-for="(item) of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >{{item.name}}</li>
        <li class="search-item borde-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: '',
      list: [],
      timer: null,
      value: ''
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search, { click: true })
  },
  computed: {
    hasNoData() {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick(city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
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

.search-contnet {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 1.58rem;
  overflow: hidden;
  z-index: 1;
  background: #eee;
}

.search-item {
  line-height: 0.62rem;
  padding-left: 0.2rem;
  color: #666;
  background-color: #fff;
}
</style>