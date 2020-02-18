<template>
  <div>
    <div class="title">推荐</div>
    <ul>
      <li class="item" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.recommendUrl" />
        <div class="item-info">
          <p class="item-title">{{item.info}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data() {
    return {
      recommendList: [
        {
          id: '1',
          recommendUrl:
            '//imgs.qunarzz.com/vs_ceph_vs_tts/bb4e26c0-2d6b-43f4-a525-2b1e14875ae4.jpg_r_480x320x90_bbfe8901.jpg',
          desc: '上海',
          info: '上海'
        },
        {
          id: '2',
          recommendUrl:
            '//imgs.qunarzz.com/p/tts2/1809/7d/17133e2737ddec02.jpg_r_480x320x90_6b7c9213.jpg',
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

.item {
  display: flex;
  height: 1.9rem;
  overflow: hidden;
}

.item-img {
  width: 1.7rem;
  height: 1.7rem;
  padding: 0.1rem;
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

.item-button {
  background: #ff9300;
  padding: 0 0.2rem;
  border-radius: 0.06rem;
  color: #fff;
  line-height: 0.44rem;
  margin-top: 0.16rem;
}
</style>