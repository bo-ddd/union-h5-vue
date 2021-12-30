<template>
  <div class="RecommendedClassif">
    <div class="top">
      <div>
        <!-- <img src="" alt=""> -->
      </div>
    </div>
    <div class="main">
      <div>
        <div>
          <div>常用分类</div>
          <div>...</div>
        </div>
        <div>
          <div>
            <!-- <div><img src="" alt=""></div> -->
            <div>项链</div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>专场推荐</div>
        </div>
        <div>
          <div>
            <!-- <div><img src="" alt=""></div> -->
            <div>手机双旦</div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>热门分类</div>
        </div>
        <div>
          <div>
            <!-- <div><img src="" alt=""></div> -->
            <div>电脑数码</div>
          </div>
        </div>
      </div>
    </div>
    RecommendedClassif(推荐分类)
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.RecommendedClassif{
  // height: 375px;
  width: 230px;
  background: violet;
  display: flex;
  flex-direction: column;
  & >.top{
    // width: 100%;
    // height: 100%;
    & >div{    
      height: 85px;
      width: 100%;
    }
  }
  & >.main{
    width: 100%;
    display: flex;
    flex-direction: column;
    & >div{
      display: flex;
      flex-direction: column;
      & >div:nth-of-type(1){
        font-size: 14px;
        display: flex;
        justify-content: space-between;
      }
      & >div:nth-of-type(2){
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
}
</style>
