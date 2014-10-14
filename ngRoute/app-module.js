'use strict';

angular.module('app', ['ngRoute']).config(['$routeProvider',
function($routeProvider) {

	$routeProvider
	.when('/about', {
		templateUrl: 'about-view.html'
	})
	.when('/preferences', {
		templateUrl: 'preferences-view.html',
		controller: 'PreferencesController'
	})
	.when('/report/:reportId', {
		templateUrl: 'reports/report-view.html',
		controller: 'ReportController'
	})
	.otherwise('/report/1234');

}]);
