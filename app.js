(function () {
  //angular.module(apps_name , dependency_array)- HTML is bound to it via ng-app="my_first_ng_app"
  angular
    .module("my_first_ng_app", [])
    .controller("my_first_controller", function () {});
  //.controller(controllers_name,controllers_functionality) ~ View Model - HTML binds to VM/Controller using ng-controller="controllers_name"
})();
