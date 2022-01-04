<template>
  <div id="wrap">
    <div class="header">
        <div class="leftArrwo">

        </div>
        <span>xx登录注册</span>
        <span></span>
    </div>

    <!-- 手机号 -->
    <div class="input-container">
        <div class="title">
            <span v-show="circuit">+86</span>
            <span class="rightArrow" v-show="circuit"></span>
            <input type="text" :placeholder="phonePlaceHolder" maxlength="11" v-model="form.phone" >
        </div>
    </div>

    <div class="input-container">
        <div class="title">
            <input :type="captchaType" :placeholder="captchaPlaceHolder" maxlength="6" class="w-70" v-model="form.captcha" >
            <span class="w-30">{{getcaptcha}}</span>
        </div>
    </div>

    <div class="btn" @click="btn">
        登&nbsp;&nbsp;&nbsp;录
    </div>

    <div class="quick-btn">
        <span class="left" @click="accountBtn">{{quickAccout}}</span>
        <span class="right" @click="phoneBtn">手机快速注册</span>
    </div>


    <div class="otherBtn">
        <div class="w-30"></div>
        <div class="w-40">其他方式登录</div>
        <div class="w-30"></div>
    </div>

    <div class="quick-type">
        <div v-for="key in img" :key="key.title">
            <img :src="key.url" alt="">
            <span>{{key.title}}</span>
        </div>
    </div>

    <div class="policy_tip">
        <input type="checkbox" name="" id="" v-model="form.checked" >
        <span>{{footerTitle}}</span>
        <span class="color-blue" v-show="circuit">京东用户注册协议，</span>
        <span class="color-blue">用户隐私政策</span>
    </div>

  </div>
</template>

<script>
export default {
    data(){
        return {
            form : {
                phone : '',
                captcha : '',
                checked : false,
            },
            img : [
                {
                    title : 'QQ',
                    url : require('../../src/assets/loginImg/QQ.png')
                },
                {
                    title : '微信',
                    url : require('../../src/assets/loginImg/wechat.png')
                },
                {
                    title : '苹果',
                    url : require('../../src/assets/loginImg/apple.png')
                }
            ],
            circuit : true,
            quickAccout : '账号密码登录',
            phonePlaceHolder : '请输入手机号',
            captchaPlaceHolder : '请输入收到的验证码',
            captchaType : 'text',
            getcaptcha : '获取验证码',
            footerTitle : '若您输入的手机号未注册，将为您直接注册，注册即视为同意'
        }
    },
    methods : {
        // 登录的点击事件
        btn(){
            if(this.form.checked){
                console.log('选中了');
            }else{
                console.log('没有选中');
            }
        },

        // 账号密码登录的点击事件
        accountBtn(){
            if(this.circuit){
                this.quickAccout = '短信验证码登录'
                this.phonePlaceHolder = '用户名/邮箱/手机号';
                this.captchaPlaceHolder = '请输入密码';
                this.captchaType = 'password';
                this.getcaptcha = '忘记密码?';
                this.footerTitle = '登录即代表您已同意'
                this.form.phone = '';
                this.form.captcha = '';
                this.circuit = false;
            }else{
                this.quickAccout = '账号密码登录';
                this.phonePlaceHolder = '请输入手机号';
                this.captchaPlaceHolder = '请输入收到的验证码';
                this.captchaType = 'text';
                this.getcaptcha = '获取验证码';
                this.footerTitle = '若您输入的手机号未注册，将为您直接注册，注册即视为同意';
                this.form.phone = '';
                this.form.captcha = '';
                this.circuit = true;
            }
        },

        // 手机快速注册的点击事件
        phoneBtn(){
            console.log('手机');
        }

    },
    created(){
        
    }
}
</script>

<style lang='less' scoped>
input::-webkit-input-placeholder{
    font-size: 14px;
    color: #ccc;
}
// 左箭头
.leftArrwo{
    position: absolute;
    width: 20px;
    height: 20px;
    margin-top: 15px;
}
.leftArrwo::after{
    content: '';
    width: 10px;
    height: 10px;
    border-width: 0 0 3px 3px;
    border-color: #ccc;
    border-style: solid;
    transform:matrix(0.71,0.71,-0.71,0.71,0,0);
    position: absolute;
}
#wrap{
    padding: 0 25px 0 25px;
    // 标题信息
    & .header{
        text-align: center;
        line-height: 44px;
        height: 44px;
        font-size: 17px;
    }
    // 用户输入信息地方
    & .input-container{
        margin-top: 20px;
        border-bottom: 1px solid #f3f3f3;
        & .title{
            height: 50px;
            font-size: 18px;
            display: flex;
            align-items: center;
            // 下箭头
            & .rightArrow{
                width: 20px;
                height: 20px;
                margin-top: 5px;
                margin-left: 10px;
            }

            & .rightArrow::after{
                content: '';
                width: 10px;
                height: 10px;
                border-width: 0 3px 3px 0;
                border-color: #ccc;
                border-style: solid;
                transform:matrix(0.71,0.71,-0.71,0.71,0,0);
                position: absolute;
            }

            & input{
                border: none;
                outline: none;
            }
            & .w-70{
                width: 70%;
            }
            & .w-30{
                display: inline-block;
                width: 30%;
                display: flex;
                align-items: center;
                justify-content: center;
                border-left: 1px solid #ccc;
                font-size: 12px;
                color: #848689;
            }
        }

        
        

        
    }

    // 登录
    & .btn{
        margin-top: 30px;
        width: 100%;
        height: 50px;
        border-radius: 20px;
        background-color: #ffcaba;
        text-align: center;
        line-height: 50px;
        color: white;
        font-size: 18px;
    }

    & .quick-btn{
        margin-top: 20px;
        color: #ccc;

        & .left{
            float: left;
        }
        & .right{
            float: right;
        }
    }

    & .otherBtn{
        margin-top: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        & div{
            float: left;
        }
        
        & .w-30{
            width: 30%;
            border-bottom: 1px solid #ccc;
        }
        & .w-40{
            widows: 40%;
            text-align: center;
            color: #ccc;
        }
    }

    & .quick-type{
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        & div{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            width: 50px;
            & img{
                width: 50px;
                height: 50px;
            }
        }
    }

    & .policy_tip{
        margin-top: 15px;
        color: #ccc;
        text-align: center;
        & .color-blue{
            color: #4a90e2;
        }

        
    }


}
</style>