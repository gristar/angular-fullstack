var express = require('express');
var router = express.Router();

router.get("/", function(req, res) {
	res.redirect("/pigbank/detail");
})

router.get("/pigbank", function(req, res) {
	res.redirect("/pigbank/detail");
})

router.get('/test', function(req, res) {
	// /path?id=xx,参数在req.query.id中
	res.send('test,params:' + JSON.stringify(req.query));
})

router.get('/download', function(req, res) {
	res.download("bower.json", "文件");
})

module.exports = router;