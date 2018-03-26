<template>

<header class="header">
    <section class="navigation">
        <div class="main">
        <div class="logo">
          <h1><img src="../../static/img/logo.png" alt="创威博客" /></h1>
        </div>
        <nav class="nav">
          <ul>
            <li><a class="selected" href="javascript:void(0)">首页</a></li>
            <li><a href="javascript:void(0)">博客专栏</a></li>
            <li><a href="javascript:void(0)">博客专家</a></li>
            <li><a href="javascript:void(0)">博客排行</a></li>
            <li><a href="javascript:void(0)">我的博客</a></li>
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
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

