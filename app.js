(function () {
  "use strict";
  //This is going to use $scope.$watch & Digest cycle conecpt $digest, for every change digest cycle runs atleas twice over the watchers
  angular.module("ngapp3", []).controller("controller3", Controller3);
  Controller3.$inject = ["$scope"];
  function Controller3($scope) {
    $scope.var1 = 0;
    console.log("Lets see $scope");
    console.log($scope);

    $scope.getScopeService = function () {
      console.log("Lets see $scope");
      console.log($scope.$$watchersCount);
    };

    $scope.setVar1 = function () {
      $scope.var1 = 1;
      console.log("Lets see $scope");
      //   console.log($scope.$$watchersCount);
    };
    //set up a watch for var1 and add a function for new and old values
    $scope.$watch("var1", function (newVal, oldVal) {
      console.log("newVal:" + newVal);
      console.log("oldVal:" + oldVal);
    });

    $scope.IncVar1 = function () {
      $scope.var1 = $scope.var1 + 1;
      setTimeout(function () {
        console.log(" delay increment");
        $scope.var1 = $scope.var1 + 10;
        //since seTimeout is non angjs we need $digest to be called for rendering the UI for it
        $scope.$digest();
      }, 3000);
      //   console.log($scope.$$watchersCount);
    };
  }
})();
