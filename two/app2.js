(function () {
  "use strict";
  //angular injector
  // angular.module("ngapp2", []).controller("controller2", ControllerFn);

  //register filterfunctionfactory to module
  angular
    .module("ngapp2", [])
    .controller("controller2", ControllerFn)
    .filter("filterfnname", FilterFactoryFunctionName);
  //Creating Custom Filters in JS
  //Factory functions
  function FilterFactoryFunctionName() {
    return function filterfnname(input) {
      //logic for filter
      var output = input.replace("likes", "loves");
      return output;
    };
  }
  //Below Line is for Minification: -
  ControllerFn.$injector = ["$scope", "$filter", "filterfnnameFilter"];

  function ControllerFn($scope, $filter, $injector, filterfnnameFilter) {
    $scope.name = "ShibYu";
    $scope.name2 = "DoberMAn";
    $scope.saymessageOp = "";
    $scope.sayMessage1 = "ServiceNow likes AngularJS.";
    $scope.upper = function () {
      // var upcase = $filter("uppercase");
      // $scope.name = upcase($scope.name);
      $scope.name = $filter("uppercase")($scope.name);
    };
    //notes end- $injector.annnotate heps pick services - i.e. $xxx up in a contorller fn
    console.log($injector.annotate(ControllerFn));
    $scope.saymessageOp = filterfnnameFilter($scope.sayMessage1);
    console.log(filterfnnameFilter($scope.sayMessage1));
  }
})();
