$(function(){
	noDragImg();
	noSelect();
	$("body").on("click",".u-entry-content .bd ul p.more",function(){
		var showCount = $(this).data("showcount")-1;
		if($(this).text() == "展开"){
			$(this).text("收起")
		}
		else{
			$(this).text("展开")
		}
		$(this).parent().find("li:gt("+showCount+")").slideToggle();
	})
	loaded();
	createSlide();
})
setTopNavUlWidth();

var createDialog = function(id, title, okfn) {
	var d = dialog({
		id: id,
		okValue: "提交",
		ok:okfn,
		cancel: function() {},
		cancelValue: "取消",
		width: "670px",
		title: title
	});
	return d;
}

function createSlide(){
	TouchSlide({ 
		slideCell:"slide-banner",
		titCell:".hd ul",
		autoPage:true,
		pnLoop:true,
		autoPlay:true,
		
	});
	$(".cs_page").each(function(i,v){
		var id = $(this).prop("id");
		TouchSlide({ 
			slideCell:id,
			titCell:".hd ul",
			autoPage:true,
			pnLoop:"false"
		});
	})
}

function loaded () {
	$(".cs-scroller .bd ul").css("width",function(i,v){
		var w = $($(".cs-scroller .bd ul").get(i)).children().outerWidth(true);
		var width = $(".cs-scroller .bd ul").get(i).children.length*w + "px";
		return width;
	});
	$(".scroller-wrapper").each(function(i,v){
		console.log(v.getAttribute("class"),"scroller element");
		new IScroll(this, { eventPassthrough: true, scrollX: true, scrollY: false, preventDefault: false });
	})
}

function setTopNavUlWidth(){
	var topNavUl = document.getElementsByClassName("g-top-nav-ul")[0],
	width = 0;
	for(var i=0;i<topNavUl.children.length;i++){
		var offsetWidth = topNavUl.children[i].offsetWidth;
		width+=offsetWidth;
		console.log(width,"ul_width");
	}
	topNavUl.style.width = width + "px";
}

function noDragImg(){
	for(var i=0; i++; i<document.images.length){
		document.images[i].ondragstart=function (){return false;};
	}
}

function noSelect(){
	document.onmousedown = function() {
		document.onmousemove = function() {
			window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
		}
	}
	document.onmouseup = function() {
		document.onmousemove = null;
	}
	document.ondblclick = function() {
		window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
	}
}

$.ajaxSetup({
	cache: false,
	error: function(xhr, status, e) {
		alert("请求失败");
	},
	traditional: true,
	complete: function(xhr, status) {
		
	}
});

(function($) {
	$.getUrlParam = function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r != null)
			return decodeURIComponent(r[2]);
		return null;
	}
})(jQuery);

$.fn.serializeObject = function() {
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
		if(o[this.name] !== undefined) {
			if(!o[this.name].push) {
				o[this.name] = [o[this.name]];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});
	return o;
};