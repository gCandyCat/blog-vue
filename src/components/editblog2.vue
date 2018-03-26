<template>
     <div class="myblog_editblog">
        <div class="blogedit">
            <div class="edittitle">
              <h3>文章标题:</h3>
              <input v-model="userblog.userBlogtit">
            </div>
            <div class="editinner">
              <h3>文章内容:</h3>
              <textarea  cols="100"  rows="100" v-model="userblog.userBlogcont"></textarea>
            </div>
            <button class="editadd" v-on:click="addblog">保存</button>
          </div>
          <!-- <div class="showedit">
            <div class="showlist"  v-for="todo in userblogList" >
                  <h4>{{todo.tit}}</h4>
                  <p> {{todo.info}}</p>
                  <button class="editremove" v-on:click="removeTask($index)">delet</button>
            </div>
          </div> -->
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
    }
  },
  created:function(){
        if( this.$root.user){
             this.user=this.$root.user;
             this.loginflag=true;
             this.userblog.useremail = this.$root.user.email;
        }
  },
  methods:{
    /*  添加博客  */
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
            this.$route.router.go({path: '/userblog/blogmenuList'});
      },
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.editadd{
  display:block;
  width:30px;
  height:20px;
  position:relative;
  float:right;
  margin-top:20px;

}
</style>