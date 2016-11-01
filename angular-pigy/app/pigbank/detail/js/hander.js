$(function() {
	$(".u-music-ls").on("click", "img", function() {
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
	$(".u-bar-bottom .mui-tab-item").each(function() {
		if ($(this).attr("href") == hash) {
			$(this).addClass("mui-active");
		} else {
			$(this).removeClass("mui-active");
		}
	})
})
var hash = location.hash;
var myScroll;
function loaded () {
	myScroll = new IScroll('#view', { scrollX: true, freeScroll: true });
}
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);