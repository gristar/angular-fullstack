$(function(){
	$(".u-music-ls").on("click", "img", function(){
		var audio = $(this).next()[0];
		if(audio.paused || audio.ended){
			audio.play();
			$(this).prop("src","img/play_stop_normal.png");
		}
		else{
			audio.pause();
			$(this).prop("src","img/play_normal.png");
		}
	})
})
