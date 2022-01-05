<template>
  <div class="wrap">
      <div class="top-title">
        <div class="top_left"><img @click="toMy" src="../assets/walletIcon/icon_left.png" alt="" srcset=""></div>
        <div class="top_text">我的钱包</div>
        <div class="top_right">
          <span>账单</span>
        </div>
      </div>
      <div class="top_card">
        <div class="card_title">
          <div class="card_title_left">
            <span>我的资产</span><img src="../assets/walletIcon/icon_eye.png" alt="" srcset="">
          </div>
          <div class="card_title_right">
            <img src="../assets/walletIcon/icon_question.png" alt="" srcset="">
          </div>
        </div>
        <div class="card_main">
          <div class="main_item">
            <div>余额</div>
            <div class="item_box">
              <span>￥</span><span class="item_center">0</span><span>.00</span>
            </div>
          </div>
          <div class="main_item">
            <div>红包</div>
            <div class="item_box">
              <span>￥</span><span class="item_center">0</span><span>.00</span>
            </div>
          </div>
          <div class="main_item">
            <div>银行卡</div>
            <div class="item_box">
              <span class="item_center">0</span><span>张</span>
            </div>
          </div>
        </div>
        <div class="card_bottom">
          <div class="foot_item">
            <div class="item_top">优惠券</div>
            <div class="item_bottom">
              <span class="item_text">1</span><span>张</span>
            </div>
          </div><span>|</span>
          <div class="foot_item">
            <div class="item_top">礼品卡</div>
            <div class="item_bottom">
              <span class="item_text">1</span><span>张</span>
            </div>
          </div><span>|</span>
          <div class="foot_item">
            <div class="item_top">京豆</div>
            <div class="item_bottom">
              <span class="item_text">101</span>
            </div>
          </div><span>|</span>
          <div class="foot_item">
            <div class="item_top">金贴</div>
            <div class="item_bottom">
              <span>￥</span><span class="item_text">0.00</span>
            </div>
          </div>
        </div>
      </div>
      <div class="financialService">金融服务</div>
      <div class="vault_box">
        <div class="vault_title">
          <span class="vault_text">小金库</span>
          <span class="division">|</span>
          <span class="written">收益天天算 余额赚收益</span>
        </div>
        <div class="vault_main">
          <div class="vault_main_item">
            <img src="../assets/walletIcon/icon_pig.png" alt="">
            <div class="item_text_box">
              <span class="text_title">能赚会花</span>
              <div class="text_content">年化收益2.8850%</div>
            </div>
          </div>
          <div class="vault_main_item">
            <img src="../assets/walletIcon/icon_convenientPayment.png" alt="">
            <div class="item_text_box">
              <span class="text_title">支付便捷</span>
              <div class="text_content">灵活取便捷花</div>
            </div>
          </div>
        </div>
        <div class="vault_btn">
            转一笔试试
        </div>
      </div>
      <div class="goldWhiteStrip">
        <div class="strip_tiem">
          <div class="strip_type">金条</div>
          <div class="strip_amount"><span>200000.</span><span class="strip_num">00</span></div>
          <div class="strip_max">最高可用</div>
          <div class="strip_btn">马上借款</div>
        </div>
        <div class="strip_tiem">
          <div class="strip_type">白条</div>
          <div class="strip_amount"><span>50000.</span><span class="strip_num">00</span></div>
          <div class="strip_max">最高可用</div>
          <div class="strip_btn">立即查看</div>
        </div>
      </div>
      <div class="goldBean">
        <!-- 338 72 -->
        <div class="gold_item">
          <img src="../assets/walletIcon/icon_goldenBean.png" alt="">
          <div class="gold_textBox">
            <span>免费领黄金豆</span>
            <div>可投资可提现</div>
          </div>
        </div>
      </div>
      <div class="qualityAssistant">优质助手</div>
      <div class="iconbox">
        <div class="icon_row">
          <div class="row_item">
            <div class="imgbox">
              <img src="../assets/walletIcon/icon_businessCircles.png" alt="">
            </div>
            <div class="textbox">工银小白</div>
          </div>
          <div class="row_item">
            <div class="imgbox">
              <img src="../assets/walletIcon/icon_digitalCurrency.png" alt="">
            </div>
            <div class="textbox">数字人民币</div>
          </div>
          <div class="row_item">
            <div class="imgbox">
              <img src="../assets/walletIcon/icon_expansiveGold.png" alt="">
            </div>
            <div class="textbox">膨胀金</div>
          </div>
          <div class="row_item">
            <div class="imgbox">
              <img src="../assets/walletIcon/icon_preferential.png" alt="">
            </div>
            <div class="textbox">银行特惠</div>
          </div>
        </div>
        <div class="icon_row">
          <div class="row_item">
            <div class="imgbox">
              <img src="../assets/walletIcon/icon_brandcard.png" alt="">
            </div>
            <div class="textbox">品牌卡包</div>
          </div>
          <div class="row_item">
            <div class="imgbox">
              <img src="../assets/walletIcon/icon_integral.png" alt="">
            </div>
            <div class="textbox">领积分</div>
          </div>
          <div class="row_item">
            <div class="imgbox">
              <img src="../assets/walletIcon/icon_white.png" alt="">
            </div>
            <div class="textbox">小白守约</div>
          </div>
          <div class="row_item">
            <div class="imgbox">
              <img src="../assets/walletIcon/icon_creditcard.png" alt="">
            </div>
            <div class="textbox">信用卡</div>
          </div>
        </div>
        <div class="icon_row">
          <div class="row_item">
            <div class="imgbox">
              <img src="../assets/walletIcon/icon_recharge.png" alt="">
            </div>
            <div class="textbox">充值</div>
          </div>
          <div class="row_item">
            <div class="imgbox">
              <img src="../assets/walletIcon/icon_guarantee.png" alt="">
            </div>
            <div class="textbox">我的保障</div>
          </div>
          <div class="row_item">
            <div class="imgbox">
              <img src="../assets/walletIcon/icon_repayment.png" alt="">
            </div>
            <div class="textbox">信用卡还款</div>
          </div>
          <div class="row_item">
            <div class="imgbox">
              <img src="../assets/walletIcon/icon_regular.png" alt="">
            </div>
            <div class="textbox">定期还款</div>
          </div>
        </div>
        <div class="icon_row">
          <div class="row_item">
            <div class="imgbox">
              <img src="../assets/walletIcon/icon_receive.png" alt="">
            </div>
            <div class="textbox">领货码</div>
          </div>
          <div class="row_item">
            <div class="imgbox">
              <img src="../assets/walletIcon/icon_invoice.png" alt="">
            </div>
            <div class="textbox">发票助手</div>
          </div>
          <div class="row_item">
            <div class="imgbox">
              <img src="../assets/walletIcon/icon_coupons.png" alt="">
            </div>
            <div class="textbox">兑换券</div>
          </div>
          <div class="row_item">
            <div class="imgbox">
              <img src="../assets/walletIcon/icon_steel.png" alt="">
            </div>
            <div class="textbox">钢镚</div>
          </div>
        </div>
        <div class="icon_row">
          <div class="row_item">
            <div class="imgbox">
              <img src="../assets/walletIcon/icon_whitenote.png" alt="">
            </div>
            <div class="textbox">白条取现</div>
          </div>
          <div class="row_item">
            <div class="imgbox">
              <img src="../assets/walletIcon/icon_enterprise.png" alt="">
            </div>
            <div class="textbox">企业主贷</div>
          </div>
          <div class="row_item">
            <div class="imgbox">
              <img src="../assets/walletIcon/icon_paymentCode.png" alt="">
            </div>
            <div class="textbox">付款码</div>
          </div>
          <div class="row_item">
            <div class="imgbox">
              <img src="../assets/walletIcon/icon_flashPayment.png" alt="">
            </div>
            <div class="textbox">京东闪付</div>
          </div>
        </div>
        <div class="icon_row">
          <div class="row_item">
            <div class="imgbox">
              <img src="../assets/walletIcon/icon_cashGift.png" alt="">
            </div>
            <div class="textbox">首购礼金</div>
          </div>
          <div class="row_item">
            <div class="imgbox">
              <img src="../assets/walletIcon/icon_publicWelfare.png" alt="">
            </div>
            <div class="textbox">订单公益</div>
          </div>
          <div class="row_item">
            <div class="imgbox">
              <img src="../assets/walletIcon/icon_family.png" alt="">
            </div>
            <div class="textbox">家庭应急金</div>
          </div>
          <div class="row_item">
            <div class="imgbox">
              <img src="../assets/walletIcon/icon_cardoffer.png" alt="">
            </div>
            <div class="textbox">车险报价</div>
          </div>
        </div>
        <div class="icon_row">
          <div class="row_item">
            <div class="imgbox">
              <img src="../assets/walletIcon/icon_security.png" alt="">
            </div>
            <div class="textbox">账户安全</div>
          </div>
          <div class="row_item">
            <div class="imgbox">
              <img src="../assets/walletIcon/icon_pets.png" alt="">
            </div>
            <div class="textbox">宠物健康</div>
          </div>
          <div class="row_item">
            <div class="imgbox">
              <img src="../assets/walletIcon/icon_reserve.png" alt="">
            </div>
            <div class="textbox">家庭储备金</div>
          </div>
          <div class="row_item">
            <div class="imgbox">
              <img src="../assets/walletIcon/icon_goldPaste.png" alt="">
            </div>
            <div class="textbox">领金贴</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    methods: {
    toMy(){
     this.$router.push({
       name:'My',
     })
    },
  }
}
</script>

