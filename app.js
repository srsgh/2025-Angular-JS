(function () {
  angular
    .module("ngapprepeat", [])
    .controller("controllerRepeat", ControllerRepeat);
  ControllerRepeat.$inject = ["$scope"];
  function ControllerRepeat($scope) {
    $scope.history = [];
    $scope.num1 = 0;
    $scope.num2 = 0;
    $scope.op = "";
    $scope.output = 0;
    $scope.status = "Status: ";
    $scope.add = function () {
      $scope.op = "+";
      $scope.output = $scope.num1 + $scope.num2;
    };
    $scope.sub = function () {
      $scope.op = "-";
      $scope.output = $scope.num1 - $scope.num2;
    };
    $scope.mul = function () {
      $scope.op = "*";
      $scope.output = $scope.num1 * $scope.num2;
    };
    $scope.div = function () {
      $scope.op = "/";
      $scope.output = $scope.num1 / $scope.num2;
    };
    $scope.save = function () {
      var temp = {};
      temp.num1 = $scope.num1;
      temp.num2 = $scope.num2;
      temp.num2 = $scope.num2;
      temp.op = $scope.op;
      temp.output = $scope.output;
      $scope.history.push(temp);
      $scope.status = "Added to history";
    };
    $scope.viewHistory = function () {
      $scope.historyView = $scope.history;
      $scope.status = "Show history";
    };
    $scope.hideHistory = function () {
      $scope.historyView = "";
      $scope.status = "Hide history";
    };
  }
})();
