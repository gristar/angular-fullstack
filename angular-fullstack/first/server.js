var express = require('express');
var path = require('path');
var db = require('./node/db/mongoose');
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

var app = express();
// var router = express.Router();

app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.send("welcome -- by gristar");
});

app.post("/users/insert", upload.array(), function (req, res) {
    console.log('增加用户');
    console.log(JSON.stringify(req.body));
    var newUser = new db.User(req.body);
    newUser.save(function (err, doc) {
        var rst = '';
        if (err) {
            console.log(err);
            rst = err;
        }
        else {
            console.log(doc.username + ' saved');
            rst = JSON.stringify(doc) + "保存成功";
        }
        res.send(rst);
    })
});

app.post("/users/update", upload.array(), function (req, res) {
    console.log('请求更新数据');
    db.user.update({_id: req.body._id}, req.body, function (err, doc) {
        var rst = '';
        if (err) {
            console.log(err);
            rst = err;
        }
        else {
            console.log(doc.username + 'updated');
            rst = JSON.stringify(doc) + "更新成功";
        }
        res.send(rst);
    })
});

app.get("/users/:_id", function (req, res) {
    console.log('查看用户');
    db.user.findOne({
        _id: req.params._id
    }, function (err, doc) {
        if (err) console.log(err);
        else {
            res.send(doc);
        }
    })
});

app.get('/users', function(req, res){
   db.user.find(function(err, doc){
       if (err) console.log(err);
       else {
           res.send(doc);
       }
   })
});

app.get("/article/:_id", function (req, res) {
    console.log('查看文章');
    db.article.findOne({
        _id: req.params._id
    }, function (err, doc) {
        if (err) console.log(err);
        else {
            res.send(doc);
        }
    });
    // res.send('查看文章，id: ' + req.params._id);
});

app.get("/article", function (req, res) {
    console.log('查看所有文章');
    db.article.find(function (err, doc) {
        if (err) console.log(err);
        else {
            res.send(doc);
        }
    });
    // res.send('查看文章，id: ' + req.params._id);
});

app.post("/article/insert", upload.array(), function (req, res) {
    console.log('请求增加文章');
    var newArticle = new db.article(req.body);
    newArticle.save(function (err, doc) {
        var rst = '';
        if (err) {
            console.log(err);
            rst = err;
        }
        else {
            console.log(doc.title + 'saved');
            rst = JSON.stringify(doc) + "保存成功";
        }
        res.send(rst)
    })
});

app.use("/article/update", upload.array(), function (req, res) {
    console.log('请求更新文章');
    db.article.update({_id: req.body._id},req.body,function (err, doc) {
        var rst = '';
        if (err) {
            console.log(err);
            rst = err;
        }
        else {
            console.log(doc.username + 'saved');
            rst = JSON.stringify(doc) + "保存成功";
        }
        res.send(rst)
    })
});

app.get("/category/:_id", function (req, res) {
    db.category.findOne({
        _id: req.params._id
    }, function (err, doc) {
        if (err) console.log(err);
        else {
            res.send(doc);
        }
    });
    // res.send('查看文章，id: ' + req.params._id);
});

app.get("/category", function (req, res) {
    db.category.find(function (err, doc) {
        if (err) console.log(err);
        else {
            res.send(doc);
        }
    });
    // res.send('查看文章，id: ' + req.params._id);
});

app.post("/category/insert", upload.array(), function (req, res) {
    var newCategory = new db.category(req.body);
    newCategory.save(function (err, doc) {
        var rst = '';
        if (err) {
            console.log(err);
            rst = err;
        }
        else {
            console.log(doc.name + 'saved');
            rst = JSON.stringify(doc) + "保存成功";
        }
        res.send(rst)
    })
});

app.use("/category/update", upload.array(), function (req, res) {
    db.category.update({_id:req.body._id}, req.body, function(err, doc) {
        var rst = '';
        if (err) {
            console.log(err);
            rst = err;
        }
        else {
            console.log(doc.username + 'saved');
            rst = JSON.stringify(doc) + "保存成功";
        }
        res.send(rst)
    })
});

// app.use(router);
// app.use('/file', express.static('f:/file'));
app.use(express.static('app'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    // res.locals.message = err.message;
    // res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send('error:' + JSON.stringify(err));
});

var server = app.listen(8088, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});