<template>
  <div class="select">
    <div v-for="item in selectnumber" :key="item.id">
      <img :src="item.url" alt="" v-lazy="item.url">
      <div class="title">
        <span>{{item.from}}</span>
        <h6>{{item.title}}</h6>
      </div>
      <div class="describe" v-for="item1 in item.describe" :key="item1.tid">
        <span>
          <van-icon :name="item1.icon" />
          <span>{{item1.d1}}</span>
        </span>
      </div>
      <div class="price">
        <span class="jia">
          <van-icon name="gold-coin-o" />
          <span>{{item.price}}</span>
        </span>
        <span class="plus">
          <van-icon name="gold-coin-o" />
          <span>{{item.PLUSprice}}</span>
          <img :src="item.imgurl" alt="">
        </span>
      </div>
      <div class="bottom" v-for="item2 in item.bot" :key="item2.id">
        <span class="distribution">{{item2.distribution}}</span>
        <span class="similar">{{item2.similar}}</span>
      </div>
    </div>   
  </div>
</template>

<script>
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload);
Vue.use(Lazyload, {
  lazyComponent: true,
});
export default {
  data(){
    return{
      selectnumber:[
        {id:0,from:"京东自营",url:require("@/assets/images/iphone0.jpg"),imgurl:require("@/assets/images/plus.png"),title:"荣耀Magic3 / Magic3Pro 5G手机 Magic3釉白色 全网通（8G+256G）碎屏险套餐",price:"1790.80",PLUSprice:"1530.70",describe:[{icon:"good-job",d1:"近7天销售出5000+件",tid:10},],bot:[{id:110,distribution:"京东物流",similar:"看相似"}]},
        {id:1,from:"京东自营",url:require("@/assets/images/iphone1.jpg"),imgurl:require("@/assets/images/plus.png"),title:"荣耀Magic3 / Magic3Pro 5G手机 Magic3釉白色 全网通（8G+256G）碎屏险套餐",price:"1790.80",PLUSprice:"1530.70",describe:[{icon:"good-job",d1:"近7天销售出5000+件",tid:11},],bot:[{id:110,distribution:"京东物流",similar:"看相似"}]},
        {id:2,from:"京东自营",url:require("@/assets/images/iphone2.jpg"),imgurl:require("@/assets/images/plus.png"),title:"荣耀Magic3 / Magic3Pro 5G手机 Magic3釉白色 全网通（8G+256G）碎屏险套餐",price:"1790.80",PLUSprice:"1530.70",describe:[{icon:"good-job",d1:"近7天销售出5000+件",tid:12},],bot:[{id:110,distribution:"京东物流",similar:"看相似"}]},
        {id:3,from:"京东自营",url:require("@/assets/images/iphone3.jpg"),imgurl:require("@/assets/images/plus.png"),title:"荣耀Magic3 / Magic3Pro 5G手机 Magic3釉白色 全网通（8G+256G）碎屏险套餐",price:"1790.80",PLUSprice:"1530.70",describe:[{icon:"good-job",d1:"近7天销售出5000+件",tid:13},],bot:[{id:110,distribution:"京东物流",similar:"看相似"}]},
        {id:4,from:"京东自营",url:require("@/assets/images/iphone4.jpg"),imgurl:require("@/assets/images/plus.png"),title:"荣耀Magic3 / Magic3Pro 5G手机 Magic3釉白色 全网通（8G+256G）碎屏险套餐",price:"1790.80",PLUSprice:"1530.70",describe:[{icon:"good-job",d1:"近7天销售出5000+件",tid:14},],bot:[{id:110,distribution:"京东物流",similar:"看相似"}]},
        {id:5,from:"京东自营",url:require("@/assets/images/iphone5.jpg"),imgurl:require("@/assets/images/plus.png"),title:"荣耀Magic3 / Magic3Pro 5G手机 Magic3釉白色 全网通（8G+256G）碎屏险套餐",price:"1790.80",PLUSprice:"1530.70",describe:[{icon:"good-job",d1:"近7天销售出5000+件",tid:15},],bot:[{id:110,distribution:"京东物流",similar:"看相似"}]},
        {id:6,from:"京东自营",url:require("@/assets/images/iphone6.jpg"),imgurl:require("@/assets/images/plus.png"),title:"荣耀Magic3 / Magic3Pro 5G手机 Magic3釉白色 全网通（8G+256G）碎屏险套餐",price:"1790.80",PLUSprice:"1530.70",describe:[{icon:"good-job",d1:"近7天销售出5000+件",tid:16},],bot:[{id:110,distribution:"京东物流",similar:"看相似"}]},
        {id:7,from:"京东自营",url:require("@/assets/images/iphone7.jpg"),imgurl:require("@/assets/images/plus.png"),title:"荣耀Magic3 / Magic3Pro 5G手机 Magic3釉白色 全网通（8G+256G）碎屏险套餐",price:"1790.80",PLUSprice:"1530.70",describe:[{icon:"good-job",d1:"近7天销售出5000+件",tid:17},],bot:[{id:110,distribution:"京东物流",similar:"看相似"}]},
        {id:8,from:"京东自营",url:require("@/assets/images/iphone8.jpg"),imgurl:require("@/assets/images/plus.png"),title:"荣耀Magic3 / Magic3Pro 5G手机 Magic3釉白色 全网通（8G+256G）碎屏险套餐",price:"1790.80",PLUSprice:"1530.70",describe:[{icon:"good-job",d1:"近7天销售出5000+件",tid:18},],bot:[{id:110,distribution:"京东物流",similar:"看相似"}]},
        {id:9,from:"京东自营",url:require("@/assets/images/iphone9.jpg"),imgurl:require("@/assets/images/plus.png"),title:"荣耀Magic3 / Magic3Pro 5G手机 Magic3釉白色 全网通（8G+256G）碎屏险套餐",price:"1790.80",PLUSprice:"1530.70",describe:[{icon:"good-job",d1:"近7天销售出5000+件",tid:19},],bot:[{id:110,distribution:"京东物流",similar:"看相似"}]},
      ]
    }
  }

}
</script>

