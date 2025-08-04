(function () {
  "use strict";
  angular
    .module("ngapp5", [])
    .controller("Controller1", ControllerFn1)
    .controller("Controller2", ControllerFn2);
  ControllerFn1.$inject = ["$scope"];
  function ControllerFn1($scope) {
    //any property on this is accessible by parent from html
    var parent = this;
    parent.value = "This is value for controller 1";
  }
  ControllerFn2.$inject = ["$scope"];
  function ControllerFn2($scope) {
    //any property on this is accessible by child from html
    var child = this;
    child.value = "This is value for controller 2";
  }
})();
