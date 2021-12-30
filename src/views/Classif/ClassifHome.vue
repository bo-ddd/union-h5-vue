<template>
  <div class="wrap">
    <div class="header">
      <van-icon @click="toHomePage" class="icon-left" name="arrow-left" />
      <van-cell-group class="inp">
        <van-field
          class="search"
          v-model="value1"
          left-icon="search"
          right-icon="paid"
          placeholder="显示图标"
        />
      </van-cell-group>
      <van-icon class="icon-right" name="scan" />
    </div>
    <div class="main">
  <van-sidebar v-model="defauluActive" class="nav-list" @change="onChange">
  <van-sidebar-item class="child-classif"  v-for="(link, index) in list" :key="index" :to="link.path" :title="link.meta.title" />
</van-sidebar>
      <div class="contet">
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import {
    mapGetters,
} from 'vuex';
export default {
  data() {
    return {
      value1: "",
      list:[],
      defauluActive:this.onChange(),
    };
  },
  methods:{
   onChange(index){
      return index
    },
    toHomePage(){
      this.$router.push({
        name:'first'
      })
    }
  },
  computed:{
    ...mapGetters(['routes']),
  
  },
  created(){
   this.list=this.routes[3].children;
  }
};
</script>

<style lang="less" scoped>
.wrap {
  width: 375px;
  & .header {
    padding-bottom: 16px;
    background-color: #f9f9f9;
    display: flex;
    justify-content: space-between;
    align-content: center;
    border-bottom: 5px solid #f6f6f6;
    & .inp{
      background-color: #f9f9f9;
    }
    & .icon-left {
     margin-top: 18px;
     margin-left: 20px;
     font-size: 30px;
    }
    & .icon-right {
     margin-top: 18px;
     margin-right: 15px;
     font-size: 30px;
    }
  }
  & .main{
    display: flex;
    background-color: #fff;
    & .nav-list{
      width: 115px;
      background-color: #f9f9f9;
      & .child-classif{
         width: 115px;
          padding: 20px 0px;
          border-top-left-radius: 40px;
          border-bottom-left-radius: 40px;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          text-align: center;
          border: 1px 0px 1px 1px solid #f6f6f6;

      }
    }
    & .contet{
     padding: 16px;
    }
  }
}
::v-deep .search{
  background-color: #eeeeee;
  padding: 10px 20px;
  border-radius: 30px;
  margin-top: 15px;
    }  
  .van-cell{
    line-height: 0;
  }
  ::v-deep .van-icon-search:before {
    margin-top: 8px;
  }
</style>