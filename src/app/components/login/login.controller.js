(function () {
  'use strict';

  angular
    .module('akash')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($timeout, webDevTec, $scope, $state) {

    $scope.login = {
      email: '',
      password: ''
    }
    $scope.disableBtn = true;
    $scope.change = function () {
      console.log($scope.login);
      if ($scope.login.email === '' || $scope.login.email === undefined && $scope.login.password === '' || $scope.login.password === undefined) {
        $scope.disableBtn = false;
      } else {
        $scope.disableBtn = true;
      }
    }

    $scope.goTo = function () {
      if ($scope.disableBtn === true) {
        $state.go('home');
      } else {
        return false;
      }

    }
  }
})();
