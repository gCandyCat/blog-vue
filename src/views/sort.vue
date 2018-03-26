<template>
  <div class="main">
    <skitter></skitter>
  </div>
  <div class="main">
    <div class="info  clearfix">
        <div class="subject_kind">
            <div class="sortlist_top"><p class="sortblog"><i class="tag"></i>文章排行</p></div>
            <div class="sortlist_box">
                <div class="sortlist_tit clearfix">
                    <em class="sort_u1">序号</em>
                    <em class="sort_u2">书名/最新章节</em>
                    <em class="sort_u3">作者</em>
                    <em class="sort_u4">字数</em>
                    <em class="sort_u5">更新时间</em>
                </div>
                <div class="sort_list">
                  <ol class="sortlist_ol">
                    <li>
                        <span class="sort_u1">1</span>
                        <span class="sort_u2">
                            <a class="sort_name" href="javascript:void(0)" title="sentinel搭建redis集群经验总结">sentinel搭建redis集群经验总结</a>
                        </span>
                        <span class="sort_u3">瑾夜</span>
                        <span class="sort_u4">38928</span>
                        <span class="sort_u5">2016-07-11</span>
                    </li>
                    <li class="even">
                        <span class="sort_u1">2</span>
                         <span class="sort_u2">
                            <a class="sort_name" href="javascript:void(0)" title="sentinel搭建redis集群经验总结">sentinel搭建redis集群经验总结</a>
                        </span>
                        <span class="sort_u3">王小彤</span>
                        <span class="sort_u4">45038</span>
                        <span class="sort_u5">2016-07-11</span>
                    </li>
                    <li>
                        <span class="sort_u1">1</span>
                        <span class="sort_u2">
                            <a class="sort_name" href="javascript:void(0)" title="sentinel搭建redis集群经验总结">sentinel搭建redis集群经验总结</a>
                        </span>
                        <span class="sort_u3">瑾夜</span>
                        <span class="sort_u4">38928</span>
                        <span class="sort_u5">2016-07-11</span>
                    </li>
                    <li class="even">
                        <span class="sort_u1">2</span>
                         <span class="sort_u2">
                            <a class="sort_name" href="javascript:void(0)" title="sentinel搭建redis集群经验总结">sentinel搭建redis集群经验总结</a>
                        </span>
                        <span class="sort_u3">王小彤</span>
                        <span class="sort_u4">45038</span>
                        <span class="sort_u5">2016-07-11</span>
                    </li>
                    <li>
                        <span class="sort_u1">1</span>
                        <span class="sort_u2">
                            <a class="sort_name" href="javascript:void(0)" title="sentinel搭建redis集群经验总结">sentinel搭建redis集群经验总结</a>
                        </span>
                        <span class="sort_u3">瑾夜</span>
                        <span class="sort_u4">38928</span>
                        <span class="sort_u5">2016-07-11</span>
                    </li>
                    <li class="even">
                        <span class="sort_u1">2</span>
                         <span class="sort_u2">
                            <a class="sort_name" href="javascript:void(0)" title="sentinel搭建redis集群经验总结">sentinel搭建redis集群经验总结</a>
                        </span>
                        <span class="sort_u3">王小彤</span>
                        <span class="sort_u4">45038</span>
                        <span class="sort_u5">2016-07-11</span>
                    </li>
                    <li>
                        <span class="sort_u1">1</span>
                        <span class="sort_u2">
                            <a class="sort_name" href="javascript:void(0)" title="sentinel搭建redis集群经验总结">sentinel搭建redis集群经验总结</a>
                        </span>
                        <span class="sort_u3">瑾夜</span>
                        <span class="sort_u4">38928</span>
                        <span class="sort_u5">2016-07-11</span>
                    </li>
                    <li class="even">
                        <span class="sort_u1">2</span>
                         <span class="sort_u2">
                            <a class="sort_name" href="javascript:void(0)" title="sentinel搭建redis集群经验总结">sentinel搭建redis集群经验总结</a>
                        </span>
                        <span class="sort_u3">王小彤</span>
                        <span class="sort_u4">45038</span>
                        <span class="sort_u5">2016-07-11</span>
                    </li>
                    <li>
                        <span class="sort_u1">1</span>
                        <span class="sort_u2">
                            <a class="sort_name" href="javascript:void(0)" title="sentinel搭建redis集群经验总结">sentinel搭建redis集群经验总结</a>
                        </span>
                        <span class="sort_u3">瑾夜</span>
                        <span class="sort_u4">38928</span>
                        <span class="sort_u5">2016-07-11</span>
                    </li>
                    <li class="even">
                        <span class="sort_u1">2</span>
                         <span class="sort_u2">
                            <a class="sort_name" href="javascript:void(0)" title="sentinel搭建redis集群经验总结">sentinel搭建redis集群经验总结</a>
                        </span>
                        <span class="sort_u3">王小彤</span>
                        <span class="sort_u4">45038</span>
                        <span class="sort_u5">2016-07-11</span>
                    </li>
                  </ol>
                </div>
            </div>
        </div>
        <div class="page">
            <p>
                <a class="selected" href="javascript:void(0);">1</a>
                <a href="javascript:void(0)">2</a>
                <a href="javascript:void(0)" class="more-page">查看更多</a>
            </p>
        </div>
    </div>
    <aside></aside>
  </div>

</template>

<script>

import skitter from '../components/skitter'
import aside from '../components/aside'


export default {
  components: {
    skitter,aside
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>