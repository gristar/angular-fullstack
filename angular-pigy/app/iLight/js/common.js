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
	createSlide();
})

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
	$(".cs_page").each(function(i,v){
		var id = $(this).prop("id");
		console.log(id,"id");
		TouchSlide({ 
			slideCell:id,
			titCell:".hd ul",
			autoPage:true,
			pnLoop:"false"
		});
	})
	
}

function noDragImg(){
	for(var i=0; i++; i<document.images.length){
		document.images[i].ondragstart=function (){console.log("nodrag");return false;};
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

function clock() {
	var d = new Date();
	var date = d.getDate();
	h = d.getHours(), m = d.getMinutes(), s = d.getSeconds();
	timehtml = h + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + (h > 12 ? "PM" : "AM");
	$("#headline-time").html(timehtml);
	setInterval("update()", 1000);
}

function update() {
	var d = new Date();
	var h = d.getHours(),
		m = d.getMinutes(),
		s = d.getSeconds();
	timehtml = h + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + (h > 12 ? "PM" : "AM");
	$("#headline-time").html(timehtml);
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