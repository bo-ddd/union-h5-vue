<template>
  <div class="box">
    <header class="header">
      <div class="header_header">
        <div class="logo">
          <!-- <img src="../../../assets/images/jd.png" alt="" srcset="" /> -->
        </div>
        <div class="header_right">
          <van-icon name="hot-sale" />
          <van-icon name="chat-o" badge="9" />
        </div>
      </div>
      <div class="search">
        <van-search
          v-model="value"
          shape="round"
          background="#bcf304"
          placeholder="请输入搜索关键词"
        />
      </div>
    </header>
    <section class="content">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      value: "",
    };
  },
  created() {},
  methods: {
    toSetting() {
      this.$router.push({ name: "ClassifHome" });
    },
  },
  computed: {
    ...mapGetters(["routes"]),
  },
};
</script>

<style lang="less" scoped>
.box {
  width: 375px;
  & .header {
    background-color: #bcf304;
    & .header_header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 15px 0 15px;
      & .logo {
        width: 35px;
        height: 35px;
        & > img {
          width: 100%;
        }
      }
      & .header_right {
        font-size: 30px;
        color: #fff;
        & > .van-icon {
          margin-right: 10px;
        }
      }
    }
    & .van-search {
      padding: 5px 15px;
    }
    & .nav {
      width: 375px;
      height: 30px;
      display: flex;
      padding: 0 15px;
      box-sizing: border-box;
      & .nav-left {
        width: 80%;
        height: 100%;
        background-color: #bcf304;
        line-height: 30px;
        font-size: 18px;
        color: #fff;
        & ::v-deep .van-tab {
          color: #fff;
          font-size: 18px;
        }
      }
      & .nav-right {
        display: flex;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        width: 20%;
        height: 100%;
        background-color: #bcf304;
        color: #fff;
        line-height: 40px;
        & > .van-icon {
          font-size: 30px;
        }
        & > span {
          font-size: 18px;
        }
      }
    }
  }
}
::v-deep .van-tabbar--fixed {
  position: relative;
  left: 0;
  bottom: 0;
}
::v-deep .van-hairline--top-bottom::after {
  border: none;
}
::v-deep .van-tabs--line .van-tabs__wrap {
  height: 30px;
  color: #fff;
}
</style>