<template>
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
</template>

<script>
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload);
export default {
  data() {
    return {
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
};
</script>

<style lang="less" scoped>
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
