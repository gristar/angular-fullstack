$(function() {
	$("body").on("click", ".cs-show", function() {
		var index = $(this).parent().index();
		options.index = index;
		items = [];
		$(this).closest(".u-thinkcontentimg").find("img").each(function(i,v){
			var item = {src:$(this).prop("src"),w:600,h:400};
			items.push(item);
		})
		new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options).init();
		var imgs = document.getElementsByClassName(".pswp__img");
		console.log($(".pswp__img"),"imgs");
		for(var i=0;i<imgs.length;i++){
			console.log(imgs[i],"img");
		}
	})
	$("body").on("click", ".u-music-ls img", function() {
		var audio = $(this).next()[0];
		if (audio.paused || audio.ended) {
			audio.play();
			$(this).prop("src", "img/play_stop_normal.png");
		} else {
			audio.pause();
			$(this).prop("src", "img/play_normal.png");
		}
	})
	mui(".u-bar-bottom").on('tap', '.mui-tab-item', function() {
		var href = this.getAttribute("href");
		var pathName = location.pathname;
		location.href = pathName + href;
		$(".u-bar-bottom .mui-tab-item").removeClass("mui-active");
		$(this).addClass("mui-active");
	})
	var hash = location.hash;
	$(".u-bar-bottom .mui-tab-item").each(function() {
		if ($(this).attr("href") == hash) {
			$(this).addClass("mui-active");
		} else {
			$(this).removeClass("mui-active");
		}
	})
})
var myScroll;
function loaded () {
	myScroll = new IScroll('#view', { scrollX: true, freeScroll: true });
}
//document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);


var pswpElement = document.querySelectorAll('.pswp')[0];
var items = [];
var options = {
	index: 0,
	shareEl: false,
	tapToClose: true,
	errorMsg: '<div class="pswp__error-msg">图片加载失败</div>'
};