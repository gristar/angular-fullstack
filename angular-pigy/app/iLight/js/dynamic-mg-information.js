$(function(){
	clock();
	$("#add-card").on("click", function(){
		var show = createDialog("choose", "选择版式", function(){
			var index = $("#cs-choose-info-type option:selected").index();
			$("#add-card").before($("#cs-ht-cards").children("div").eq(index).clone());
			$("#cloudMusic").scrollTop($('#cloudMusic')[0].scrollHeight);
			createSlide();
			loaded();
		});
		show.content($("#cs-ht-choose").html());
		show.showModal();
//		drawCardType();
	})
	$("body").on("click",".cs-card-del",function(){
		if(confirm("确定删除吗？")){
			$(this).parent().remove();
		}
	})
	$("body").on("click",".cs-card-del-one",function(){
		if(confirm("确定删除吗？")){
			var id = $(this).closest("form").find("input[name=id]").val();
			alert("删除的id为：" +  id);
		}
	})
	$("body").on("click",".bd ul li",function(){
		$("#cs-edit").html($("#cs-ht-entry-edit-one").html()).show();
		$(".bd ul li").removeClass("active");
		$(this).addClass("active");
	})
	$("body").on("click",".cs-card-add-one",function(){
		$(this).parent().find(".bd ul").append($("#"+$(this).data("tmp-id")).html());
	})
	$("body").on("click",".cs-card-add-choose ul li",function(){
		$(".cs-card-choosed").find(".cs-card-choosed-icon").remove().end().removeClass("cs-card-choosed");
		$(this).addClass("cs-card-choosed");
		$(this).append('<div class="cs-card-choosed-icon"><img src="../img/right.png"></div>');
	})
})
