/* 博客专栏页，专栏列表 */
$(function()
	{
		$(".subject_kind ul li a.subjkind_list").hover(function()
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
	});

/*登陆框弹出*/
//$(function()
//	{
//		$(".login a.btn-login").click(function()
//		{
//			$(this).find(".poplogin").show();
//	});
//
//});
//

  /*字数控制*/

/*
           $(function(){
               $(".blogcontent").each(function(i,ee){
                   var naa=$(ee);
                   if(naa.text().length>45){
                      naa.text(naa.text().substr(0,45)+"...");
                   }
               });
           });
*/





