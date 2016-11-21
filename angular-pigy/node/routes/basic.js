'use strict';

var express = require('express');
var router = express.Router();

router.get('/list', function(req, res) {
	var list = [{
		type: 'phone',
		value: '408 555 1212'
	}, {
		type: 'email',
		value: 'john.smith@example.org'
	}];
	res.send(list);
})

module.exports = router;