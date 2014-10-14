'use strict';

angular.module('app').controller('ReportFiltersController', ['$scope', '$state', 'ReportService', function($scope, $state, ReportService) {
	$scope.expanded = true;
	$scope.report = ReportService.getReport($state.params.reportId);
	$scope.filters = [];

	for(var i=0,columns=$scope.report.columns, len=columns.length, column; i<len; i++) {
		column = columns[i];
		if(column.filterType) {
			$scope.filters.push(column);
		}
	}

	$scope.$on('toggleFilters', function() {
		$scope.expanded = !$scope.expanded;
	});
}]);
