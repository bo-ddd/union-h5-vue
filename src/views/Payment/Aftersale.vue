<template>
  <div class="wrap">
    <!-- <van-nav-bar
      title="退换/售后"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    /> -->
    <van-tabs>
      <van-tab title="售后申请" class="tab_card">
        <div>
          <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
          >
            <template #action>
              <div @click="onSearch">筛选</div>
            </template>
          </van-search>
        </div>
        <div class="card">
          <div class="item_card">
            <div class="item_top">
              <van-icon name="shop-o" />
              <span>康恩贝官方旗舰店</span>
            </div>
            <van-card
              desc="描述信息"
              title="商品标题"
              thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
              num="2"
            >
              <template #footer>
                <van-button round size="small" type="danger"
                  >申请售后</van-button
                >
              </template>
            </van-card>
            <van-card
              desc="描述信息"
              title="商品标题"
              thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
              num="2"
            >
              <template #footer>
                <van-button round size="small" type="danger"
                  >申请售后</van-button
                >
              </template>
            </van-card>
          </div>
        </div>
      </van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onClickLeft() {
      console.log("onClickLeft");
    },
    onClickRight() {
      console.log("onClickRight");
    },
    onSearch() {
      console.log("onSearch");
    },
  },
};
</script>

<style lang="less" scoped>
::v-deep .van-card__num {
  float: left;
}
::v-deep .van-card__price-integer {
  font-size: 12px;
}
.wrap {
  height: 86vh;
  background: #f7f7f7;
}
.tab_card {
  padding: 15px;
  & > div{
    border-radius: 15px;
    overflow:hidden;
  }
  & > .card {
    margin-top: 15px;
    background: white;
    border-radius: 5px;
    overflow:hidden;
    & > .item_card {
      & > .item_top {
        border-bottom: 1px solid #e8e8e8;
        height: 50px;
        line-height: 50px;
        text-indent: 5px;
        & > span {
          margin-left: 5px;
          color: #797979;
        }
      }
    }
  }
}
::v-deep .van-card {
  background: white;
}
::v-deep .van-card:not(:first-child) {
  margin-top: 0;
}
::v-deep .van-card:not(:last-child) {
  border-bottom: 1px solid #e8e8e8;
}
</style>