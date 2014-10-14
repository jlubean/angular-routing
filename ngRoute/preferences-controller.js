'use strict';

angular.module('app').controller('PreferencesController', ['$scope', function($scope) {
console.log("in PreferencesController");
	$scope.preferences = { p1: true, p2: false, p3: false, p4: true};
}]);
