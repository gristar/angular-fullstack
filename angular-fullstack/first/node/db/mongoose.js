var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/snailloveMusic').connection;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback) {
	console.log("数据库连接成功！");
});

//	定义了一个新的模型，但是此模式还未和 users 集合有关联
var userScheMa = mongoose.Schema({
	username: String,
	password: String,
	email: String,
	role: String
});
// 给模型增加方法
userScheMa.methods.info = function() {
	console.log(this);
};

var articleScheMa = mongoose.Schema({
	title: String,
	summary: String,
	content: String,
	cover: String,
	keywords: String,
	createDate: String,
	publishDate: String,
	author: String,
	category: String,
	readTimes: String,
	status: String,
	order: String
});

var categoryScheMa = mongoose.Schema({
	name: String,
	status: String,
	order: String
});

exports.user = mongoose.model('users', userScheMa); //	将 MongoDB 与 users 集合关联
exports.article = mongoose.model('article', articleScheMa);
exports.category = mongoose.model('category', categoryScheMa);