(function () {
  "use strict";
  //angular.module(apps_name , dependency_array)- HTML is bound to it via ng-app="my_first_ng_app"
  angular
    .module("my_first_ng_app", [])
    .controller("my_first_controller_vm", function ($scope) {
      $scope.variable_name =
        "value of variable sent to view from vm $scope.variable_name";
      $scope.function_name = function () {
        return "return from function sent to view from vm $scope.fn_name";
      };
    });
  //.controller(controllers_name,controllers_functionality) ~ View Model - HTML binds to VM/Controller using ng-controller="controllers_name"
  //$.....= angular reserved kw
  //$scope is object used to share data from VM to V
})();
