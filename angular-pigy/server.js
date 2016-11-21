var express = require('express');
var path = require('path');
var fs = require("fs");
var index = require('./node/routes/index');
var users = require('./node/routes/users');
var test = require('./node/routes/test');
var basic = require('./node/routes/basic');
var file = require('./node/utils/file');

var app = express();
var fileUtils = file();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(function(req, res, next) {
	//console.log('Time:', (new Date()).toLocaleString());
	fileUtils.writeLog("访问记录："+req.toString() + ";" + (new Date()).toLocaleString() + "<br/>\n");
	next();
});
app.use('/', index);
app.use('/user', users);
app.use('/test', test);
app.use('/basic', basic);
app.use(express.static('app'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

var server = app.listen(8000, function() {

	var host = server.address().address
	var port = server.address().port

	console.log("应用实例，访问地址为 http://%s:%s", host, port)

})