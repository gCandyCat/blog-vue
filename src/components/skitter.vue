<template>
    <div class="ban">
        <div id="slideshow" class="box_skitter fn-clear">
            <ul>
                <li> <img class="cubeRandom" src="../../static/img/banner.png" /> </li>
                <li> <img class="cubeRandom" src="../../static/img/banner.png" /> </li>
                <li> <img class="cubeRandom" src="../../static/img/banner.png" /> </li>
            </ul>
        </div>

        <div class="log">
            <div class="login" v-if="! loginflag ">
              <p class="welcome">Hi 欢迎使用创威博客</p>
              <p>创威博客，陪您成长，您的技术交流伙伴。</p>
              <a @click="loginBtn" class="btn-login" href="javascript:void(0)" title="登录">登录</a>
            </div>
            <div class="logininfo  " v-if="loginflag">
                <div class="userbox">
                    <div class="user-pic">
                        <a v-link="{ path: '/user_info'}" href="javascript:void(0)" title="">
                            <img :src="user.userImg" />
                        </a>
                    </div>
                    <p>
                        <a v-link="{ path: '/user_info'}" class="u-name" href="javascript:void(0)">{{username}}</a>
                    </p>
                    <p>
                        <a href="javascript:void(0)" title="通知" btn="logout">消息（<i>0</i>）</a>
                    </p>
                    <p class="u-query">
                        <a @click="quitlogin" href="javascript:void(0)" title="退出登录">退出登录</a>
                    </p>
                </div>
                <p class="user_intro">个人简介：<span>啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦。</span></p>
                <div class="about_user">
                    <span><a href="javascript:void(0)">200</a>关注</span>
                    <span><a href="javascript:void(0)">100</a>粉丝</span>
                    < span><a v-link="{ path: '/userblog'}" href="javascript:void(0)">{{blogcount}}</a>博文</span>
                </div>
            </div>
        </div>
    </div>
    <div class="show_login disnone" ></div>
    <div class="login-Layer" >
        <a href="javascript:void(0)" ></a>
        <div class="poplogin disnone">
            <div class="login_tip">欢迎登录创威博客</div>
            <b @click="closeBtn" class="close">X</b>
            <div class="clearboth"></div>
            <div class="login_inner">
                <form action="" method="">
                    <div class="login_enter">
                        <input type="text" class="user_login" maxlength="22"
                        v-model="user.email" autocomplete="off" placeholder="请输入邮箱/用户名 ">
                    </div>
                    <div class="rlogin_enter">
                        <input type="password" class="password" maxlength="22"
                        v-model="user.password" autocomplete="off" placeholder="请输入密码">
                    </div>
                     <span :class="{'log_error':logerrmsg}">{{logerrmsg}}</span>
                    <div class="forget_pwd"><a href="javascript:void(0)">忘记密码？</a></div>
                    <a class="fpwd_submit" @click='login()' href="javascript:void(0)">登录</a>
                </form>
                <div class="user_register">没有账号？<a v-link="{ path: '/register'}" href="javascript:void(0)">点我注册</a></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            user: {
                email: '',
                password: '',
                userImg:'',
                nickname:''
            },
        userblog: {
                useremail:'',
                userBlogtit:'',
                userBlogcont:'',
                userBlogtime:''
              },
            username:'',
            logerrmsg:'',
            loginflag:false,
            blogcount:0,
            UserStorage:''
        }
    },
    created:function(){
        /*if(!window.sessionStorage){
               console.log("sessionStorage");
               return false;
           }else{
               this.UserStorage=window.sessionStorage;
        };*/
        if( this.$root.user){
             this.user=this.$root.user
             this.loginflag=true;
             this.username = this.$root.user.email
        }
        this.userblog.useremail = this.user.email

        var that = this;
          $.post('/getBlog',this.userblog,
            function(data){
                that.blogcount = data.length
            });

  },
ready:function(){

    //用户昵称显示，默认email为用户名，修改后显示昵称
      if (!this.user.nickname) {
        this.username=this.user.email
      }else{
        this.username=this.user.nickname
      };

  },
  methods: {
    login:function  () {
        console.log("userinfo :",this.user);

        var that = this;
         $.post('/dologin', this.user,
            (data)=>{
                console.log("result:",data);
                if(data.res==='success'){
                    that.user=data.user;
                    that.$root.user=that.user;
                    this.loginflag=true;
                    that.$dispatch('login', that.$root.user);
                    $(".show_login").hide();
                    $(".poplogin").hide();
                    //存储用户信息
                        /*var d=JSON.stringify(that.user);
                        that.UserStorage.setItem("user",d);
                        console.log(that.UserStorage);
                         if (that.UserStorage) {
                             console.log("登录后this.UserStorage",true)
                           }else{
                             console.log("登录后this.UserStorage",false)
                           };*/
                    //用户昵称显示，默认email为用户名，修改后显示昵称
                   if (!that.$root.user.nickname) {
                     that.username=that.$root.user.email
                   }else{
                     that.username=that.$root.user.nickname
                   }
                }else{
                    that.logerrmsg = '*用户名或密码错误';
                }
            });
         this.userblog.useremail = this.user.email
          $.post('/getBlog',this.userblog,
            function(data){
                that.blogcount = data.length
            });
    },
    quitlogin:function  () {
        console.log("userinfo :",this.user);
        this.user='';   //
         this.$root.user=this.user;
         this.loginflag=false;
          this.$dispatch('login', this.$root.user);
         alert(this.user.email);
         alert(this.user.password)
    },
    loginBtn:function()
      {
        $(".show_login").show();
        $(".poplogin").slideDown();
      },
    closeBtn:function()
      {
        $(".show_login").hide();
        $(".poplogin").slideUp();
      },
    },
}

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
.close{
    font-style:normal;
    font-size: 18px;
    font-weight: 600;
    position: absolute;
    top: -15px;
    right: -15px;
    color: #56a8bd;
    border: 2px #56a8bd solid;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: rgb(161, 223, 239);
}
.close:hover{
    color: rgb(161, 223, 239);
    border: 2px rgb(161, 223, 239) solid;
    background: #56a8bd;
    cursor:pointer;
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
.log_error{
    font-size:14px;
    color:#f00;
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
/* 已登录用户信息 */
.logininfo{
    height:200px;
}
.logininfo a{
    color:#fff;
}
.logininfo a:hover {
    color:  #1facdd;
}
.userbox {
    margin-bottom: 10px;
    height: 60px;
    min-height: 60px;
}
.user-pic {
    float: left;
    margin-right: 12px;
    width: 60px;
    height: 60px;
    background-color: #000;
}
.user-pic img {
    display: block;
    width: 60px;
    height: 60px;
}
.u-name{
    font-size:14px;
}
.user_intro{
    height:55px;
}
.about_user{
    height:50px;
    position:relative;
    margin-top:10px;
}

.about_user span{
    display:inline-block;
    width:55px;
    height:50px;
    text-align:center;
    font-size:14px;
    border-right:1px #fff solid;
}
.about_user span:last-child {
    border: 0;
}
.about_user span a{
    display:block;
    font-style:normal;
    font-weight:bold;
    font-size:20px;
    width:55px;
}

</style>

