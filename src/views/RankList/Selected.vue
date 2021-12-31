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
      <div class="trend">
        <div class="left">
          <div>趋势周榜</div>
          <div>每周更新</div>
        </div>
        <div class="right">
          <van-tabs class="zhou">
            <van-tab v-for="index in  zhou" :title="index" :key='index'></van-tab>
          </van-tabs>
        </div>
      </div>
      <div class="label">
        <div class="left">
          <van-tabs>
          <van-tab v-for="index in  children" :title="index" :key='index'>
            内容 {{ index }}
          </van-tab>
        </van-tabs>
        </div>
        <div class="right"><van-icon name="bars" />分类</div>
      </div>
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
::v-deep .van-tab {
  font-size: 15px;
  line-height: 15px;
  color: #a8a2a2;
}
::v-deep .van-swipe{
  width: 355px;
  height: 168px;
}
:v-deep .van-tabs__nav{
  height: 20px;
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
    & .trend{
      width: 365px;
      height: 55px;
      margin: 20px 0 20px 0;
      display: flex;
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
      & .right{
        width: 283px;
        height: 55px;
        line-height: 55px;
        & .zhou{
          color: black;
          font-weight: 400;
        }
      }
    }
    & .label{
      width: 360px;
      height: 15px;
      display: flex;
      & .left{
        width: 310px;
      }
      & .right{
        width: 50px;
        height: 15px;
        line-height: 15px;
      }
    }
  }
  ::v-deep .van-tabs--line{
    height: 55px;
    line-height: 55px;
  }
</style>