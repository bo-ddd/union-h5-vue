<template>
  <div class="wrap">
    <div class="header">
      <div class="header-l">
        <span>关注</span>
        <span>推荐</span>
        <span>部落</span>
      </div>
      <div class="header-r">
        <van-icon name="search" size="20px" />
        <van-image round width="38px" height="38px" src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
      </div>
    </div>
    <div class="banner-out">
        <div class="banner-content">
            <div class="banner">
                <van-image width="136px" height="76px" src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
            </div>
            <div class="banner">
                <van-image width="136px" height="76px" src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
            </div>
            <div class="banner">
                <van-image width="136px" height="76px" src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
            </div>
            <div class="banner">
                <van-image width="136px" height="76px" src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.wrap {
  padding: 8px;
  .header {
    display: flex;
    justify-content: space-between;
    & .header-l {
      display: flex;
      & span {
        padding: 5px;
        font-size: 23px;
      }
    }
    & .header-r {
      display: flex;
      align-items: center;
      & .van-icon-search{
          margin-right: 20px;
      }
    }
  }
  .banner-out{
      margin-top: 15px;
      overflow-x:scroll;
      flex-shrink: 0;
      & .banner-content{
          & .banner{
              float: left;
              border-radius: 20px;
              overflow: hidden;
              width:136px; 
              height:76px;
              margin-right: 10px;
          }
      }
  }
}
</style>
