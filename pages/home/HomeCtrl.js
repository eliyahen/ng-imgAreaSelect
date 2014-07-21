/**
*/

'use strict';

angular.module('myApp').controller('HomeCtrl', ['$scope', function($scope) {
	$scope.asdf = { handles: true, aspectRatio:'16:9'};
	$scope.coords = {};

	$scope.asdf2 = { x1: 20, y1: 20, x2: 40, y2: 40, handles: true };
	
	$scope.coords2 = { };

	$scope.$on('init', function(event, args) {
		console.log(args.img);
	});
}]);