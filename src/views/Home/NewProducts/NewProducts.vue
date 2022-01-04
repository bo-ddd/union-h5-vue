<template>
  <div>
    <!-- 刘青松 -->
    <div ref="title" class="title">
      <van-nav-bar>
        <template #left>
          <div class="title-left">
            <van-icon name="like-o" v-if="flag" @click="follow">关注</van-icon>
            <span v-else @click="follow">已关注</span>
          </div>
        </template>
        <template #title>
          <div class="title-middle">
            <span class="select" @click="toggleselect" ref="se">精选</span>
            <span class="trend" @click="toggletrend" ref="tr">趋势</span>
          </div>
        </template>
        <template #right>
          <van-popover
            v-model="showPopover"
            trigger="click"
            :actions="actions"
            placement="bottom-end"
            @select="onSelect"
          >
            <template #reference>
              <van-icon name="ellipsis" /> 
            </template>
          </van-popover>
        </template>
      </van-nav-bar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { Toast } from 'vant';
import "@/assets/color.less"
export default {
  data() {
    return {
      flag:false,
      showPopover: false,
      actions: [{ text: '消息', icon: 'chat-o' }, { text: '分享', icon: 'share-o' }, { text: '功能反馈', icon: 'edit' }],
    };
  },
  created(){
    // console.log(this.routes[0].children[1].children)
  },
  computed:{
    ...mapGetters(['routes']),
  },
  methods: {
    // 关注切换
    follow(){
      this.flag = !this.flag;
      // this.$nextTick(()=>{
      //   console.log(this.$store.state.offsettop)
      // })
    },
    onSelect(action) {
      Toast(action.text);
    },
    // 头部标题切换
    init(){
      this.$refs.se.style.backgroundColor = "white";
      this.$refs.se.style.color = "black";
      this.$refs.tr.style.backgroundColor = "black";
      this.$refs.tr.style.color = "white";
    },
    toggleselect() {
      this.init();
      this.$router.push({name:"Sselect"});
    },
    toggletrend() {
      this.$refs.se.style.backgroundColor = "black";
      this.$refs.se.style.color = "white";
      this.$refs.tr.style.backgroundColor = "white";
      this.$refs.tr.style.color = "black";
      this.$router.push({name:"Trend"});
    },
  },
  mounted(){
    this.init();
  }
};
</script>

<style lang="less" scoped>
.title {
  position: fixed;
  top: 0;
  z-index: 9;
  width: 100%;
  opacity: 0.5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color) !important;
  height: 46px;
  & > .van-nav-bar {
    width: 100%;
    line-height: 21px;
    & .title-left {
      width: 70px;
      padding: 5px 0;
      background: #f574f5;
      border-radius: 16px;
      font-size: 10px;
      color: #646566;
    }
    & .title-middle {
      background: black;
      padding: 2px;
      border-radius: 16px;
      & span {
        display: inline-block;
        color: white;
        padding: 5px 10px;
        border-radius: 16px;
      }
    }
    & .title-right {
      padding: 5px 8px;
    }
  }
}

::v-deep .van-tabs--line .van-tabs__wrap {
  position: -webkit-sticky;
  position: sticky;
  top: 45px;
  z-index: 9;
}
::v-deep .van-popover--light{
  position: absolute;
    left: 246px;
    top: 35px;
}
.van-swipe{
  border-radius:0 0 20px 20px;
  overflow: hidden;
}
.van-swipe img{
  width: 100%;
  height: 35vh;
}
.ding{
  position: -webkit-sticky;
  position: sticky;
  right: 0;
  z-index: 9;
}
</style>
