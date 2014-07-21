'use strict';

angular.module('ng-imgAreaSelect', [])
.directive('ngImgAreaSelect', function () {
    return {
      restrict: 'A',
      scope: { 
      	selection: '=',
      	ngImgAreaSelect: '='
      },
      link: function postLink(scope, element, attrs) {
        if (element[0].tagName === 'IMG') {
          element.load(function() {

          	if(scope.selection === undefined) {
          		scope.selection = {};
          	}

          	if(scope.ngImgAreaSelect === undefined) {
          		scope.ngImgAreaSelect = {};
          	}

            scope.ngImgAreaSelect.instance = true;
          	scope.ngImgAreaSelect.onSelectEnd = function(img, selection) {
              scope.$emit('selectend', { img: img, selection: selection});

              scope.$apply(function() {
                scope.selection.x1 = selection.x1;
                scope.selection.x2 = selection.x2;
                scope.selection.y1 = selection.y1;
                scope.selection.y2 = selection.y2;
                scope.selection.width = selection.width;
                scope.selection.height = selection.height;
              });
            };

            scope.ngImgAreaSelect.onSelectChange = function(img, selection) {
                scope.$emit('selectchange', { img: img, selection: selection });
            };
            scope.ngImgAreaSelect.onInit = function(img, selection) {
                scope.$emit('init', { img: img, selection: selection });
            };
            scope.ngImgAreaSelect.onSelectStart = function(img, selection) {
                scope.$emit('selectstart', { img: img, selection: selection });
            };

            var imgArea = angular.element(element).imgAreaSelect(scope.ngImgAreaSelect);

            if("x1" in scope.selection &&
               "x2" in scope.selection &&
               "y1" in scope.selection &&
               "y2" in scope.selection) {

              imgArea.setSelection(scope.selection.x1, scope.selection.y1, scope.selection.x2, scope.selection.y2);
              imgArea.setOptions({show: true});
              imgArea.update();
            }

            scope.$watch('selection', function() {
              imgArea.setSelection(scope.selection.x1, scope.selection.y1, scope.selection.x2, scope.selection.y2);
              imgArea.update();
            }, true);

          });
        } else {
          console.error("ng-imgAreaSelection attribute can only be used on img elements.");
        }

      } 
    };
  });