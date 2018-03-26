<template>
    <div class="blogedit">
      <div class="edittitle">
        <h3>文章标题:</h3>
        <input v-model="message">
      </div>
      <div class="editinner">
        <h3>文章内容:</h3>
        <textarea  cols="100"  rows="100" v-model="infrom"></textarea>
      </div>

      <button class="editadd" v-on:click="addTask">add</button>
    </div>
    <div class="showedit">
      <div class="showlist"  v-for="todo in todoList" >
            <h4>{{todo.tit}}</h4>
            <p> {{todo.info}}</p>
            <button class="editremove" v-on:click="removeTask($index)">delet</button>
      </div>
    </div>
</template>

<script>

var Datastore = require('nedb')
  , db = new Datastore({ filename: '/data', autoload: true });

var todoList = [{tit:'',info:''}]
//var myDate = new Date();
//var year = myDate.getFullYear();    获取完整的年份(4位,1970-????)
//var moth = myDate.getMonth();       获取当前月份(0-11,0代表1月)
//var date = myDate.getDate();        获取当前日(1-31)

 export default{
  data:()=>{
      return{
        message:'',
        infrom:'',
        todoList:todoList,
        }
      },

  ready:function(){
      var that=this
       $.get('/getData',(data)=>{
         console.log("serv data:", data[0],this.todoList )
         this.todoList=data[0].data,

        alert(this.todoList.length);
      })
  },
  methods:{
      addTask:function(){
        this.todoList.push({tit:this.message,info:this.infrom});


          $.post('/save',{"data":this.todoList,id:1,id},
            function(data){

            });


          db.insert(this.todoList, function (err, newDoc) {

          });
      },
      removeTask:function(delet){
        this.showBtn=true;
        this.todoList.splice(delet, 1);
          $.post('/save',{"data":this.todoList,id:1},
            function(data){

            });
          db.updata(this.todoList, function (err, newDoc) {

          });
      },





    }
}

</script>

<style>
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, figure, legend, button, input, textarea, th, td, html {
  margin:0;
  padding:0;
}
body, button, input, select, textarea {
  font:12px/1.5 "microsoft yahei", "simsun", arial, sans-serif,"宋体";
}

body, button, input, select, textarea {
    font: 12px/1.5 tahoma,arial,宋体,sans-serif;
}
h1, h2, h3, h4, h5, h6 {
  font-size:100%;
  font-weight:normal;
}

#app{
  margin:30px 200px;
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
