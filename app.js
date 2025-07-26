(function () {
  "use strict";
  //angular injector
  angular.module("ngapp2", []).controller("controller2", ControllerFn);

  //Below Line is for Minification: -
  // ControllerFn.$injector = ["$scope", "$filter"];
  function ControllerFn($scope, $filter, $injector) {
    $scope.name = "ShibYu";
    $scope.name2 = "DoberMAn";
    $scope.upper = function () {
      //$filter('upperacase')
      // var upcase = $filter("uppercase");
      // $scope.name = upcase($scope.name);
      $scope.name = $filter("uppercase")($scope.name);
    };
    //notes end- $injector.annnotate heps pick services - i.e. $xxx up in a contorller fn
    console.log($injector.annotate(ControllerFn));
  }
})();
