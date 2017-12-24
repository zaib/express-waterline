/*jslint node: true */
'use strict';

const express = require('express'),
app = express(),
utilizationRouter = require('./api/controllers/utilization.ctrl');

app.get('/', (req, res) => {
	res.sendStatus(200);
});

app.use('/utilization', utilizationRouter);

module.exports = app;
