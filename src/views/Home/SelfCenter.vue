<template>
  <div>
    <div class="auto">
      <div class="header">
        <div class="left">
          <van-icon name="arrow-left" />
          <div class="left-right">
            <van-image round width="50px" height="50px" :src="require('../../assets/selfCenter/head.png')" />
            <span>个人空间</span>
          </div>
        </div>
        <div class="right">
            <van-image @click="AccountSettings" round width="50px" height="50px" :src="require('../../assets/selfCenter/liubian.png')" />
            <van-image @click="showShare = true" round width="50px" height="50px" :src="require('../../assets/selfCenter/fenxiang.png')" />
            <van-share-sheet
              v-model="showShare"
              title="分享到"
              :options="options"
              @select="onSelect"
            />
            <button @click="PrivacySettings">隐私设置</button>
        </div>
      </div>
        <div class="main">
          <div class="friend">
            <div class="top">
              <div>你与京东的1013天</div>
              <img src="../../assets/selfCenter/yan.png" alt="">
            </div>
            <div class="yellow">
              <div class="font">
                <div class="top">京东好友</div>
                <img src="../../assets/selfCenter/right.png" alt="">
              </div>
            </div>
          </div>
          <div class="bill" @click="MonthlyBill">
            <div>月度账单</div>
            <img src="../../assets/selfCenter/rightr.png" alt="">
          </div>
        </div>
        <div class="money">
          <div class="specific">
            <div>总共下单</div>
            <div>0笔</div>
          </div>
          <div class="specific">
            <div>总共消费</div>
            <div>0笔</div>
          </div>
          <div class="specific">
            <div>累计节省</div>
            <div>0笔</div>
          </div>
        </div>
    </div>
    <div class="big">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :loop="false" :show-indicators="false">
        <van-swipe-item>
            <div class="medal">
              <div class="left">
                <div>
                  <img src="../../assets/selfCenter/xia.png" alt="">
                  <div>生鲜勋章</div>
                </div>
                <div>
                  <img src="../../assets/selfCenter/jiqiren.png" alt="">
                  <div>数码勋章</div>
                </div>
                <div>
                  <img src="../../assets/selfCenter/shu.png" alt="">
                  <div>图书勋章</div>
                </div>
                <div>
                  <img src="../../assets/selfCenter/muyying.png" alt="">
                  <div>母婴勋章</div>
                </div>
              </div>
              <div class="right">
                <div>更多勋章</div>
                <img src="../../assets/selfCenter/right.png" alt="">
              </div>
            </div>
        </van-swipe-item>
        <van-swipe-item>
        <div class="evaluate">
          <div class="exclusive">
            <div class="top">海量专属特权在向你招手</div>
            <div class="bottom">参与编写优质评价即可成为评估价官</div>
          </div>
          <div class="look">
            <div>去看看</div>
            <div><img src="../../assets/selfCenter/right.png" alt=""></div>
          </div>
        </div>
        </van-swipe-item>
      </van-swipe>
      <div class="bill">
        <div class="temperament">
          <div class="top">
            <div>你的2021年度账单</div>
            <img src="../../assets/selfCenter/red.png" alt="">
          </div>
          <div class="bottom">“账”量你的购物气质</div>
        </div>
      </div>
    </div>
    <div class="single">
      <van-tabs v-model="active">
        <van-tab title="评价晒单">
          <div class="makeMoney">
            <div class="Jingdou">
              <div>评价官“赚钱”攻略</div>
              <div>两倍京豆奖励了解一下？</div>
              <div class="btn_look">
                <div class="look_item">去看看</div>
              </div>
            </div>
          </div>
          <div class="publish">你还未发表过评价，快去发表吧</div>
        </van-tab>
        <van-tab title="有奖晒单">内容 2</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
   data() {
    return {
      active:'1',
      showShare: false,
      options: [
        { name: '微信好友', icon: 'wechat' },
        { name: '朋友圈', icon: 'wechat-moments' },
        { name: 'QQ好友', icon: 'qq' },
        // { name: 'QQ空间', icon: 'qq-zone' },
        { name: '新浪微博', icon: 'weibo' },
        { name: '复制链接', icon: 'link' },
      ]
    }
  },
  methods:{
    PrivacySettings(){
      this.$router.push({
        name:'PrivacySettings'
       })
    },
    AccountSettings(){
      this.$router.push({
        name:'AccountSettings'
      })
    },
    MonthlyBill(){
      this.$router.push({
        name:'MonthlyBill'
      })
    },
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
  }
};
</script>

