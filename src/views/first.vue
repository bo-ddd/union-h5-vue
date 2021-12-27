<template>
  <div class="wrap">
    <section class="banner">
      <section class="carousel">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img src="../assets/images/img1.png" alt="" />
          </van-swipe-item>
          <van-swipe-item>
            <img src="../assets/images/img2.png" alt=""
          /></van-swipe-item>
          <van-swipe-item>
            <img src="../assets/images/img3.png" alt=""
          /></van-swipe-item>
          <van-swipe-item>
            <img src="../assets/images/img4.png" alt=""
          /></van-swipe-item>
        </van-swipe>
      </section>
    </section>
    <section>
      <van-grid :column-num="5">
        <van-grid-item
          v-for="value in 10"
          :key="value"
          icon="photo-o"
          text="文字"
        />
      </van-grid>
    </section>
  </div>
</template>
<script>
export default{
    data(){
        return{
            value:{
                icon:'photo-o',
                text:'手机'
            }
        }
    }
}
</script>
<style lang="less" scoped>
.wrap {
  & .banner {
    display: flex;
    justify-content: center;
    height: 210px;
    padding: 10px;
    box-sizing: border-box;
    & .carousel {
      width: 350px;
      height: 120px;
      border-radius: 15px;
      & .my-swipe .van-swipe-item {
        & > img {
          width: 350px;
          height: 120px;
          border-radius: 5px;
        }
      }
    }
  }
  ::v-deep .van-grid-item__content{
      padding: 5px;
  }
}
</style>
