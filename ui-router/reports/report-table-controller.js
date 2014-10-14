'use strict';

angular.module('app').controller('ReportTableController', ['$scope', '$rootScope', '$state', '$timeout', '$stateParams', 'ReportService', function($scope, $rootScope, $state, $timeout, $stateParams, ReportService) {
	var currentSortColumn, column;
	$scope.report = ReportService.getReport($stateParams.reportId);
	$scope.columns = $scope.report.columns;
	$scope.rows = $scope.report.rows;

	if(!$scope.report.orderBy) {
		for(var i=0,len=$scope.columns.length; i<len && !$scope.report.orderBy; i++) {
			column = $scope.columns[i];
			if(column.sortable) {
				$scope.report.orderBy = column.id;
			}
		}
	}

	$scope.orderBy = function(col) {
		var index, orderBy = $scope.report.orderBy || '';
		if(col.sortable) {
			$scope.report.start = 0;
			index = orderBy.indexOf(col.id);
			if(index!=-1) {
				$scope.report.orderBy = (index==0 || orderBy.substring(0,1)=='+' ? '-' : '+') + orderBy.substring(index);
			} else {
				$scope.report.orderBy = '+' + col.id;
			}
		}
	};

	$scope.isOrderBy = function(col) {
		return $scope.report.orderBy.indexOf(col.id) != -1;
	};

	$scope.canNextPage = function() {
		var report = $scope.report, next = report.start + report.pageSize;

		return report.rows.length > report.start && (report.rows.length > next || next < report.serverCount);
	};

	$scope.previousPage = function() {
		if($scope.report.start > 0) {
			$scope.report.start -= $scope.report.pageSize;
		}
	}

	$scope.nextPage = function() {
		if($scope.canNextPage()) {
			$scope.report.start += $scope.report.pageSize;
		}
	};
}]);
