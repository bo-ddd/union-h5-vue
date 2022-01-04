<template>
  <div class="main">
    <van-tabs>
      <van-tab v-for="(item,index) in routes[0].children[1].children[1].children" :title="item.meta.title" :key="index" :to="item.path">
      </van-tab>
    </van-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  created(){
    // console.log(this.$router.options.routes[1].children);
    console.log(this.routes[0].children[1].children[1].children);
  },
  computed:{
    ...mapGetters(["routes"]),
  }
};
</script>

<style>
.main{
  padding-top: 46px;
}
</style>