var express = require('express');
var router = express.Router();
var fs = require("fs");

router.get("/readfile/:fileName", function(req, res) {
	var fileName = req.params.fileName;
	if(!fileName){
		res.send("文件不存在");
		return;
	}
	fs.readFile('file/'+fileName, function(err, data) {
		if (err) {
			res.send("文件读取失败");
			return console.error(err);
		}
		console.log("异步读取: " + data.toString());
		res.send("文件内容：<br/>" + data.toString());
	});
})


module.exports = router;