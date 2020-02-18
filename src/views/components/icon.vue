<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-image">
            <img class="icon-image-content" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcon',
  data() {
    return {
      iconList: [
        {
          id: '001',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: '酒店'
        },
        {
          id: '002',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: '饭店'
        },
        {
          id: '003',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: '酒店'
        },
        {
          id: '004',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: '酒店'
        },
        {
          id: '005',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: '酒店'
        },
        {
          id: '006',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: '酒店'
        },
        {
          id: '007',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: '酒店'
        },
        {
          id: '008',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: '酒店'
        },
        {
          id: '009',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: '酒店'
        }
      ]
    }
  },
  computed: {
    pages() {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/varibles.styl';
@import '../../assets/mixins.styl';

.icons >>> .swiper-container {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
}

.icons {
  margin-top: 0.1rem;
}

.icon {
  width: 25%;
  padding-bottom: 25%;
  float: left;
  height: 0;
  position: relative;
  overflow: hidden;
}

.icon-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  bottom: 0.44rem;
  padding: 0.1rem;
}

.icon-image-content {
  display: block;
  margin: 0 auto;
  height: 100%;
}

.icon-desc {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.44rem;
  line-height: 0.44rem;
  text-align: center;
  color: $darkTextColor;
  ellipsis();
}
</style>