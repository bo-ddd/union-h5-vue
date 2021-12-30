<template>
  <div class="wrap">
    <nav class="nav">
      <van-grid :column-num="5" :border="false">
        <van-grid-item
          v-for="(value, index) in values"
          :key="index"
          :icon="value.icon"
          :text="value.text"
        />
      </van-grid>
    </nav>
    <section class="AD">
      <section></section>
      <section></section>
    </section>
    <section class="choiceness">
      <van-grid :column-num="4" :border="false">
        <van-grid-item
          v-for="(value, index) in pinpai"
          :key="index"
          :icon="value.icon"
          :text="value.text"
        />
      </van-grid>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      values: [
        {
          icon: "photo-o",
          text: "手机",
        },
        {
          icon: "gift-card",
          text: "电脑",
        },
        {
          icon: "photo-o",
          text: "平板",
        },
        {
          icon: "graphic",
          text: "手机",
        },
        {
          icon: "photo-o",
          text: "手机",
        },
        {
          icon: "photo-o",
          text: "手机",
        },
        {
          icon: "photo-o",
          text: "手机",
        },
        {
          icon: "photo-o",
          text: "手机",
        },
        {
          icon: "photo-o",
          text: "手机",
        },
        {
          icon: "photo-o",
          text: "手机",
        },
      ],
      pinpai:[
           {
          icon: "photo-o",
          text: "手机",
        },
        {
          icon: "gift-card",
          text: "电脑",
        },
        {
          icon: "photo-o",
          text: "平板",
        },
        {
          icon: "graphic",
          text: "手机",
        },
        {
          icon: "photo-o",
          text: "手机",
        },
        {
          icon: "photo-o",
          text: "手机",
        },
        {
          icon: "photo-o",
          text: "手机",
        },
        {
          icon: "photo-o",
          text: "手机",
        },
      ]
    };
  },
};
</script>
<style lang="less" scoped>
.wrap {
  width: 375px;
  padding: 15px;
  background-color: #f1f3f2;
  box-sizing: border-box;
  & .nav {
    background-color: #fff;
    border-radius: 10px;
    padding: 2px;
  }
  & .AD {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    & > section {
      width: 47%;
      height: 50px;
      background-color: rgb(253, 207, 253);
      border-radius: 10px;
    }
  }
  & .choiceness{
      margin-top: 10px;
      border-radius: 10px;
      background-color: #fff;
      padding: 2px;
  }
}
::v-deep .van-grid-item__content {
  padding: 5px;
}
</style>