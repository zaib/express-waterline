'use strict';

var Waterline = require('Waterline');
var TableSchema = Waterline.Collection.extend({
	connection: 'sqlserver',
	// identity: 'CallGroups_Utilization',
	tableName: 'utilization',
	/* autoPK: false,
	autoCreatedAt: false,
	autoUpdatedAt: false, */
	attributes: {
		programName: {
			type: 'string',
			columnName: 'Program_Name'
		},
		date: {
			type: 'date',
			columnName: 'Date'
		},
		client: {
			type: 'string',
			columnName: 'Client'
		},
		callgroup: {
			type: 'string',
			columnName: 'CallGroup'
		},
		expectedUtilization: {
			type: 'float',
			columnName: 'ExpectedUtilization'
		},
		actualUtilization: {
			type: 'float',
			columnName: 'ActualUtilization'
		}
	}

});

module.exports = TableSchema;