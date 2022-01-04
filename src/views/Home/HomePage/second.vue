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
      <h1>品牌精选</h1>
      <van-grid :column-num="4" :border="false">
        <van-grid-item
          v-for="(value, index) in brand"
          :key="index"
          :icon="value.icon"
          :text="value.text"
        />
      </van-grid>
    </section>
    <section class="hot">
      <section>
        <section class="hot-t">
          <h4>热卖榜</h4>
          <section class="hot-img">
            <img src="../../../assets/images/phone.png" alt="" srcset="" />
          </section>
        </section>
        <section class="hot-f">
          <h3>huawei</h3>
          <br />
          <span>19.2万人买过</span>
        </section>
      </section>
      <section>
        <section class="hot-t">
          <h4>热卖榜</h4>
          <section class="hot-img">
            <img src="../../../assets/images/phone.png" alt="" srcset="" />
          </section>
        </section>
        <section class="hot-f w">
          <h3>iPhone</h3>
          <br />
          <span>29.2万人买过</span>
        </section>
      </section>
      <section>
        <section class="hot-t">
          <h4>热卖榜</h4>
          <section class="hot-img">
            <img src="../../../assets/images/phone.png" alt="" srcset="" />
          </section>
        </section>
        <section class="hot-f h">
          <h3>HONOR</h3><br />
          <span>16.2万人买过</span>
        </section>
      </section>
    </section>
    <section>
      <h1>京挑会选</h1>
    </section>
    <section>
      <section class="goods">
        <section class="goods-upper">
          <section class="goods-img">
            <img src="../../../assets/images/phone.png" alt="" srcset="">
          </section>
        </section>
        <section class="goods-lower">
          <span>自营</span>
        </section>
        
      </section>
    </section>
    <section class="footer"></section>
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
      brand: [
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
      ],
    };
  },
};
</script>
<style lang="less" scoped>
h3,
h4 {
  margin: 0;
  padding: 0;
}
.wrap {
  padding: 15px;
  background-color: #f1f3f2;
  box-sizing: border-box;
  text-align: center;
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
  & .choiceness {
    margin-top: 10px;
    border-radius: 10px;
    background-color: #fff;
    padding: 2px;
    & > h1 {
      padding: 0 20px;
    }
  }
  & .hot {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    & > section {
      width: 32%;
      height: 160px;
      background-color: white;
      border-radius: 10px;
      text-align: center;
      & .hot-t {
        & > h4 {
          padding: 10px 0 5px 0;
        }
        & .hot-img {
          height: 80px;
        }
      }
      & .hot-f {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        height: 45px;
        margin-top: 5px;
        background-color: rgb(237, 233, 234);
        border-radius: 0 0 10px 10px;
        color: #fff;
      }
      & .w{
        background-color: rgb(255, 215, 0);
      }
      & .h{
        background-color: rgb(186, 170, 64);
      }
    }
  }
  & .goods{
    width: 45%;
    & .goods-upper{
      height: 121px;
      padding: 15px 0;
      background-color: white;
      & .goods-img{
        width: 100px;
        height: 121px;
        background-color: beige;
        margin: 0 auto;
        &>img{
          width: 100%;
        }
      }
    }
    & .goods-lower{
      height: 60px;
      text-align: left;
      &>span{
        display: inline-block;
        background-color: rgb(234, 111, 54);
        color: #fff;
        border-radius: 2px;
        padding: 1px 3px;
      }

    }

  }
  & .footer {
    height: 120px;
    background-color: #fff;
    margin-top: 10px;
  }
}
::v-deep .van-grid-item__content {
  padding: 5px;
}
</style>