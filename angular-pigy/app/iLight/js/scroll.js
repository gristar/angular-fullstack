$(function(){
	loaded();
})
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