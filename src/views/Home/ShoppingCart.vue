<template>
  <div class="home">
    <van-loading size="24px" ref="name">加载中...</van-loading>
    <div class="tit">
      <h3>购物车</h3>
      <van-cell-group class="input">
        <van-field v-model="value" label="配送至" />
      </van-cell-group>
      <h3 @click="edit">编辑</h3>
      <van-badge :content="5" class="a">
        <div>···</div>
      </van-badge>
    </div>

    <div class="top">
      <div style="width: 100%">
        <div class="aa">
          <div class="title">
            <h3>全部</h3>
            <van-badge :content="20" class="all" />
          </div>
          <div class="title">
            <h3>降价</h3>
            <van-badge :content="0" class="price" />
          </div>
          <div class="title">
            <h3>筛选</h3>
            <van-icon name="filter-o" />
          </div>
        </div>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <van-swipe-cell
              v-for="item in list"
              :key="item.id"
              style="margin-rop: 10px"
            >
              <van-checkbox class="check" @change="chage" v-model="item.check">
              </van-checkbox>
              <van-card
                :price="item.price"
                :desc="item.text"
                :title="item.title"
                class="goods-card"
                thumb="https://img0.baidu.com/it/u=2248554340,745757508&fm=26&fmt=auto"
              />
              <van-stepper
                :value="item.count"
                async-change
                @plus="onplus(item)"
                @minus="onminus(item)"
                class="count"
              />
              <template #right>
                <van-button
                  square
                  text="删除"
                  type="danger"
                  class="delete-button"
                  @click="del(item)"
                />
              </template>
            </van-swipe-cell>
          </van-list>
        </van-pull-refresh>
      </div>
      <div>
        <van-submit-bar
          class="submit"
          :button-text="butName"
          @submit="subanddel"
        >
          <van-checkbox v-model="checkedAll" @click="onchange"
            >全选</van-checkbox
          >
          <div class="total" v-show="fiag">
            合计：<span>￥{{ aPlus }}</span>
          </div>
          <template #tip>
            你的收货地址不支持同城送, <span>修改地址</span>
          </template>
        </van-submit-bar>
      </div>
    </div>
    <van-skeleton title :row="15" :loading="ab"></van-skeleton>
    <div style="height: 140.6px; wigth: 100%"></div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      value: "123456789",
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      checkedAll: true,
      ab: true,
      fiag: true,
      butName: "提交订单",
      total: 0,
      components: {
        [Dialog.Component.name]: Dialog.Component,
      },
    };
  },
  created() {
    setTimeout(() => {
      this.$refs.name.remove();
    }, 1000);
  },
  computed: {
    totals() {
      this.list.forEach((el) => {
        if (el.check) {
          this.total =
            this.total + Number(el.price).toFixed(0) * Number(el.count);
        }
      });
      return Number(this.total);
    },
    aPlus: {
      get: function () {
        return this.totals;
      },
      set: function () {
        this.total = this.totals;
      },
    },
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }
        for (let i = 0; i < 10; i++) {
          this.list.push({
            title: "摄像头",
            text: "小米2kwifi监控家用1296p手机远程智能监控i监控家用1296p手机远程智能监控i监控家用1296p手机远程智能监控i监控家用1296p手机远程智能监控",
            price: "2.00",
            check: true,
            count: 1,
            index: i,
          });
        }
        this.loading = false;
        this.ab = false;

        if (this.list.length >= 10) {
          this.finished = true;
        }
      }, 500);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    onplus(item) {
      this.list[item.index].count = this.list[item.index].count + 1;
      this.total = 0;
    },
    onminus(item) {
      this.list[item.index].count = this.list[item.index].count - 1;
      this.total = 0;
    },
    onchange() {
      // // 全选按钮被选中时，选中所有的子按钮
      this.list.forEach((item) => (item.check = this.checkedAll));
    },
    chage() {
      this.checkedAll = this.list.some((item) => !item.check) ? false : true;
      this.total = 0;
    },
    del(item) {
      this.list.splice(item.index, 1);
      this.list.forEach((e, index) => {
        e.index = index;
      });
    },
    edit() {
      this.butName = "提交订单";
      if (this.fiag) {
        this.butName = "移除购物车";
        this.total = null;
        this.fiag = false;
      } else {
        this.fiag = true;
      }
    },
    subanddel() {
      if (this.fiag) {
        console.log(1);
      } else {
        var arr = [];
        this.list.forEach((e) => {
          if (e.check) {
            arr.push(e);
          }
        });
        if (arr.length) {
          Dialog.alert({
            message: "是否要将这些商品移除",
          }).then(() => {
            this.list.forEach((e, index) => {
              console.log(e.check)
              if (e.check) {
                this.list.splice(index, 1);
              }
            });
            this.list.forEach((e,index) => {
              e.index = index;
            });
          });
        }
      }
    },
  },
};
</script>
<style  lang='less' scoped>
.home {
  background-color: rgb(247, 247, 247);
  text-align: left !important;
}
h3 {
  margin: 0;
}
.a {
  font-size: 22px;
  margin-top: 4px;
}
::v-deep .van-badge--fixed {
  margin: auto 0;
}
.tit {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.input {
  width: 40%;
}
::v-deep .van-cell {
  background-color: rgb(247, 247, 247);
}
::v-deep .van-field__label {
  width: 44%;
}
.top {
  display: flex;
  padding: 0px 10px;
  overflow-y: auto;
  overflow-y: auto;
}
.aa {
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
}
.goods-card {
  margin: 0;
  background-color: #fff;
  border-radius: 15px;
}
.delete-button {
  height: 90%;
  margin: 15px 0;
}
::v-deep .van-card {
  padding: 10px;
  margin-top: 15px;
}
::v-deep .van-card__price,
.van-card__price-integer {
  font-size: 22px;
  color: rgb(243, 64, 45);
}
::v-deep .van-submit-bar {
  bottom: 63px;
}
.all {
  background-color: transparent;
  border: none;
  font-size: 15px;
  font-weight: 700;
  color: red;
}
.price {
  background-color: transparent;
  border: none;
  font-size: 15px;
  font-weight: 700;
  color: #000;
}
.title {
  display: flex;
  justify-content: center;
}
::v-deep .van-card__title {
  font-size: 20px;
  font-weight: 900;
  line-height: 100%;
}
::v-deep .van-swipe-cell__wrapper {
  display: flex;
}

.van-card__desc {
  color: #646566;
  width: 100%;
  max-height: 35px;
  margin: 10px auto;
}
.van-ellipsis {
  overflow: auto;
  white-space: break-spaces;
  text-overflow: ellipsis;
}
.count {
  position: absolute;
  right: 5px;
  bottom: 5px;
}
.van-image {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
::v-deep .van-card__thumb img {
  width: 75px;
  height: 75px;
}
.check {
  position: absolute;
  left: 5px;
  top: 50%;
  z-index: 9;
}
.van-loading {
  position: absolute;
  color: #c8c9cc;
  vertical-align: middle;
  line-height: 100vh;
  height: 100vh;
  width: 100vw;
  text-align: center;
  z-index: 999;
  background-color: #fff;
  top: 0;
  overflow: hidden;
}
.remove {
  display: none;
}
::v-deep .van-submit-bar__bar {
  justify-content: space-between;
}
.total {
  font-size: 15px;
}
.total > span {
  font-size: 18px;
  font-weight: 600;
  color: #ef2124;
}
</style>