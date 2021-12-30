<template>
  <div class="wrap">
    <div class="header">
      <div class="left">
        <van-icon @click="toHomePage" class="icon-left" name="arrow-left" />
        <div class="follow">
          <van-icon name="like-o" />
          <span>关注</span>
        </div>
      </div>
      <div class="center">
        <van-tabs v-model="defauluActive" animated>
          <van-tab
            class="tab"
            v-for="(title, index) in list"
            :title="title.meta.title"
            :key="index"
            :to="title.path"
          >
          </van-tab>
        </van-tabs>
      </div>
      <div class="right">
          <van-icon class="icon-right" name="ellipsis" />
      </div>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      list: [],
      defauluActive: this.onChange(),
    };
  },
  methods: {
    onChange(index) {
      return index;
    },
    toHomePage() {
      this.$router.push({
        name: "first",
      });
    },
  },
  computed: {
    ...mapGetters(["routes"]),
  },
  created() {
    this.list = this.routes[4].children;
  },
};
</script>

<style lang="less" scoped>
.wrap {
  & .header {
    padding: 14px;
    display: flex;
    & .left{
        display: flex;
        justify-content: center;
        align-content: center;
    & .icon-left {
      margin-top: 10px;
      margin-left: 20px;
      font-size: 30px;
    }
      & .follow {
      margin-top: 14px;
      margin-right: 20px;
      padding: 0px 10px;
      background-color: #797373;
      opacity: 0.3;
      line-height: 30px;
      color: white;
      border-radius: 20px;
    }
    }
    & .right{
            & .icon-right {
      margin-top: 10px;
      //   margin-right: 15px;
      font-size: 30px;
      margin-left: 94px;
    }
    }
  
  }
}
::v-deep .van-tab {
    font-size: 20px;
  line-height: 25px;
  color: #a8a2a2;
}
</style>