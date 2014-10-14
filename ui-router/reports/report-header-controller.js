'use strict';

angular.module('app').controller('ReportHeaderController', ['$scope', '$rootScope', '$state', '$stateParams', 'ReportService', function($scope, $rootScope, $state, $stateParams, ReportService) {
	$scope.report = ReportService.getReport($stateParams.reportId);
	$scope.expanded = true;
	$scope.toggleFilters = function() {
		$scope.expanded = !$scope.expanded;
		$rootScope.$broadcast('toggleFilters');
	}
}]);
