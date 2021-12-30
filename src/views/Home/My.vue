<template>
  <div class="home">
    <van-sticky class="wrap">
      <nav>
        <div>
          <van-icon name="user-circle-o" size="20" /><van-icon
            name="setting-o"
            size="20"
            @click="toSetting"
          />
          <van-icon name="chat-o" badge="9" size="20" />
        </div>
      </nav>
    </van-sticky>
    <div class="avator">
      <div class="avator_img">
        <van-image
          round
          width="50px"
          height="50px"
          :src="require('../../assets/images/9.png')"
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
        <div class="plus_one ft-10">
          <img src="@/assets/images/title-1.png" alt="" class="title_img" />
          <span></span>
          <span>购物十倍返京豆</span>
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
          <div
            v-for="statu in routes[1].children"
            :key="statu.text"
            @click="toLink(statu.name)"
          >
            <van-badge :content="statu.num" v-if="statu.num" />
            <van-icon :name="statu.meta.icon" size="25" />
            <span>{{ statu.meta.title }}</span>
          </div>
        </div>
        <div class="status_footer ft-10 gary">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div>查看电子发票</div>
        </div>
      </div>
      <div class="wallet">
        <div class="wallet_main">
          <div
            v-for="wallet in walletData"
            :key="wallet.text"
            class="main_left"
          >
            <span class="ft-15">{{ wallet.num }}</span>
            <span>{{ wallet.text }}</span>
          </div>
          <div>
            <van-icon name="pending-payment" size="25" />
            <span>我的钱包</span>
          </div>
        </div>
        <div class="wallet_footer ft-10 gary">
          <div>签到领京豆</div>
          <div>下单立省</div>
          <div>积分还白条</div>
          <div>秒批额度</div>
        </div>
      </div>
      <div class="game">
        <div v-for="game in gameData" :key="game.text">
          <van-image
            width="25"
            height="25"
            :src="require('../../assets/images/' + game.icon + '.png')"
          /><span>{{ game.text }}</span>
        </div>
      </div>
      <div class="serve">
        <div v-for="serve in recommendData" :key="serve.text">
          <van-image
            width="25"
            height="25"
            :src="require('../../assets/images/' + serve.icon + '.png')"
          />
          <span>{{ serve.text }}</span>
        </div>
      </div>
      <div class="recommend">
        <div class="recommend_top">
          <div><span>快乐网民GO ></span></div>
          <div>
            <van-tag round type="primary"
              ><van-icon name="replay" />标签</van-tag
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
export default {
  data() {
    return {
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
      walletData: [
        {
          num: "1128",
          text: "京豆",
        },
        {
          num: "1",
          text: "优惠券",
        },
        {
          num: "1128",
          text: "白条",
        },
        {
          num: "0.00",
          text: "京东金条",
        },
      ],
      gameData: [
        {
          icon: "ma",
          text: "东东农场",
        },
        {
          icon: "red",
          text: "签到领豆",
        },
        {
          icon: "pig",
          text: "东东萌宠",
        },
        {
          icon: "pig2",
          text: "宠汪汪",
        },
        {
          icon: "star",
          text: "东东爱消除",
        },
      ],
      recommendData: [
        {
          icon: "blue",
          text: "客户服务",
        },
        {
          icon: "cat",
          text: "寄件服务",
        },
        {
          icon: "doctor",
          text: "问医生",
        },
        {
          icon: "receive",
          text: "闲置换钱",
        },
        {
          icon: "try",
          text: "新品试用",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["routes"]),
  },
  methods: {
    toLink(name) {
      this.$router.push({ name: name });
    },
    toSetting() {
      this.$router.push({ name: "Setting" });
    },
  },
};
</script>
<style lang="less" scoped>
::-webkit-scrollbar {
  width: 0;
}
.ft-10 {
  font-size: 10px;
}
.ft-15 {
  font-size: 15px;
  font-weight: bold;
}
.ft-cr {
  color: #5a4016;
}
.gary {
  color: #9d9d9d;
}
::v-deep .van-tag {
  padding: 0 5px;
}
::v-deep .van-icon-replay {
  margin-right: 5px;
}
.bottom_gray {
  font-size: 9px;
  transform: scale(0.9);
  color: #848484;
  margin-top: 5px;
}
::v-deep .van-sticky--fixed {
  top: 6px;
  right: 12px;
}
nav {
  display: flex;
  justify-content: flex-end;
  & > div {
    width: 95px;
    display: flex;
    justify-content: space-between;
  }
}
.home {
  background-image: linear-gradient(#eca641, #f1f1f1 30%);
  padding: 12px;
  text-align: center;
  height: 90vh;
  overflow-y: auto;
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
      padding: 0 10px;
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
      position: relative;
      & > .plus_one {
        margin-top: 12px;
      }
      & > .ft-10 {
        color: #a18048;
        & > .title_img {
          width: 120px;
          height: 23px;
          position: absolute;
          top: -1px;
          left: -3px;
        }
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
        display: flex;
        justify-content: space-around;
        align-items: center;
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
      & > .status_main {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 65px;
        & > div {
          margin-top: 16.5px;
          display: flex;
          flex-flow: column;
          position: relative;
          & > ::v-deep .van-badge {
            position: absolute;
            top: -5px;
            right: 2px;
            z-index: 1;
          }
        }
      }
      & > .status_footer {
        display: flex;
        justify-content: space-between;
      }
    }
    & > .wallet {
      height: 85px;
      & > .wallet_main {
        display: flex;
        justify-content: space-around;
        align-items: center;
        & > div {
          margin-top: 20px;
          display: flex;
          flex-flow: column;
        }
      }
      & > .wallet_footer {
        margin-top: 6px;
        width: 242px;
        display: flex;
        justify-content: space-between;
      }
    }
    & > .game,
    .serve {
      height: 80px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      & > div {
        display: flex;
        flex-flow: column;
        align-items: center;
        & > span {
          margin-top: 8px;
        }
      }
    }
    & > .recommend {
      height: 65px;
      & > .recommend_top {
        display: flex;
        justify-content: space-between;
        & > div {
          margin-top: 10px;
        }
      }
    }
  }
}
</style>

