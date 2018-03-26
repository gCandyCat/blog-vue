<template>
  <div class="myblog_header clearfix">
      <div id="blog_title">
        <h2>
          <a href="javascript:void(0)">{{username}}的博客</a>
        </h2>
      </div>
    </div>
    <div class="main myblog_main">
      <div class="myblog_content clearfix">
        <div class="myblog_navigator clearfix">
          <div class="navigator">
              <ul>
                  <li>
                    <a v-link="{ path: '/userblog/blogmenuList'}" href="javascript:void(0)">
                      <span>目录视图</span>
                    </a>
                  </li>
                  <li>
                    <a  v-link="{ path: '/userblog/blogAbstractList'}" href="javascript:void(0)">
                      <span>摘要视图</span>
                    </a>
                  </li>
              </ul>
          </div>
        </div>
        <aside class="myblogside">
          <div class="myblog_panel">
            <div class="panel_head">
              <span>个人资料</span>
            </div>
            <div class="panel_body profile clearfix">
              <div class="blog_userface">
                  <a class="myblog_userimg" href="javascript:void(0)" target="_blank">
                    <img :src="user.userImg" v-link="{ path: '/user_info'}" title="访问我的空间">
                  </a>
                  <br>
                  <span><a @click="gomypage" href="javascript:void(0)" class="user_name" target="_blank">{{username}}</a></span>
              </div>
              <div class="interact">
                  <a  class="attent" href="javascript:void(0);"title="[加关注]">关注</a>
                  <a class="letter" href="javascript:void(0);" title="[发私信]">私信</a>
              </div>
              <ul class="blog_rank">
                  <li>访问：<span>0次</span></li>
                  <li>积分：<span>0</span> </li>
                  <li>排名：<span>千里之外</span></li>
              </ul>
              <ul class="blog_statistics">
                  <li>原创：<span>0篇</span></li>
                  <li>转载：<span>0篇</span></li>
                  <li>译文：<span>0篇</span></li>
                  <li>评论：<span>0条</span></li>
              </ul>
            </div>
          </div>
        </aside>
        <div class="myblog_info">
          <div class="myblog_list">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

var Datastore = require('nedb')
  , db = new Datastore({ filename: '/data', autoload: true });
 export default {
  data:() =>{
    return {
      blogList:[],
      user: {
                email: '',
                password: '',
                userImg:''
            },
      username:'',
    }
  },
  created:function(){
        if( this.$root.user){
             this.user=this.$root.user;
             this.loginflag=true;
             this.userblog.useremail = this.$root.user.email;
        }
        console.log('blogList:',JSON.stringify(this.$root.blogList))

  },
ready:function(){
      var that=this
      $.post('/getBlog',this.userblog,
            function(data){

              for (var i=0;i<data.length-1;i++)
                {
                    var bloglist=data[i].data;
                  that.userblogList.push(bloglist);

                }
               /* function objFun(t,c){
                    that.userblogList.tit = t;
                    that.userblogList.info = c;
                }*/

            /*console.log("userblogList:", that.userblogList)*/
            });
      //用户昵称显示，默认email为用户名，修改后显示昵称
          this.user=this.$root.user
          if (!this.user.nickname) {
            this.username=this.user.email
          }else{
            this.username=this.user.nickname
          }

  },

  methods:{
      gomypage:function(){
        if(!this.$root.user){
          alert("请登录")
        }else{
          this.$route.router.go({name: 'user_info'});
      };

    },
    //  removeTask:function(delet){
    //    this.showBtn=true;
    //    this.todoList.splice(delet, 1);
    //      $.post('/save',{"data":this.todoList,id:1},
    //        function(data){
    //
    //        });
    //      db.updata(this.todoList, function (err, newDoc) {
    //
    //      });
    //  },


  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myblog_bg {
    background: url("../../static/img/myblog_bg.png") repeat;
}
.blogedit{
  width:545px;
  overflow:hidden;
}
.edittitle{
  width:500px;
  height:30px;
  line-height:30px;
}
.editinner{
  width:544px;
  height:203px;
  margin-top:30px;
}
.edittitle h3,.editinner h3{
  float:left;
  height:30px;
  line-height:30px;
  font-size:16px;
  font-weight:bold;
}
.edittitle input{
  display:block;
  float:left;
  margin-left: 20px;
  width:210px;
  height:30px;
  line-height:30px;
  font-size:15px;
  border:1px #ccc solid;
}
.editinner textarea{
  display:block;
  float:left;
  margin-left: 20px;
  width:450px;
  height:200px;
  font-size:15px;
  resize: none;
}
.editadd,.editremove{
  display:block;
  width:30px;
  height:20px;
  position:relative;
  float:right;
  margin-top:20px;
}
.showedit{
  width:545px;
  margin-top:50px;
}
.showlist{
  width:545px;
  height:auto;
  overflow:hidden;
  border-bottom:1px #ccc dashed;
}
.showlist h4{
  width:545px;
  height:30px;
  line-height:30px;
  font-size:16px;
  font-weight:bold;
}
.showlist p{
  min-height: 30px;
  height:auto;
  line-height:30px;
  font-size:15px;
  text-indent:32px;
  float:left;
}
</style>