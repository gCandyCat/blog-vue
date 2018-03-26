<template>
    <div class="info  clearfix">
        <div class="inner clearfix" v-for="todo in blogList ">
          <div class="tag">
            <b>8月</b>
            <i>11</i>
          </div>
          <h2>{{todo.data.userBlogtit}}</h2>
          <div class="blog_img"><img src="../../static/img/blog.png" alt="正则表达式" /></div>
          <P class="blogcontent">{{todo.data.userBlogcont}}</P>
          <a @click="moredetail($index)" href="javascript:void(0)" title="查看更多">查看更多&gt&gt</a>
        </div>
        <input style="border:2px solid #ccc" v-model="newItem" v-on:keyup.enter="addNew">
        <ul style="border:2px solid #ccc">
            <li v-for="item in items" v-blind:class="{finished:item.isFinished}" v-on:click="toggleFinish(item)">
                {{item.label}}
            </li>
        </ul>
        <div class="page">
            <ul>
                <li v-if="showFirst"><a class="more-page" v-on:click="cur--">上一页</a></li>
                <li v-for="page in pagelist">
                    <a v-on:click="btnClick(page)"  v-bind:class="{ 'selected': cur == page}">{{page}}</a>
                </li>
                <li v-if="showLast"><a class="more-page" v-on:click="cur++">下一页</a></li>
                <li><a class="more-page">共<i>{{pageSize}}</i>页</a></li>
            </ul>
        </div>
    </div>
    <aside class="infoside">
        <div class="bloglist">
            <div class="list_top">
                <p class="hotblog"><i class="tag"></i>最热文章</p>
                <a href="javascript:void(0)">&gt&gt</a>
            </div>
            <div class="list_inner">
                <ul>
                    <li v-for="todo in blogList"><a href="javascript:void(0);">{{todo.data.userBlogtit}}</a></li>
                </ul>
            </div>
        </div>
        <div class="bloglist">
            <div class="list_top">
                <p class="hotblog"><i class="tag"></i>最热文章</p>
                <a href="javascript:void(0)">&gt&gt</a>
            </div>
            <div class="list_inner">
                <ul>
                    <li v-for="todo in blogList"><a href="javascript:void(0);">{{todo.data.userBlogtit}}</a></li>
                </ul>
            </div>
        </div>
    </aside>
</template>

<script>
import Store from '../store.js'
 export default{
  data:()=>{
      return{
        blogList:[],
        aaa:[],
        userblog: {
                    useremail:'',
                    userBlogtit:'',
                    userBlogcont:'',
                    userBlogtime:''
                  },
        pagelist:'',
        pageSize:0,
        all: '', //总页数
        cur: 1,//当前页码
        pageLen:5,
        userId:'',
        items:[],
        newItem:''
        }
      },
      ready:function(){
      var that=this

       $.get('/getData',(data)=>{/*
         this.todoList=data[0].data;*/
         //this.all=pagelength;
         this.all=data.length;
       alert(this.all);

            });
       this.getDataBy()

      /*$.get('/bloglist',(data)=>{
            for (var i=0;i<data.length-1;i++)
                {
                    var bloglist=data[i].data;
                    that.blogList.push(bloglist);

                }
              for (var i=0;i<data.length-1;i++)
                {
                    console.log("_id:", JSON.stringify(data[i]._id))

                  var txt = "{'tit':'"+data[i].data.userBlogtit+"','info':'"+data[i].data.userBlogcont+"','time':'"+data[i].data.userBlogtime+"','id':'"+data[i]._id+"'}";
                  that.blogList.push(eval("("+txt+")"));
                }
            });*/


      },
    methods: {

        //    /*字数控制*/
        //    $(function(){
        //        $(".blogcontent").each(function(i,ee){
        //            var naa=$(ee);
        //            if(naa.text().length>45){
        //               naa.text(naa.text().substr(0,45)+"...");
        //            }
        //        });
        //    });
        toggleFinish:function(item){
            item.isFinished = !item.isFinished
        },
        addNew:function(){
            this.item.push({
                label:this.newItem,
                isFinished:false
            })
            this.newItem =''
            Store.save()
        },
         getDataBy(){
            var that=this;
            //alert("传入值："+this.cur)
               $.post('/bloglistPage',{"cur": this.cur,"pageLen":this.pageLen},

                    function(data){
                       /*for (var i=0;i<data.length;i++)
                    {
                      var txt = "{'tit':'"+data[i].data.userBlogtit+"','info':'"+data[i].data.userBlogcont+"','time':'"+data[i].data.userBlogtime+"'}";
                      that.aaa.push(eval("("+txt+")"))

                      /*that.userblogList.push(new objFun(data[i].data.userBlogtit,data[i].data.userBlogcont))
                      console.log("aaa:"+JSON.stringify(that.aaa))
                    }*/
                    that.blogList=data
                    //console.log("数据总长度："+that.todoList.length)

                    });
                },
        btnClick: function(pageSize){//页码点击事件
            if(pageSize != this.cur){
                this.cur = pageSize
                }
            this.getDataBy();
            },
        moredetail:function(index){
                this.$root.blogList = this.blogList[index]
                this.$dispatch('moredetail', this.$root.blogList);
                this.$route.router.go({path: '/userblog/blog_info'});
                console.log('blogList:',JSON.stringify(this.$root.blogList))
            },
        },
    computed: {
             pagelist: function(){
              var total = this.all
              this.pageSize= parseInt(total/5); //获得总页数；

                if(total % 5 !=0){
                    this.pageSize+=1;
                }
              // alert(pageSize)
              var left = 1
              var right = this.pageSize
              var ar = []
                 if(this.pageSize>= 11){
                   if(this.cur > 5 && this.cur < this.pageSize-4){//大于6并且小于16
                           left = this.cur - 3
                           right = this.cur + 5
                   }else{
                       if(this.cur<=5){
                           left = 1
                           right = 8
                       }else{
                           right = this.pageSize
                           left = this.pageSize -6
                       }
                   }
                }

                while (left <= right){
                    ar.push(left)
                    left ++
                }
                 return ar
            },

            showLast: function(){
               console.log(1);
                if(this.cur == this.pageSize){
                    return false
                }
                this.getDataBy();

                return true
           },


            showFirst: function(){
               console.log(2);
                if(this.cur == 1){
                    return false
                }
                this.getDataBy();
               return true
           },

        },
    watch: {
      /*cur: function(oldValue , newValue){
                  console.log(arguments)
          }*/
          items:{
            handler:function(val,oldVal){
                console.log(val,oldVal)
            },
            deep:true
          }
       }
}






