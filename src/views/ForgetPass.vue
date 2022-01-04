<template>
  <div id="wrap">
    <div class="header">
        <div class="leftArrwo">

        </div>
        <span>xx注册</span>
    </div>

    <div class="input-container">
        <div class="title">
            <span>账号</span>
            <input type="text" placeholder="请输入手机号" maxlength="11" v-model="form.phone" >
        </div>
    </div>

    <div class="btn">下一步</div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            form : {
                phone : ''
            },
        }
    }
}
</script>

<style lang='less' scoped>
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
    padding: 0 25px 25px 25px;

    & .header{
        text-align: center;
        line-height: 44px;
        height: 44px;
        font-size: 17px;
    }

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
                margin-left: 15px;
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
                margin-left: 15px;
            }
        }  
    }

    & .btn{
        margin-top: 50px;
        height: 50px;
        border-radius: 20px;
        background-color: #ffbcb3;
        box-shadow: 10px 10px 10px #ffbcb3;
        text-align: center;
        line-height: 50px;
        color: #fff;
        font-size: 16px;
    }

}
</style>