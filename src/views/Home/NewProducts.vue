<template>
  <div>
    <!-- 刘青松 -->
    <div ref="title" class="title">
      <van-nav-bar title="标题" left-text="关注" right-text="..." />
    </div>
    <div @scroll="dd" ref="content" class="content">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
        <van-swipe-item>5</van-swipe-item>
      </van-swipe>
      <van-tabs v-model="active" animated>
        <van-tab v-for="item in title" :key="item.id" :title="item.content">
          <selected></selected>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import selected from "@/components/Selected.vue";

export default {
  components: {
    selected,
  },
  data() {
    return {
      title: [
        { id: 1, content: "精选" },
        { id: 2, content: "完美礼遇" },
        { id: 3, content: "好礼首发" },
        { id: 4, content: "手机" },
        { id: 5, content: "分类" },
        { id: 6, content: "分类" },
        { id: 7, content: "分类" },
        { id: 8, content: "分类" },
        { id: 9, content: "分类" },
      ],
      active: 0,
    };
  },
  methods: {
    dd(){
      if(this.$refs.content.scrollTop < 200){
        this.$refs.title.style.opacity = 0.5;
      }else{
        this.$refs.title.style.opacity = 1;
      }
    }
  },
  mounted() {
    
  },
};
</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 230px;
  text-align: center;
  background-color: #39a9ed;
}
.title {
  position: fixed;
  top: 0;
  z-index: 9;
  width: 100%;
  opacity: 0.5;
}
.content {
  height: 91vh;
  overflow-y: scroll;
}
::v-deep .van-tabs--line .van-tabs__wrap {
  position: -webkit-sticky;
  position: sticky;
  top: 46px;
  z-index: 9;
}
</style>
