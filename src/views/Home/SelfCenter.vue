<template>
  <div>
    <div class="header">
      <div class="left">
        <van-icon name="arrow-left" />
          <van-image round width="50px" height="50px" :src="require('../../assets/images/9.png')" />
          <span>个人空间</span>
      </div>
      <div class="right">
          <van-image round width="50px" height="50px" :src="require('../../assets/selfCenter/liubian.png')" />
          <van-image round width="50px" height="50px" :src="require('../../assets/selfCenter/fenxiang.png')" />
          <button>隐私设置</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
::v-deep .van-image{
  height: 25px !important;
  width: 25px !important;
}
.header{
  display: flex;
  justify-content: space-around;
  background-color: red;
  & .left{
      width: 150px;
      height: 25px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: white;
      line-height: 25px;
   }
   & .right{
     width: 166px;
     height: 25px;
     display: flex;
     justify-content: space-between;
     align-items: center;
     & ::v-deep .van-image{
       width: 19px !important;
       height: 19px !important;
     }
      & button{
        width: 72px;
        height: 24px;
        background-color: transparent;
        border-radius: 10px;
        border: 1px solid white;
        color: white;
      }
   }
}
</style>