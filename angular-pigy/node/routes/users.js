var express = require('express');
var router = express.Router();
var db = require("../db/mongoose.js");

router.get('/query', function(req, res) {
	db.User.find(req.query, function(err, users) {
		if (err) console.log(err);
		else {
			res.send(users);
		};
	});
})
router.get('/query/:name', function(req, res) {
	db.User.findOne({
		name: req.params.name
	}, function(err, doc) {
		if (err) console.log(err);
		else {
			res.send(doc);
		};
	});
})
router.get('/insert', function(req, res) {
	var newUser = new db.User({
		name: req.query.name,
		password: req.query.password
	});
	newUser.save(function(err, doc) {
		if (err) console.log(err);
		else console.log(doc.name + ' saved');
		newUser.speak();
		res.send(doc);
	});
})

module.exports = router;