</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.info {
    position: relative;
    float: left;
    width: 690px;
    height: auto;
}
.inner {
    width: 688px;
    margin-bottom: 35px;
    border: 1px #ccc solid;
    box-shadow: 0 5px 9px #888;
    background:#fff;
}
.inner .tag {
    position: relative;
    z-index: 99;
    width: 75px;
    height: 75px;
    margin: -20px 0 -50px -20px;
    text-align: center;
    color: #fff;
    background-position: -26px 0 !important;
}
.inner .tag b {
    display: block;
    width: 30px;
    height: 20px;
    padding-top: 10px;
    margin: 0 auto;
    font-size: 14px;
    font-style: normal;
}
.inner .tag i {
    width: 20px;
    height: 20px;
    margin: 0 auto;
    font-size: 20px;
    font-style: normal;
    font-weight: bold;
}
.inner h2 {
    display: block;
    width: 400px;
    height: 20px;
    margin: 20px auto;
    font-size: 25px;
    line-height: 20px;
    text-align: center;
}
.inner .blog_img {
    width: 550px;
    height: 178px;
    margin: 0 auto;
    border: 1px #ccc solid;
}
.inner p {
    width: 550px;
    height: 100px;
    margin: 10px auto;
    overflow: hidden;
    font-size: 14px;
    text-indent: 30px;
}
.inner a {
    position: relative;
    display: block;
    float: right;
    width: 100px;
    height: 30px;
    margin: 15px;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    border-radius: 7px;
    background: #78c9de;
}
.inner a:hover {
    color: #fff;
    background: #1facdd;
}


/* 首页右侧栏 */
.infoside {
    position: relative;
    float: right;
    width: 220px;
    height: auto;
}
.bloglist {
    width: 218px;
    height: auto;
    padding-bottom: 5px;
    margin-bottom: 35px;
    border: 1px #ccc solid;
    box-shadow: 0 5px 9px #888;
    background: #fff;
}
.list_top {
    width: 218px;
    height: 30px;
    font-size: 14px;
    color: #fff;
    background: #8fd5ee;
}
.list_top p {
    position: relative;
    float: left;
    width: 100px;
    height: 30px;
    margin-left: 5px;
    line-height: 30px;
    color: #fff;
}
.list_top a {
    position: relative;
    float: right;
    height: 30px;
    margin-right: 15px;
    font-size: 14px;
    line-height: 30px;
    color: #fff;
}
.list_top a:hover {
    margin-right: 10px;
    color: #fff;
}
.hotblog i {
    display: block;
    float: left;
    width: 20px;
    height: 20px;
    margin-top: 5px;
    background-position: 1px -27px !important;
}
.sortblog i {
    display: block;
    float: left;
    width: 20px;
    height: 20px;
    margin-top: 5px;
    background-position: 1px -58px !important;
}
.bloglist .list_inner {
    width: 220px;
    height: 325px;
    overflow: hidden;
}
.list_inner ul {
    padding: 5px;
    overflow: hidden;
}
.list_inner ul li {
    float: left;
    width: 190px;
    height: 30px;
    padding: 0 10px;
    overflow: hidden;
    font-size: 13px;
    line-height: 30px;
    border-bottom: 1px #ccc dashed;
}
.list_inner ul li a {
    float: left;
    width: 190px;
    height: 30px;
    overflow: hidden;
    line-height: 30px;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: keep-all;
}

</style>

