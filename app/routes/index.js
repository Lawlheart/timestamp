'use strict';

var cors = require('cors');
var TimeStamp = require(process.cwd() + '/app/controllers/timestamp.server.js');

module.exports = function (app, passport) {

	var timestamp = new TimeStamp();

	app.route('/')
		.get(function (req, res) {
			res.sendFile(process.cwd() + '/public/index.html');
		});

	app.route('/:data')
		.get(cors(), timestamp.check)
};
