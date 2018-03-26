<template>
    <div class="news_add">
        <Button1></Button1>
    </div>
    <div>
        <table>
            <thead>
                <tr>
                    <th v-for='thead in theads'>{{thead}}</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for='todo in todoList'>
                    <td >{{$index+1}}</td>
                    <td ><a v-link="{}">{{todo.data.title}}</a></td>
                    <td ><img  :src="todo.data.icon" alt="" /></td>
                    <td >{{todo.data.date}}</td>
                    <td>
                        <a v-link="{path:'/news/details/'+ todo._id  }">查看详情</a>
                        <a v-on:click="deletel($index)">删除</a>
                        <a v-link="{path:'/news/modify/'+ todo._id}">修改</a>
                    </td>
                </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="5" class="tfoots">
                 <!--  <div class="pull-left">
                   <button class="btn btn-default" @click="refresh">刷新</button>
                 </div> -->
                  <div class="pull-right">
                  <div class="page-bar">
                  <nav class="boot-nav">
                    <ul>
                    <li v-if="showFirst"><a v-on:click="cur--">上一页</a></li>

                    <li v-for="index in indexs"  v-bind:class="{ active: cur == index}">
                        <a @click="onPageClick(index)">{{ index}}</a>
                        </li>
                        <li v-if="showLast"><a v-on:click="cur++">下一页</a></li>
                        <li><a>共<i>{{pagecount}}</i>页</a></li>
                    </ul>
                  </nav>
                  </div>


                  </div>
                </td>
              </tr>
            </tfoot>
        </table>
    </div>
