/**
 * Created by chenshng on 2016/12/30.
 * Home http://www.gristar.cn
 */
$(function () {
    $('.music-ctrl').on('click', function () {
        var player = $('#bg-music')[0];
        if (player.paused) {
            player.play();
            $(this).css({
                'animation-play-state': 'running',
                '-webkit-animation-play-state': 'running'
            })

        }
        else {
            player.pause();
            $(this).css({
                'animation-play-state': 'paused',
                '-webkit-animation-play-state': 'paused'
            })
        }
    });

    $("#main").fullpage({
        menu: '#menu',
        anchors: ['profile', 'skills', 'experience', 'successful', 'evaluation'],
        navigationTooltips: ['基本资料', '专业技能', '工作经历', '成功项目', '自我评价'],
        showActiveTooltip: false,
        navigation: true,
        navigationPosition: 'right',
        slidesNavigation: false,
        slidesNavPosition: 'bottom',
        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInExpo',
        easingcss3: 'ease',
        loopBottom: true,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor: ['#ccc', '#fff'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        onLeave: function (index, nextIndex, direction) {

        },
        afterLoad: function (anchorLink, index) {
            switch (index) {
                case 1: {
                    $('.music-ctrl i').css('color', '#490093');
                    $('.navbar').css('background', 'rgba(0, 0, 0, .5)');
                    setAinimate('.biu', 'bounceInUp');
                    break;
                }
                case 2: {
                    $('.music-ctrl i').css('color', '#F8F7E2');
                    $('.navbar').css('background', 'rgba(35, 180, 224, .5)');
                    break;
                }
                case 3: {
                    $('.music-ctrl i').css('color', '#fff');
                    $('.navbar').css('background', 'rgba(0, 0, 0, .5)');
                    break;
                }
                case 4: {
                    $('.music-ctrl i').css('color', '#B9A499');
                    $('.navbar').css('background', 'rgba(185, 164, 153, .5)');
                    break;
                }
                case 5: {
                    $('.music-ctrl i').css('color', '#1D3653');
                    $('.navbar').css('background', 'rgba(29, 54, 83, .5)');
                    break;
                }
            }
        },
        afterRender: function () {

        },
        afterResize: function () {
        },
        afterResponsive: function (isResponsive) {
        },
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
        },
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
        }
    });

    function setAinimate(s, name){
        $(s).removeClass(name + ' animated').addClass(name + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass(name + ' animated');
        });
    }
});
