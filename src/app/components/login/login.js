(function() {
  'use strict';

  angular
    .module('akash')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/components/login/login.html',
        controller: 'LoginController'
      });

  }

})();
