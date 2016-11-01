$(function(){
	clock();
	$(document).ready( function() {
    	$('#iphone5').stickUp();
    });
    $(document).on("scroll",function(){
    	if($("#iphone5").css("position") == "fixed"){
    		$("#cs-edit").css("margin-left","356px");
    	}
    	else{
    		$("#cs-edit").css("margin-left","auto");
    	}
    })
	$("#add-card").on("click", function(){
		var show = createDialog("choose", "选择版式", function(){
			var index = $(".cs-card-choosed").index();
			$("#add-card").before($("#cs-ht-cards").children("div").eq(index).clone());
			$("#cloudMusic").scrollTop($('#cloudMusic')[0].scrollHeight);
		});
		show.content($("#cs-ht-choose").html());
		show.showModal();
		drawCardType();
	})
	$("body").on("click",".cs-card-edit,.cs-card-edit-other",function(){
		$("#cs-edit").css("margin-left","auto");
		$("#cs-edit").html($("#cs-ht-card-edit-info").html()).show();
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
	$("body").on("click",".u-content ul li",function(){
		var index = $(this).closest(".u-card").data("index");
		$("#cs-edit").html($("#cs-ht-card-edit").children("div").eq(index).clone()).show();
		$(".u-content ul li").removeClass("active");
		$(this).addClass("active");
	})
	$("body").on("click",".cs-card-add-row",function(){
		$(this).parent().find(".u-content ul").append($("#"+$(this).data("tmp-id")).html());
	})
	$("body").on("click",".cs-card-add-one",function(){
		$(this).parent().find(".u-content ul").append($("#"+$(this).data("tmp-id")).html());
	})
	$("body").on("click",".cs-card-del-row",function(){
		if(confirm("确定删除该行数据吗？")){
			var ids = [];
			ids.push($(".u-content ul li.active").data("id"));
			$(".u-content ul li.active").siblings().each(function(){
				ids.push($(this).data("id"));
			})
			alert("即将删除的数据id为：" + ids.join(","));
			$(".u-content ul li.active").parent().remove();
		}
	})
	$("body").on("click",".cs-card-add-choose ul li",function(){
		$(".cs-card-choosed").find(".cs-card-choosed-icon").remove().end().removeClass("cs-card-choosed");
		$(this).addClass("cs-card-choosed");
		$(this).append('<div class="cs-card-choosed-icon"><img src="../img/right.png"></div>');
	})
	$("body").on("submit","#cs-edit form",function(e){
		var roles = ["cover_img","music_name","singer","play_img","played_count","top_left_icon","info",
					"played_count_and_set_number","rank_cover_and_title","music_1","music_2","music_3"];
		$.each(roles,function(i,v){
			var ele = $(".u-content ul li.active").find("[role="+v+"]");
			if(ele.length > 0){
				if(v == "played_count_and_set_number"){
					ele.html(played_count+'　<span>'+set_number+'集</span>');
				}
				else if(v == "rank_cover_and_title"){
					ele.html($("#cs-edit form input[name=title]").val());
					ele.css("background","url("+img_src+") no-repeat center/cover")
				}
				else{
					ele.html($("#cs-edit form input[name="+v+"]").val());
				}
			}
		})
		
		e.preventDefault();
	})
})

function updateHtml(){
	
}
