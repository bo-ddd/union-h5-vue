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
        <div class="left"></div>
        <div class="right"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
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
      width: 355px;
      height: 60px;
      margin: 20px auto;
      border: 1px solid black;
      display: flex;
      & .left{
        width: 85px;
        height: 60px;
      }
    }
  }
</style>