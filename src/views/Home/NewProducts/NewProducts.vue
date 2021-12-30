<template>
  <div>
    <!-- 刘青松 -->
    <div ref="title" class="title">
      <van-nav-bar>
        <template #right>
          <van-popover
            v-model="showPopover"
            trigger="click"
            :actions="actions"
            placement="bottom-end"
            @select="onSelect"
          >
            <template #reference>
              <van-icon name="ellipsis" /> 
            </template>
          </van-popover>
        </template>
        <template #title>
          <div class="title-middle">
            <span class="select" @click="select" ref="se">精选</span>
            <span class="trend" @click="trend" ref="tr">趋势</span>
          </div>
        </template>
        <template #left>
          <div class="title-left">
            <van-icon name="like-o" v-if="flag" @click="follow">关注</van-icon>
            <span v-else @click="follow">已关注</span>
          </div>
        </template>
      </van-nav-bar>
    </div>
    <div @scroll="changeOpacity" ref="content" class="content">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in Url" :key="item.id">
          <img :src="item.url" alt="">
        </van-swipe-item>
      </van-swipe>
      <div class="nav" ref="nav">
        <van-tabs>
          <van-tab ref="ceshi" v-for="item in this.routes[0].children[1].children" :title="item.meta.title" :key="item.id" :to="item.path">
            <router-view></router-view>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { Toast } from 'vant';

export default {
  data() {
    return {
      Url:[
        {id:1, url:require("@/assets/images/nav1.jpg")},
        {id:2, url:require("@/assets/images/nav2.jpg")},
        {id:3, url:require("@/assets/images/nav3.jpg")},
        {id:4, url:require("@/assets/images/nav4.jpg")},
        {id:5, url:require("@/assets/images/nav5.jpg")},
      ],
      flag:false,
      showPopover: false,
      actions: [{ text: '消息', icon: 'chat-o' }, { text: '分享', icon: 'share-o' }, { text: '功能反馈', icon: 'edit' }],
      active: 0,
    };
  },
  created(){
      
  },
  computed:{
    ...mapGetters(['routes']),
  },
  methods: {
    // 关注切换
    follow(){
      this.flag = !this.flag;
    },
    onSelect(action) {
      Toast(action.text);
    },
    // 头部的透明度
    changeOpacity() {
      if (this.$refs.content.scrollTop < 200) {
        this.$refs.title.style.opacity = 0.5;
      } else {
        this.$refs.title.style.opacity = 1;
      }
    },
    // 头部标题切换
    select() {
      this.$refs.se.style.backgroundColor = "white";
      this.$refs.se.style.color = "black";
      this.$refs.tr.style.backgroundColor = "black";
      this.$refs.tr.style.color = "white";
    },
    trend() {
      this.$refs.se.style.backgroundColor = "black";
      this.$refs.se.style.color = "white";
      this.$refs.tr.style.backgroundColor = "white";
      this.$refs.tr.style.color = "black";
    },
  },
  mounted() {
    this.select();
    
  },
};
</script>

<style lang="less" scoped>
.title {
  position: fixed;
  top: 0;
  z-index: 9;
  width: 100%;
  opacity: 0.5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  height: 46px;
  & > .van-nav-bar {
    width: 100%;
    line-height: 21px;
    & .title-left {
      width: 70px;
      padding: 5px 0;
      background: #f574f5;
      border-radius: 16px;
      font-size: 10px;
      color: #646566;
    }
    & .title-middle {
      background: black;
      padding: 2px;
      border-radius: 16px;
      & span {
        display: inline-block;
        color: white;
        padding: 5px 10px;
        border-radius: 16px;
      }
    }
    & .title-right {
      padding: 5px 8px;
    }
  }
}
.content {
  height: 91vh;
  overflow-y: scroll;
  & .van-tabs__track div {
    width: 100%;
  }
  & .nav{
    position: relative;
  }
}
::v-deep .van-tabs--line .van-tabs__wrap {
  position: -webkit-sticky;
  position: sticky;
  top: 45px;
  z-index: 9;
}
::v-deep .van-popover--light{
  position: absolute;
    left: 246px;
    top: 35px;
}
.van-swipe{
  border-radius:0 0 20px 20px;
  overflow: hidden;
}
.van-swipe img{
  width: 100%;
  height: 35vh;
}
.ding{
  position: -webkit-sticky;
  position: sticky;
  right: 0;
  z-index: 9;
}
</style>
