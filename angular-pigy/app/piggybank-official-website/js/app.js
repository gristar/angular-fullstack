$(function() {
	/*$(document).on('DOMMouseScroll mousewheel keydown', function(e) {
		if(e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0 || e.keyCode === 38) {
			//$().gotoPreSection();
			$("#bottom-wrapper").slideUp();
			if(e.preventDefault) {
				e.preventDefault();
			} else {
				event.returnValue = false;
			}
		} else if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0 || e.keyCode === 40) {
			//$().gotoNextSection();
			$("#bottom-wrapper").slideDown();
			if(e.preventDefault) {
				e.preventDefault();
			} else {
				event.returnValue = false;
			}
		}
	});*/
	/*$("body").on("click","#playbulb_nav_holder i",function(){
		navToggle();
	})*/
	adjust();
	function adjust() {
		if (window.outerWidth < 769) {
			$(".show-img").prop("src", function() {
				return $(this).data("mobi");
			})
		}
		else{
			$(".show-img").prop("src", function() {
				return $(this).data("src");
			})
		}
	}
	$(window).on("resize", function() {
		adjust();
	})

	$(".box5 .u-buttom-buy").on("click", function() {
		if ($(this).data("url")) {
			window.open($(this).data("url"), "_blank");
		} else {
			alert("敬请期待...");
		}
	})
	$(".btn-buy").on("click", function() {
		if ($(this).data("url")) {
			window.open($(this).data("url"), "_blank");
		} else {
			alert("敬请期待...");
		}
	})

});

function navToggle() {
	$("#playbulb_nav_holder ul").toggle();
}

function slide() {
	//改变div的高度
	$(".slide").height($(window).height());
	//改变div的宽度
	//		$(".slide").width(document.body.scrollWidth);

	var glide = $('.slider').glide({
		autoplay: 3000,
		animationTime: 500,
		arrows: true,
		arrowsWrapperClass: "arrowsWrapper",
		arrowMainClass: "slider-arrow",
		arrowRightClass: "slider-arrow--right",
		arrowLeftClass: "slider-arrow--left",
		arrowRightText: "<i class='iconfont'>&#xe61d;</i>",
		arrowLeftText: "<i class='iconfont'>&#xe61c;</i>",

		nav: true,
		navCenter: true,
		navClass: "slider-nav",
		navItemClass: "slider-nav__item",
		navCurrentItemClass: "slider-nav__item--current"
	});
}