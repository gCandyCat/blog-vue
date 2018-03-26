<template>
    <div class="register_mail disblock">
        <div class="login_tip">邮箱注册创威博客</div>
        <div class="clearboth"></div>
        <div class="login_inner">
            <form action="" method="">
                <div class="login_enter">
                    <input v-model="registerModel.email" @blur="checkEmail()" :class="['user_mail', emailmsg !='ok' ? '':'psdright']" type="text" maxlength="22" autocomplete="off" placeholder="请输入邮箱">
                    <div v-if="emailmsg&&emailmsg!='ok'"  class=" error ">
                        <span>{{ emailmsg }}</span>
                    </div>
                </div>
                <div class="rlogin_enter">
                    <input v-model="registerModel.password" @blur="checkPsd()" :class="['password', psdmsg !='ok' ? '':'psdright']"  type="password" maxlength="22" autocomplete="off" placeholder="请输入密码">
                    <div v-if="psdmsg&&psdmsg!='ok'"  class=" error ">
                        <span >{{ psdmsg }}</span>
                    </div>
                </div>
                <div class="rlogin_enter">
                    <input :disabled="registerModel.password==''"  @blur="checkrePsd()" v-model="confirmPassword" :class="['password', repsdmsg !='ok' ? '':'psdright'  ]" type="password" maxlength="22" autocomplete="off" placeholder="请确认密码">
                    <div  v-if="repsdmsg&&repsdmsg!='ok'"  class=" error ">
                        <span>{{ repsdmsg }}</span>
                    </div>
                </div>
                <a @click="register"  class="fpwd_submit" disabled="disabled" href="javascript:void(0)">注册</a>
            </form>
            <div class="choose_register">已有账号？<a v-link="{ path: '/register'}" href="javascript:void(0)">登录</a></div>
        </div>
    </div>
</template>
<script>
var Datastore = require('nedb'),
    db = new Datastore({
        filename: '/data',
        autoload: true
    });
