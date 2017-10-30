(function () {
  'use strict';

  angular
    .module('akash')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController($timeout, webDevTec, $scope) {
    $scope.submit = function (data) {
      $scope.data = data;
    }
  }
})();
