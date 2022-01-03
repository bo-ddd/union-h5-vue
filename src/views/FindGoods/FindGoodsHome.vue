<template>
  <div class="wrap">
    <div class="header">
      <div class="left">
        <van-icon @click="toHomePage" class="icon-left" name="arrow-left" />
        <div>发现好货</div>
        <div class="follow">
          <van-icon name="like-o" />
          <span>关注</span>
        </div>
      </div>
      <div class="right">
        <van-icon name="like-o" />
        <van-icon class="icon-right" name="ellipsis" />
      </div>
    </div>
    <div class="tab">
      <van-tabs
        v-model="defauluActive"
        animated
        background="#00ccbb"
        color="#e5726c"
        title-inactive-color="#eeffff"
        title-active-color="white"
        line-width="16px"
        @click="one"
      >
        <van-tab v-for="(item, index) in list" :title="item" :key="index">
          <div class="banner">
            <img src="@/assets/findGoodsimg/xiaomi.png" alt="" />
          </div>
          <div class="main">
            <div>
              <div>
                <div>
                  <div>品质生活指南</div>
                </div>
                <div>
                  <div>
                    <div><img src="" alt="" /></div>
                    <div>
                      <div>
                        <div>
                          <div>小佩 自动 喂食器</div>
                          <div>
                            超级可爱的猫咪给食器，造型就像是浴室里面的面...
                          </div>
                          <div>近180天最低价</div>
                        </div>
                        <div>
                          <div>107人加入心愿单<img src="" alt="" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        "口碑",
        "推荐",
        "型男志",
        "珠宝馆",
        "美妆馆",
        "生活家",
        "时尚馆",
        "数码控",
        "手机馆",
      ],
      defauluActive: this.onChange(),
    };
  },
  methods: {
    one(name, title) {
      console.log(title);
    },

    onChange(index) {
      return index;
    },
    toHomePage() {
      this.$router.push({
        name: "first",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.wrap {
  & .header {
    padding: 25px 0px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    background-color: #00ccbb;
    & .left {
      width: 200px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      & .icon-left {
        font-size: 30px;
        color: white;
      }
      & > div {
        font-size: 15px;
        color: white;
      }
      & .follow {
        padding: 2px 10px;
        background-color: #47dbcb;
        opacity: 0.8;
        color: #d8f7fa;
        border-radius: 20px;
        margin: 0;
      }
    }
    & .right {
      width: 76px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      & .icon-right {
        //  margin-top: 10px;
        margin-left: 10px;
        font-size: 30px;
        color: white;
      }
    }
  }
  & .banner {
    height: 95px;
    background-color: #00ccbb;
    display: flex;
    justify-content: center;
    padding-top: 18px;
    padding-bottom: 10px;
    & > img {
      width: 355px;
      height: 95px;
    }
  }
  & .main {
    padding: 0px 10px 10px 10px;
    background-color: #eeeeed;
  }
}
::v-deep .van-icon {
  font-size: 20px;
}
::v-deep .van-tabs--line .van-tabs__wrap {
  background-color: #00ccbb;
}
</style>