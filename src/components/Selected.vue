<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-swipe-cell v-for="item in commodity" :key="item.id">
        <van-card
          :num="item.num"
          :price="item.price"
          :desc="item.desc"
          :title="item.title"
          :class="item.class"
          :thumb="item.thumb"
        />
      </van-swipe-cell>
    </van-pull-refresh>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      commodity:[
        {id:1,num:"3",price:"20.00",desc:"描述信息1",title:"精选1",class:"goods-card",thumb:"https://img01.yzcdn.cn/vant/cat.jpeg"},
        {id:2,num:"30",price:"12.00",desc:"描述信息2",title:"精选2",class:"goods-card",thumb:"https://img01.yzcdn.cn/vant/cat.jpeg"},
        {id:3,num:"5",price:"22.00",desc:"描述信息3",title:"精选3",class:"goods-card",thumb:"https://img01.yzcdn.cn/vant/cat.jpeg"},
        {id:4,num:"7",price:"32.00",desc:"描述信息4",title:"精选4",class:"goods-card",thumb:"https://img01.yzcdn.cn/vant/cat.jpeg"},
        {id:5,num:"13",price:"17.00",desc:"描述信息5",title:"精选5",class:"goods-card",thumb:"https://img01.yzcdn.cn/vant/cat.jpeg"},
        {id:6,num:"35",price:"15.00",desc:"描述信息6",title:"精选6",class:"goods-card",thumb:"https://img01.yzcdn.cn/vant/cat.jpeg"},
        {id:7,num:"23",price:"7.00",desc:"描述信息7",title:"精选7",class:"goods-card",thumb:"https://img01.yzcdn.cn/vant/cat.jpeg"},
        {id:8,num:"21",price:"3.00",desc:"描述信息8",title:"精选8",class:"goods-card",thumb:"https://img01.yzcdn.cn/vant/cat.jpeg"},
        {id:9,num:"25",price:"13.00",desc:"描述信息9",title:"精选9",class:"goods-card",thumb:"https://img01.yzcdn.cn/vant/cat.jpeg"},
        {id:11,num:"3",price:"20.00",desc:"描述信息11",title:"精选11",class:"goods-card",thumb:"https://img01.yzcdn.cn/vant/cat.jpeg"},
        {id:12,num:"30",price:"12.00",desc:"描述信息12",title:"精选12",class:"goods-card",thumb:"https://img01.yzcdn.cn/vant/cat.jpeg"},
        {id:13,num:"5",price:"22.00",desc:"描述信息13",title:"精选13",class:"goods-card",thumb:"https://img01.yzcdn.cn/vant/cat.jpeg"},
        {id:14,num:"7",price:"32.00",desc:"描述信息14",title:"精选14",class:"goods-card",thumb:"https://img01.yzcdn.cn/vant/cat.jpeg"},
        {id:15,num:"13",price:"17.00",desc:"描述信息15",title:"精选15",class:"goods-card",thumb:"https://img01.yzcdn.cn/vant/cat.jpeg"},
        {id:16,num:"35",price:"15.00",desc:"描述信息16",title:"精选16",class:"goods-card",thumb:"https://img01.yzcdn.cn/vant/cat.jpeg"},
        {id:17,num:"23",price:"7.00",desc:"描述信息17",title:"精选17",class:"goods-card",thumb:"https://img01.yzcdn.cn/vant/cat.jpeg"},
        {id:18,num:"21",price:"3.00",desc:"描述信息18",title:"精选18",class:"goods-card",thumb:"https://img01.yzcdn.cn/vant/cat.jpeg"},
        {id:19,num:"25",price:"13.00",desc:"描述信息19",title:"精选19",class:"goods-card",thumb:"https://img01.yzcdn.cn/vant/cat.jpeg"},
      ],
      count: 0,
      isLoading: false,
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  },
};
</script>

<style lang="less" scoped>
.goods-card {
  margin: 0;
}
.delete-button {
  height: 100%;
}
.van-card__content{
  text-align: left;
}
</style>