'use strict';
var fs = require("fs");

var fileUtils = function() {
	return fileUtils.prototype.init();
}
fileUtils.prototype = {
	init: function() {
		return this;
	},
	writeLog: function(content) {
		console.log("写入日志");
		fs.appendFile('./file/log.txt', content, function(err) {
			if (err) {
				return console.error(err);
			}
			fs.readFile('input.txt', function(err, data) {
				if (err) {
					return console.error(err);
				}
				console.log("异步读取文件数据: " + data.toString());
			});
		});
	}
}
module.exports = fileUtils;