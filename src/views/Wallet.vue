<template>
  <div class="wrap">
      <div class="top-title">
        <div class="top_left"><img src="../assets/walletIcon/icon_left.png" alt="" srcset=""></div>
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
      </div>
  </div>
</template>

<script>
export default {

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
  }
}
</style>