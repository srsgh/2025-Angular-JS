(function () {
  angular
    .module("ngapprepeat", [])
    .controller("controllerRepeat", ControllerRepeat);
  ControllerRepeat.$inject = ["$scope"];
  function ControllerRepeat($scope) {
    $scope.history = [];
    $scope.fullHistory = [];
    $scope.num1 = 0;
    $scope.num2 = 0;
    $scope.op = "";
    $scope.operator = "";
    $scope.output = 0;
    $scope.status = "Status: ";
    $scope.add = function () {
      $scope.op = "+";
      $scope.output = $scope.num1 + $scope.num2;
      var temp1 = {};
      temp1.num1 = $scope.num1;
      temp1.num2 = $scope.num2;
      temp1.num2 = $scope.num2;
      temp1.op = $scope.op;
      temp1.output = $scope.output;
      $scope.fullHistory.push(temp1);
    };
    $scope.sub = function () {
      $scope.op = "-";
      $scope.output = $scope.num1 - $scope.num2;
      var temp1 = {};
      temp1.num1 = $scope.num1;
      temp1.num2 = $scope.num2;
      temp1.num2 = $scope.num2;
      temp1.op = $scope.op;
      temp1.output = $scope.output;
      $scope.fullHistory.push(temp1);
    };
    $scope.mul = function () {
      $scope.op = "*";
      $scope.output = $scope.num1 * $scope.num2;
      var temp1 = {};
      temp1.num1 = $scope.num1;
      temp1.num2 = $scope.num2;
      temp1.num2 = $scope.num2;
      temp1.op = $scope.op;
      temp1.output = $scope.output;
      $scope.fullHistory.push(temp1);
    };
    $scope.div = function () {
      $scope.op = "/";
      $scope.output = $scope.num1 / $scope.num2;
      var temp1 = {};
      temp1.num1 = $scope.num1;
      temp1.num2 = $scope.num2;
      temp1.num2 = $scope.num2;
      temp1.op = $scope.op;
      temp1.output = $scope.output;
      $scope.fullHistory.push(temp1);
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
      $scope.status = "Show Saved history";
    };
    $scope.showFullHistory = function () {
      $scope.fullHistoryView = $scope.fullHistory;
      $scope.status = "Show Full history";
    };
    $scope.hideHistory = function () {
      $scope.historyView = "";
      $scope.status = "Hide history";
    };
    $scope.hideFullHistory = function () {
      $scope.fullHistoryView = "";
      $scope.status = "Hide Full history";
    };
  }
})();