<style  scoped lang="less">
.wrap{
  width: 100%;
  background-color: #f2f2f2;
  & .top-title{
    width: 350px;
    height: 50px; 
    font-size: 17px;
    text-align: center;
    line-height: 50px;
    margin: 0 auto;
    display: flex;
    & .top_left{
      width: 116px;
      height: 50px;
      display: flex;
      justify-content: left;
      align-items: center;
      & >img{
        width: 8.8px;
        padding-left: 11px;
      }
    }
    & .top_text{
      width: 116px;
      height: 50px;
      color: #191919;
      text-align: center;
      line-height: 50px;
      font-size: 17px;
    }
    & .top_right{
      width: 116px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: right;
      & >span{
          color: #191919;
          font-size: 15px;
          padding-right: 10px;
      }
    }
  }
  & .top_card{
    height: 200px;
    width: 350px;
    margin: 0 auto;
    background-color: #fb523a;
    border-radius: 12px;
    border:1px solid #fff;
    & .card_title{
      width: 350px;
      height: 18px;
      margin-top: 23px;
      line-height: 18px;
      display: flex;
      justify-content: space-between;
      & .card_title_left{
        display: flex;
        & >span{
          color: white;
          font-size: 16px;
          padding-left: 17px;
          font-weight: 700;
        }
        & >img{
          width: 18px;
          margin-left: 5px;
        }
      }
      & .card_title_right{
        & > img{
          width: 18px;
          padding-right:13px ;
        }
      }
    }
    & .card_main{
      width: 295px;
      height: 49px;
      margin:0 auto;
      margin-top: 24px;
      display: flex;
      justify-content: space-between;
      & .main_item{
        width: 50px;
        & > div{
          width: 100%;
          text-align: center;
          margin-bottom: 10px;
          color: white;
          font-size: 13px;
        }
       & .item_box{
          width: 100%;
          text-align: center;
          & .item_center{
            font-size: 22px;
            color: white;
            font-weight: 700;
          }
          & >span{
            color: white;
          }
        }
      }
    }
    & .card_bottom{
      width: 100%;
      height: 62px;
      margin-top: 24px;
      background-image: linear-gradient(to right, #fc432a , #ff6f3a);
      border-radius: 0px 0px 12px 12px;
      display: flex;
      align-items: center;
      & >span{
        color: #ff8157;
        height: 20px;
      }
      & .foot_item{
        width: 25%;
        height: 61px;
          & .item_top{
            width: 100%;
            text-align: center;
            margin-top: 9px;
            color: white;
          }
          & .item_bottom{
            margin-top: 5px;
            text-align: center;
            color: #fff;
            & .item_text{
              font-weight: 900;
            }
          }
      }
    }
  }
  & .financialService{
    font-size: 16px;
    font-weight: 700;
    color: #3b3b37;
    margin-top: 21px;
    margin-bottom: 13px;
    padding-left:14px ;
  }
  & .vault_box{
    height: 150px;
    width:350px;
    margin: 0 auto;
    border-radius: 12px;
    border:1px solid #fffbf7;
    background-color: #fffbf7;
    margin-bottom: 10px;
    & .vault_title{
      margin-top: 11px;
      height: 15px;
      & .vault_text{
        font-size: 13px;
        font-weight: 700;
        padding-left: 17px;
      }
      & .division{
        padding-right: 9px;
        padding-left: 9px;
        line-height: 15px;
        color: #7c7c7b;
      }
      & .written{
        color: #7c7c7b;
      }
    }
    & .vault_main{
      width: 91%;
      height: 40px;
      margin: 0 auto;
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      & .vault_main_item{
        width: 150px;
        display: flex;
        & >img{
          width: 40px;
        }
        & .item_text_box{
          height: 40px;
          margin-left: 10px;
          width: 97px;
          & .text_title{
            padding-top: 2px;
            color: #3b3b37;
            font-size: 13px;
            font-weight: 700;
          }
          & .text_content{
            color: #7c7c7b;
            margin-top: 7px;
          }
        }
      }
    }
    & .vault_btn{
      width: 212px;
      height: 28px;
      border-radius: 20px;
      background-color: #d49428;
      margin: 0 auto;
      margin-top: 19px;
      color: white;
      text-align: center;
      line-height: 28px;
      font-size: 13px;
    }
  }
  & .goldWhiteStrip{
    width:350px;
    margin: 0 auto;
    border-radius: 12px;
    border:1px solid #ffffff;
    background-color: #ffffff;
    height: 132px;
    margin-bottom: 10px;
    display: flex;
    & .strip_tiem{
      width:175px ;
      height: 132px;
      & >div{
        width: 100%;
        text-align: center;
        color: #3b3b37;
      }
      & .strip_type{
        font-size: 15px;
        margin-top: 13px;
      }
      & .strip_amount{
        margin-top: 6px;
        font-size: 20px;
        font-weight: 700;
        & .strip_num{
          font-size: 13px;
        }
      }
      & .strip_max{
        font-size: 11px;
        color: #7c7c7b;
        margin-top: 4px;
      }
      & .strip_btn{
        width: 70px;
        height: 28px;
        background-color: #fe352e;
        border-radius: 20px;
        margin: 0 auto;
        margin-top: 9px;
        color: #ffe5e4;
        text-align: center;
        line-height: 28px;
      }
    }
  }
  & .goldBean{
    width: 211px;
    height: 69px;
    background-color: #ffffff;
    margin-left: 12px;
    border: 1px solid #ffffff;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    & .gold_item{
      height: 36px;
      width: 169px;
      display: flex;
      & >img{
        width: 33px;
      }
      & .gold_textBox{
        width: 95px;
        height: 36px;
        margin-left: 12px;
        & >span{
          font-size: 13px;
          font-weight: 700;
          color: #3b3b37;
        }
        & >div{
          color: #7c7c7b;
          margin-top: 4px;
        }
      }
    }
  }
  & .qualityAssistant{
    font-size: 16px;
    font-weight: 700;
    color: #3b3b37;
    margin-top: 15px;
    margin-bottom: 13px;
    padding-left:14px ;
  }
  & .iconbox{
    width: 350px;
    margin: 0 auto;
    background-color: #ffffff;
    border-radius: 12px;
    border:1px solid #fff;
    & .icon_row{
      width: 100%;
      height:88px;
      display: flex;
      & .row_item{
        width: 25%;
        height:88px;
        & .imgbox{
          width: 100%;
          height:55px;
          display: flex;
          justify-content: center;
          & >img{
            width: 32px;
            height: 30px;
            margin-top: 15px;
          }
        }
        & .textbox{
          width: 100%;
          text-align: center;
          font-size: 12px;
          color: #3d3d39;
        }
      }
    }
  }
}
</style>