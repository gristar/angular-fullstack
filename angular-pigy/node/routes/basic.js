'use strict';

var express = require('express');
var router = express.Router();
var db = require("../db/mongoose.js");

router.get('/query', function(req, res) {
	db.Album.find(req.query, function(err, users) {
		if (err) console.log(err);
		else {
			res.send(users);
		};
	});
})
router.get('/query/:_id', function(req, res) {
	db.Album.findOne({
		_id: req.params._id
	}, function(err, doc) {
		if (err) console.log(err);
		else {
			res.send(doc);
		};
	});
})
router.get('/insert', function(req, res) {
	var newAlbum = new db.Album(req.query);
	console.log(newAlbum);
	console.log(req.query);
	newAlbum.save(function(err, doc) {
		if (err) console.log(err);
		else console.log(doc.title + ' saved');
		res.send(doc);
	});
})
router.get('/delete/:_id', function(req, res) {
	db.Album.remove({
		_id: req.params._id
	}, function(err, doc) {
		if (err) console.log(err);
		res.send(doc);
	});
})
router.get('/update/:_id', function(req, res) {
	db.Album.update({
		_id: req.params._id
	}, req.query , function(err, doc) {
		if (err) console.log(err);
		res.send(doc);
	});
})

module.exports = router;