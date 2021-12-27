<template>
  <div>
    <van-nav-bar
      left-text="返回"
      left-arrow
      @click-left="back"
      @click-right="goMessage"
    >
      <template #title>
        <van-search
          v-model="search"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
        >
          <template #action>
            <div @click="onSearch">筛选</div>
          </template>
        </van-search>
      </template>
      <template #right>
        <van-icon name="chat-o" />
      </template>
    </van-nav-bar>
    <van-tabs>
      <van-tab v-for="item in statuData" :title="item.text" :key="item.num">
        <div class="product_info">
          <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
          >
            <template #tags>
              <van-tag plain type="danger">标签</van-tag>
              <van-tag plain type="danger">标签</van-tag>
            </template>
            <template #footer>
              <van-button size="mini">按钮</van-button>
              <van-button size="mini">按钮</van-button>
            </template>
          </van-card>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      search: "",
      active: 1,
      statuData: [
        {
          icon: "credit-pay",
          text: "待付款",
          num: 0,
          path: "Payment",
        },
        {
          icon: "logistics",
          text: "待收货",
          num: 1,
        },
        {
          icon: "edit",
          text: "待评价",
          num: 2,
        },
        {
          icon: "after-sale",
          text: "退换/售后",
          num: 3,
        },
        {
          icon: "records",
          text: "我的订单",
          num: 4,
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["routes"]),
  },
  methods: {
    onSearch() {
      console.log("search");
    },
    back() {
      this.$router.push({
        name: "My",
      });
    },
    goMessage() {
      console.log("tomsg");
    },
  },
};
</script>

<style scoped lang="less">
.product_info{
  margin-top: 20px;
}
</style>