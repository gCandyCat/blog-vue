<template>
    <div class="userinfo_top">
    <div class="main">
        <div class="user_info clear">
            <div class="user_pic"> <img :src="user.userImg" height="120" width="120"> </div>
            <div class="user_msg">
                <div class="user_head clear"><h3 class="name">{{username}}</h3></div>
                <div class="user_data">
                    <span class="info_null">未填写行业</span>
                    <span>|</span>
                    <span class="info_null">未填写职位</span>
                    <span>|</span>
                    <span class="info_null">未填写姓名</span>
                    <span>|</span>
                    <span class="info_null">未填写擅长领域</span>
                    <span>|</span>
                    <span>中国</span>
                    <span>|</span>
                    <span class="info_null">未填写性别</span>
                </div>
            </div>
        </div>
    </div>
</div>
<section class="wp">
  <div class="main clearfix userinfo_main">
  <aside class="sider userinfo_sider">
        <div class="myMenu">
            <ul class="list">
                <li class="active"><em class="my_info"></em><a href="javascript:void(0)">个人资料</a></li>
                <li><em class="account"></em><a href="javascript:void(0)">我的关注</a></li>
                <li><em class="bookshelf"></em><a href="javascript:void(0)">我的评论</a></li>
                <li><em class="bookshelf"></em><a href="javascript:void(0)">我的消息</a></li>
           </ul>
        </div>
    </aside>
    <section class="cont myblock">
        <div class="tab">
            <span class="active">
                <a href="javascript:void(0)">基本信息</a>
                <em class="triangle_down"></em>
            </span>|
            <span>
                <a href="javascript:void(0)">修改密码</a>
            </span>
        </div>
        <article class="channelmod clearfix ">
            <div class="infoBlock clearfix ">
              <form>
                <div class="uc_avatarlist">
                   <div class="info_p">
                     <div class="mr_img">
                       <img :src="userPic" border="0" height="120" width="120">
                     </div>
                     <div class="mr_portrait">
                       <p>默认头像预览</p>
                       <a @click="savaUserpic" class="btn_savepic">保存所选头像</a>
                     </div>
                   </div>
                   <div class="portraiticon">
                        <img @click="changepic($index)" v-for="pic in userPiclist" :src="pic.url"  align="middle" />
                   </div>
                </div>
                <div class="msgstab clearfix ">
                  <div class="infotab clearfix ">
                    <ul class="clearfix">
                      <li>
                        <span class="fs14 tit">昵称：</span>
                        <span class="fs14 check">
                            <input  v-model="user.nickname" class="checktext checked" type="text" />
                        </span>
                      </li>
                      <li>
                        <span class="fs14 tit">行业：</span>
                        <span class="fs14 check">
                          <input class="checktext checked" type="text" />
                        </span>
                      </li>
                      <li>
                        <span class="fs14 tit">职位：</span>
                        <span class="fs14 check">
                          <input class="checktext checked" type="text" />
                        </span>
                      </li>
                      <li>
                          <span class="fs14 tit" >姓名：</span>
                          <span class="fs14 check">
                              <input  v-model="user.realname" class="checktext checked" type="text" />
                          </span>
                      </li>
                      <li>
                          <span class="fs14 tit">擅长领域：</span>
                          <span class="fs14 check">
                              <input class="checktext checked" type="text" />
                          </span>
                      </li>
                      <li>
                        <span class="fs14 tit">性别：</span>
                        <span class="checked">
                            <input name="sex" value="0" checked="" type="radio" />
                               男
                            <input name="sex" value="1" type="radio" />
                                女
                        </span>
                      </li>
                      <li class="info_lastarea">
                          <span class="fs14 tit">个人简介：</span>
                          <span class="fs14">
                              <textarea rows="5" cols="70"  class="checktext checked" type="text" name=""></textarea>
                          </span>
                      </li>

                    </ul>
                    <a @click="saveUserinfo" href="javascript:void(0);" class="save_btn"><span>保存</span></a>
                  </div>
                </div>
              </form>
            </div>
        </article>
    </section>

  </div>
</section>

</template>

<script>
var Datastore = require('nedb')
  , db = new Datastore({ filename: '/data', autoload: true });
var userPiclist = [{url:''}]
 export default {
  data:() =>{
    return {
        user: {
                email: '',
                password: '',
                userImg:''
            },
      username:'',
      userPic:'',
      userPiclist:userPiclist,
    }
  },
ready:function(){
    //用户昵称显示，默认email为用户名，修改后显示昵称
      this.user=this.$root.user
      if (!this.user.nickname) {
        this.username=this.user.email
      }else{
        this.username=this.user.nickname
      }
      this.userPic = this.user.userImg

    //用户头像可选列表
      var that=this
      $.get('/getuserImg',(data)=>{
         console.log("userPiclist:", this.userPiclist, data[0])
         this.userPiclist=data[0].data;
         console.log("userPic:", data[0])
      })
  },
  methods:{
    saveUserinfo:function(){
      // this.user=this.$root.user
      //  this.user.nickname=this.nickname;
      //  this.user.realname=this.realname;

        $.post('/upuserinfo',{"data":this.user},
            function(data){
              console.log('result:',data);
            });
        // db.update({"data":this.user,
        //         }, { $push: { nickname:this.nickname,realname:this.realname} },{}, function () {
        //           // Now the fruits array is ['apple', 'orange', 'pear', 'banana']
        //         });

        // alert(JSON.stringify(this.$root.user))
    },
    changepic:function(index){
        this.userPic=this.userPiclist[index].url;
        console.log('urlimg:',JSON.stringify(this.userPiclist[index].url))

    },

    savaUserpic:function(index){
        console.log('this.userImg:',this.user.userImg)
        this.user.userImg=this.userPic;
        $.post('/savaUserpic',{"data":this.user},
            function(data){
              console.log('result:',data);
            });
    },

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>

 