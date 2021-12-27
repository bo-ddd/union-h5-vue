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
            <span class="select" @click="select" ref="se">精选</span
            ><span class="trend" @click="trend" ref="tr">趋势</span>
          </div>
        </template>
        <template #left>
          <div class="title-left">
            <van-icon name="like-o" @click="follow">关注</van-icon>
            <van-icon ref="isfollowRef" display = "none">已关注</van-icon>
          </div>
        </template>
      </van-nav-bar>
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
        <selected :title="tabtitle" :commodity="commodity"></selected>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import selected from "@/components/Selected.vue";
import { Toast } from 'vant';

export default {
  components: {
    selected,
  },
  data() {
    return {
      flag:false,
      showPopover: false,
      // 通过 actions 属性来定义菜单选项
      actions: [{ text: '消息', icon: 'chat-o' }, { text: '分享', icon: 'share-o' }, { text: '功能反馈', icon: 'edit' }],
      tabtitle: [
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
      commodity: [
        {
          id: 1,
          num: "3",
          price: "20.00",
          desc: "描述信息1",
          title: "精选1",
          class: "goods-card",
          thumb: "https://img01.yzcdn.cn/vant/cat.jpeg",
        },
        {
          id: 2,
          num: "30",
          price: "12.00",
          desc: "描述信息2",
          title: "精选2",
          class: "goods-card",
          thumb: "https://img01.yzcdn.cn/vant/cat.jpeg",
        },
        {
          id: 3,
          num: "5",
          price: "22.00",
          desc: "描述信息3",
          title: "精选3",
          class: "goods-card",
          thumb: "https://img01.yzcdn.cn/vant/cat.jpeg",
        },
        {
          id: 4,
          num: "7",
          price: "32.00",
          desc: "描述信息4",
          title: "精选4",
          class: "goods-card",
          thumb: "https://img01.yzcdn.cn/vant/cat.jpeg",
        },
        {
          id: 5,
          num: "13",
          price: "17.00",
          desc: "描述信息5",
          title: "精选5",
          class: "goods-card",
          thumb: "https://img01.yzcdn.cn/vant/cat.jpeg",
        },
        {
          id: 6,
          num: "35",
          price: "15.00",
          desc: "描述信息6",
          title: "精选6",
          class: "goods-card",
          thumb: "https://img01.yzcdn.cn/vant/cat.jpeg",
        },
        {
          id: 7,
          num: "23",
          price: "7.00",
          desc: "描述信息7",
          title: "精选7",
          class: "goods-card",
          thumb: "https://img01.yzcdn.cn/vant/cat.jpeg",
        },
        {
          id: 8,
          num: "21",
          price: "3.00",
          desc: "描述信息8",
          title: "精选8",
          class: "goods-card",
          thumb: "https://img01.yzcdn.cn/vant/cat.jpeg",
        },
        {
          id: 9,
          num: "25",
          price: "13.00",
          desc: "描述信息9",
          title: "精选9",
          class: "goods-card",
          thumb: "https://img01.yzcdn.cn/vant/cat.jpeg",
        },
        {
          id: 11,
          num: "3",
          price: "20.00",
          desc: "描述信息11",
          title: "精选11",
          class: "goods-card",
          thumb: "https://img01.yzcdn.cn/vant/cat.jpeg",
        },
        {
          id: 12,
          num: "30",
          price: "12.00",
          desc: "描述信息12",
          title: "精选12",
          class: "goods-card",
          thumb: "https://img01.yzcdn.cn/vant/cat.jpeg",
        },
        {
          id: 13,
          num: "5",
          price: "22.00",
          desc: "描述信息13",
          title: "精选13",
          class: "goods-card",
          thumb: "https://img01.yzcdn.cn/vant/cat.jpeg",
        },
        {
          id: 14,
          num: "7",
          price: "32.00",
          desc: "描述信息14",
          title: "精选14",
          class: "goods-card",
          thumb: "https://img01.yzcdn.cn/vant/cat.jpeg",
        },
        {
          id: 15,
          num: "13",
          price: "17.00",
          desc: "描述信息15",
          title: "精选15",
          class: "goods-card",
          thumb: "https://img01.yzcdn.cn/vant/cat.jpeg",
        },
        {
          id: 16,
          num: "35",
          price: "15.00",
          desc: "描述信息16",
          title: "精选16",
          class: "goods-card",
          thumb: "https://img01.yzcdn.cn/vant/cat.jpeg",
        },
        {
          id: 17,
          num: "23",
          price: "7.00",
          desc: "描述信息17",
          title: "精选17",
          class: "goods-card",
          thumb: "https://img01.yzcdn.cn/vant/cat.jpeg",
        },
        {
          id: 18,
          num: "21",
          price: "3.00",
          desc: "描述信息18",
          title: "精选18",
          class: "goods-card",
          thumb: "https://img01.yzcdn.cn/vant/cat.jpeg",
        },
        {
          id: 19,
          num: "25",
          price: "13.00",
          desc: "描述信息19",
          title: "精选19",
          class: "goods-card",
          thumb: "https://img01.yzcdn.cn/vant/cat.jpeg",
        },
      ],
    };
  },
  methods: {
    follow(e){
      this.flag = !this.flag;
      if(this.flag){
        e.target.style.display = "none";
        this.$refs.isfollowRef.style.display = "block";
      }else{
        e.target.style.display = "block";
        this.$refs.isfollowRef.style.display = "none";
      }
    },
    onSelect(action) {
      Toast(action.text);
    },
    dd() {
      if (this.$refs.content.scrollTop < 200) {
        this.$refs.title.style.opacity = 0.5;
      } else {
        this.$refs.title.style.opacity = 1;
      }
    },
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
</style>
