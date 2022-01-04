<template>
  <div id="wrap">
    <div class="header">
        <i class="el-icon-arrow-left"></i>
        <span>xx登录注册</span>
        <span></span>
    </div>

    <!-- 手机号 -->
    <div class="input-container">
        <div class="title">
            <span>+86</span>
            <span class="rightArrow"></span>
            <input type="text" placeholder="请输入手机号"  >
        </div>
    </div>

    <!-- 验证码 -->
    <div class="input-container">
        <div class="title">
            <input type="text" placeholder="请输入手机号" maxlength="6" class="w-70" >
            <span class="w-30">获取验证码</span>
        </div>
    </div>

    <!-- 登录 -->
    <div class="btn">
        登&nbsp;&nbsp;&nbsp;录
    </div>

    <!-- 快捷 -->
    <div class="quick-btn">
        <span class="left">账号密码登录</span>
        <span class="right">手机快速注册</span>
    </div>


    <div class="otherBtn">
        <div class="w-30"></div>
        <div class="w-40">其他方式登录</div>
        <div class="w-30"></div>
    </div>

    <div class="quick-type">
        <span>QQ</span>
        <span>微信</span>
        <span>苹果</span>
    </div>

    <div class="policy_tip">
        <input type="checkbox" name="" id="">
        <span>若您输入的手机号未注册，将为您直接注册，注册即视为同意</span>
        <span class="color-blue">京东用户注册协议，</span>
        <span class="color-blue">用户隐私政策</span>
    </div>

  </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    }
}
</script>

<style lang='less' scoped>

#wrap{
    padding: 0 25px 0 25px;
    // 标题信息
    & .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 44px;
        font-size: 17px;
    }
    // 用户输入信息地方
    & .input-container{
        margin-top: 20px;
        border-bottom: 1px solid #ccc;
        & .title{
            height: 50px;
            font-size: 18px;
            display: flex;
            align-items: center;
            // 右箭头
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
                border-width: 3px 3px 0 0;
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
    }

    & .policy_tip{
        margin-top: 15px;
        color: #ccc;

        & .color-blue{
            color: #4a90e2;
        }
    }


}
</style>