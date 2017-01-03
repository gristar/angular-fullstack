var express = require('express');
var session = require('express-session');
var file = require('../utils/file');
var path = require('path');
var app = express();
var fileUtils = file();

app.use(session({
    secret: 'chensheng', //secret的值建议使用随机字符串
    cookie: {maxAge: 60 * 1000 * 30} // 过期时间（毫秒）

}));
app.post('/auth/login/verify', function (req, res, next) {
    var user = req.param("user");
    if(user == {}){
        fileUtils.writeAuthInfo("登录记录：" + JSON.stringify(req.query) + ";" + (new Date()).toLocaleString() + "<br/>\n")
        res.end('{status:1}');
    }
    else {
        res.end('{status:0,message:"用户名或密码错误请重试"}');
    }
});
app.use(function (req, res, next) {
    var url = req.originalUrl;
    if (url != "/auth/login.html" && !req.session.user) {
        return res.redirect("/auth/login.html");
    }
    next();
});
/*app.post('/auth/login/verify', function (req, res, next) {
 var user = req.query;
 fileUtils.writeAuthInfo("登录记录："+JSON.stringify(req.query) + ";" + (new Date()).toLocaleString() + "<br/>\n")

 });*/
/*app.get('*', function (req, res, next) {
 if (req.session.secret) {//检查用户是否已经登录
 console.log(req.session);
 res.send('welecome <strong>' + req.session.name + '</strong>, 欢迎你再次登录');
 next();
 } else {
 req.session.sign = true;
 req.session.name = '';
 console.log(req.session);
 res.redirect("/auth/login");
 }
 });*/

module.exports = app;