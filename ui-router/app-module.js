'use strict';

angular.module('app', ['ui.router', 'ct.ui.router.extras']).config(['$stateProvider', '$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

	$stateProvider
	.state('app', {
		views: {
			'app': {
				templateUrl: 'app-view.html'
			}
		}
	})
	.state('app.main', {
		views: {
			'menu': {
				templateUrl: 'menu-view.html',
				controller: 'MenuController'
			}
		}
	})
	.state('app.main.about', {
		sticky: true,
		deepStateRedirect: true,
		url: '/about',
		views: {
			'main@app': {
				templateUrl: 'about-view.html',
			}
		}
	})
	.state('app.main.preferences', {
		sticky: true,
		deepStateRedirect: true,
		url: '/preferences',
		views: {
			'main@app': {
				templateUrl: 'preferences-view.html',
				controller: 'PreferencesController'
			}
		}
	})
	.state('app.main.report', {
		sticky: true,
		deepStateRedirect: true,
		views: {
			'main@app': {
				templateUrl: 'reports/report-view.html'
			}
		}
	})
	.state('app.main.report.main', {
		url: '/report/:reportId',
		views: {
			'header': {
				templateUrl: 'reports/report-header-view.html',
				controller: 'ReportHeaderController'
			},
			'filters': {
				templateUrl: 'reports/report-filters-view.html',
				controller: 'ReportFiltersController'
			},
			'table': {
				templateUrl: 'reports/report-table-view.html',
				controller: 'ReportTableController'
			}
		}
	})
	;

	$urlRouterProvider.when('', '/report/1234');

}]);
