var mongoose = require("mongoose"); //	顶会议用户组件
mongoose.connect('mongodb://localhost/test').connection; //；连接数据库
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback) {
	console.log("数据库连接成功！");
	// yay!
});
//var Schema = mongoose.Schema; //	创建模型
var userScheMa = mongoose.Schema({
	name: String,
	password: String
}); //	定义了一个新的模型，但是此模式还未和users集合有关联
userScheMa.methods.speak = function() {
	var greeting = this.name ? "Meow name is " + this.name : "I don't have a name"
	console.log(greeting);
}
exports.User = mongoose.model('users', userScheMa); //	与users集合关联