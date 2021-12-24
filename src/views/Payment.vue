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
    <selected></selected>
  </div>
</template>
<script>
import selected from "@/components/Selected.vue";
export default {
  components: {
    selected: selected,
  },
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
</style>