var username = false;
var userpsd = false;
var confirmpsd = false;
export default {
    data: () => {
        return {
            registerModel: {
                email: '',
                password: '',
                userImg:'../../static/img/user.gif'
            },
            confirmPassword: "",
            emailmsg:'',
            psdmsg: '',
            repsdmsg: '',
        }
    },

    methods: {

        checkEmail:function(){
            this.emailmsg = "";

            var reg=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/     //验证邮箱格式是否正确
            console.log("registerModel", this.registerModel.email.length);

            if (!this.registerModel.email)
                {
                    this.emailmsg = "请填写邮箱";
                    username = false;
                }else if(!(reg.test(this.registerModel.email))){
                    this.emailmsg = "邮箱格式不正确";
                    username = false;
                }else {
                    var that = this;
                    $.post('/findUser', this.registerModel,
                        function(data){
                            console.log("result:",data);
                            if(data==='fail'){
                                that.emailmsg = "用户已存在";
                                username = false;
                            }else{
                                that.emailmsg = "ok";
                                username = true;
                            }
                    });

                }
        },
        checkPsd: function() {
            this.psdmsg = "";

            var reg=/^[\w]{6,12}$/  //密码由字母、数字、下划线组合

            if (this.registerModel.password.length==0)
                {
                    this.psdmsg = "请填写密码";
                    userpsd  = false;
                }else if(this.registerModel.password.length < 6 || this.registerModel.password.length >12){
                    this.psdmsg = "密码长度需大于6个字符小于12个字符";
                    userpsd  = false;
                }else if(!(reg.test(this.registerModel.password))){
                    this.psdmsg = "密码由字母、数字、下划线组合";
                    userpsd  = false;
                }else{
                    this.psdmsg='ok'
                    userpsd  = true;
                }
        },
        checkrePsd: function() {
            this.repsdmsg = "";

            if (this.registerModel.password === this.confirmPassword)
                {
                    this.repsdmsg='ok'
                    confirmpsd = true;
                }else{
                    this.repsdmsg = "两次密码不一致";
                    confirmpsd = false;
                }

        },
        register: function() {
            console.log("registerModel", this.registerModel);

            if (username&&userpsd&&confirmpsd) {
                console.log("registerModel", this.registerModel);

                 $.post('/regiest', this.registerModel,
                    function(data){
                        console.log("result:",data);
                    });

                 alert("注册成功！")
                this.$route.router.go({name: 'home'});

            }else{
                alert("注册失败！")
            }

        }

    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 用户登录  start */
.right{
    background:red;
}
.error-msg {
    display: block;
    border: 1px red solid;
}

.login-Layer {
    position: fixed;
    z-index: 999;
    top: 30%;
    left: 35%;
}

.register_mail {
    width: 500px;
    background: #fff;
    box-shadow: 0 5px 9px #888;
    position: absolute;
    top: 30%;
    left: 35%;
}

.login_tip {
    margin-bottom: 30px;
    text-align: center;
    color: #fff;
    font-size: 28px;
    line-height: 100%;
    background: #78c9de;
    padding: 20px 0;
    width: 500px;
    font-weight: bold;
}

.login_inner {
    width: 300px;
    margin: 20px auto auto;
    height: auto;
    overflow: hidden;
}

.login_enter,
.rlogin_enter {
    position: relative;
}

.login_enter .user_login,
.login_enter .user_mail,
.login_enter .user_phone,
.rlogin_enter .password {
    border: 1px #AFAFAF solid;
    width: 90%;
    height: 38px;
    margin-bottom: 20px;
    color: #8f8f8f;
    padding-left: 10px;
}
.login_enter .psdright,.rlogin_enter .psdright{
    border: 1px #1ECE6D solid;
}

.forget_pwd {
    width: 300px;
    text-align: right;
    margin: -5px 0 10px 0;
    font-size: 1.2em;
}

.fpwd_submit {
    background: #78c9de;
    border-radius: 10px;
    color: #FFF;
    width: 110px;
    height: 35px;
    border: 0px none;
    font-size: 14px;
    margin: 0 auto 10px;
    display: block;
    cursor: pointer;
    text-align: center;
    line-height: 35px;
}

.fpwd_submit:hover {
    background: #1facdd;
    color: #FFF;
}

.user_register {
    width: 300px;
    text-align: center;
    margin: 20px 0;
    font-size: 1.2em;
}

.user_register a {
    width: 300px;
    text-align: center;
    margin: 20px 5px auto;
    color: #1facdd;
}

.user_register a:hover {
    text-decoration: underline;
}


/* 错误信息提示  start */

.error,
.corect {
    height: 20px;
    width: 20px;
    position: absolute;
    top: 19px;
    right: 9px;
}

.error span {
    display: block;
    position: absolute;
    top: 10px;
    right: 0px;
    background: #fcc;
    border: 1px solid #f33;
    font-size: 12px;
    line-height: 16px;
    color: #600;
    padding: 6px 10px 4px 10px;
    border-radius: 5px;
    opacity: .8;
    white-space: nowrap;
    overflow: hidden;
}

.corect span {
    display: none;
}

.none {
    display: none;
}


/* 用户注册  start */

.register_enter .user_mail {
    border: 1px #AFAFAF solid;
    width: 100%;
    height: 38px;
    margin-bottom: 20px;
    color: #8F8F8F;
    padding-left: 10px;
}

.choose_register {
    width: 300px;
    text-align: right;
    font-size: 1.2em;
    margin: 20px 0;
}

.choose_register a {
    padding: 5px;
}

.rlogin_enter .phone_code {
    border: 1px #AFAFAF solid;
    width: 50%;
    height: 38px;
    margin-bottom: 20px;
    color: #8F8F8F;
    padding-left: 10px;
    float: left;
}

.code a {
    display: block;
    border-radius: 5px;
    color: #56ADD4;
    width: 110px;
    height: 35px;
    border: 1px #56ADD4 solid;
    font-size: 14px;
    float: left;
    margin-left: 25px;
    display: block;
    cursor: pointer;
    text-align: center;
    line-height: 35px;
}

.code a:hover {
    color: #78c9de;
    border: 1px #78c9de solid;
}
</style>
