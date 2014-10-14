'use strict';

angular.module('app').controller('MenuController', ['$scope', '$rootScope', '$location', 'ReportService', function($scope, $rootScope, $location, ReportService) {
	console.log("in MenuController");
	$scope.items = [
		{
			name: 'Reports',
			items: [
				{
					name: 'Report 1',
					path: '/report/1234'
				},
				{
					name: 'Report 2',
					path: '/report/1234'
				},
				{
					name: 'Report 3',
					path: '/report/1234'
				}
			]
		},
		{
			name: 'Preferences',
			path: '/preferences'
		},
		{
			name: 'About',
			path: '/about'
		}
	];

	$scope.currentItem = $scope.items[0];
	$scope.currentItem.active = true;
	$scope.currentSubItem = $scope.currentItem.items[0];
	$scope.currentSubItem.active = true;

	$scope.clickItem = function(item,subItem) {
		var path = item.path;

		if(subItem) {
			subItem.active = true;
			if(!path) {
				path = subItem.path;
			}
		} else {
			if($scope.currentItem === item) {
				item.active = !item.active;
			} else {
				$scope.currentItem.active = false;
				$scope.currentItem = item;
				item.active = true;
			}
		}

		if($scope.currentSubItem) {
			$scope.currentSubItem.active = false;
		}

		$scope.currentSubItem = subItem;

		if(path) {
			$location.path(path);
		}
	};
}]);
