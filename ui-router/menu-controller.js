'use strict';

angular.module('app').controller('MenuController', ['$scope', '$rootScope', '$state', '$stateParams', 'ReportService', function($scope, $rootScope, $state, $stateParams, ReportService) {
	console.log("in MenuController");
	$scope.items = [
		{
			name: 'Reports',
			items: [
				{
					name: 'Report 1',
					state: {
						name: 'app.main.report.main',
						params: { reportId: '1234'}
					}
				},
				{
					name: 'Report 2',
					state: {
						name: 'app.main.report.main',
						params: { reportId: '1234'}
					}
				},
				{
					name: 'Report 3',
					state: {
						name: 'app.main.report.main',
						params: { reportId: '1234'}
					}
				}
			]
		},
		{
			name: 'Preferences',
			state: 'app.main.preferences'
		},
		{
			name: 'About',
			state: 'app.main.about'
		}
	];

	$scope.currentItem = $scope.items[0];
	$scope.currentItem.active = true;
	$scope.currentSubItem = $scope.currentItem.items[0];
	$scope.currentSubItem.active = true;

	$scope.clickItem = function(item,subItem) {
		if($scope.currentItem !== item || $scope.currentSubItem !== subItem) {
			var state = item.state;
			$scope.currentItem.active = false;
			$scope.currentItem = item;
			item.active = true;

			if($scope.currentSubItem) {
				$scope.currentSubItem.active = false;
			}

			if(subItem) {
				subItem.active = true;
				if(!state) {
					state = subItem.state;
				}
			}

			$scope.currentSubItem = subItem;

			if(state) {
				if(state.name) {
					$state.go(state.name, state.params);
				} else {
					$state.go(state);
				}
			}
		}
	};
}]);
