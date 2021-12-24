<template>
  <div class="box">
    <header class="header">
      <div class="header_header">
        <div class="logo">
          <img src="../../assets/images/jd.png" alt="" srcset="">
        </div>
        <div class="header_right">
          <van-icon name="hot-sale" />
          <van-icon name="chat-o" badge="9" />
        </div>
      </div>
      <div>
        <van-search
          v-model="value"
          shape="round"
          background="#fb4633"
          placeholder="请输入搜索关键词"
        />
      </div>
      <nav class="nav">
        <nav class="nav-left" :router ="true">
          <span  v-for="item in routes[0].children[0].children" :key='item.meta.title' replace :to="item.path">{{item.meta.title}}</span>
        </nav>
          <!-- <van-tabbar  class="nav-left">
         <van-tabbar-item  v-for="(link, index) in  routes[0].children[0].children" :key="index" replace :to="link.path">
           {{ link.meta.title }}</van-tabbar-item>
      </van-tabbar> -->
        <nav class="nav-right"></nav>
      </nav>
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
  created(){
    console.log(this.item)
  },
    computed: {
    ...mapGetters(["routes"]),
    
  },
};
</script>

<style lang="less" scoped>
.box {
  & .header {
    padding: 15px;
    background-color: #fb4633;
    & .header_header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & .logo{
        width: 45px;
        height: 45px;
        &>img{
          width: 100%;
        }
      }
      & .header_right {
        font-size: 35px;
        color: #fff;
        & > .van-icon {
          margin-right: 10px;
        }
      }
    }
    & .van-search{
      padding: 5px 0;
    }
    & .nav{
      width: 100%;
      height: 40px;
      display: flex;
      & .nav-left{
        width: 80%;
        height: 100%;
        background-color: #fb4633;
        line-height: 40px;
        font-size: 20px;
        color: #fff;
        &>span{
          margin-right: 15px;
        }
      }
      & .nav-right{
        width: 20%;
        height: 100%;
        background-color: #fb4633;
      }
    }
  }
}
</style>