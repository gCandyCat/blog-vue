<template>
    <div class="blog_info">
      <div class="article_title">
          <h1>
              <span class="link_title">{{userblog.userBlogtit}}</span>
          </h1>
      </div>
      <div class="article_manage clearfix">
          <div class="article_r">
              <span class="link_postdate">{{userblog.userBlogtime}}</span>
              <span class="link_view" title="阅读次数">333人阅读</span>
              <span class="link_comments" title="评论次数"> <a>评论</a>(0)</span>
              <span class="link_collect tracking-ad"> <a >收藏</a></span>
              <span class="link_report"> <a href="#report"title="举报">举报</a></span>
          </div>
      </div>
      <div class="article_content">
            <p>{{userblog.userBlogcont}}</p>
      </div>

    </div>
</template>

<script>

var Datastore = require('nedb')
  , db = new Datastore({ filename: '/data', autoload: true });
 export default {
  data:() =>{
    return {
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
    }
  },
  created:function(){
        if(this.$root.blogList){
             this.userblog.userBlogtit=this.$root.blogList.data.userBlogtit;
             this.userblog.userBlogcont=this.$root.blogList.data.userBlogcont;
             this.userblog.userBlogtime=this.$root.blogList.data.userBlogtime;
        }
  },
ready:function(){
      var that=this
      $.post('/getBlog',this.userblog,
            function(data){

              for (var i=0;i<data.length;i++)
                {
                  var txt = "{'tit':'"+data[i].data.userBlogtit+"','info':'"+data[i].data.userBlogcont+"','time':'"+data[i].data.userBlogtime+"'}";
                  that.userblogList.push(eval("("+txt+")"));
                  /*that.userblogList.push(new objFun(data[i].data.userBlogtit,data[i].data.userBlogcont))*/

                }
               /* function objFun(t,c){
                    that.userblogList.tit = t;
                    that.userblogList.info = c;
                }*/

            });

  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blog_info{
    padding: 20px 20px 35px;
    background: #fff;
}
.blog_info .article_title h1 {
    display: inline-block;
    vertical-align: middle;
    font-size: 18px;
}
.blog_info .article_manage {
    color: #999;
    border-bottom: solid 1px #ededed;
    margin: 0 -20px;
    padding: 0 20px 5px;
    margin-bottom: 10px;
    text-align: right;;
    overflow: hidden;
}
.article_manage span {
    margin-right: 16px;
}
.article_manage .link_postdate {
    margin: 0 5px 0 0;
}

.article_manage .link_view {
    padding-left: 24px;
}
.article_manage .link_comments {
    padding-left: 17px;
}
.article_manage .link_collect {
    padding-left: 17px;
}
.article_manage .link_report {
    padding-left: 17px;
}
.article_content {
    margin: 35px 0;
    font-size: 15px;
    color: #555;
    line-height: 35px;
}
.article_content p {
    font-size: 14px;
}
</style>