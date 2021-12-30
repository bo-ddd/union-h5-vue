<template>
  <div>
    <div class="Rotation">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
      <div class="trend">
        <div class="left">
          <div>趋势周榜</div>
          <div>每周更新</div>
        </div>
        <div class="right"></div>
      </div>
      <div class="label">
        <van-tabs>
          <van-tab v-for="index in  children" :title="index" :key='index'>
            内容 {{ index }}
          </van-tab>
        </van-tabs>
        <div class="">分类</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
      return{
        children:[
          '精选','新潮进化论','手机','时尚','美食',
          '超市','居家','母婴','电脑','运动','进口',
          '美妆','家电','洗护','健康','数码','宠物',
          '图书','汽车','园艺','旅行'
        ]
      }
    }
}
</script>

<style lang="less" scoped>
::v-deep .van-tab {
  font-size: 15px;
  line-height: 15px;
  color: #a8a2a2;
}
::v-deep .van-tabs__nav{
  height: 20px;
}
  .Rotation{
    width: 355px;
    height: 168px;
    margin: 0  auto;
    & .my-swipe .van-swipe-item {
      color: #fff;
      font-size: 20px;
      line-height: 168px;
      text-align: center;
      background-color: #39a9ed;
    }
    & .trend{
      width: 365px;
      height: 55px;
      margin: 20px 0 20px 0;
      display: flex;
      background-color: yellowgreen;
      & .left{
        width: 82px;
        height: 55px;
        background-color: turquoise;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        & div:nth-of-type(1){
          font-size: 15px;
          font-weight: 800;
        }
      }
    }
    & .label{
      width: 360px;
      height: 15px;
    }
  }
</style>