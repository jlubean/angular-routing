angular.module('app').filter('page', ['$filter', function($filter) {
	return function(arr, start, size) {
		if(arr && start >= 0) {
			if(size) {
				return arr.slice(start, start+size);
			} else {
				return arr.slice(start);
			}
		}
		return arr;
	};
}]);
