<template>
  <div id="wrap">
       <div>
          <van-nav-bar title="账户设置" left-text="" left-arrow @click-left="onClickLeft"/>
          <van-cell is-link>
                <div class="header">
                    <img src="../../assets/selfCenter/head.png" alt="">
                    <div class="information">
                        <div>chinese</div>
                        <div>用户名:wdbXKRyOlQOFxl</div>
                    </div>
                </div>
            </van-cell>
            <van-cell title="地址管理" is-link />
      </div>
      <div class="account">
          <van-cell title="账户与安全" is-link value="账户保障可升级" dot/>
          <van-cell title="设置字体大小" is-link />
          <van-cell title="支付设置" is-link />
          <van-cell title="发票抬头管理" is-link value="添加增票资质" />
          <van-cell title="我的档案" is-link value="添加设备/宝宝等档案" />
          <van-cell title="通用" is-link value="清除本地缓存等" />
          <van-cell title="长辈版" is-link value="长辈版/标准版" />
      </div>
      <div class="account">
          <van-cell title="PLUS会员" is-link value="免费试用 立领1张运费券" dot/>
          <van-cell title="家庭号设置" is-link value="帮我付/快捷聊/亲密卡等" />
          <van-cell title="功能实验室" is-link value="提前体验新功能" />
          <van-cell title="功能反馈" is-link  />
          <van-cell title="关于京东APP" is-link value="V10.3.2" />
          <van-cell title="隐私政策简要版" is-link />
          <van-cell title="个人信息收集清单" is-link />
          <van-cell title="应用权限说明" is-link />
          <van-cell title="个人信息共享清单" is-link />
      </div>
      <div class="signOut">
          <van-nav-bar title="退出登录"/>
      </div>     
  </div>
</template>

<script>
export default {
    data(){
        return{
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
#wrap{
    background-color: #f2f2f2;
}
::v-deep .van-cell--clickable{
    align-items: center;
}
::v-deep .van-icon{
  color: black;
}
.header{
    display: flex;
    & img{
        width: 63px;
    }
    & .information{
        margin-left: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 63px;
    }
}
.account{
    margin: 15px 0;
}
.signOut{
    height: 52px;
}
</style>