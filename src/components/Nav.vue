<template>
  <div class="home">
      <van-tabbar v-model="active" class="nav">
         <van-tabbar-item  v-for="(link, index) in routes" :key="index" replace :to="link.path" icon="home-o">
           {{ link.meta.title }}</van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script>
import {
    mapGetters,
} from 'vuex';

export default {
    name:'Nav',
  data() {
    return {
      active: 0,
    };
  },
  computed: {
        ...mapGetters(['routes'])
    },
};
</script>

<style lang="less" scoped>
.home {
  & .nav {
    background: rgb(238, 238, 238);
    padding: 7px 0px;
    position: absolute;
    bottom: 0;

    & ::v-deep .van-tabbar-item--active {
      color: rgb(255, 68, 85) !important;
      background: transparent !important;
    }
  }
}
</style>
