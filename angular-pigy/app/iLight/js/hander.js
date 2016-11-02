$(function() {
	$("nav .nav-pills").on("click", "li", function() {
		var eleId = $(this).data("id");
		$("nav .nav-pills li").removeClass("active");
		$(this).addClass("active");
		$(".pagetmp").hide();
		$("#" + eleId).show();
	})
	$(".slideBox").slide({
		mainCell: ".bd ul",
		autoPlay: true
	});
	TouchSlide({ 
		slideCell:"#slide-nav",
		titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
		autoPage:true, //自动分页
		pnLoop:"false", // 前后按钮不循环
		switchLoad:"_src" //切换加载，真实图片路径为"_src" 
	});
	TouchSlide({ 
		slideCell:"#slide-nav2",
		titCell:".hd ul",
		autoPage:true,
		pnLoop:"false"
	});
})