<style lang="less" scoped>
::v-deep .van-image{
  height: 25px !important;
  width: 25px !important;
}
.auto{
  background-image: linear-gradient(to right, #fd22a6 , red);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  position: relative;
}
.header{
  display: flex;
  justify-content: space-around;
  padding-top: 15px;
  & .left{
      width: 130px;
      height: 25px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: white;
      line-height: 25px;
      & .left-right{
        width: 103px;
        display: flex;
        justify-content: space-around;
      }
   }
   & .right{
     width: 150px;
     height: 25px;
     display: flex;
     justify-content: space-around;
     align-items: center;
     & ::v-deep .van-image{
       width: 19px !important;
       height: 19px !important;
     }
      & button{
        width: 73px;
        height: 25px;
        background-color: transparent;
        border-radius: 10px;
        border: 1px solid white;
        color: white;
      }
   }
}
.main{
  width: 327px;
  height: 85px;
  margin: 0 auto;
  margin-top: 33px;
  background-image: url(../../assets/selfCenter/jinhong.png);
  background-size: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & .friend{
    width: 183px;
    height: 50px;
    color: #964f07;
    font-size: 18px;
    font-weight: 600;
    & .top{
      display: flex;
      justify-content: space-around;
      align-items: center;
        & img{
          width: 15px;
          height: 15px;
        }
    }
    & .yellow{
        width: 89px;
        height: 22px;
        background-image: url(../../assets/selfCenter/yellowren.png);
        background-size: 100%;
        margin-top: 10px;
        & .font{
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 70px;
          float: right;
            & .top{
              font-size: 12px;
              line-height: 22px;
              text-align: center;
            }
            & img{
              width: 5px;
            }
          }
      }
  }
  & .bill{
    height: 15px;
    color: red;
    font-size: 13px;
    font-weight:900;
    display: flex;
    align-items: center;
    justify-content: space-around;
    & img{
      width: 8px;
      height: 15px;
    }
  }
}
.money{
  width: 300px;
  height: 40px;
  margin: 18px auto 0;
  margin-bottom: -10px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 37px;
  & .specific{
    width: 60px;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:white;
    font-size: 13px;
  }
}
.big{
  background-color: #f2f2f2;
  margin-top: -28px;
  padding: 5px 0;
    & .evaluate{
    width: 348px;
    height: 90px;
    margin: 0 auto;
    border-radius: 10px;
    position: relative;
    z-index: 600;
    display: flex;
    background-image: url(../../assets/selfCenter/ping.png);
    background-size: 100%;
    & .exclusive{
      height: 50px;
      margin: 25px 40px 20px 80px;
      & .top{
        width: 180px;
        height: 21px;
        background-color: #bb640d;
        color: white;
        font-size: 16px;
        text-align: center;
      }
      & .bottom{
        color: red;
        font-size: 12px;
        font-weight: 800;
        margin-top: 5px;
      }
    }
    & .look{
      width: 25px;
      height: 50px;
      margin: 20px 3px 0 0;
      display: flex;
      align-items: center;
      color: #9e5f14;
      & img{
        width: 5px;
      }
    }
  }
  & .medal{
    width: 348px;
    height: 90px;
    margin: 0 auto;
    background-image: url(../../assets/selfCenter/bei.png);
    background-size: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    & .left{
      width: 300px;
      display: flex;
      justify-content: space-around;
      text-align: center;
      color: #875111;
      & img{
        width: 60px;
        height: 52px;
      }
    }
    & .right{
      width: 25px;
      height: 75px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: #875111;
      font-weight: 600;
      & img{
        width: 5px;
        height: 10px;
      }
    }
  }
  & .bill{
    width: 351px;
    height: 54px;
    margin: 15px auto;
    border-radius: 30px;
    background-image: url(../../assets/selfCenter/bottle.png);
    background-size: 100%;
    display: flex;
    align-items: center;
    & .temperament{
      height: 35px;
      margin: 0 0 0 19px;
      display: flex;
      flex-direction: column;
      & .top{
        font-size: 17px;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & img{
          width: 15px;
          height: 15px;
        }
      }
      & .bottom{
        font-size: 13px;
      }
    }
  }
}
.single{
  width: 100%;
  margin-top: -10px;
  background-color: white;
  & van-tabs{
    text-align: center;
  }
  & .makeMoney{
    width: 350px;
    height: 95px;
    background-image: linear-gradient(to right, #f1e67c , #ffb662);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    & .Jingdou{
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      & :nth-of-type(1){
        font-size: 17px;
        font-weight: 600;
      }
      & :nth-of-type(2){
        font-size: 13px;
        margin: 5px;
      }
      & .btn_look{
        border: 1px solid black;
        border-radius: 20px;
        width: 66px;
        height: 22px;
        text-align: center;
        & .look_item{
        font-size: 12px;
        transform: scale(0.9);
        line-height: 22px;
        }
      }
    }
  }
    & .publish{
      color: #8f8f90;
      margin: 10px 0 0 0;
    }
}
::v-deep .van-tabs__line{
  bottom: 25px;
  width: 20px;
  
}
::v-deep .van-tab__pane{
  display: flex;
  justify-content: center;
  margin: 10px 0 0 0;
  flex-direction: column;
  align-items: center;
}
::v-deep .van-tab--active{
  font-weight: 700;
}
</style>