<template>
    <div class="show_login disnone"></div>
    <div class="login-Layer">
        <a href="javascript:void(0)"></a>
        <div class="poplogin disnone">
            <div class="login_tip">欢迎登录创威博客</div>
            <b @click="closeBtn" class="close">X</b>
            <div class="clearboth"></div>
            <div class="login_inner">
                <form action="" method="">
                    <div class="login_enter">
                        <input type="text" class="user_login" maxlength="22"
                        v-model="user.email" autocomplete="off" placeholder="请输入邮箱/用户名 ">
                        <div class="none error_username">
                            <span></span>
                        </div>
                    </div>
                    <div class="rlogin_enter">
                        <input type="password" class="password" maxlength="22"
                        v-model="user.pass" autocomplete="off" placeholder="请输入密码">
                        <div class="none error_password">
                            <span></span>
                        </div>
                    </div>
                    <div class="forget_pwd"><a href="javascript:void(0)">忘记密码？</a></div>
                    <a class="fpwd_submit" @click='login()' href="javascript:void(0)">登录</a>
                </form>
                <div class="user_register">没有账号？<a v-link="{ path: '/register'}" href="javascript:void(0)">点我注册</a></div>
            </div>
        </div>
    </div>
</template>

<script>


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 用户登录  start */
.show_login {
    background: rgba(25,25,25,0.85);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: none;
    width: 100%;
    height: 100%;
    padding: 0 2px;
    z-index: 888;
}
.login-Layer{
    position:fixed;
    z-index: 999;
    top: 30%;
    left: 35%;
}
.poplogin,.register_mail,.testpsd_mail,.register_phone,.testpsd_phone{
    width:500px;
    background: #fff;
    box-shadow: 0 5px 9px #888;
}
.login_tip{
    margin-bottom: 30px;
    text-align: center;
    color: #fff;
    font-size: 28px;
    line-height: 100%;
    background: #78c9de;
    padding: 20px 0;

    width:500px;
    font-weight:bold;
    }
.login_inner{
    width:300px;
    margin:20px auto auto;
    height:auto;
    overflow:hidden;
    }
.login_enter,.rlogin_enter{
    position:relative;
    }
.login_enter .user_login,.login_enter .user_mail,.login_enter .user_phone,.rlogin_enter .password{
    border:1px #AFAFAF solid;
    width:90%;
    height:38px;
    margin-bottom:20px;
    color:#8f8f8f;
    padding-left:10px;
    }
.forget_pwd{
    width:300px;
    text-align:right;
    margin:-5px 0 10px 0;
    font-size:1.2em;
    }

.fpwd_submit {
    background: #78c9de;
    border-radius:10px;
    color: #FFF;
    width: 110px;
    height: 35px;
    border: 0px none;
    font-size: 14px;
    margin:0 auto 10px;
    display:block;
    cursor:pointer;
    text-align: center;
    line-height: 35px;
}
.fpwd_submit:hover{
    background:#1facdd;
    color: #FFF;
    }
.user_register{
    width:300px;
    text-align:center;
    margin:20px 0;
    font-size:1.2em;
    }
.user_register a{
    width:300px;
    text-align:center;
    margin:20px 5px auto;
    color:#1facdd;
    }
.user_register a:hover{
    text-decoration:underline;
    }

/* 错误信息提示  start */
.error,.corect {
    height:20px;
    width:20px;
    position:absolute;
    top:19px;
    right:9px;
    }
.error span {
    display:block;
    position:absolute;
    top:10px;
    right:0px;
    background:#fcc;
    border:1px solid #f33;
    font-size:12px;
    line-height:16px;
    color:#600;
    padding:6px 10px 4px 10px;
    border-radius:5px;
    opacity:.8;
    white-space:nowrap;
    overflow:hidden;
    }
.corect span{
    display:none;
    }
.none {
    display:none;
    }
/* 用户注册  start */
.register_enter .user_mail{
    border:1px #AFAFAF solid;
    width:100%;
    height:38px;
    margin-bottom:20px;
    color:#8F8F8F;
    padding-left:10px;
    }
.choose_register{
    width:300px;
    text-align:right;
    font-size:1.2em;
    margin:20px 0;
    }
.choose_register a{
    padding:5px;
    }
.rlogin_enter .phone_code{
    border:1px #AFAFAF solid;
    width:50%;
    height:38px;
    margin-bottom:20px;
    color:#8F8F8F;
    padding-left:10px;
    float:left;
    }
.code a{
    display:block;
    border-radius:5px;
    color: #56ADD4;
    width: 110px;
    height: 35px;
    border:1px #56ADD4 solid;
    font-size: 14px;
    float:left;
    margin-left:25px;
    display:block;
    cursor:pointer;
    text-align: center;
    line-height: 35px;
}
.code a:hover{
    color:#78c9de;
    border:1px #78c9de solid;
    }

</style>

