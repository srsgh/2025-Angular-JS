(function () {
  "use strict";
  angular
    .module("ngapp5", [])
    .controller("Controller1", ControllerFn1)
    .controller("Controller2", ControllerFn2);
  ControllerFn1.$inject = ["$scope"];
  function ControllerFn1($scope) {
    //any property on this is accessible by parent from html
    var controller1 = this;
    controller1.value = "This is value for controller 1";
  }
  ControllerFn2.$inject = ["$scope"];
  function ControllerFn2($scope) {
    //any property on this is accessible by child from html
    var controller2 = this;
    controller2.value = "This is value for controller 2";
  }
})();
