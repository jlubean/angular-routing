angular.module('app').filter('formatFilter', ['$filter', function($filter) {
	return function(value, type, format) {
		switch (type) {
			case 'currency':
				return $filter('currency')(value);
			case 'date':
				return $filter('date')(value, format);
		}

		return value;
	};
}]);
