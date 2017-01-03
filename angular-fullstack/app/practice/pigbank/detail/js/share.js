/*
 * @Author:L.Tap
 * @Description: 社会化分享
 */
;
(function($, window, document, undefined) {
	
	function replaceAPI (api,options) {
		api = api.replace('{url}', options.url);
		api = api.replace('{title}', options.title);
		api = api.replace('{content}', options.content);
		api = api.replace('{pic}', options.pic);

		return api;
	}

	function tQQ(target,options){
	    var options = $.extend({}, $.fn.socialShare.defaults, options);

		window.open(replaceAPI(tqq,options));
	}

	function qZone(target,options){
		var options = $.extend({}, $.fn.socialShare.defaults, options);

		window.open(replaceAPI(qzone,options));
	}

	function sinaWeibo(target,options){
		var options = $.extend({}, $.fn.socialShare.defaults, options);

		window.open(replaceAPI(sina,options));
	}

	function doubanShare(target,options){
		window.open(replaceAPI(douban,$.extend({},$.fn.socialShare.defaults,options)));
	}

	function weixinShare(target,options){
		window.open(replaceAPI(weixin,$.extend({},$.fn.socialShare.defaults,options)));
	}

    $.fn.socialShare = function(options, param) {
        if(typeof options == 'string'){
		    var method = $.fn.socialShare.methods[options];
			if(method)
				return method(this,param);
		}else
			init(this,options);
    }


    //插件默认参数
    $.fn.socialShare.defaults = {
        url: window.location.href,
        title: document.title,
        content: '',
        pic: ''
    }

	//插件方法
	$.fn.socialShare.methods = {
		//初始化方法
		init:function(jq,options){
			return jq.each(function(){
				init(this,options);
			});
		},
		tQQ:function(jq,options){
			return jq.each(function(){
				tQQ(this,options);
			})
		},
		qZone:function(jq,options){
			return jq.each(function(){
				qZone(this,options);
			})
		},
		sinaWeibo:function(jq,options) {
			return jq.each(function(){
				sinaWeibo(this,options);
			});
		},
		doubanShare:function(jq,options) {
			return jq.each(function(){
				doubanShare(this,options);
			});
		},
		weixinShare:function(jq,options){
		    return jq.each(function(){
				weixinShare(this,options);
			});
	    }
	}


	//分享地址
	var qzone = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}&title={title}&pics={pic}&summary={content}';
	var sina = 'http://service.weibo.com/share/share.php?url={url}&title={title}&pic={pic}&searchPic=false';
	var tqq = 'http://share.v.t.qq.com/index.php?c=share&a=index&url={url}&title={title}&appkey=801cf76d3cfc44ada52ec13114e84a96';
	var douban = 'http://www.douban.com/share/service?href={url}&name={title}&text={content}&image={pic}';
	var weixin = 'http://qr.liantu.com/api.php?text={url}';


})(jQuery, window, document);

$(function(){
	$("body").on("click","#u-share li",function(){
		var to = $(this).data("to");
		$(this).socialShare(to,{
//					url: '分享的网址',  
		    title: '任务标题（测试）',
		    content: '内容内容内容内容内容内容（测试）',
		    pic: 'http://127.0.0.1:8020/piggybank/detail/img/share_img.png'
		});
	})
})
