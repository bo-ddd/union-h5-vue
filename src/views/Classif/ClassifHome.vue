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
  <van-sidebar-item class="child-classif"  v-for="(link, index) in list" :key="index"  :title="link.title" />
</van-sidebar>
      <div class="contet">
          <div class="RecommendedClassif">
    <div class="top">
      <div>
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index" >
            <img v-lazy="image" width="225" height="85">
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="main">
      <div v-for="(item, index) in arr" :key="index">
        <div>
          <div>{{ item.title }}</div>
          <div v-if="item.diandiandian">
            <img :src="item.diandiandian" alt="" />
          </div>
        </div>
        <div>
          <div v-for="(itme1, index) in item.obj" :key="index">
            <div>
              <img :src="itme1.imgSrc" alt="" />
            </div>
            <div>{{ itme1.text }}</div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>热门分类</div>
        </div>
        <div>
          <div>
            <!-- <div><img src="" alt=""></div> -->
            <div>电脑数码</div>
          </div>
        </div>
      </div>
    </div>
    <!-- RecommendedClassif(推荐分类) -->
  </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload);
export default {
  data() {
    return {
      value1: "",
      list:[
        {
        title:'推荐分类'
      },
        {
        title:'京东超市'
      },
        {
        title:'家具厨具'
      },
        {
        title:'钟表珠宝'
      },
        {
        title:'内衣配饰'
      },
        {
        title:'美妆护肤'
      },
        {
        title:'食品酒饮'
      },
        {
        title:'运动户外'
      },
        {
        title:'母婴童装'
      },
        {
        title:'京东国际'
      },
        {
        title:'个护清洁'
      },
        {
        title:'医疗保健'
      },
      ],
      defauluActive:this.onChange(),
       images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
      ],
      arr: [
        {
          title: "常用分类",
          diandiandian: require("@/assets/recommendedClassif/diandiandian.png"),
          obj: [
            {
              imgSrc: require("@/assets/recommendedClassif/shafa.png"),
              text: "实木沙发",
            },
            {
              imgSrc: require("@/assets/recommendedClassif/shafa.png"),
              text: "实木沙发1",
            },
            {
              imgSrc: require("@/assets/recommendedClassif/shafa.png"),
              text: "实木沙发2",
            },
          ],
        },
        {
          title: "专场推荐",

          obj: [
            {
              imgSrc: require("@/assets/recommendedClassif/chazuo.png"),
              text: "手机插座",
            },
            {
              imgSrc: require("@/assets/recommendedClassif/bingxiang.png"),
              text: "冰箱",
            },
            {
              imgSrc: require("@/assets/recommendedClassif/jianpan.png"),
              text: "键盘",
            },
            {
              imgSrc: require("@/assets/recommendedClassif/bijiben.png"),
              text: "笔记本",
            },
          ],
        },
      ],
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
  .RecommendedClassif {
  // height: 375px;
  width: 230px;
  // background: violet;
  display: flex;
  flex-direction: column;
  & > .top {
    // width: 100%;
    // height: 100%;
    margin-bottom: 24px;
    & > div {
      width: 100%;
      padding: 2.5px;
      height: 85px;
       width: 225px;
      & > img {
        height: 85px;
        width: 225px;
      }
    }
  }
  & > .main {
    width: 100%;
    display: flex;
    flex-direction: column;
    & > div {
      display: flex;
      flex-direction: column;
      & > div:nth-of-type(1) {
        font-size: 14px;
        font-weight: 700;
        display: flex;
        justify-content: space-between;
        margin-bottom: 13px;
        & img {
          width: 22px;
          height: 6px;
        }
      }
      & > div:nth-of-type(2) {
        // display: flex;
        // flex-wrap: wrap;
        // justify-content: space-between;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px 10px;
        margin-bottom: 13px;
        & > div {
          display: flex;
          flex-direction: column;
          align-items: center;
          & > div:nth-of-type(1) {
            & img {
              width: 70px;
              height: 70px;
            }
          }
        }
      }
    }
  }
  }
</style>