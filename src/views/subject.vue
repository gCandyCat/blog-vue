<template>
  <div class="main">
    <skitter></skitter>
  </div>
  <div class="main">
    <div class="info  clearfix">
        <div class="subject_recom">
            <div class="subrecom_img"><img src="../../static/img/subj.jpg" alt="专题推荐" /></div>
            <div class="subrecom_details">
                <h5 class="subrecom_tag tag"></h5>
                <h2>Android直播开发</h2>
                <p>开发Android直播软件方法，如何获取网络上的直播链接，使用开源的播放器来实现一个开源的直播软件</p>
                <div class="subrecom_relate">
                    <div class="subrecom_author">
                        <a class="subrecom_head" href="javascript:void(0)"><img src="../../static/img/dog.jpg" /></a>
                        <a class="subrecom_name" href="javascript:void(0)">gfdasf</a>
                    </div>
                    <div class="subrecom_read">
                        <p><b class="tag"></b>4563</p>
                        <p><i class="tag"></i>1234156</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="subject_kind">
            <ul>
                <li>
                    <a v-on:hover="subhover()" class="subjkind_list" href="javascript:void(0)">
                        <div class="sublist_img"><img src="../../static/img/kind_img.png" alt="IOS" /></div>
                        <div class="sublist_tip disblock">IOS Development</div>
                        <div class="sublist_show disnone">
                            <div class="sublist_author">
                                <b class="sublist_head" href="javascript:void(0)"><img src="../../static/img/dog.jpg" /></b>
                                <b class="sublist_name" href="javascript:void(0)">gfdasf</b>
                            </div>
                            <div class="sublist_read">
                                <p><b class="tag"></b>4563</p>
                                <p><i class="tag"></i>1234156</p>
                            </div>
                        </div>
                    </a>
                    <a class="subjkind_list" href="javascript:void(0)">
                        <div class="sublist_img"><img src="../../static/img/kind_img.png" alt="IOS" /></div>
                        <div class="sublist_tip disblock">IOS Development</div>
                        <div class="sublist_show disnone">
                            <div class="sublist_author">
                                <b class="sublist_head" href="javascript:void(0)"><img src="../../static/img/dog.jpg" /></b>
                                <b class="sublist_name" href="javascript:void(0)">xqqqqqqqgfdasf</b>
                            </div>
                            <div class="sublist_read">
                                <p><b class="tag"></b>4fsdf3</p>
                                <p><i class="tag"></i>1234156</p>
                            </div>
                        </div>
                    </a>
                    <a class="subjkind_list" href="javascript:void(0)">
                        <div class="sublist_img"><img src="../../static/img/kind_img.png" alt="IOS" /></div>
                        <div class="sublist_tip disblock">IOS Development</div>
                        <div class="sublist_show disnone">
                            <div class="sublist_author">
                                <b class="sublist_head" href="javascript:void(0)"><img src="../../static/img/dog.jpg" /></b>
                                <b class="sublist_name" href="javascript:void(0)">gfdasf</b>
                            </div>
                            <div class="sublist_read">
                                <p><b class="tag"></b>4563</p>
                                <p><i class="tag"></i>1234156</p>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a class="subjkind_list" href="javascript:void(0)">
                        <div class="sublist_img"><img src="../../static/img/kind_img.png" alt="IOS" /></div>
                        <div class="sublist_tip disblock">IOS Development</div>
                        <div class="sublist_show disnone">
                            <div class="sublist_author">
                                <b class="sublist_head" href="javascript:void(0)"><img src="../../static/img/dog.jpg" /></b>
                                <b class="sublist_name" href="javascript:void(0)">gfdasf</b>
                            </div>
                            <div class="sublist_read">
                                <p><b class="tag"></b>4563</p>
                                <p><i class="tag"></i>1234156</p>
                            </div>
                        </div>
                    </a>
                    <a class="subjkind_list" href="javascript:void(0)">
                        <div class="sublist_img"><img src="../../static/img/kind_img.png" alt="IOS" /></div>
                        <div class="sublist_tip disblock">IOS Development</div>
                        <div class="sublist_show disnone">
                            <div class="sublist_author">
                                <b class="sublist_head" href="javascript:void(0)"><img src="../../static/img/dog.jpg" /></b>
                                <b class="sublist_name" href="javascript:void(0)">gfdasf</b>
                            </div>
                            <div class="sublist_read">
                                <p><b class="tag"></b>4563</p>
                                <p><i class="tag"></i>1234156</p>
                            </div>
                        </div>
                    </a>
                    <a class="subjkind_list" href="javascript:void(0)">
                        <div class="sublist_img"><img src="../../static/img/kind_img.png" alt="IOS" /></div>
                        <div class="sublist_tip disblock">IOS Development</div>
                        <div class="sublist_show disnone">
                            <div class="sublist_author">
                                <b class="sublist_head" href="javascript:void(0)"><img src="../../static/img/dog.jpg" /></b>
                                <b class="sublist_name" href="javascript:void(0)">gfdasf</b>
                            </div>
                            <div class="sublist_read">
                                <p><b class="tag"></b>4563</p>
                                <p><i class="tag"></i>1234156</p>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a class="subjkind_list" href="javascript:void(0)">
                        <div class="sublist_img"><img src="../../static/img/kind_img.png" alt="IOS" /></div>
                        <div class="sublist_tip disblock">IOS Development</div>
                        <div class="sublist_show disnone">
                            <div class="sublist_author">
                                <b class="sublist_head" href="javascript:void(0)"><img src="../../static/img/dog.jpg" /></b>
                                <b class="sublist_name" href="javascript:void(0)">gfdasf</b>
                            </div>
                            <div class="sublist_read">
                                <p><b class="tag"></b>4563</p>
                                <p><i class="tag"></i>1234156</p>
                            </div>
                        </div>
                    </a>
                    <a class="subjkind_list" href="javascript:void(0)">
                        <div class="sublist_img"><img src="../../static/img/kind_img.png" alt="IOS" /></div>
                        <div class="sublist_tip disblock">IOS Development</div>
                        <div class="sublist_show disnone">
                            <div class="sublist_author">
                                <b class="sublist_head" href="javascript:void(0)"><img src="../../static/img/dog.jpg" /></b>
                                <b class="sublist_name" href="javascript:void(0)">gfdasf</b>
                            </div>
                            <div class="sublist_read">
                                <p><b class="tag"></b>4563</p>
                                <p><i class="tag"></i>1234156</p>
                            </div>
                        </div>
                    </a>
                    <a class="subjkind_list" href="javascript:void(0)">
                        <div class="sublist_img"><img src="../../static/img/kind_img.png" alt="IOS" /></div>
                        <div class="sublist_tip disblock">IOS Development</div>
                        <div class="sublist_show disnone">
                            <div class="sublist_author">
                                <b class="sublist_head" href="javascript:void(0)"><img src="../../static/img/dog.jpg" /></b>
                                <b class="sublist_name" href="javascript:void(0)">gfdasf</b>
                            </div>
                            <div class="sublist_read">
                                <p><b class="tag"></b>4563</p>
                                <p><i class="tag"></i>1234156</p>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
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
  },
  methods: {
    subhover:function()
      {
          $(this).hover(function()
          {
              $(this).find(".sublist_tip").stop().hide();
              $(this).find(".sublist_show").stop().slideDown();

              //$(this).find(".sublist_tip").removeClass("disblock").addClass("disnone");
              //$(this).find(".sublist_show").removeClass("disnone").addClass("display");
          },function()
          {
              $(this).find(".sublist_show").stop().slideUp();
              $(this).find(".sublist_tip").stop().show();

              //$(this).find(".sublist_tip").removeClass("disnone").addClass("display");
              //$(this).find(".sublist_show").removeClass("disblock").addClass("disnone");
          });
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
