'use strict';

var path = process.cwd();
var TimeStamp = require(path + '/app/controllers/timestamp.server.js');

module.exports = function (app, passport) {

	var timestamp = new TimeStamp();

	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});

	app.route('/:data')
		.get(timestamp.check)
};
