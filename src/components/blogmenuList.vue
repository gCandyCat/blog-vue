<template>
    <div class="myblog_artivle">
      <div class="userblog_list_item clearfix"   v-for="todo in userblogList  | orderBy 'time' -1" >
        <div class="article_title">
          <span class="article_ico">原创</span>
          <h1>
            <span class="link_title">
              <a href="javascript:void(0);">{{todo.tit}}</a>
            </span>
          </h1>
        </div>
        <div class="article_manage">
          <span class="link_postdate">{{todo.time}}</span>
          <span class="link_view" title="阅读次数"><a href="javascript:void(0);" title="阅读次数">阅读</a>(1748)</span>
          <span class="link_comments" title="评论次数"><a href="javascript:void(0);" title="评论次数">评论</a>(2)</span>
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
        if( this.$root.user){
             this.user=this.$root.user;
             this.loginflag=true;
             this.userblog.useremail = this.$root.user.email;
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

  methods:{

  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>