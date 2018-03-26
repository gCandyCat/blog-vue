<template>
  <header class="header">
    <section class="navigation">
        <div class="main">
        <div class="logo">
          <h1><img src="../static/img/logo.png" alt="创威博客" /></h1>
        </div>
        <nav class="nav" >
          <ul>
            <li><a @click="go_home" :class="['normal', flag !='home' ? 'normal':'selected']" v-link="{ path: '/'}" href="javascript:void(0)">首页</a></li>
            <li><a @click="go_subject" :class="['normal', flag !='subject' ? 'normal':'selected']" v-link="{ path: '/subject'}" href="javascript:void(0)">博客专栏</a></li>
            <li><a @click="go_expert" :class="['normal', flag !='expert' ? 'normal':'selected']" v-link="{ path: '/expert'}" href="javascript:void(0)">博客专家</a></li>
            <li><a @click="go_sort" :class="['normal', flag !='sort' ? 'normal':'selected']" v-link="{ path: '/sort'}" href="javascript:void(0)">博客排行</a></li>
            <li><a @click="checkblog" :class="['normal', flag !='blog' ? 'normal':'selected']" href="javascript:void(0)">我的博客</a></li>
          </ul>
        </nav>
        <form class="search">
              <fieldset class="searchbox">
                <input class="search-txt" type="text" onfocus="searchfocus(this);"  onblur="searchBlur(this);" />
                <button class="btn-search" type="button">搜索</button>
              </fieldset>
        </form>
      </div>
    </section>
  </header>
  <section class="wrap">
    <router-view></router-view>
  </section>


</template>

<script>
export default {
  data:function(){
    return {
      user:null,
      flag:'home'
    }
  },
  events:{
    login:function(user){
      console.log('user:',user);
      this.user=user;
    }
  },
  methods:{
      checkblog:function(){
        /*if(JSON.parse(window.sessionStorage.user)==this.user){
          console.log(true)
        }else{
          console.log(false)
        }
        console.log("window.sessionStorage",JSON.stringify(window.sessionStorage.user))

        console.log("this.user",this.user)*/
        if(!this.user){
          alert("请登录")
        }else{
          this.$route.router.go({name: 'userblog'});
          this.flag = "blog";
      };
    },
    go_home:function(){
        this.flag = "home";
    },
    go_subject:function(){
        this.flag = "subject";
    },
    go_expert:function(){
        this.flag = "expert";
    },
    go_sort:function(){
        this.flag = "sort";
    }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