</template>
<script>
import Button1 from '../components/Button1.vue'
var todoList=[];
export default {
  data:()=>{
    return{
      cur:1,
      theads:
        {
        number:'序号',
        titles:"标题",
        contents:"类别",
        dates:"日期",
      },
      todoList:todoList,
      pageLen:2, // 数据可显示条数
      pagecount:0,
    }
  },
 computed: {
  showLast: function(){

                if(this.cur == this.pagecount){
                    return false
                }
                 this.getDataBy();
                return true
           },
           showFirst: function(){

                if(this.cur == 1){
                    return false
                }
                 this.getDataBy();
               return true
           },
            indexs: function(){
              var left = 1
              var right = this.pagecount
              var ar = []
              if(this.pagecount>= 11){
                if(this.cur > 5 && this.cur < this.pagecount-4){
                        left = this.cur - 5
                        right = this.cur + 4
                }else{
                    if(this.cur<=5){
                        left = 1
                        right = 10
                    }else{
                        right = this.pagecount
                        left = this.pagecount -9
                    }
                }
             }
            while (left <= right){
                ar.push(left)
                left ++
            }
            return ar
           }
        },
  ready:function(){
    //alert("pageLen:"+this.pageLen)
    this.getAllData()
    this.getDataBy()
  },

  methods:{
    getAllData(){
      $.get('/newsDeta1', (data)=>{
      this.pagecount= parseInt(data.length / this.pageLen);
       //alert("%:"+this.pagecount)
      if(data.length % this.pageLen !=0){
                   this.pagecount ++;
                }
     //console.log("共几页:"+this.pagecount);
    })

    },
    getDataBy(){
var that=this;
//alert("传入值："+this.cur)
       $.post('/newsDeta3',{"cur": this.cur,"pageLen":this.pageLen},

            function(data){
             // console.log("serv data3:",data)
                 that.todoList=data;
                 //console.log("数据总长度："+that.todoList.length)

            });
    },
    onPageClick:function(data){
      //console.log("页码:"+data)
      if(data != this.cur){
          this.cur = data;
                    }
       this.getDataBy();

    },
    deletel:function(index){
let _id = this.todoList[index]._id

       if (window.confirm('确认删除?')) {
         this.todoList.splice(index, 1);
          var _this=this
        $.post('/deleteNew',{"_id":_id},
            function(data){
               _this.getAllData()
             //  alert("vfjsadik")
           _this.getDataBy()
            });


    }

    },

  },

  components: {
    Button1
  }

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url(../publiceCss.css);
@import '../publicScss.scss';

.page-bar li{
    list-style: none;
    display: inline-block;
}
.page-bar li:first-child>a {
   margin-left: 0px
}
.page-bar a{
    border: 1px solid #ddd;
    text-decoration: none;
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #337ab7;
    cursor: pointer
}
.page-bar a:hover{
    background-color: #eee;
}
.page-bar .active a{
    color: #fff;
    cursor: default;
    background-color: #337ab7;
    border-color: #337ab7;
}
.page-bar i{
    font-style:normal;
    color: #d44950;
    margin: 0px 4px;
    font-size: 12px;
}



.tfoots{
  background-color:#ededed;
}



.btn{
  display:inline-block;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border:1px solid transparent;border-radius:4px}.btn.active.focus,.btn.active:focus,.btn.focus,.btn:active.focus,.btn:active:focus,.btn:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.btn.focus,.btn:focus,.btn:hover{color:#333;text-decoration:none
}

.btn-default{
  color:#333;
  background-color:#fff;
  border-color:#ccc;
  margin-left: 10px;
}

.pull-right{
  right:20px;
  left:auto;
  height: 40px;
  width:auto;
  float:right;
  margin-top: 5px;
  overflow: hidden;
}
.boot-select {
    float: right;
    width: 80px;
}

.boot-nav {
    float: right;
}

.boot-page {
    display: inline-block;
    vertical-align: middle;
}

.page-total {
    display: inline-block;
    vertical-align: middle;
}

.pagination {
  display:inline-block;
  padding-left:0;
  border-radius:4px
}

.pagination>li {
  display:inline
}
.pagination>li>a,.pagination>li>span {
  position:relative;
  float:left;
  padding:6px 12px;
  line-height:1.42857143;
  color:#337ab7;
  text-decoration:none;
  background-color:#fff;
  border:1px solid #ddd
}
.pagination>li:first-child>a,.pagination>li:first-child>span {
  margin-left:0;
  border-top-left-radius:4px;
  border-bottom-left-radius:4px
}
.pagination>li:last-child>a,.pagination>li:last-child>span {
  border-top-right-radius:4px;
  border-bottom-right-radius:4px
}
.pagination>li>a:focus,.pagination>li>a:hover,.pagination>li>span:focus,.pagination>li>span:hover {
  color:#23527c;
  background-color:#eee;
  border-color:#ddd
}
.pagination>.active>a,.pagination>.active>a:focus,.pagination>.active>a:hover,.pagination>.active>span,.pagination>.active>span:focus,.pagination>.active>span:hover {
  z-index:2;
  color:#fff;
  cursor:default;
  background-color:#337ab7;
  border-color:#337ab7
}
.pagination>.disabled>a,.pagination>.disabled>a:focus,.pagination>.disabled>a:hover,.pagination>.disabled>span,.pagination>.disabled>span:focus,.pagination>.disabled>span:hover {
  color:#777;
  cursor:not-allowed;
  background-color:#fff;
  border-color:#ddd
}
.pagination-lg>li>a,.pagination-lg>li>span {
  padding:10px 16px;
  font-size:18px
}
.pagination-lg>li:first-child>a,.pagination-lg>li:first-child>span {
  border-top-left-radius:6px;
  border-bottom-left-radius:6px
}
.pagination-lg>li:last-child>a,.pagination-lg>li:last-child>span {
  border-top-right-radius:6px;
  border-bottom-right-radius:6px
}
.pagination-sm>li>a,.pagination-sm>li>span {
  padding:5px 10px;
  font-size:12px
}
.pagination-sm>li:first-child>a,.pagination-sm>li:first-child>span {
  border-top-left-radius:3px;
  border-bottom-left-radius:3px
}
.pagination-sm>li:last-child>a,.pagination-sm>li:last-child>span {
  border-top-right-radius:3px;
  border-bottom-right-radius:3px
}
.pager {
  padding-left:0;
  margin:20px 0;
  text-align:center;
  list-style:none
}
.pager li {
  display:inline
}
.pager li>a,.pager li>span {
  display:inline-block;
  padding:5px 14px;
  background-color:#fff;
  border:1px solid #ddd;
  border-radius:15px
}
.pager li>a:focus,.pager li>a:hover {
  text-decoration:none;
  background-color:#eee
}
.pager .next>a,.pager .next>span {
  float:right
}
.pager .previous>a,.pager .previous>span {
  float:left
}
.pager .disabled>a,.pager .disabled>a:focus,.pager .disabled>a:hover,.pager .disabled>span {
  color:#777;
  cursor:not-allowed;
  background-color:#fff
}

.form-control {
  display:block;
  width:100px;
  float:left;
  height:30px;
  font-size:14px;
  margin: 5px 10px;
  line-height:1.42857143;
  color:#555;
  background-color:#fff;
  background-image:none;
  border:1px solid #ccc;
  border-radius:4px;
  -webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);
  box-shadow:inset 0 1px 1px rgba(0,0,0,.075);
  -webkit-transition:border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
  -o-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s
}
.form-control:focus {
  border-color:#66afe9;
  outline:0;
  -webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
  box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
}
.form-control::-moz-placeholder {
  color:#999;
  opacity:1
}
.form-control:-ms-input-placeholder {
  color:#999
}
.form-control::-webkit-input-placeholder {
  color:#999
}
.form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control {
  background-color:#eee;
  opacity:1
}
.form-control[disabled],fieldset[disabled] .form-control {
  cursor:not-allowed
}
textarea.form-control {
  height:auto
}
</style>

