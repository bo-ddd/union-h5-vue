<template>
  <div id="wrap">
      <div>
          <van-nav-bar title="月度账单" left-text="" left-arrow @click-left="onClickLeft"/>
      </div>
      <div>
        <van-tabs>
          <van-tab v-for="index in week" :title="index" :key="index">
            <div class="main">
              <div class="bill">
                <img src="../../assets/selfCenter/zaanwu.png" alt="">
                <div>本月暂无消费</div>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
  </div>
</template>

<script>
export default {
   data(){
        return{
          week:[
            '2021.12账单',
            '2021.11账单',
            '2021.10账单',
            '2021.9账单',
            '2021.8账单',
            '2021.7账单',
            ]
        }
    },
    methods: {
        onClickLeft() {
          this.$router.push({
            name:'SelfCenter'
          })
        },
    },
}
</script>

<style lang="less" scoped>
::v-deep .van-tabs__line{
  bottom: 8px;
  background-color: white;
}
::v-deep .van-tabs__nav,
.van-nav-bar{
  background-color: transparent;
  color: white;
  padding: 0;
  border: none;
}
::v-deep .van-nav-bar__title{
  color: white;
}
::v-deep .van-icon{
  color: white;
}
::v-deep .van-tab__text{
  color: white;
}
::v-deep .van-tab--active{
  font-size: 18px;
}
#wrap{
  background-image: url(../../assets/selfCenter/bill.png);
  background-size: 100% 400px;
}
.main{
  height: 303px;
  display: flex;
}
.bill{
  width: 118px;
  height: 160px;
  margin: 75px auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #7b7a7b;
    & img{
      width: 118px;
      height: 123px;
    }
  & div:nth-of-type(1){
    margin-top: 20px;
    font-size: 13px;
  }
}
</style>