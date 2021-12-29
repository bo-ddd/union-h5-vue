<template>
  <div>
    <van-tab v-for="item in title" :key="item.id" :title="item.content">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-swipe-cell v-for="item in commodity" :key="item.id">
          <van-card
            :num="item.num"
            :price="item.price"
            :desc="item.desc"
            :title="item.title"
            :class="item.class"
            :thumb="item.thumb"
          />
        </van-swipe-cell>
      </van-pull-refresh>
    </van-tab>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  props: { title: Array, commodity: Array },
  data() {
    return {
      count: 0,
      isLoading: false,
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  },
};
</script>

<style lang="less" scoped>
.goods-card {
  margin: 0;
}
.delete-button {
  height: 100%;
}
.van-card__content {
  text-align: left;
}
</style>