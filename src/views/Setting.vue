<template>
  <div class="wrap">
    <van-sticky>
      <navback></navback>
    </van-sticky>
    <div class="header">
      <div class="userinfo">
        <van-cell :center="true" is-link inset>
          <template #title>
            <div class="userbox">
              <span class="username">欢迎来到对抗路</span>
              <span class="account">用户名:123456789</span>
            </div>
          </template>
          <template #icon>
            <van-image
              width="70"
              height="70"
              round
              :src="require('../assets/images/9.png')"
            />
          </template>
        </van-cell>
      </div>
      <van-cell value="内容" is-link inset value-class="ft-12">
        <template #title>
          <span>地址管理</span>
        </template>
      </van-cell>
    </div>
    <div class="main">
      <van-cell is-link v-for="(data, index) in cellData" :key="index" inset value-class="ft-12">
        <template>
          <span>{{ data.text }}</span>
        </template>
        <template #title>
          <span class="custom-title">{{ data.title }}</span>
        </template>
      </van-cell>
    </div>
    <div class="footer">
      <van-cell is-link v-for="(data, index) in footerData" :key="index" inset value-class="ft-12">
        <template>
          <span>{{ data.text }}</span>
        </template>
        <template #title>
          <span class="custom-title">{{ data.title }}</span>
        </template>
      </van-cell>
    </div>
    <div class="logout">
      <van-button  block>退出登录</van-button>
    </div>
  </div>
</template>

<script>
import navback from "@/components/BackMy.vue";
export default {
  components: {
    navback: navback,
  },
  data() {
    return {
      cellData: [
        {
          title: "账户与安全",
          text: "账户保障可升级",
        },
        {
          title: "设置字体大小",
          text: null,
        },
        {
          title: "支付设置",
          text: null,
        },
        {
          title: "发票抬头管理",
          text: "添加增票资质",
        },
        {
          title: "我的档案",
          text: "添加设备/宝宝等档案",
        },
        {
          title: "通用",
          text: "清除本地缓存",
        },
        {
          title: "长辈版",
          text: "长辈版/标准版",
        },
      ],
      footerData: [
        {
          title: "PLUS会员",
          text: "现在续费,可享多重特权",
        },
        {
          title: "家庭号设置",
          text: "帮我付/快捷聊/亲密卡等",
        },
        {
          title: "功能实验室",
          text: "提前体验新功能",
        },
        {
          title: "功能反馈",
          text: null,
        },
        {
          title: "关于京东APP",
          text: "V10.2.0",
        },
        {
          title: "隐私政策简要版",
          text: null,
        },
        {
          title: "个人信息收集清单",
          text: null,
        },
        {
          title: "应用权限说明",
          text: null,
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
.ft-12{
  font-size: 12px;
}
.wrap {
  height: 100vh;
  background-color: #f2f2f2;
  overflow-y: auto;
}
.userbox {
  margin-left: 15px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  & > .username {
    font-size: 12px;
    font-weight: bold;
  }
  & > .account {
    color: #7d7d7d;
    font-size: 11px;
  }
}
.header {
  border-radius: 0 0 5px 5px;
  overflow: hidden;
}
.main,
.footer,
.logout {
  margin-top: 12px;
  border-radius: 5px;
  overflow: hidden;
}
.logout{
  margin: 20px;
}
</style>