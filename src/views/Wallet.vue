<template>
  <div class="wrap">
      <div class="top-title">
        <div class="top_left"><img src="../assets/images/wallet_icon/icon_left.png" alt="" srcset=""></div>
        <div class="top_text">我的钱包</div>
        <div class="top_right">
          <span>账单</span>
        </div>
      </div>
      <div class="top_card">
        <div class="card_title">
          <div class="card_title_left">
            <span>我的资产</span><img src="../assets/images/wallet_icon/icon_eye.png" alt="" srcset="">
          </div>
          <div class="card_title_right">
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
    & .card_title{
      width: 350px;
      height: 18px;
      display: inline-block;
      margin: 23px auto;
      line-height: 18px;
      & .card_title_left{
        & >span{
          color: white;
          font-size: 16px;
          padding-left: 17px;
        }
        & >img{
          width: 12px;
        }
      }
    }
  }
}
</style>