<style scoped lang="less">
.select{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 3px 3px;
  &>div{
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    margin: 5px 5px;
    background: #dddcdc;
    border-radius: 5px;
    &>img{
      width: 90%;
    }
    &>.title{
      padding: 3px;
      line-height: 16px;
      overflow: hidden;
      white-space: wrap;
      text-overflow: ellipsis;
      &>span{
        display: inline-block;
        background: red;
        color: white;
        padding: 2px 2px;
        border-radius: 2px;
        margin-right: 5px;
      }
      &>h6{
        margin: 0;
        display: inline;
      }
    }
    &>.describe{
      width: 100%;
      margin-left: 5px;
      &>span{
        display: inline-block;
        background: pink;
        padding: 2px;
        border-radius: 2px;
        color: orange;
        line-height: 16px;
      }
    }
    &>.price{
      width: 100%;
      margin: 5px 0;
      margin-left: 5px;
      display: flex;
      align-items: center;
      &>.jia{
        color: orangered;
        margin-right: 5px;
        &>span{
          font-size: 16px;
        }
      }
      &>.plus{
        &>img{
          width: 30px;
        }
      }
    }
    &>.bottom{
      width: 100%;
      height: 16px;
      display: flex;
      justify-content: space-between;
      &>.distribution,
      &>.similar{
        height: 16px;
        display: inline-block;
        background: red;
        color: white;
        padding: 2px;
        line-height: 14px;
        border-radius: 2px;
        transform: scale(.6);
        text-align: center;
      }
      &>.similar{
        background: #bdbaba;
        color: black;
        padding: 2px 5px;
        border-radius: 20px;
      }
    }
  }
}
</style>