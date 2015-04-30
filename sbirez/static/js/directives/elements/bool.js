'use strict';

angular.module('sbirezApp').directive('bool', function() {
  return {
    restrict: 'A',
    replace: true,
    scope: {
      bool: '=',
      storage: '=',
      validationstorage: '=',
      multiplename: '=?'
    },
    templateUrl: 'static/views/partials/elements/bool.html',
    controller: ['$scope', 
      function ($scope) {
        $scope.element = $scope.bool;
        $scope.fieldName = $scope.element.human
        if ($scope.multiplename !== undefined && $scope.element.human.indexOf('%multiple%') > -1) {
          $scope.fieldName = $scope.element.human.replace('%multiple%', $scope.multiplename);
        }
      }
    ]
  };
});
