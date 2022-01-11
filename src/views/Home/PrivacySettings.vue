<template>
  <div>
      <div>
          <van-nav-bar title="隐私设置" left-text="" left-arrow @click-left="onClickLeft"/>
      </div>
      <div class="main">
          <div>消费数据仅自己可见,非匿名晒单内容可被查看</div>
      </div>
      <div class="checkBox">
         <van-radio-group v-model="radio">
            <van-radio name="1" checked-color="#ee0a24" icon-size="17px">所有人可见</van-radio>
            <van-radio name="2" checked-color="#ee0a24" icon-size="17px">好友和粉丝可见</van-radio>
            <van-radio name="3" checked-color="#ee0a24" icon-size="17px">仅自己可见</van-radio>
        </van-radio-group>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            radio:'1'
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
::v-deep .van-icon{
  color: black;
}
.main{
    width: 90%;
    margin:20px auto;
    color: #7d7d7d;
    font-size: 12px;
}
.checkBox{
    width: 90%;
    margin:0 auto;
    font-size: 13px;
}
::v-deep .van-radio{
    margin: 20px 0;
}
</style>