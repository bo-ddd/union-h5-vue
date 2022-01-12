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
                   <div class="option" v-for="(item,index) in iconArr" :key="index">
                       <div class="option-top">
                           <div class="img-content">
                               <img :src="item.img">
                           </div>
                       </div>
                       <div class="option-btm">{{item.text}}</div>
                   </div>
                </div>

                <!-- 爆款单品 -->
                <h2>爆款单品</h2>
                
                <!-- 滚动广告 -->
                <div class="banner-wrap" ref="bannerwrap">
                    <div class="banner-content">
                        <div class="banner" v-for="item in bannerArr" :key="item.id">
                            <div class="img-out">
                                <img :src="item.img">
                            </div>
                            <div class="text-content">
                                {{item.text}}
                            </div>
                            <div class="price-content">
                                ￥{{item.price}}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 商品选择 -->
                <div class="goods-out">
                    <div class="goods" v-for="item in goodsArr" :key="item.id">
                        <!-- 视频播放时间 -->
                        <div class="play-time">
                            <div class="time">
                                <van-icon name="play-circle-o" size="15px"/>
                                <p>{{item.time}}</p>
                            </div>
                        </div>
                        <!-- 商品上部分 -->
                        <div class="goods-top">
                            <img :src="item.good">
                        </div>
                        <!-- 商品下部分 -->
                        <div class="goods-btm">

                            <!-- 商品描述 -->
                            <div class="good-description">
                                {{item.title}}
                            </div>
                            <!-- 商品左侧 -->
                            <div class="left">
                                <!-- 商品小图标 -->
                                <div class="icon">
                                    <img :src="item.logo">
                                </div>
                                <!-- 店家名字 -->
                                <p class="text">{{item.shop}}</p>
                            </div>
                            <div class="right">
                                <van-icon name="play-circle-o" size="15px"/>
                                {{item.autoplay}}
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
            iconArr:[
                {
                    img:require('../../assets/mensClothing/icon1.png'),
                    text:'鞋靴馆',
                },
                {
                    img:require('../../assets/mensClothing/icon2.png'),
                    text:'箱包馆',
                },
                {
                    img:require('../../assets/mensClothing/icon3.png'),
                    text:'内衣馆',
                },
                {
                    img:require('../../assets/mensClothing/icon4.png'),
                    text:'计生情趣',
                },
            ],
            bannerArr:[
                {
                    id:1,
                    img:require('../../assets/mensClothing/banner1.png'),
                    text:'GxG男装【斯文系列】21年冬季新装',
                    price:'279',
                },
                {
                    id:2,
                    img:require('../../assets/mensClothing/banner2.png'),
                    text:'HLA海澜之家圆领半高领休闲服装',
                    price:'279',
                },
                {
                    id:3,
                    img:require('../../assets/mensClothing/banner3.png'),
                    text:'【吃豆人联名】A21秋冬季2021新装',
                    price:'279',
                },
                {
                    id:4,
                    img:require('../../assets/mensClothing/banner1.png'),
                    text:'GxG男装【斯文系列】21年冬季新装',
                    price:'279',
                },
                {
                    id:5,
                    img:require('../../assets/mensClothing/banner2.png'),
                    text:'HLA海澜之家圆领半高领休闲服装',
                    price:'279',
                },
                {
                    id:6,
                    img:require('../../assets/mensClothing/banner3.png'),
                    text:'【吃豆人联名】A21秋冬季2021新装',
                    price:'279',
                },
            ],
            goodsArr:[
                {
                    id:1,
                    time:'00:40',
                    title:'冬季保暖最直接的方式',
                    logo:require('../../assets/mensClothing/logo1.png'),
                    good:require('../../assets/mensClothing/goods1.png'),
                    shop:'NAVIGARGE旗舰店',
                    autoplay:'1.2万',
                },
                {
                    id:2,
                    time:'00:12',
                    title:'冬季保暖最直接的方式',
                    logo:require('../../assets/mensClothing/logo2.png'),
                    good:require('../../assets/mensClothing/goods2.png'),
                    shop:'太平鸟男装旗舰店',
                    autoplay:'9.6万',
                },
            ],
        }
    },
    created(){
        this.$nextTick(()=>{
            let bannerWrap = document.querySelector('.banner-content');
            bannerWrap.style.cssText=`
                width:${(this.bannerArr.length)*107+5*(this.bannerArr.length)}px;
            `;
            new BScroll(this.$refs.bannerwrap,{
                startX:0,
                scrollX:true,
            })
        })
    }
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
        & .shop-wrap{
            padding: 0 10px;
            & .shop-option{
                display: grid;
                margin-top: 25px;
                grid-template-columns: repeat(4,1fr);
                background: #fff;
                margin-bottom: 8px;
                & .option{
                    & .option-top{
                        height: 65px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        & .img-content{
                            width: 52px;
                            height: 52px;
                            border-radius: 5px;
                            overflow: hidden;
                            background: red;
                            & img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                    & .option-btm{
                        height: 22px;
                        font-size: 14px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }
            }
            & .banner-wrap{
                margin-top: 10px;
                overflow: hidden;
                & .banner-content{
                    & .banner{
                        display: inline-block;
                        height: 186px;
                        width:  107px;
                        background: #fff;
                        margin-right: 5px;
                        & .img-out{
                            width: 107px;
                            height: 105px;
                            & img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        & .text-content{
                            font-size: 12px;
                            margin:10px;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                            overflow: hidden;
                        }
                        & .price-content{
                            padding: 0 10px;
                            font-size: 18px;
                            font-weight: 600;
                            color: #d82e1f;
                        }
                    }
                }
            }
            & .goods-out{
                margin-top: 5px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                & .goods{
                    position: relative;
                    margin-top: 10px;
                    display: inline-block;
                    border-radius: 10px;
                    overflow: hidden;
                    background: #fefefe;
                    & .play-time{
                        position: absolute;
                        left: 10px;
                        top: 10px;
                        & .time{
                            width: 40px;
                            border-radius: 10px;
                            background: #000;
                            display: flex;
                            align-items: center;
                            opacity: 0.3;
                            color:#fff;
                            font-size: 12px;
                            & .van-icon{
                                color: #fff;
                            }
                        }
                    }
                    & .goods-top{
                        width: 170px;
                        height: 231px;
                        & img{
                            width: 100%;
                            height:100%;
                        }
                    }
                    & .goods-btm{
                        height: 40px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        position: relative;
                        & .good-description{
                            position: absolute;
                            display: -webkit-box;
                            overflow: hidden;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                            font-size: 12px;
                            color: #fff;
                            width: 140px;
                            top: -40px;
                            left: 10px;
                        }
                        & .left{
                            display: flex;
                            align-items: center;
                            & p{
                                font-size: 12px;
                                 overflow: hidden;
                                 -webkit-box-orient: vertical;
                                -webkit-line-clamp: 1;
                                transform: scale(.8) /*  缩小到0.8倍 */;
                                color: #ccc;
                            }
                            & .icon{
                                width: 15px;
                                height: 15px;
                                border-radius: 50%;
                                overflow: hidden;
                                background: blue;
                                & img{
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                        }
                        & .right{
                            color: #c2c2c2;
                        }
                    }
                }
            }
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
    }
     .arcbottom{
        width: 100%;
        position: relative;
        height: 46px;
        background-color: #940000;
        border-bottom-left-radius: 150%;
        border-bottom-right-radius: 150%;
        }
       body,h2,p{
           margin: 0;
           padding: 0;
       } 
}
</style>