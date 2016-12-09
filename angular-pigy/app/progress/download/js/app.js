var i = 0,
	remain = 40;
/*add——创建tbx下的div加文字和变宽度的方法*/
function add(i) {
	var tbox = $(".tbox");
	var tiao = $(".tiao");
	tiao.css("width", i + "%").html(i + "%");
	//				var second = (Number(remain.toFixed(2).toString().split(".")[1])/60).toFixed(2).toString().split(".")[1];
	var second = (Math.random() / 6 * 100).toFixed(0);
	$(".remain").html(remain.toFixed(0));
	$(".second").html(second);
}
/*创建方法（i++循环起来）*/
function xh() {
	if (i > 100) {
		//					$(".ok").html("加载完成").fadeIn("slow");
		$(".ok").html("下载完成");
		return;
	}
	if (i <= 100) {
		setTimeout("xh()", 100)
		add(i);
		i++;
		remain -= 0.4;
	}
}
/*调用xh()函数*/
$(document).ready(function() {
	xh();
});