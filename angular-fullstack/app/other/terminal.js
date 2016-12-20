// 获取终端的相关信息
var Terminal = {
		// 辨别移动终端类型
		platform: function() {
			var u = navigator.userAgent,
				app = navigator.appVersion;
			return {
				// android终端或者uc浏览器
				android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
				// 是否为iPhone或者QQHD浏览器
				iPhone: u.indexOf('iPhone') > -1,
				// 是否iPad
				iPad: u.indexOf('iPad') > -1,
				// 是否是通过微信的扫一扫打开的
				weChat: u.indexOf('MicroMessenger') > -1
			};
		}(),
		// 辨别移动终端的语言：zh-cn、en-us、ko-kr、ja-jp...
		language: (navigator.browserLanguage ||
			navigator.language).toLowerCase()
	}
	// 如果要分渠道，也是可以的，渠道区分：?from=xx
var From = (function() {
	var searchInfo = location.search.substr(1).split('&'),
		item, from;
	for (var i = 0, len = searchInfo.length; len > 1 && i < len; i++) {
		item = searchInfo[i].split('=');
		if (item[0] == 'from') {
			from = item[1];
			break;
		}
	}
	return from;
})();