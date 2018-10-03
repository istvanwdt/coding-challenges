const express = require('express');
const router = express.Router();
var fs = require('fs');


const jsonfileservice = require('./utils/jsonfileservice')();
const folderpath = '/data/';

router.get('/bower', getBower);

function getBower(req, res) {
	fs.readFile('bower.json', 'utf8', function(err, data) {
		if (err) {
			res.send("");
		}
		res.send(data);
	});
}

module.exports = router;