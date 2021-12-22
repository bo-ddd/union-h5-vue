<template>
  <div class="home">
    <nav>
      <div>
        <van-icon name="user-circle-o" size="20" /><van-icon
          name="setting-o"
          size="20"
        />
        <van-icon name="chat-o" badge="9" size="20" />
      </div>
    </nav>
    <div class="avator">
      <div class="avator_img">
        <van-image
          round
          width="50px"
          height="50px"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
      <div class="userinfo">
        <span class="username">欢迎来到对抗路</span>
        <div class="avator_tab">
          <span>京享值4861></span><span>小白守约458分></span>
          <span>家庭号></span>
        </div>
      </div>
    </div>
    <section class="mian">
      <div class="plus">
        <div class="plus_one ft-10">购物十倍返京豆</div>
        <div>
          <van-image
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
            width="35px"
            height="35px"
            radius="10px"
          >
          </van-image>
          <div>
            <span class="ft-cr">海尔直降></span
            ><span class="ft-10">赠PLUS</span>
          </div>
        </div>
        <div>
          <van-image
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
            width="35px"
            height="35px"
            radius="10px"
          >
          </van-image>
          <div>
            <span class="ft-cr">开PLUS></span
            ><span class="ft-10">领20元券</span>
          </div>
        </div>
      </div>
      <div class="order_status">
        <div class="status_top">
          <div>
            <van-icon name="star-o" size="16" class="top_icon" />商品收藏25
          </div>
          <div>
            <van-icon name="shop-o" size="16" class="top_icon" />店铺关注15
          </div>
          <div>
            <van-icon name="underway-o" size="16" class="top_icon" />浏览记录47
          </div>
        </div>
        <div class="status_main">
          <div>
            <van-icon name="credit-pay" />
            <p>待付款</p>
          </div>
        </div>
        <div class="status_footer">

        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.ft-10 {
  font-size: 10px;
}
.ft-cr {
  color: #5a4016;
}
::v-deep .van-grid-item__content {
  padding: 16px 0!important;
}
.bottom_gray {
  font-size: 9px;
  transform: scale(0.9);
  color: #848484;
  margin-top: 5px;
}
.home {
  background-color: #f1f1f1;
  padding: 12px;
  overflow-y:scroll;
  & > nav {
    display: flex;
    justify-content: flex-end;

    & > div {
      width: 95px;
      display: flex;
      justify-content: space-between;
    }
  }
  & > .avator {
    display: flex;
    & > .userinfo {
      margin-left: 12px;
      text-align: left;
      & > .username {
        font-size: 20px;
        font-weight: bolder;
      }
      & > .avator_tab {
        margin-top: 8px;
        & > span {
          margin-left: 10px;
        }
      }
    }
  }
  & > .mian {
    width: 350px;
    & > div {
      padding: 10px;
      margin-top: 8px;
      background-color: #ffffff;
      border-radius: 5px;
    }
    & > .plus {
      height: 55px;
      display: flex;
      justify-content: space-between;
      background-color: #fefbea;
      align-items: center;
      & > .ft-10 {
        color: #a18048;
      }
      & > div {
        display: flex;
        & > div {
          display: flex;
          flex-flow: column;
          text-align: left;
          margin-left: 5px;
          & > .ft-10 {
            color: #a18048;
          }
        }
      }
    }
    & > .order_status {
      height: 125px;
      & > .status_top {
        height: 40px;
        line-height: 40px;
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid #f3f3f3;
        font-size: 12px;
        font-weight: bold;
        & > div {
          display: flex;
          align-items: center;
          & > .top_icon {
            margin-right: 5px;
          }
        }
      }
    }
 }
}
</style>

