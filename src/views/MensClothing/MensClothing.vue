<template>
    <div class="wrap">
        <van-sticky :offset-top="0">
            <div class="header">
                <van-icon name="arrow-left" class="header-l" size="18px"/>
                <h2>男装馆</h2>
                <div class="icon-out">
                    <div class="btn">
                        <van-icon name="like-o" size="14px"/>
                        关注
                    </div>
                    <van-icon name="share-o" class="icon-r" size="18px"/>
                </div>
            </div>
        </van-sticky>
        <div class="main">
            <!-- 轮播图片 -->
            <div class="main-top">
                <div class="banner-out">
                    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                        <van-swipe-item v-for="ite in 5" :key="ite">{{ite}}</van-swipe-item>
                    </van-swipe>
                </div>
            </div>

            <!-- 类目选择 -->
            <div class="main-btm">
                <div class="grid-wrap">
                    <div class="content" v-for="(item,index) in textArr" :key="index">
                        <div class="top">
                            <div class="top-wrap">
                                {{item.title}}
                            </div>
                        </div>
                        <div class="btm">
                            {{item.text}}
                        </div>
                    </div>
                </div>
            </div>
            <!-- 制作的弧线 -->
            <div class="arcbottom"></div>
            
            <!-- 馆区 -->
            <div class="shop-wrap">

                <!-- 馆区标题 -->
                <h2>馆区联盟</h2>

                <!-- 馆区选项 -->
                <div class="shop-option">
                    <div class="option">
                        <div class="option-top">
                            <div class="img-content"></div>
                        </div>
                        <div class="option-btm">
                            <div class="text-content"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    data() {
        return{
            bannerImgs:[],
            textArr:[
                {
                    title:'新',
                    text:'羽绒服',
                },
                {
                    title:'年',
                    text:'棉服',
                },
                {
                    title:'焕',
                    text:'夹克',
                },
                {
                    title:'新',
                    text:'卫衣',
                },
                {
                    title:'衣',
                    text:'针织衫',
                },
                {
                    title:'叠',
                    text:'衬衫',
                },
                {
                    title:'劵',
                    text:'T恤',
                },
                {
                    title:'400',
                    text:'休闲裤',
                },
                {
                    title:'减',
                    text:'牛仔裤',
                },
                {
                    title:'80',
                    text:'工装裤',
                },
            ],
        }
    },
}
</script>

<style scoped lang="less">
.wrap{
    & .header{
        background: #d9d9d9;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        & .header-l{
            margin-left: 28px;
        }
        & .icon-out{
            display: flex;
            padding-right: 23px;
            & .icon-r{
                padding: 0 8px;
            }
            & .btn{
                display: flex;
                align-items: center;
                justify-content: center;
                height: 22.5px;
                width: 59px;
                background: #c2c2c2;
                border-radius: 10px;
                font-size: 12px;
            }
        }
    }
    & .main{
        background-color: #f9f4fa;
        & .main-top{
            background: #940000;
            & .banner-out{
                padding: 0 10px;
                height: 200px;
                & .my-swipe .van-swipe-item {
                    color: #fff;
                    font-size: 20px;
                    line-height: 200px;
                    text-align: center;
                    background-color: #39a9ed;
                }
            }
        }
        h2{
            padding: 10px;
        }
        & .main-btm{
            background: #940000;
            padding: 30px 10px;
            & .grid-wrap{
                display: grid;
                grid-template-columns: repeat(5,1fr);
                & .content{
                    & .top{
                        display: flex;
                        justify-content: center;
                        & .top-wrap{
                            width: 49px;
                            background-color: #ffe9db;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 24px;
                            height: 49px;
                            color: #7a4f2d;
                            border-radius: 50%;
                            border: 2px solid gold;
                        }
                    }
                    & .btm{
                        height: 25px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: #eb9693;
                    }
                }
            }
        }
        & .show-wrap{
            padding: 0 10px;
            & .shop-option{
                display: grid;
                grid-template-columns: repeat(4,1fr);
                & .option{
                    background: #fff;
                    & .option-top{
                        & .img-content{
                            height: 52px;
                            width: 52px;
                        }
                    }
                    & .option-btm{
                      
                    }
                }
            }
        }
    }
     .arcbottom{
        width: 100%;
        position: relative;
        height: 46px;
        background-color: #940000;
        border-bottom-left-radius: 150%;
        border-bottom-right-radius: 150%;
        }
       body,h2{
           margin: 0;
           padding: 0;
       } 
}
</style>