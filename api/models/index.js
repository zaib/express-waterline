'use strict';
var env = process.env.NODE_ENV || 'development';
var appConfig = require('./../../config/config.json')[env];

var Waterline 	= 	require('waterline');
var adapter 	= 	require(appConfig.connections.mssqlserver.adapter);

var orm = new Waterline();

var config = {
	defaults: {
		migrate: 'safe' // safe, alter
	},
	adapters: {
		// postgresql: adapter
		"sails-mssqlserver": adapter
	},
	// adapters: adapter,
	connections: {
		// 'default': appConfig.connections.postgres
		// 'sqlserver': appConfig.connections.sqlserver
		'sqlserver': appConfig.connections.mssqlserver
	}
};

var fs = require('fs');
var path = require('path');

fs
	.readdirSync(__dirname)
	.filter(function (file) {
		return (file.indexOf('.') !== 0) && (file !== 'index.js');
	})
	.forEach(function (file) {
		var model = require(path.join(__dirname, file));
		orm.loadCollection(model);
	});

module.exports = {
	waterline: orm,
	config: config
};
