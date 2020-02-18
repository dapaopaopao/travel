<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.recommendUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.info}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeReWeekend',
  data() {
    return {
      recommendList: [
        {
          id: '1',
          recommendUrl:
            '//imgs.qunarzz.com/vc/24/36/10/3fc94d042ae62de380581d4c98.jpg_92.jpg',
          desc: '上海',
          info: '上海'
        },
        {
          id: '2',
          recommendUrl:
            '//imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg',
          desc: '东京',
          info: '东京'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/mixins.styl';

.title {
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
  margin-top: 0.1rem;
}

.item-img-wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 30.5%;
  overflow: hidden;
}

.item-img {
  width: 100%;
}

.item-info {
  flex: 1;
  padding: 0.1rem;
  min-width: 0;
}

.item-title {
  line-height: 0.54rem;
  font-size: 0.32rem;
  ellipsis();
}

.item-desc {
  line-height: 0.4rem;
  color: #ccc;
  ellipsis();
}
</style>