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
           <span v-for="(item, index) in  routes[0].children[0].children" :key="index" replace @click="nav(item.path)">{{item.meta.title}} </span>
        </nav>
          <!-- <van-tabbar  class="nav-left">
         <van-tabbar-item  v-for="(link, index) in  routes[0].children[0].children" :key="index" replace :to="link.path">
           {{ link.meta.title }}</van-tabbar-item>
      </van-tabbar> -->
        <nav class="nav-right" @click="toSetting">
          <van-icon name="bars" />
          <span>分类</span>
        </nav>
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

  },
  methods:{
    nav(path){
      if(this.$route.path == path) return;
      this.$router.push({
        path
      })
    },
    toSetting() {
      this.$router.push({ name: "Setting" });
    },
  },
  computed: {
    ...mapGetters(["routes"]),
    
  },
};
</script>

<style lang="less" scoped>
.box {
  & .header {
    padding: 10px 15px;
    background-color: #fb4633;
    & .header_header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & .logo{
        width: 40px;
        height: 40px;
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
      height: 30px;
      display: flex;
      & .nav-left{
        width: 80%;
        height: 100%;
        background-color: #fb4633;
        line-height: 30px;
        font-size: 20px;
        color: #fff;
        &>span{
          margin-right: 8px;
        }
        &>span:hover{
          font-size: 22px;
        }
      }
      & .nav-right{
        display: flex;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        width: 20%;
        height: 100%;
        background-color: #fb4633;
        color: #fff;
        line-height: 40px;
        &>.van-icon {
          font-size: 30px;
          
        }
        &>span{
          font-size: 20px;
        } 
      }
    }
  }
}
::v-deep .van-tabbar--fixed{
  position: relative;
  left: 0;
  bottom: 0;
}
::v-deep .van-hairline--top-bottom::after{
  border:none
}
</style>