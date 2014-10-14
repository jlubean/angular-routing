'use strict';

angular.module('app').factory('ReportService', [ function() {

	var FILTER_TYPES = [
		'input',
		'range',
		'select',
		'multiple'
	];

	var reports = {};

	var sampleReport = {
		id: 1234,
		title: "Report 1",
		pageSize: 10,
		start: 0,
		localFilter: true,
		localSort: true,
		serverCount: 28,
		orderBy: 'c2',
		rowClick: function(row) {
			console.log('row clicked: ', row);
		},
		columns: [
			{
				label: 'Integer',
				id: 'c1',
				type: 'integer',
				filterType: null,
				sortable: false,
				class: ''
			},
			{
				label: 'String',
				id: 'c2',
				type: 'string',
				filterType: 'input',
				sortable: true,
				class: ''
			},
			{
				label: 'Date',
				id: 'c3',
				type: 'date',
				filterType: 'range',
				sortable: true,
				class: '',
				format: 'M/d/yyyy'
			},
			{
				label: 'Currency',
				id: 'c4',
				type: 'currency',
				filterType: 'select',
				filterCompare: function(value, filterValue) {
					var range = filterValue.split('-'), minValue = parseFloat(range[0]), maxValue = parseFloat(range[1]);
					return (isNaN(minValue) || value >= minValue) && (isNaN(maxValue) || value <= maxValue);
				},
				filterOptions: [
					{value: '-99.99', label: '$0.00 to $99.99'},
					{value: '100-199.99', label: '$100.00 to $199.99'},
					{value: '200-299.99', label: '$200.00 to $299.99'},
					{value: '300-399.99', label: '$300.00 to $399.99'},
					{value: '400-', label: '$400.00+'}
				],
				filterValue: '400-',
				sortable: true,
				class: 'currency'
			},
			{
				label: 'Decimal',
				id: 'c5',
				type: 'decimal',
				filterType: 'range',
				filterCompare: function(value, filterValue) {
					return value == filterValue;
				},
				sortable: true,
				class: 'decimal'
			}
		],
		rows: [
			{ id: 123456, c1: 1111, c2: 'Mary Jones', c3: new Date('2014-01-01').getTime(), c4: 111.11, c5: 65.4321 },
			{ id: 234567, c1: 2222, c2: 'Alan Robertson', c3: new Date('2013-08-22').getTime(), c4: 222.22, c5: 765.432 },
			{ id: 345678, c1: 3333, c2: 'Benjamin Turley', c3: new Date('2014-09-01').getTime(), c4: 333.33, c5: 8765.43 },
			{ id: 456789, c1: 4444, c2: 'Bill Smith', c3: new Date('2011-04-15').getTime(), c4: 444.44, c5: 98765.4 },
			{ id: 123456, c1: 1111, c2: 'Mary Jones', c3: new Date('2014-01-01').getTime(), c4: 111.11, c5: 65.4321 },
			{ id: 234567, c1: 2222, c2: 'Alan Robertson', c3: new Date('2013-08-22').getTime(), c4: 222.22, c5: 765.432 },
			{ id: 345678, c1: 3333, c2: 'Benjamin Turley', c3: new Date('2014-09-01').getTime(), c4: 333.33, c5: 8765.43 },
			{ id: 456789, c1: 4444, c2: 'Bill Smith', c3: new Date('2011-04-15').getTime(), c4: 444.44, c5: 98765.4 },
			{ id: 123456, c1: 1111, c2: 'Mary Jones', c3: new Date('2014-01-01').getTime(), c4: 111.11, c5: 65.4321 },
			{ id: 234567, c1: 2222, c2: 'Alan Robertson', c3: new Date('2013-08-22').getTime(), c4: 222.22, c5: 765.432 },
			{ id: 345678, c1: 3333, c2: 'Benjamin Turley', c3: new Date('2014-09-01').getTime(), c4: 333.33, c5: 8765.43 },
			{ id: 456789, c1: 4444, c2: 'Bill Smith', c3: new Date('2011-04-15').getTime(), c4: 444.44, c5: 98765.4 },
			{ id: 123456, c1: 1111, c2: 'Mary Jones', c3: new Date('2014-01-01').getTime(), c4: 111.11, c5: 65.4321 },
			{ id: 234567, c1: 2222, c2: 'Alan Robertson', c3: new Date('2013-08-22').getTime(), c4: 222.22, c5: 765.432 },
			{ id: 345678, c1: 3333, c2: 'Benjamin Turley', c3: new Date('2014-09-01').getTime(), c4: 333.33, c5: 8765.43 },
			{ id: 456789, c1: 4444, c2: 'Bill Smith', c3: new Date('2011-04-15').getTime(), c4: 444.44, c5: 98765.4 },
			{ id: 123456, c1: 1111, c2: 'Mary Jones', c3: new Date('2014-01-01').getTime(), c4: 111.11, c5: 65.4321 },
			{ id: 234567, c1: 2222, c2: 'Alan Robertson', c3: new Date('2013-08-22').getTime(), c4: 222.22, c5: 765.432 },
			{ id: 345678, c1: 3333, c2: 'Benjamin Turley', c3: new Date('2014-09-01').getTime(), c4: 333.33, c5: 8765.43 },
			{ id: 456789, c1: 4444, c2: 'Bill Smith', c3: new Date('2011-04-15').getTime(), c4: 444.44, c5: 98765.4 },
			{ id: 123456, c1: 1111, c2: 'Mary Jones', c3: new Date('2014-01-01').getTime(), c4: 111.11, c5: 65.4321 },
			{ id: 234567, c1: 2222, c2: 'Alan Robertson', c3: new Date('2013-08-22').getTime(), c4: 222.22, c5: 765.432 },
			{ id: 345678, c1: 3333, c2: 'Benjamin Turley', c3: new Date('2014-09-01').getTime(), c4: 333.33, c5: 8765.43 },
			{ id: 456789, c1: 4444, c2: 'Bill Smith', c3: new Date('2011-04-15').getTime(), c4: 444.44, c5: 98765.4 },
			{ id: 123456, c1: 1111, c2: 'Mary Jones', c3: new Date('2014-01-01').getTime(), c4: 111.11, c5: 65.4321 },
			{ id: 234567, c1: 2222, c2: 'Alan Robertson', c3: new Date('2013-08-22').getTime(), c4: 222.22, c5: 765.432 },
			{ id: 345678, c1: 3333, c2: 'Benjamin Turley', c3: new Date('2014-09-01').getTime(), c4: 333.33, c5: 8765.43 },
			{ id: 456789, c1: 4444, c2: 'Bill Smith', c3: new Date('2011-04-15').getTime(), c4: 444.44, c5: 98765.4 }
		]
	};

	reports[sampleReport.id] = sampleReport;

	return {
		getReport: function(id) {
			var report = reports[id];
			if(!report) {
				//Get report from the server
				console.log("Unknown Report for ID=" + id);
				report = { title: "Unknown Report!"};
			}

			return report;
		},
		addReport: function(report) {
			reports[report.id] = report;
		}
	};
}]);
