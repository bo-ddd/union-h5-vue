<template>
  <div>
    <div ref="content" class="content">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in this.Url" :key="item.id">
          <img :src="item.url" alt="" />
        </van-swipe-item>
      </van-swipe>
      <div class="nav" ref="nav">
        <van-tabs>
          <van-tab
            ref="ceshi"
            v-for="item in this.routes[0].children[1].children[0].children"
            :title="item.meta.title"
            :key="item.id"
            :to="item.path"
          >
            <router-view></router-view>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      Url: [
        { id: 1, url: require("@/assets/images/nav1.jpg") },
        { id: 2, url: require("@/assets/images/nav2.jpg") },
        { id: 3, url: require("@/assets/images/nav3.jpg") },
        { id: 4, url: require("@/assets/images/nav4.jpg") },
        { id: 5, url: require("@/assets/images/nav5.jpg") },
      ],
    };
  },
  created() {
    console.log(this.routes[0].children[1].children[0].children);
  },
  mounted() {
    // console.log(this.$refs);
    // console.log(this.$refs.content.scrollTop);
    // this.$store.commit("OFFSETTOP", this.$refs.content.scrollTop);
  },
  computed: {
    ...mapGetters(["routes"]),
  },
  methods: {
    
  },
};
</script>

<style scoped lang="less">
.content {
  height: 91vh;
  overflow-y: scroll;
  & .van-tabs__track div {
    width: 100%;
  }
  & .nav {
    position: relative;
  }
  & img {
    width: 100%;
    height: 35vh;
  }
}
</style>