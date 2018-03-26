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
                  <li v-if="isMyblog"  >
                    <a href="javascript:void(0)">
                      <span>管理博客</span>
                    </a>
                  </li>
                  <li v-if="isMyblog">
                    <a v-link="{ path: '/userblog/editblog2'}" href="javascript:void(0)">
                      <span>写新文章</span>
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
                  <span><a href="javascript:void(0)" class="user_name" target="_blank">{{username}}</a></span>
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
 export default {
  data:() =>{
    return {
      blogList:[],
      user: {
                email: '',
                password: '',
                userImg:''
            },
      userblog: {
                    useremail:'',
                    userBlogtit:'',
                    userBlogcont:'',
                    userBlogtime:''
                  },
      userblogList:[],
      username:'',
      matchemail:'',
      isMyblog:false
    }
  },
created:function(){},
ready:function(){
      var that=this;
      if(this.$root.user){
        this.isMyblog=true
        this.user=this.$root.user;
        /*this.userblog.useremail = this.$root.user.email;*/
      }
      if (!this.user.nickname) {
          this.username=this.user.email
        }else{
          this.username=this.user.nickname
        }

      /*this.isMyblog =that.$root.user.email === $root.blogList.useremail;*/

      $.post('/matchUser',{email:this.$root.blogList.data.useremail},
            function(data){
               console.log("data:", JSON.stringify(data[0].data.email))
              if(that.$root.user&&(that.$root.user.email === data[0].data.email)){
                that.user=that.$root.user;
                this.isMyblog=true
              }else if(!that.$root.user||(that.$root.user.email != data[0].data.email)){
                that.user=data[0].data;
                that.isMyblog=false;
              }
             /* that.$root.isMyblog = that.isMyblog
              that.$dispatch('matchUser', that.$root.isMyblog);*/
              //用户昵称显示，默认email为用户名，修改后显示昵称
              if (!that.user.nickname) {
                that.username=that.user.email
              }else{
                that.username=that.user.nickname
              }
            });
  },

  methods:{

    addblog:function(){
      /* 获取当前文章发表时间 */
        function CurentTime()
              {
                  var now = new Date();

                  var year = now.getFullYear();       //年
                  var month = now.getMonth() + 1;     //月
                  var day = now.getDate();            //日

                  var hh = now.getHours();            //时
                  var mm = now.getMinutes();          //分

                  var clock = year + "-";

                  if(month < 10)
                      clock += "0";

                  clock += month + "-";

                  if(day < 10)
                      clock += "0";

                  clock += day + " ";

                  if(hh < 10)
                      clock += "0";

                  clock += hh + ":";
                  if (mm < 10) clock += '0';
                  clock += mm ;


                  return(clock);
          }
          this.userblog.userBlogtime=CurentTime()
          console.log("userBlogtime:", this.userblog.userBlogtime)
          $.post('/saveuserblog',this.userblog,
            function(data){

            });
            alert("添加成功！")
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
.disblock{
  display: block;
}
.disnone{
  display: none;
}
</style>