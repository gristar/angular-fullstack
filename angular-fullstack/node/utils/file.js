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
		fs.appendFile('./file/log.txt', content, function(err) {
			if (err) {
				return console.error(err);
			}
			/*fs.readFile('log.txt', function(err, data) {
				if (err) {
					return console.error(err);
				}
				console.log("异步读取文件数据: " + data.toString());
			});*/
		});
	},
	writeAuthInfo: function(){
		fs.appendFile('./file/auth.txt', content, function(err){
			if(err){
				return console.error(err);
			}
		})
	}
}
module.exports = fileUtils;