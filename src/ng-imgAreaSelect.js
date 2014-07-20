'use strict';

angular.module('ng-imgAreaSelect', [])
.directive('ngImgAreaSelect', function () {
    return {
      restrict: 'AE',
      scope: { 
      	selection: '=',
      	ngImgAreaSelect: '='
      },
      link: function postLink(scope, element, attrs) {

      	if(scope.selection === undefined) {
      		scope.selection = {};
      	}
      	if(scope.ngImgAreaSelect === undefined) {
      		scope.ngImgAreaSelect = {};
      	}

      	scope.ngImgAreaSelect.onSelectChange = function(img, selection) {
    		scope.selection.x1 = selection.x1;
    		scope.selection.x2 = selection.x2;
    		scope.selection.y1 = selection.y1;
    		scope.selection.y2 = selection.y2;
    		scope.selection.width = selection.width;
    		scope.selection.height = selection.height;
    		scope.$apply();
        };

        angular.element(element).imgAreaSelect(scope.ngImgAreaSelect);
      }
    };
  });