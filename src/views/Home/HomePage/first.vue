<template>
  <div class="wrap">
    <section class="banner">
      <section class="carousel">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img src="../../../assets/images/img1.png" alt="" />
          </van-swipe-item>
          <van-swipe-item>
            <img src="../../../assets/images/img2.png" alt=""
          /></van-swipe-item>
          <van-swipe-item>
            <img src="../../../assets/images/img3.png" alt=""
          /></van-swipe-item>
          <van-swipe-item>
            <img src="../../../assets/images/img4.png" alt=""
          /></van-swipe-item>
        </van-swipe>
      </section>
    </section>
    <section>
      <van-grid :column-num="5" :border="false">
        <van-grid-item
          v-for="(value, index) in values"
          :key="index"
          :icon="value.icon"
          :text="value.text"
        />
      </van-grid>
    </section>
    <section class="main">
      <section class="main-top"></section>
      <section class="main-middle">
        <section class="top" @click="toSelected">
          <section class="top_header">
            <h2>排行榜</h2>
            <h4>大家都在买</h4>
          </section>
          <section class="top_bd">
            <section class="img-o">
              <img src="../../../assets/images/sofa-1.png" alt="" />
            </section>
            <section class="img-t">
              <img src="../../../assets/images/shoe.png" alt="" />
            </section>
          </section>
        </section>
        <section class="find">
          <section class="find_header" @click="toFindGoodsHome">
            <h2>发现好货</h2>
            <h4>美好新生活</h4>
          </section>
          <section class="find_bd">
            <section class="img-o">
              <img src="../../../assets/images/sofa-2.png" alt="" />
            </section>
            <section class="img-t">
              <img src="../../../assets/images/watch.png" alt="" />
            </section>
          </section>
        </section>
      </section>
      <section class="main-bottom"></section>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      values: [
        {
          icon: require("../../../assets/images/JD-1.png"),
          text: "超市",
        },
        {
          icon: require("../../../assets/images/JD-2.png"),
          text: "电脑",
        },
        {
          icon: require("../../../assets/images/clothes.png"),
          text: "服装",
        },
        {
          icon: require("../../../assets/images/fruit.png"),
          text: "水果",
        },
        {
          icon: require("../../../assets/images/JD-1.png"),
          text: "手机",
        },
        {
          icon: require("../../../assets/images/water.png"),
          text: "生活",
        },
        {
          icon: require("../../../assets/images/JD-1.png"),
          text: "手机",
        },
        {
          icon: require("../../../assets/images/JD-1.png"),
          text: "手机",
        },
        {
          icon: require("../../../assets/images/JD-1.png"),
          text: "手机",
        },
        {
          icon: require("../../../assets/images/JD-1.png"),
          text: "手机",
        },
      ],
    };
  },
  methods: {
    toSelected(){
      this.$router.push({name:"Selected"})
    },
    toFindGoodsHome(){
      this.$router.push({name:"FindGoodsHome"})
    }
  },
};
</script>
<style lang="less" scoped>
h2,
h4 {
  padding: 0;
  margin: 0;
}
.wrap {
  background-color: #f1f3f2;
  padding: 10px;
  & .banner {
    display: flex;
    justify-content: center;
    height: 200px;
    box-sizing: border-box;
    & .carousel {
      width: 350px;
      border-radius: 15px;
      & .my-swipe .van-swipe-item {
        & > img {
          width: 350px;
          height: 120px;
          border-radius: 5px;
        }
      }
    }
  }
  & .main {
    background-color: #fff;
    border-radius: 5px;
    margin-top: 10px;
    & .main-top {
      height: 120px;
      background-color: #fff;
      border-radius: 5px 5px 0 0;
      background-image: linear-gradient(#fdf7f7, #fff);
    }
    & .main-middle {
      display: flex;
      justify-content: space-between;
      padding: 8px 13px;
      background-image: linear-gradient(#fdf7f7, #fff);
      border-radius: 5px 5px 0 0;
      box-sizing: border-box;
      & .top {
        width: 46%;
        & .top_header {
          & > h4 {
            color: rgb(193, 117, 42);
          }
        }
        & .top_bd {
          & > .img-o {
            float: left;
            margin-top: 10px;
            margin-right: 20px;
            width: 40%;
            height: 70px;
            display: flex;
            align-items: center;

            & > img {
              width: 100%;
            }
          }
          & > .img-t {
            display: flex;
            align-items: center;
            float: right;
            margin-top: 10px;
            width: 40%;
            height: 70px;
            & > img {
              width: 100%;
            }
          }
        }
      }
      & .find {
        width: 46%;
        & .find_header {
          & > h4 {
            color: rgb(46, 195, 163);
          }
        }
        & .find_bd {
          & > .img-o {
            float: left;
            margin-top: 10px;
            width: 40%;
            height: 70px;
            display: flex;
            align-items: center;
            & > img {
              width: 100%;
            }
          }
          & > .img-t {
            display: flex;
            align-items: center;
            float: right;
            margin-top: 10px;
            width: 40%;
            height: 70px;
            & > img {
              width: 100%;
            }
          }
        }
      }
 
    }
    & .main-bottom {
      height: 120px;
      background-color: #fff;
      border-radius: 5px;
      background-image: linear-gradient(#fdf7f7, #fff);
    }
  }
  ::v-deep .van-grid-item__content {
    padding: 5px;
    background-color: #f1f3f2;
  }
}
</style>
