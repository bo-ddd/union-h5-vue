<template>
  <div>
    <div class="Rotation">
        <van-swipe :autoplay="3000">
          <van-swipe-item>
            <img src="../../assets/rankList/lunbo1.png" alt="" />
          </van-swipe-item>
          <van-swipe-item>
            <img src="../../assets/rankList/lunbo2.png" alt=""/>
          </van-swipe-item>
          <van-swipe-item>
            <img src="../../assets/rankList/lunbo3.png" alt=""/>
          </van-swipe-item>
        </van-swipe>
    </div>
    <div class="trend">

    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Lazyload } from 'vant';
Vue.use(Lazyload);
export default {
    data(){
      return{
        children:[
          '精选','手机','时尚','美食',
          '超市','居家','母婴','电脑','运动','进口',
          '美妆','家电','洗护','健康','数码','宠物',
          '图书','汽车','园艺','旅行'
        ],
        zhou:[
          '#助眠红酒','#冬日养颜','#机械键盘','#肠胃益生菌','#半成品菜','#舒适好睡眠'
        ]
      }
    }
}
</script>

<style lang="less" scoped>
::v-deep .van-swipe{
  width: 355px;
  height: 168px;
}
  .Rotation{
    width: 355px;
    height: 168px;
    margin: 0  auto;
    & .van-swipe-item {
      color: #fff;
      font-size: 20px;
      line-height: 168px;
      text-align: center;
      & img{
        width: 355px;
        height: 168px;
      }
    }
  }
  & .trend{
    width: 365px;
    height: 54px;
    background-color: white;
  }
</style>