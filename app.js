(function () {
  "use strict";
  //angular injector
  angular
    .module("ngapp2", [])
    .controller("controller2", function ($scope, $filter) {
      $scope.name = "ShibYu";
      $scope.upper = function () {
        var upCase = $filter("uppercase");
        $scope.name = upCase($scope.name);
      };
    });
  //notes end
})();
