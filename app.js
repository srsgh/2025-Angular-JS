(function () {
  "use strict";
  //angular injector
  angular.module("ngapp2", []).controller("controller2", Bye);
  function Bye($scope, $filter) {
    $scope.name = "ShibYu";
    $scope.upper = function () {
      var upcase = $filter("uppercase");
      $scope.name = upcase($scope.name);
    };
  }
  //notes end
})();
