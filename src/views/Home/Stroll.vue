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
    <div class="banner-out" ref="wrap">
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
    <div class="bottom-wrap">
        <div class="tabls-out" ref="spanwrap">
            <div class="span-out">
                <span v-for="(tab,index) in tabsArr" :key="index">{{tab}}</span>
            </div>
        </div>
        <div class="ad-wrap">

        </div>
        <div class="add-btn">

        </div>
        <div class="commodity-wrap" ref="adwrap">
            <div class="commodity-content">
                <div class="commodity">
                    <div class="show-wrap">
                      <img src="../../assets/ad1.png" alt="">
                      <div class="text-wrap">
                        <p>设计师不能错过的专属设计本</p>
                      </div>
                    </div>
                    <div class="good-msg">
                        <div class="msg-l">
                          <van-image round width="20px" height="20px"  src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
                          <span>ThinkPad京东自...</span>
                        </div>
                        <div class="msg-r">
                            <van-image round width="15px" height="15px"  src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
                            <span>1.7W</span>
                        </div>
                    </div>
                </div>
                <div class="commodity">
                    <div class="show-wrap">
                      <img src="../../assets/ad1.png" alt="">
                      <div class="text-wrap">
                        <p>设计师不能错过的专属设计本</p>
                      </div>
                    </div>
                    <div class="good-msg">
                        <div class="msg-l">
                          <van-image round width="20px" height="20px"  src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
                          <span>ThinkPad京东自...</span>
                        </div>
                        <div class="msg-r">
                            <van-image round width="15px" height="15px"  src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
                            <span>1.7W</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core';

export default {
  data() {
    return {
        tabsArr:[
            '全部',
            '电脑数码',
            '手机',
            '穿搭',
            '美食',
            '萌宠',
            '美妆',
            '运动',
        ],
    };
  },
  created(){
      this.$nextTick(()=>{
           let oWrap = document.querySelector('.banner-content');
           let childCount=Array.from(oWrap.querySelectorAll('.banner')).length;
           oWrap.style.cssText=`
               width:${childCount*136+childCount*10}px;
           `;
           let spanWrap = document.querySelector('.span-out');
           let spanCount=Array.from(spanWrap.querySelectorAll('span')).length;
           let tempArr = this.tabsArr.slice();
           tempArr = tempArr.join("");
            spanWrap.style.cssText=`
               width:${spanCount*20+tempArr.length*15}px;
           `;
            new BScroll(this.$refs.wrap, {
            // ...... 详见配置项
              startX:0,
              scrollX:true,
            })
            new BScroll(this.$refs.spanwrap, {
            // ...... 详见配置项
              startX:0,
              scrollX:true,
            })
            new BScroll(this.$refs.adwrap, {
            // ...... 详见配置项
              startY:0,
              scrollX:true,
            })
           
      });
  }
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
      overflow: hidden;
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
  .bottom-wrap{
      margin-top: 10px;
      background: #f8f8f8;
      overflow: hidden;
      & .add-btn{
        position: absolute;
        z-index: 5;
        width: 60px;
        height: 60px;
        background-size: 100% 100%;
        right: 25px;
        background-color: #fff;
        overflow: hidden;
        border-radius: 50%;
        bottom: 80px;
        background-image: url(../../assets/add_icon.png);
      }
      & .tabls-out{
          & .span-out{
              & span{
                  display: inline-block;
                  font-size: 15px;
                  padding: 6px 10px;
              }
          }
      }
     & .ad-wrap{
         height: 107px;
         border-radius: 50px;
         overflow: hidden;
         background-image: url(../../assets/ad.png);
         background-size: 100% 100%;
     }
     & .commodity-wrap{
        margin-top:20px;
        height: calc(100vh - 371px);
        overflow: hidden;
        & .commodity-content{
          height: 500px;
          & .commodity{
              display: inline-block;
            & .show-wrap{
              position: relative;
              margin: 4px;
              width: 168px;
              border-radius: 5%;
              overflow: hidden;
              background: #fff;
              & img{
                width: 100%;
                height: 100%;
              }
              & .text-wrap{
                padding:10px 20px;
                p{
                  font-size: 14px;
                  font-weight: 600;
                }
              }
            }
            & .good-msg{
              display: flex;
              justify-content: space-between;
              padding: 10px 4px;
              & .msg-l{
                display: flex;
                align-items: center;
                & span{
                  font-size: 10px;
                }
              }
              & .msg-r{
                display: flex;
                align-items: center;
                & span{
                  font-size: 4px;
                }
              }
            }
          }
        }
     }
  }
}
p{
    margin: 0;
    padding:0;
}


</style>