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
    <van-tabs v-model="defaultTag">
      <van-tab
        v-for="item in routes[1].children"
        :title="item.meta.title"
        :key="item.path"
        :name="item.name"
        :to="item.path"
      >
        <router-view />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      value: 2,
      search: "",
      active: 1,
    };
  },
  computed: {
    ...mapGetters(["routes"]),
    defaultTag: {
      get: function () {
        return this.$route.name;
      },
      set: function () {
        return this.$route.name;
      },
    },
  },
  created(){
  },
  methods: {
    onSubmit() {},
    onSearch() {
      console.log("search");
    },
    removeProduct() {
      console.log();
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
::-webkit-scrollbar{
  width: 0;
}
.product_info {
  margin-top: 20px;
}
.check {
  position: absolute;
  top: 40%;
  left: 5px;
  z-index: 1;
}
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}
</style>